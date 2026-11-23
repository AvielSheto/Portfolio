# Aviel Sheto | 3D Portfolio

My personal portfolio website, with interactive 3D scenes built with **Three.js** and smooth animations built with **Framer Motion**.

![Portfolio](https://user-images.githubusercontent.com/94540100/224536052-4b4c2158-ae00-4381-ab8e-45959663b9f6.png)
![Portfolio sections](https://user-images.githubusercontent.com/94540100/224537033-ec9afec0-4512-4a85-b61f-484676be2a9b.png)

## Features

- **3D scenes**: an animated desktop computer model, a rotating planet, a star field and floating tech-stack balls, all rendered with React Three Fiber.
- **Animations**: scroll-based section transitions with Framer Motion.
- **Sections**: About, Experience (vertical timeline), Tech stack, Projects (tilt cards) and Contact.
- **Working contact form**: emails are sent directly from the browser with EmailJS.
- **Responsive design** with Tailwind CSS.

## Tech Stack

- React with Vite
- Three.js, React Three Fiber and Drei
- Framer Motion
- Tailwind CSS
- EmailJS

## Getting Started

```bash
git clone https://github.com/AvielSheto/Portfolio.git
cd Portfolio
npm install
npm run dev        # http://localhost:5173
```

To make the contact form work, add your own EmailJS service, template and public key in `src/components/Contact.jsx`.

### Build

```bash
npm run build
npm run preview
```
