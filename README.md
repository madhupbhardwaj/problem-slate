# problem-slate website — version 1.7 (Mac + Windows)

This is the updated static website package for the existing Vercel/GitHub deployment.
Static site deployed from GitHub to Vercel. Downloads in `downloads/`:

| File | What it is |
| --- | --- |
| `problem-slate-macOS-app.zip` | Ready-to-run universal Mac app (Apple silicon + Intel), ad-hoc signed, not notarized |
| `problem-slate-macOS.zip` | Mac source; `Build-and-Run.command` builds `problem-slate.app` locally |
| *(GitHub Release `v1.7`)* `problem-slate-Windows.zip` | Ready-to-run Windows x64 app (single `problem-slate.exe`, ~57 MB). Too big for browser uploads, so it lives in the release, not in `downloads/` |
| `problem-slate-Windows-source.zip` | Windows WPF source and build script |

`.github/workflows/build-apps.yml` compiles and tests both apps from these ZIPs on every
change to `downloads/`, and checks the published Mac app's signature and the Windows EXE.
The macOS job uploads a freshly built universal `problem-slate.app` as a run artifact.

## Updating the Mac app
After changing `problem-slate-macOS.zip`, push it, wait for the "Build apps" workflow, download
its `problem-slate-macOS-app` artifact, and replace `downloads/problem-slate-macOS-app.zip` with
the `problem-slate-macOS-app.zip` inside it.

## Deploy using your existing GitHub → Vercel connection
1. Extract this ZIP.
2. Replace the matching index.html, styles.css and script.js files in your website repository.
3. Upload the complete downloads folder. It replaces both earlier source packages.
4. Upload the assets folder as well; the website preview uses the shared tool icons.
5. Keep app-icon.png, favicon.ico, favicon-32x32.png and apple-touch-icon.png at
   the website root (all are included here).
6. Preserve any custom domain configuration, analytics snippets, and changes you made after
   the original website package. This copy is based on the earlier site files in this chat.
7. Commit to the branch connected to Vercel. Wait for the deployment to finish, then test both links.

If importing as a new Vercel project, choose Other/static, with no build command and
root output directory. No npm dependencies or backend are needed.

## Updating the Windows EXE
The Windows app is hosted as an asset on the GitHub Release `v1.7` (browser uploads to the
repository are limited to 25 MB). For a new version: build it with the Windows source's
`Build-and-Run.cmd` (or the CI workflow), zip `problem-slate.exe` inside a `problem-slate-Windows/`
folder with its README.txt, create a new release (for example `v1.8`), attach the ZIP, and update
the three Windows links in `index.html` and the URL in `.github/workflows/build-apps.yml`.
The EXE is unsigned and has not yet been tested hands-on on Windows PCs or pen tablets.
