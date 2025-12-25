<p align="center">
  <img src="https://cdn.buttercms.com/NFhF3dWBTf5wPnfTsdjR" alt="npm" height="36" />
</p>

# whois-vijay

Terminal profile of Vijay — Backend & Systems Engineer.

## Quick start

Run anywhere with npx:

```bash
npx whois-vijay
```

## Features

### Interactive mode (default)

Run without flags to use an interactive menu:

```bash
npx whois-vijay
```

### Command flags

Run specific modes directly:

```bash
npx whois-vijay --short        # Quick overview
npx whois-vijay --tech         # Tech stack & skills
npx whois-vijay --systems      # System architecture diagrams
npx whois-vijay --philosophy   # Engineering philosophy
npx whois-vijay --full         # Complete profile + GitHub stats
```

### What is included

1. ASCII title banner
2. Menu-driven navigation
3. System diagrams (ASCII)
4. GitHub integration (optional)

## Local development

Install dependencies:

```bash
npm install
```

Test locally:

```bash
node bin/index.js
```

Link globally:

```bash
npm link
whois-vijay
```

Configure GitHub username (optional):

- Edit `bin/index.js`
- Find `fetchGitHubStats("vijay-username")`
- Replace with your GitHub username

## Publishing to npm

Login:

```bash
npm login
```

Update version (if republishing):

```bash
npm version patch
```

Publish:

```bash
npm publish
```

If the name is taken, try:

- `whois-vijay-dev`
- `whois-vijay-systems`
- `@yourusername/whois-vijay` (scoped package)

## Tech stack

- Node.js (ES Modules)
- chalk
- boxen
- figlet
- inquirer
- nanospinner
- commander
- axios
- gradient-string
- chalk-animation

---

Systems thinking meets developer branding.
