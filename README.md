# Newbury Women FC

Website for Newbury Women FC. Plain HTML, CSS and JavaScript with no build step.

## Project structure

```
index.html      Home page
css/styles.css  Site styles
js/main.js      Site scripts
images/         Images and logos
```

## Running locally

Serve the folder with any static file server, then open http://localhost:8000.

With Python:

```bash
python -m http.server 8000
```

Or with Node (reloads the page when you save a file):

```bash
npx live-server --port=8000
```

You can also use the **Live Server** extension in VS Code.

## Deploying

The site is static, so it can be hosted on GitHub Pages: go to **Settings → Pages** in the repo and set the source to the `main` branch, root folder.
