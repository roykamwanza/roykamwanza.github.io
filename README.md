# Roy Kamwanza · Portfolio

Personal portfolio of **Roy Kamwanza**, a software developer in Lusaka, Zambia, focused on AI, machine learning and data science.

**Live site:** https://roykamwanza.github.io

## What's on the site

- **Projects:** Zambian Sign Language Recognition (computer vision) and Zambia's Staple Food Prices (data analysis).
- **Interactive data story:** explore four years of official ZamStats prices for mealie meal and maize, by month, year or district.
- **Interactive terminal:** type `help` in the `roy.log` window on the home page.
- **Experience, education and certifications.**

## Built with

- HTML and CSS, with no build step
- [Preact](https://preactjs.com) and [htm](https://github.com/developit/htm) for the interactive parts (bundled in `vendor/`, about 10 KB)
- Google Fonts: Bricolage Grotesque, Manrope and JetBrains Mono

## Files

| Path | What it is |
|---|---|
| `index.html` | The page: title, description and link-preview tags |
| `app.js` | The page content and all interactions |
| `vendor/htm-preact.js` | The small library that renders the page |
| `assets/` | Photos, project images, favicon and the link-preview image |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

## Run it locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Publish with GitHub Pages

1. The repository is named `roykamwanza.github.io`.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose **main** and **/ (root)**, then click **Save**.
4. After a minute or two, the site is live at https://roykamwanza.github.io.

## Contact

[LinkedIn](https://www.linkedin.com/in/roy-kamwanza-0550b5244/) · [GitHub](https://github.com/roykamwanza)

© 2026 Roy Kamwanza
