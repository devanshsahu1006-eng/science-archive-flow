@import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Lora:ital,wght@0,400;0,700;1,400&family=Caveat:wght@400;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 35 30% 76%;
    --foreground: 25 40% 12%;

    --card: 35 35% 78%;
    --card-foreground: 25 40% 12%;

    --popover: 35 35% 78%;
    --popover-foreground: 25 40% 12%;

    --primary: 25 55% 22%;
    --primary-foreground: 39 35% 90%;

    --secondary: 33 30% 72%;
    --secondary-foreground: 25 40% 12%;

    --muted: 33 25% 75%;
    --muted-foreground: 25 20% 35%;

    --accent: 35 40% 65%;
    --accent-foreground: 25 40% 12%;

    --destructive: 0 65% 45%;
    --destructive-foreground: 39 30% 92%;

    --border: 30 25% 42%;
    --input: 30 25% 42%;
    --ring: 25 55% 22%;

    --radius: 0.25rem;

    /* Custom paper tokens — golden brown palette */
    --paper: 36 34% 78%;
    --paper-dark: 33 30% 74%;
    --ink: 25 45% 14%;
    --ink-light: 25 25% 35%;
    --ink-math: 220 55% 28%;
    --ink-physics: 0 50% 32%;
    --gold: 43 70% 45%;
    --leather: 25 50% 20%;
    --leather-light: 25 35% 32%;
    --wood: 25 40% 26%;
    --wood-light: 30 30% 45%;

    --sidebar-background: 35 30% 80%;
    --sidebar-foreground: 25 40% 12%;
    --sidebar-primary: 25 55% 22%;
    --sidebar-primary-foreground: 39 35% 90%;
    --sidebar-accent: 33 30% 72%;
    --sidebar-accent-foreground: 25 40% 12%;
    --sidebar-border: 30 25% 60%;
    --sidebar-ring: 25 55% 22%;
  }

  .dark {
    --background: 25 25% 8%;
    --foreground: 36 30% 82%;

    --card: 25 22% 12%;
    --card-foreground: 36 30% 82%;

    --popover: 25 22% 12%;
    --popover-foreground: 36 30% 82%;

    --primary: 36 30% 72%;
    --primary-foreground: 25 25% 8%;

    --secondary: 25 18% 18%;
    --secondary-foreground: 36 30% 82%;

    --muted: 25 15% 16%;
    --muted-foreground: 30 12% 50%;

    --accent: 35 25% 28%;
    --accent-foreground: 36 30% 82%;

    --destructive: 0 65% 45%;
    --destructive-foreground: 39 30% 92%;

    --border: 25 18% 22%;
    --input: 25 18% 22%;
    --ring: 36 30% 72%;

    --paper: 30 20% 16%;
    --paper-dark: 28 18% 20%;
    --ink: 36 30% 82%;
    --ink-light: 30 15% 60%;
    --ink-math: 220 50% 65%;
    --ink-physics: 0 45% 60%;
    --gold: 43 65% 55%;
    --leather: 25 40% 32%;
    --leather-light: 25 30% 42%;
    --wood: 25 35% 18%;
    --wood-light: 30 25% 32%;

    --sidebar-background: 25 22% 10%;
    --sidebar-foreground: 36 30% 82%;
    --sidebar-primary: 36 30% 72%;
    --sidebar-primary-foreground: 25 25% 8%;
    --sidebar-accent: 25 18% 18%;
    --sidebar-accent-foreground: 36 30% 82%;
    --sidebar-border: 25 18% 22%;
    --sidebar-ring: 36 30% 72%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-family: 'Lora', serif;
  }

  /* Smooth theme transition for all elements */
  *, *::before, *::after {
    transition-property: background-color, border-color, box-shadow;
    transition-duration: 0s;
    transition-timing-function: ease;
  }
  html.theme-transitioning *,
  html.theme-transitioning *::before,
  html.theme-transitioning *::after {
    transition-duration: 0.5s !important;
  }
}

/* Custom cursor */
body.custom-cursor,
body.custom-cursor * {
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%233a2510' stroke-width='1.5'%3E%3Cpath d='M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z'/%3E%3C/svg%3E") 2 22, auto;
}

/* Paper texture */
.paper-texture {
  background-image: 
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 27px,
      hsl(var(--border) / 0.3) 27px,
      hsl(var(--border) / 0.3) 28px
    );
  background-size: 100% 28px;
}

.paper-margin {
  border-left: 2px solid hsl(0 55% 55% / 0.3);
  padding-left: 2rem;
  margin-left: 4rem;
}

/* Ink bleeding animation */
@keyframes ink-bleed {
  0% { filter: blur(8px); opacity: 0; }
  40% { filter: blur(3px); opacity: 0.7; }
  100% { filter: blur(0); opacity: 1; }
}
.animate-ink-bleed {
  animation: ink-bleed 1.2s ease-out forwards;
}

/* Book spine styles */
@keyframes book-pull {
  0% { transform: translateZ(0) rotateY(0); }
  50% { transform: translateZ(80px) rotateY(-5deg); }
  100% { transform: translateZ(120px) rotateY(-30deg); }
}

@keyframes book-open {
  0% { transform: perspective(1200px) rotateY(-30deg) scale(0.5); opacity: 0.7; }
  100% { transform: perspective(1200px) rotateY(0deg) scale(1); opacity: 1; }
}

.animate-book-open {
  animation: book-open 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

/* Sketch reveal animation */
@keyframes sketch-reveal {
  0% { clip-path: inset(100% 0 0 0); }
  100% { clip-path: inset(0 0 0 0); }
}
.animate-sketch-reveal {
  animation: sketch-reveal 1.5s ease-in-out forwards;
}

/* Coffee stain */
.coffee-stain {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(
    ellipse at center,
    transparent 40%,
    hsl(25 50% 40% / 0.06) 42%,
    hsl(25 50% 40% / 0.12) 50%,
    hsl(25 50% 40% / 0.06) 55%,
    transparent 58%
  );
  pointer-events: none;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: hsl(var(--paper));
}
::-webkit-scrollbar-thumb {
  background: hsl(var(--leather));
  border-radius: 4px;
}

/* Horizontal scroll for timeline */
.timeline-scroll {
  scrollbar-width: thin;
  scrollbar-color: hsl(var(--leather)) hsl(var(--paper));
}
.timeline-scroll::-webkit-scrollbar {
  height: 6px;
}

/* Toggle watermark styles */
/* Toggle watermark styles */
.watermark-math {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Ctext x='20' y='50' font-size='40' fill='rgba(59,99,163,0.06)' font-family='serif'%3E∑%3C/text%3E%3Ctext x='100' y='100' font-size='50' fill='rgba(59,99,163,0.05)' font-family='serif'%3E∫%3C/text%3E%3Ctext x='50' y='160' font-size='35' fill='rgba(59,99,163,0.06)' font-family='serif'%3Eπ%3C/text%3E%3Ctext x='140' y='40' font-size='30' fill='rgba(59,99,163,0.05)' font-family='serif'%3E∂%3C/text%3E%3Ctext x='130' y='170' font-size='45' fill='rgba(59,99,163,0.04)' font-family='serif'%3E∞%3C/text%3E%3C/svg%3E");
}

.watermark-physics {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='40' fill='none' stroke='rgba(180,60,60,0.06)' stroke-width='1'/%3E%3Cellipse cx='100' cy='100' rx='80' ry='30' fill='none' stroke='rgba(180,60,60,0.05)' stroke-width='1' transform='rotate(30,100,100)'/%3E%3Cellipse cx='100' cy='100' rx='80' ry='30' fill='none' stroke='rgba(180,60,60,0.05)' stroke-width='1' transform='rotate(-30,100,100)'/%3E%3Cpath d='M20,150 Q60,120 100,150 Q140,180 180,150' fill='none' stroke='rgba(180,60,60,0.05)' stroke-width='1'/%3E%3C/svg%3E");
}

/* Stronger watermark for active math/physics selection in scientist detail */
.watermark-math-strong {
  background-color: rgba(59, 99, 163, 0.06);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Ctext x='20' y='50' font-size='40' fill='rgba(59,99,163,0.15)' font-family='serif'%3E∑%3C/text%3E%3Ctext x='100' y='100' font-size='50' fill='rgba(59,99,163,0.12)' font-family='serif'%3E∫%3C/text%3E%3Ctext x='50' y='160' font-size='35' fill='rgba(59,99,163,0.14)' font-family='serif'%3Eπ%3C/text%3E%3Ctext x='140' y='40' font-size='30' fill='rgba(59,99,163,0.12)' font-family='serif'%3E∂%3C/text%3E%3Ctext x='130' y='170' font-size='45' fill='rgba(59,99,163,0.10)' font-family='serif'%3E∞%3C/text%3E%3C/svg%3E");
  border-left: 3px solid rgba(59, 99, 163, 0.2);
}

.watermark-physics-strong {
  background-color: rgba(180, 60, 60, 0.06);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='40' fill='none' stroke='rgba(180,60,60,0.15)' stroke-width='1.5'/%3E%3Cellipse cx='100' cy='100' rx='80' ry='30' fill='none' stroke='rgba(180,60,60,0.12)' stroke-width='1.2' transform='rotate(30,100,100)'/%3E%3Cellipse cx='100' cy='100' rx='80' ry='30' fill='none' stroke='rgba(180,60,60,0.12)' stroke-width='1.2' transform='rotate(-30,100,100)'/%3E%3Cpath d='M20,150 Q60,120 100,150 Q140,180 180,150' fill='none' stroke='rgba(180,60,60,0.12)' stroke-width='1.2'/%3E%3C/svg%3E");
  border-left: 3px solid rgba(180, 60, 60, 0.2);
}

/* Page turn animation */
@keyframes page-turn-in {
  0% {
    transform: perspective(1200px) rotateY(90deg);
    transform-origin: left center;
    opacity: 0;
  }
  100% {
    transform: perspective(1200px) rotateY(0deg);
    transform-origin: left center;
    opacity: 1;
  }
}

@keyframes page-turn-out {
  0% {
    transform: perspective(1200px) rotateY(0deg);
    transform-origin: left center;
    opacity: 1;
  }
  100% {
    transform: perspective(1200px) rotateY(-90deg);
    transform-origin: left center;
    opacity: 0;
  }
}

/* Page shadow for realism — bolder border */
.page-shadow {
  box-shadow: 
    inset 40px 0 40px -20px hsl(var(--ink) / 0.05),
    inset -5px 0 15px -5px hsl(var(--ink) / 0.08),
    5px 5px 20px hsl(var(--ink) / 0.15);
}

/* Dark mode cursor override */
.dark body.custom-cursor,
.dark body.custom-cursor * {
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23c9b896' stroke-width='1.5'%3E%3Cpath d='M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z'/%3E%3C/svg%3E") 2 22, auto;
}

/* Bold perimeter borders for all section cards */
.page-shadow {
  border-width: 2px !important;
}
