# whois-vijay

> Terminal profile of Vijay — Backend & Systems Engineer
> **Interactive CLI with multiple modes, system diagrams, and GitHub integration**

## 🚀 Quick Start

Run anywhere with npx:

```bash
npx whois-vijay
```

## ✨ Features

### 📱 Interactive Mode (Default)

Run without flags to get an interactive menu:

```bash
npx whois-vijay
```

Choose from:

- 🚀 **Tech Stack & Skills** - Complete technology overview
- 🏗️ **System Architecture Diagrams** - ASCII art of distributed systems
- 💭 **Engineering Philosophy** - Systems thinking & principles
- 📊 **Full Profile + GitHub Stats** - Everything with live GitHub data
- ⚡ **Quick Overview** - Fast summary

### 🎯 Command Flags

Run specific modes directly:

```bash
npx whois-vijay --short        # Quick overview
npx whois-vijay --tech         # Tech stack & skills
npx whois-vijay --systems      # System architecture diagrams
npx whois-vijay --philosophy   # Engineering philosophy
npx whois-vijay --full         # Complete profile + GitHub stats
```

### 🎨 What's Included

1. **Animated ASCII Art** - Gradient & animated title
2. **Interactive Menus** - Navigate through different sections
3. **System Diagrams** - Visual ASCII representations of:
   - Microservices architecture
   - AWS infrastructure
   - Message queue patterns
   - Data flow diagrams
4. **GitHub Integration** - Live stats from GitHub API
5. **Loading Spinners** - Smooth animations
6. **Multiple Display Modes** - Tech, Philosophy, Systems, Full
7. **Philosophy Section** - Engineering principles & mindset

## 🛠️ Local Development

1. **Install dependencies:**

```bash
npm install
```

2. **Test locally:**

```bash
node bin/index.js
```

3. **Link globally:**

```bash
npm link
whois-vijay
```

4. **Configure GitHub username** (optional):
   - Edit `bin/index.js`
   - Find `fetchGitHubStats("vijay-username")`
   - Replace with your GitHub username

## 📦 Publishing to npm

1. **Login to npm:**

```bash
npm login
```

2. **Update version** (if republishing):

```bash
npm version patch
```

3. **Publish:**

```bash
npm publish
```

**Note:** If `whois-vijay` is taken, try:

- `whois-vijay-dev`
- `whois-vijay-systems`
- `@yourusername/whois-vijay` (scoped package)

## 🎯 What You'll Experience

### Interactive Mode

- Gradient animated title
- Menu-driven navigation
- Smooth transitions
- Loading animations
- Multiple exploration paths

### Tech Mode

- Complete tech stack breakdown
- Categorized by: Backend, Messaging, Cloud, Databases, Observability
- Animated display with icons

### Systems Mode

- **Microservices Architecture** - Service mesh, load balancers, Kafka
- **AWS Infrastructure** - WAF, ALB, ECS, RDS
- **Message Queue Patterns** - Producer/Consumer with DLQ

### Philosophy Mode

- 6 core engineering principles
- Animated rainbow display
- Systems thinking approach
- Reliability-first mindset

### Full Mode

- Everything combined
- Live GitHub statistics
- Complete profile
- System diagrams

## 🧰 Tech Stack

- **Node.js** (ES Modules)
- **chalk** - Terminal colors
- **boxen** - Terminal boxes
- **figlet** - ASCII art
- **inquirer** - Interactive prompts
- **nanospinner** - Loading spinners
- **commander** - CLI argument parsing
- **axios** - GitHub API calls
- **gradient-string** - Gradient text
- **chalk-animation** - Animated text

## 🎭 Examples

```bash
# Interactive mode (recommended first experience)
npx whois-vijay

# Quick check
npx whois-vijay --short

# See the architecture thinking
npx whois-vijay --systems

# Understand the philosophy
npx whois-vijay --philosophy

# Get everything + GitHub stats
npx whois-vijay --full
```

## 🚀 Advanced Usage

Chain with other commands:

```bash
npx whois-vijay --short && npm init
```

Use in CI/CD pipelines to show developer info:

```bash
npx whois-vijay --tech > TECH_STACK.txt
```

## 📝 Customization

Fork and customize:

1. Update the profile data in `bin/index.js`
2. Modify ASCII diagrams in `systemDiagrams` object
3. Add your own sections to `displayModes`
4. Change colors and styling
5. Add your GitHub username for stats

---

**Systems thinking meets developer branding** 🚀
**v2.0 - Now with full interactivity!**
