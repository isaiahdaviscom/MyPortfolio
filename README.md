# Hugo and Tailwind CSS Project Setup

- [Hugo and Tailwind CSS Project Setup](#hugo-and-tailwind-css-project-setup)
  - [Prerequisites](#prerequisites)
  - [Initialize Hugo](#initialize-hugo)
  - [Configure Hugo](#configure-hugo)
    - [Create or Install a Theme](#create-or-install-a-theme)
    - [Update Configuration](#update-configuration)
    - [Content Creation](#content-creation)
  - [Integrate Tailwind CSS](#integrate-tailwind-css)
    - [Install Dependencies](#install-dependencies)
    - [Configure Tailwind and PostCSS](#configure-tailwind-and-postcss)
    - [Add Tailwind to Your CSS](#add-tailwind-to-your-css)
    - [Build CSS with PostCSS](#build-css-with-postcss)
    - [Automate During Development](#automate-during-development)
    - [Link CSS in Hugo Layouts](#link-css-in-hugo-layouts)
  - [Serve and Build the Site](#serve-and-build-the-site)
  - [Conclusion](#conclusion)

Here's a comprehensive README.md document that compiles all the instructions on how to set up a Hugo project, including how to add a custom theme and integrate Tailwind CSS:

This guide provides detailed instructions on how to set up a Hugo static site with Tailwind CSS integrated, directly within an existing project directory.

## Prerequisites

Before you start, you need to have Hugo and Node.js (with npm) installed on your system.

- **Hugo**: [Installation Guide](https://gohugo.io/getting-started/installing/)
- **Node.js and npm**: [Download Page](https://nodejs.org/)

## Initialize Hugo

Navigate to your project directory and initialize a new Hugo site. This command will also force Hugo to create a new site even if files are already present in the directory.

```bash
hugo new site . --force
```

**Congratulations!** Your new Hugo site is now created in your current project directory.

## Configure Hugo

### Create or Install a Theme

- **Create a custom theme**:

  ```bash
  hugo new theme <THEMENAME>
  ```

  Replace `<THEMENAME>` with your desired theme name.

- **Install a theme from Hugo themes gallery**:
  [Hugo Themes](https://themes.gohugo.io/)

### Update Configuration

Set the theme in the `config.toml` file:

```toml
theme = "<THEMENAME>"
```

### Content Creation

Create new content by specifying the section and filename:

```bash
hugo new content/<SECTIONNAME>/<FILENAME>.<FORMAT>
```

## Integrate Tailwind CSS

### Install Dependencies

Install Tailwind CSS and its peer dependencies:

```bash
npm install tailwindcss@latest postcss@latest autoprefixer@latest
```

### Configure Tailwind and PostCSS

Generate the Tailwind and PostCSS configuration files:

```bash
npx tailwindcss init -p
```

Configure PurgeCSS in `tailwind.config.js` to remove unused styles:

```javascript
module.exports = {
  purge: ['./layouts/**/*.html', './content/**/*.md'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Add Tailwind to Your CSS

Create a CSS file at `assets/css/styles.css` and include Tailwind's directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Build CSS with PostCSS

Update `package.json` to add scripts for building CSS:

```json
"scripts": {
  "build:css": "postcss assets/css/styles.css -o static/css/styles.css",
  "watch:css": "postcss assets/css/styles.css -o static/css/styles.css --watch"
}
```

Build the CSS:

```bash
npm run build:css
```

### Automate During Development

Automatically rebuild CSS on changes:

```bash
npm run watch:css
```

### Link CSS in Hugo Layouts

Include the compiled CSS in your layouts:

```html
<link rel="stylesheet" href="{{ .Site.BaseURL }}css/styles.css">
```

## Serve and Build the Site

Serve your site locally with Hugo's built-in server, which supports live reloading:

```bash
hugo server --buildDrafts
```

Build your site to generate the static files:

```bash
hugo
```

## Conclusion

You now have a Hugo site integrated with Tailwind CSS ready for development. For more information on customization and advanced configurations, refer to the [Hugo documentation](https://gohugo.io/documentation/) and the [Tailwind CSS documentation](https://tailwindcss.com/docs).

This README.md document serves as a complete guide to setting up a Hugo project with Tailwind CSS, tailored for rapid development and easy deployment. It covers every step from initial setup to development and build processes.
