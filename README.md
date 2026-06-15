# OzzyDev — Static Blog

A clean, responsive static blog for **web developers and AI enthusiasts**. No build step, no framework, no dependencies — just HTML, CSS, and a little vanilla JavaScript.

## Features
- 🌓 Dark / light theme toggle (remembers your choice, respects system preference)
- 📱 Fully responsive with a mobile nav menu
- ⚡ Zero dependencies — open `index.html` and it works
- ✍️ 4 main pages + 4 ready-to-edit example posts
- 🎨 Modern CSS (gradients, `color-mix`, container-query-ready)

## Structure
```
ozzydev.com/
├── index.html              # Home (hero, topics, latest posts, newsletter)
├── blog.html               # All posts
├── about.html              # About the publication
├── contact.html            # Contact form (static demo)
├── posts/
│   ├── build-rag-chatbot.html
│   ├── web-performance-2026.html
│   ├── prompt-engineering-patterns.html
│   └── modern-css-tricks.html
└── assets/
    ├── css/style.css       # All styling + theme variables
    └── js/main.js          # Theme toggle, mobile nav, form handlers
```

## Run it
It's fully static. Either open `index.html` directly, or serve the folder:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```
Then visit http://localhost:8000

## Add a new post
1. Copy any file in `posts/` as a starting template.
2. Edit the title, tags, date, and `.article-body` content.
3. Add a matching `<article class="card">` block to `index.html` and `blog.html`.

## Customize
- **Brand color / theme:** edit the CSS variables at the top of `assets/css/style.css` (`:root` for dark, `[data-theme="light"]` for light).
- **Site name:** search-and-replace `OzzyDev`.

Built as a starting point — make it yours.
