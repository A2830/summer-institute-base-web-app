#!/bin/bash
module load ffmpeg/4.0.2
set -x
ffmpeg -r "$FRAMES_PER_SEC" -y -i "$FRAMES_DIR/render_%04d.png" -vsync vfr -b:v 16m -pix_fmt yuv420p "$FRAMES_DIR/video.mp4"