#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

function frames_range() {
    (
        set +u
        echo "$FRAMES_RANGE" | perl - pe 's[.+/][]'

    )
}

module load blender

echo "The Range IS $(frames_range)"
(
    cd $OUTPUT_DIR
    env | grep -P '^[A-Z]' | sort
    # set -x
    blender \
        -b "$BLEND_FILE_PATH" \
        -F PNG \
        -o "$OUTPUT_DIR/render_" \
        -x 1 \
        -t 0 \
        -E CYCLES \
        -f "$(frames_range)"
)