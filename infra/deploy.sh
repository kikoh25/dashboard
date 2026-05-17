#!/usr/bin/env bash
# =============================================================================
# deploy.sh – IT Control Enterprise Dashboard
# AWS EC2 t3.medium  |  Next.js + PM2 + Apache2
#
# Usage (from project root):
#   chmod +x infra/deploy.sh
#   ./infra/deploy.sh
#
# Requires: node >= 18, pnpm (or npm), pm2 installed globally
# =============================================================================

set -euo pipefail

APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
APP_NAME="it-dashboard"

echo ">>> [1/5] Installing dependencies..."
cd "$APP_DIR"
pnpm install --frozen-lockfile --prod=false

echo ">>> [2/5] Building Next.js (standalone)..."
# NEXT_TURBOPACK=false forces webpack; more stable on Linux servers
NEXT_TURBOPACK=false pnpm run build

echo ">>> [3/5] Copying public assets and static files into standalone output..."
# Next.js standalone does not copy public/ or .next/static/ automatically
cp -r "$APP_DIR/public"          "$APP_DIR/.next/standalone/public"
cp -r "$APP_DIR/.next/static"    "$APP_DIR/.next/standalone/.next/static"

echo ">>> [4/5] Reloading PM2 process..."
if pm2 describe "$APP_NAME" > /dev/null 2>&1; then
  pm2 reload "$APP_NAME" --update-env
else
  pm2 start "$APP_DIR/ecosystem.config.js" --env production
fi

pm2 save

echo ">>> [5/5] Reloading Apache2..."
sudo systemctl reload apache2

echo ""
echo "=== Deploy complete ==="
pm2 status "$APP_NAME"
