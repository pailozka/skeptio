#!/bin/bash
# High-reliability download script for Stitch assets
URL="$1"
OUTPUT="$2"

if [ -z "$URL" ] || [ -z "$OUTPUT" ]; then
  echo "Usage: $0 <url> <output_path>"
  exit 1
fi

# Ensure output directory exists
mkdir -p "$(dirname "$OUTPUT")"

# Use curl with -L to follow redirects and -s for silence
curl -L -s -o "$OUTPUT" "$URL"

if [ $? -eq 0 ]; then
  echo "Successfully downloaded $URL to $OUTPUT"
else
  echo "Failed to download $URL"
  exit 1
fi
