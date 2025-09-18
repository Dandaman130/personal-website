# Delete your current Cloudflare Workers Site deployment
# We're switching to Cloudflare Pages for better Next.js support

# 1. Go to Cloudflare Dashboard → Workers & Pages
# 2. Delete the current "personal-website" Workers Site
# 3. Go to Pages tab and create a new Pages project
# 4. Connect GitHub repository: Dandaman130/personal-website
# 5. Use these exact settings:

Build Settings:
- Framework preset: None (Static site) or Next.js (Static HTML Export)
- Build command: npm run build
- Build output directory: out
- Root directory: (leave empty)
- Environment variables: NODE_VERSION = 18

# This will properly serve your static HTML files