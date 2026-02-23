# IYES Gallery

Place images in **year folders** (e.g. `2025/`, `2024/`, `2023/`) or `Highlights/`.

After adding or removing images, regenerate the manifest from the project root:

```bash
pnpm run update-gallery
```

This updates `manifest.json` so the site gallery stays in sync. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`.
