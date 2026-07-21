# Temple Index

Temple Index is a static website dedicated to documenting every temple of The Church of Jesus Christ of Latter-day Saints. The goal is to provide a fast, searchable, and visually engaging resource that allows visitors to explore temples by location, status, dedication, and other meaningful information.

The site is built as a modern static web application and is designed to be hosted on GitHub Pages.

---

## Project Goals

* Create a comprehensive index of every temple worldwide.
* Provide detailed information for each temple in a consistent format.
* Organize temples by continent, country, state/province, and region.
* Build a fast, responsive website with minimal dependencies.
* Store all temple information in structured JSON files.
* Generate pages dynamically from a single source of truth.
* Maintain a clean, scalable architecture that is easy to update as new temples are announced and dedicated.

---

## Technologies

* HTML5
* SCSS / CSS
* JavaScript (ES6+)
* JSON
* Git
* GitHub
* GitHub Pages

---

## Project Structure

```text
Temple-Index/
│
├── css/
├── scss/
├── js/
├── data/
├── images/
├── temples/
├── regions/
├── templates/
└── index.html
```

---

## Data

Temple information is maintained in JSON files within the `data` directory.

The long-term objective is to maintain a single source of truth so that all pages can be generated automatically from structured data rather than manually editing individual pages.

---

## Features (Planned)

* Browse all temples
* Search by temple name
* Browse by country
* Browse by region
* Browse by continent
* Temple detail pages
* Interactive filtering
* Responsive design
* Light and dark themes
* Image galleries
* Historical timelines
* Construction and announcement status
* Statistics and summaries

---

## Development

Clone the repository:

```bash
git clone https://github.com/ax804s/temple-index.git
```

Install any required development tools and start your preferred local development server.

Compile SCSS during development:

```bash
sass --watch scss:css
```

---

## Roadmap

### Phase 1

* Project setup
* Site architecture
* Base layout
* Navigation
* Typography
* Theme system

### Phase 2

* Temple JSON schema
* Dynamic page generation
* Search
* Filtering

### Phase 3

* Region and country pages
* Statistics
* Image optimization
* Performance improvements

### Phase 4

* Automated build process
* Static page generation
* Deployment workflow
* Ongoing data maintenance

---

## Contributing

Contributions, corrections, and suggestions are welcome. Please open an issue or submit a pull request if you find inaccurate information or would like to improve the project.

---

## Copyright

Copyright © 2026 Pulse&Pixel. All rights reserved.

This repository and its contents may not be copied, modified, redistributed, or used commercially without prior written permission, except as otherwise permitted by applicable law.

---

## Disclaimer

Temple Index is an independent project and is not affiliated with, sponsored by, or endorsed by The Church of Jesus Christ of Latter-day Saints. Temple names, dates, and other information are provided for informational purposes. Every effort is made to ensure accuracy, but users should verify official information through Church resources when necessary.
