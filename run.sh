#!/usr/bin/env bash
set -euo pipefail

IMAGE_NAME="${IMAGE_NAME:-somehow_dot_work}"
CONTAINER_NAME="${CONTAINER_NAME:-somehow_dot_work}"
PORT="${PORT:-1313}"

# Navigate to script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "${SCRIPT_DIR}"

echo "==> Building Docker image: ${IMAGE_NAME}..."
docker build -t "${IMAGE_NAME}" .

# Stop and remove existing container if running
if docker ps -a --format '{{.Names}}' | grep -Eq "^${CONTAINER_NAME}\$"; then
    echo "==> Stopping and removing existing container: ${CONTAINER_NAME}..."
    docker stop "${CONTAINER_NAME}" >/dev/null 2>&1 || true
    docker rm "${CONTAINER_NAME}" >/dev/null 2>&1 || true
fi

echo "==> Running container: ${CONTAINER_NAME} on port ${PORT}..."
docker run -d \
    --name "${CONTAINER_NAME}" \
    -p "${PORT}:80" \
    --restart unless-stopped \
    "${IMAGE_NAME}"

echo "==> Site is running at http://localhost:${PORT}"
