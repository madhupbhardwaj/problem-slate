# problem-slate website — Mac + Windows developer previews

This is an updated static website package for the existing Vercel/GitHub deployment.
It is not automatically deployed. Windows links currently download source and build
instructions, clearly labeled as an untested developer preview.

## Deploy using your existing GitHub → Vercel connection
1. Extract this ZIP.
2. Replace the matching index.html, styles.css and script.js files in your website repository.
3. Copy downloads/problem-slate-Windows-source.zip into your repository's downloads folder.
4. Keep downloads/problem-slate-macOS.zip and app-icon.png (also included here).
5. Preserve any custom domain configuration, analytics snippets, and changes you made after
   the original website package. This copy is based on the earlier site files in this chat.
6. Commit to the branch connected to Vercel. Wait for the deployment to finish, then test both links.

If importing as a new Vercel project, choose Other/static, with no build command and
root output directory. No npm dependencies or backend are needed.

## When a Windows EXE is tested and ready
The source ZIP includes a GitHub Actions workflow for building the executable on Windows
without having a Windows PC for compilation. Hardware testing still needs a Windows PC.
Publish the tested executable ZIP on a release host, change the Windows button href to
that download URL, and update the Windows installation section to extract and open the EXE.
Do not describe the supplied source archive as a ready-to-run installer.
