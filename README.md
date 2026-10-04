# problem-slate website — Mac + Windows developer previews

This is the updated static website package for the existing Vercel/GitHub deployment.
It is not automatically deployed. Both buttons include the latest interface-aligned
source packages. Windows remains clearly labeled as an untested developer preview.

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

## When a Windows EXE is tested and ready
The source ZIP includes a GitHub Actions workflow for building the executable on Windows
without having a Windows PC for compilation. Hardware testing still needs a Windows PC.
Publish the tested executable ZIP on a release host, change the Windows button href to
that download URL, and update the Windows installation section to extract and open the EXE.
Do not describe the supplied source archive as a ready-to-run installer.
