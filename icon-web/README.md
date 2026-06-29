# Tennis Icon Web

Ricon-inspired icon library prototype with a drooping waterfall net layout.

## Run

```bash
npm start
```

Open `http://localhost:4177`.

## Build

```bash
npm run build
```

The static output goes to `dist/`. Use this folder for EdgeOne Pages.

## Replace Icons

The icon slots are defined in `public/app.js` inside `iconData`.

Put replacement files in:

```text
public/icons/
```

Then update each item:

```js
image: "/icons/your-file.png",
thumb: "/icons/your-file.png"
```

If an image is missing, the UI keeps a reserved placeholder slot and copy/download still exports a generated PNG placeholder.

## Database

The deployed EdgeOne version reads icon records from `GET /api/icons`.

That API is implemented in `edge-functions/api/icons.js` and stores data in EdgeOne Pages Blob store `icon-data`, key `icons/index.json`.

Local static preview falls back to the placeholder records in `public/app.js`.

See `EDGEONE_DEPLOY.md` for deployment settings.
