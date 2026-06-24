#!/usr/bin/env bash
set -euo pipefail

REGISTRY="${REGISTRY:-harbor-test.inspariontech.com}"
HARBOR_PROJECT="${HARBOR_PROJECT:-library}"
IMAGE_NAME="${IMAGE_NAME:-insparion-corporateweb}"
TAG="${TAG:-$(git rev-parse --short HEAD)}"
K8S_REPO="${K8S_REPO:-/Users/osein/Documents/workspace/Insparion-K8S}"
K8S_DEPLOYMENT="${K8S_DEPLOYMENT:-$K8S_REPO/infra/corporateweb/test/deployment.yaml}"

IMAGE="$REGISTRY/$HARBOR_PROJECT/$IMAGE_NAME"

if [[ ! -f .env ]]; then
  cp .env.example .env
fi

docker build \
  -t "$IMAGE:$TAG" \
  -t "$IMAGE:latest" \
  .

docker push "$IMAGE:$TAG"
docker push "$IMAGE:latest"

python3 - "$K8S_DEPLOYMENT" "$IMAGE:$TAG" <<'PY'
import pathlib
import sys

path = pathlib.Path(sys.argv[1])
image = sys.argv[2]
text = path.read_text()
lines = []
updated = False
for line in text.splitlines():
    stripped = line.strip()
    if stripped.startswith("image: "):
        indent = line[: len(line) - len(line.lstrip())]
        lines.append(f"{indent}image: {image}")
        updated = True
    else:
        lines.append(line)
if not updated:
    raise SystemExit(f"image field not found in {path}")
path.write_text("\n".join(lines) + "\n")
PY

git -C "$K8S_REPO" add "$K8S_DEPLOYMENT"
git -C "$K8S_REPO" commit -m "Deploy corporateweb $TAG"
git -C "$K8S_REPO" push

echo "Deployed image tag queued through GitOps: $IMAGE:$TAG"
