#!/bin/bash
#module load ffmpeg/4.0.2
set -x
FRAMES_DIR=$(pwd)

export PATH="$PATH:~ammars22/Public/ffmpeg/bin"
export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:~ammars22/Public/ffmpeg/lib"

ffmpeg -r "$FRAMES_PER_SEC" -y -i "$FRAMES_DIR/render_%04d.png" -vcodec libx264 video.mp4

