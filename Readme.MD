# Nyakpo Noah — Portfolio

A static personal portfolio site: hero, about, skills, timeline (education + work experience), projects, and a contact section.

## Files
- `index.html` — page structure and content
- `styles.css` — all styling
- `script.js` — nav toggle, contact form, scroll reveal
- `assets/noah-portrait.jpeg` — portrait photo

## Deploying on Render (free static site)

1. Put these files in a GitHub repository (create one on github.com if you don't have one, then upload/push this folder).
2. Go to https://dashboard.render.com and sign in (or create an account).
3. Click **New +** → **Static Site**.
4. Connect your GitHub account and select the repository.
5. Set:
   - **Build Command:** leave blank (nothing to build)
   - **Publish Directory:** `.` (the root of the repo, since `index.html` is at the top level)
6. Click **Create Static Site**. Render will give you a live URL like `noah-portfolio.onrender.com` within a minute or two.
7. Optional: add a custom domain later from the site's **Settings** tab on Render.

## Updating content later
- **Resume:** once you have a PDF, add it to the repo (e.g. `assets/resume.pdf`) and link it from the Experience section or add a "Download Resume" button in the hero.
- **Projects:** replace the placeholder cards in the Projects section of `index.html` with real project titles, descriptions, tags, and links.
- Any push to your GitHub repo's main branch will automatically redeploy the site on Render.
