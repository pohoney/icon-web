# EdgeOne Pages Deployment

## Recommended Settings

- Framework preset: Static / Other
- Build command: `npm run build`
- Output directory: `dist`
- Install command: none, or `npm install` if EdgeOne requires one
- Node version: 18+

## Database

This project uses EdgeOne Pages Blob through a Pages Function.

- API file: `edge-functions/api/icons.js`
- Blob store: `icon-data`
- Blob key: `icons/index.json`
- Read: `GET /api/icons`
- Save: `POST /api/icons` with `{ "icons": [...] }`

If the EdgeOne Function is not available in local static preview, the page falls back to local placeholder icon records in `public/app.js`.

## Icon Row Fields

- `id`: stable identifier and file name base
- `title`, `title_zh`: display names
- `description`, `description_zh`: detail modal copy
- `category`: currently `tennis`
- `tags`, `tags_zh`: text arrays
- `image_url`: full PNG URL
- `thumb_url`: thumbnail URL
- `status`: `active` or `hidden`
- `sort`: ordering number

## Important

Direct CLI upload only works for EdgeOne Makers projects whose Provider is `Upload`.

If the project Provider is `Github`, deploy by pushing this project to the GitHub repository connected to that EdgeOne project, or create a separate direct-upload Makers project.
