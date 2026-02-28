# CLAUDE.md
# AMBRE SHOP — AUTONOMOUS BUILD DIRECTIVE

You are Claude Code, acting as:

Senior Frontend Engineer  
UX Designer  
Project Executor  

You must work autonomously.

No strategic questions.
No clarification loops.
No back-and-forth.

You must execute phase by phase and complete the project locally.

---

# PROJECT CONTEXT

Create a local demo website for a cosmetics brand:

Brand: AMBRE SHOP

This project must behave EXACTLY like the previous demo:
sylvose-eden-shama

Structure:
- Vitrine website
- Facebook page simulation
- WhatsApp chat simulation
- No online payment
- Orders handled manually via WhatsApp
- Client handles delivery and cash collection

This is a marketing + social funnel demo.

---

# LOGO (MANDATORY)

Use this file:

/Users/xdream/projets/baoprod/ambre-shop/docs/images/logo_ambre_shop.png

Copy to public assets if needed.

---

# BRAND STYLE EXTRACTION

Use this visual identity:

Colors:
Blush: #F6E2DD
Gold: #E1C48E
Bronze: #B78A58
Deep brown: #6A4A2C
Off-white: #FFF9F7

Typography:
Headings → Elegant serif (Playfair Display or Georgia fallback)
Body → Inter or system-ui

Style:
Premium feminine.
Soft luxury.
Rounded cards.
Gold accents.
Subtle floral/butterfly ornament.
Light decorative separators.

---

# TECH STACK

Use:

Next.js (App Router) + TailwindCSS

Static site only.
No backend.
No database.
All data mocked locally.

---

# PROJECT LOCATION

Create project here:

/Users/xdream/projets/baoprod/ambre-shop/

Structure must include:

README.md
CHANGELOG.md
TODO.md
CLAUDE.md
public/
src/
docs/

---

# ROUTES

/                → Home
/besoin          → Client needs page
/facebook        → Facebook simulation
/whatsapp        → WhatsApp simulation
/catalogue       → Optional products page

---

# HOME PAGE

Must contain:

Hero
- Logo
- Tagline
- Primary CTA → WhatsApp
- Secondary CTA → Facebook

Why Ambre Shop
Product categories
Best sellers (6 mock products)
How to order (3 steps)
Footer with social + WhatsApp CTA

---

# BESOIN PAGE

Explain clearly:
- Project objective
- Funnel logic
- No payment integration
- Client handles logistics
- Deliverables included
- Future evolution

Structured, professional.

---

# FACEBOOK SIMULATION

Simulate:
- Cover
- Profile circle
- Page name
- CTA buttons
- Tabs imitation
- 6–8 mock posts
- Like/comment counters

Pure UI simulation.

---

# WHATSAPP SIMULATION

Simulate WhatsApp Web:

- Sidebar with fake chats
- Chat conversation script
- Input bar (fake)
- Button linking to:

https://wa.me/24100000000?text=Bonjour%20Ambre%20Shop

WhatsApp number must be editable in config file.

---

# CONFIG FILE

Create:

src/config/brand.ts

Include:

brandName
tagline
colors
whatsappNumber
whatsappPrefillMessage
facebookUrl

All pages must use this config.
No scattered constants.

---

# DATA FILE

Create:

src/data/products.ts

Mock products:
id
name
category
price
shortDescription
image placeholder

---

# DECORATIVE ELEMENTS

Create simple SVG:
- gold divider
- floral separator
- butterfly outline watermark

Keep subtle.

---

# EXECUTION PHASES

PHASE 0 — Scaffold
- Create Next.js app
- Setup Tailwind
- Base layout
- Navbar + Footer
Commit:
chore: scaffold ambre-shop demo

PHASE 1 — Design System
- Theme tokens
- Buttons
- Cards
- Decorative elements
Commit:
feat: add ambre-shop design system

PHASE 2 — Pages
- Home
- Besoin
- Facebook
- WhatsApp
Commit:
feat: implement ambre-shop pages

PHASE 3 — Polish
- Responsive
- SEO meta
- Build validation
Commit:
fix: polish + responsive + SEO basics

Each phase must:
- Pass npm run build
- Update CHANGELOG.md
- Commit cleanly

---

# QA REQUIREMENTS

- npm run dev works
- npm run build works
- No console errors
- All links functional
- WhatsApp link correct
- Responsive mobile/desktop
- Clean code structure

---

# FINAL OUTPUT

When finished provide:

1. Folder tree
2. How to run
3. Which file edits WhatsApp number
4. Demo walkthrough script

---

Start immediately.
No questions.
Execute fully.