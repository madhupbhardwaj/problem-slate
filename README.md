# problem-slate website — version 1.7 (Mac + Windows)

Static site deployed from GitHub to Vercel. No build command, npm packages or backend.

## Downloads

| Where | File | What it is |
| --- | --- | --- |
| `downloads/` | `problem-slate-macOS-app.zip` | Ready-to-run universal Mac app (Apple silicon + Intel), ad-hoc signed, not notarized |
| GitHub Release `v1.7` | `problem-slate-Windows.zip` | Ready-to-run Windows x64 app (single `problem-slate.exe`, ~57 MB) |

The Windows ZIP lives on the release because browser uploads to the repository are limited to 25 MB.
App source code is not published on the site; keep it somewhere private.

`.github/workflows/build-apps.yml` ("Check app downloads") runs whenever `downloads/`, `index.html`
or the workflow changes. It verifies the Mac app's signature, architectures and version, and
downloads the Windows ZIP from the link in `index.html` and runs its smoke tests on Windows.

## Deploy
1. Copy the site files (index.html, styles.css, script.js, the favicons, app-icon.png, assets/ and
   downloads/) to the root of this repository.
2. Commit to the branch connected to Vercel, wait for the deployment, then test both download buttons.

## Publishing a new version
- **Mac:** build `problem-slate.app` from the Mac source (`Build-and-Run.command`), zip it in Finder
  (right-click → Compress), and replace `downloads/problem-slate-macOS-app.zip`.
- **Windows:** build `problem-slate.exe` from the Windows source (`Build-and-Run.cmd`), zip it inside a
  `problem-slate-Windows/` folder with its README.txt, create a new GitHub release (for example `v1.8`),
  attach the ZIP, and update the three Windows links in `index.html`.

Neither app is signed by Apple or Microsoft, and version 1.7 has not yet been tested hands-on on a
Mac, a Windows PC or with pen tablets.
