# Cards Beam Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/cards-beam-animation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable reconstruction of the uploaded 10.97-second screen recording titled **Cards Beam Animation — Using HTML CSS JS**.

## Video observations

The video shows a dark charcoal/purple tutorial layout. The preview area is black and contains a small group of rounded cards: a dark text card on the left, a bright gradient feature card, and a smaller information card on the right. A thin purple/pink/cyan beam of light travels horizontally across the cards, creating a luminous edge/glow effect. The lower portion shows code-editor style panels labelled HTML, CSS and JavaScript.

The code panels are too small and compressed to transcribe line-for-line. This project recreates the visible card design and beam animation, rather than claiming to be the creator's verbatim source.

## Features

- Three responsive feature cards.
- Animated multicolor light beam sweeps across the preview.
- Rotating conic-gradient card borders.
- Soft purple/cyan/pink glow.
- Gradient artwork on the main card.
- Hover lift and pointer-responsive card tilt.
- Responsive mobile layout.
- Reduced-motion support.
- No external libraries, images, or build step.

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000

## Project structure

```text
cards-beam-animation/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Technical note

The reference video does not expose enough readable source to confirm the original CSS animation implementation. The recreated version uses CSS `@property` and a rotating `conic-gradient` for the luminous border, plus a moving beam overlay. Modern browsers that support CSS Houdini `@property` display the full rotating gradient; the beam sweep remains visible regardless.
