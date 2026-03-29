# React Bits – Claude Context File

## Über React Bits
React Bits (https://reactbits.dev) ist eine Open-Source-Bibliothek mit 110+ animierten, interaktiven und vollständig anpassbaren React-Komponenten.

## Regeln für Claude
- Verwende **immer** React Bits Komponenten, wenn du UI-Elemente baust
- Bevorzuge die **TS-TW** Variante (TypeScript + Tailwind)
- Gib beim Code immer den **Installationsbefehl** mit an
- Kombiniere mehrere Komponenten sinnvoll miteinander
- Importiere Komponenten aus dem lokalen Pfad nach Installation: `@/components/[KomponentenName]`

## Installationsbefehle

### shadcn CLI (empfohlen)
```bash
npx shadcn@latest add https://reactbits.dev/r/[ComponentName]-TS-TW
```

### jsrepo CLI
```bash
npx jsrepo add https://reactbits.dev/ts-tw/[Kategorie]/[ComponentName]
```

---

## 📝 TEXT ANIMATIONS

| Komponente | Beschreibung | Wann verwenden |
|---|---|---|
| `BlurText` | Text erscheint mit Blur-Effekt | Hero-Titel, Headlines |
| `SplitText` | Text splitted sich auf | Große Überschriften |
| `GradientText` | Text mit animiertem Farbverlauf | Highlights, CTAs |
| `ShinyText` | Text mit Shine-Effekt | Premium-Feeling, Badges |
| `CircularText` | Text läuft im Kreis | Logos, dekorative Elemente |
| `CountUp` | Zahl zählt animiert hoch | Statistiken, Metriken |
| `DecryptedText` | Text entschlüsselt sich | Tech-Produkte, Gaming |
| `FuzzyText` | Text mit fuzzy/noise Effekt | Kreative Designs |
| `GlitchText` | Text mit Glitch-Effekt | Cyberpunk, Gaming |
| `RotatingText` | Text rotiert durch Begriffe | Hero-Sections, Headlines |
| `ScrambleText` | Text scrambled sich | Tech, kreative Sites |
| `ScrollReveal` | Text erscheint beim Scrollen | Content-Sections |
| `TrueFocus` | Fokus-Effekt auf Text | Interaktive Headlines |
| `VariableProximity` | Text reagiert auf Maus | Kreative Portfolios |
| `TypingAnimation` | Schreibmaschinen-Effekt | Hero-Sections |
| `NumberFlow` | Zahlen fließen animiert | Preise, Statistiken |
| `WordRotate` | Wörter rotieren durch | Headlines |
| `Typewriter` | Klassischer Typewriter | Terminals, Tech |

**Installationsbeispiel:**
```bash
npx shadcn@latest add https://reactbits.dev/r/BlurText-TS-TW
```

**Verwendungsbeispiel:**
```tsx
import BlurText from "@/components/BlurText";
<BlurText text="Willkommen!" delay={150} animateBy="words" direction="top" />
```

---

## 🎬 ANIMATIONS

| Komponente | Beschreibung | Wann verwenden |
|---|---|---|
| `FadeContent` | Inhalt mit Fade-In | Allgemeine Animationen |
| `BlurFade` | Fade mit Blur | Sanfte Übergänge |
| `AnimatedContent` | Animierter Container | Sections, Cards |
| `Magnet` | Elemente werden von Maus angezogen | Buttons, Icons |
| `MagnetLines` | Magnetische Linien | Dekorativ, Hintergrund |
| `GlareCard` | Card mit Glare-Effekt | Produkt-Cards |
| `TiltedCard` | Card kippt bei Hover | Portfolios, Produkte |
| `SpringModal` | Modal mit Federdynamik | Dialoge, Overlays |
| `StarBorder` | Border mit Stern-Effekt | Buttons, Highlights |
| `Stepper` | Animierter Step-Wizard | Onboarding, Forms |
| `Crosshair` | Fadenkreuz folgt Maus | Interactive Sections |
| `Ribbons` | Flatternde Bänder | Dekorativ |
| `Silk` | Seide-ähnliche Animation | Premium-Hintergründe |
| `Spotlight` | Spotlight folgt Maus | Hero-Sections |
| `Noise` | Rausch-Overlay | Texturen |
| `BlobCursor` | Blob folgt Cursor | Kreative Sites |
| `SplashCursor` | Cursor mit Splash-Effekt | Interactive Design |
| `PixelCard` | Pixel-Effekt auf Cards | Retro, Gaming |
| `InfiniteScroll` | Endloser Scroll | Logos, Testimonials |
| `LogoLoop` | Logos laufen durch | Partner-Sektionen |
| `ScrollStack` | Cards stacken beim Scroll | Features, Services |
| `Dock` | MacOS-ähnliches Dock | Navigation |
| `FlowingMenu` | Menü mit Flow-Animation | Navigation |
| `CircularGallery` | Galerein im Kreis | Portfolio, Produkte |
| `DragCards` | Karten ziehbar | Interaktive Galerien |
| `ElasticSlider` | Elastischer Slider | Preise, Optionen |
| `MetaBalls` | Organische Blobs | Dekorativ |
| `OrbEffect` | Orb-Animation | Hintergründe |
| `PointerFollower` | Element folgt Pointer | Interactive UI |
| `ProfileCard` | Animierte Profilkarte | Team, About |
| `WarpBackground` | Warp-Effekt Hintergrund | Hero-Sections |
| `Folder` | Animierter Ordner | File-Management UI |

**Installationsbeispiel:**
```bash
npx shadcn@latest add https://reactbits.dev/r/Magnet-TS-TW
```

**Verwendungsbeispiel:**
```tsx
import Magnet from "@/components/Magnet";
<Magnet padding={50} disabled={false}>
  <button>Klick mich!</button>
</Magnet>
```

---

## 🧩 COMPONENTS

| Komponente | Beschreibung | Wann verwenden |
|---|---|---|
| `AnimatedList` | Liste mit staggered Animationen | Feeds, Notifications |
| `Globe` | 3D-Globus | Landing Pages, Global-Features |
| `GlassIcons` | Glassmorphism Icons | Navigation, Features |
| `Squares` | Animiertes Quadrat-Grid | Hintergrund |
| `DotGrid` | Punkt-Grid Animation | Hintergrund |
| `ClickSpark` | Funken beim Klicken | Buttons, CTAs |
| `StickyCards` | Cards bleiben beim Scrollen | Features, Steps |
| `TextCursor` | Custom Text-Cursor | Kreative Sites |
| `WaveReveal` | Wellen-Reveal Effekt | Images, Sections |
| `Pixelated` | Pixel-Effekt | Retro-Design |
| `BallPit` | Ball-Physik-Simulation | Spielerische UIs |
| `StackedCards` | Gestapelte Karten | Testimonials, Features |
| `CountdownTimer` | Countdown-Timer | Events, Sales |
| `GooeyNav` | Navigation mit Goo-Effekt | Kreative Navigation |
| `KonamiCode` | Easter Egg | Fun-Features |
| `Masonry` | Masonry-Grid | Galerien, Blogs |
| `ShuffleHero` | Hero mit Shuffle-Effekt | Hero-Sections |
| `Tilted` | Gekippte Elemente | Cards, Images |

**Installationsbeispiel:**
```bash
npx shadcn@latest add https://reactbits.dev/r/AnimatedList-TS-TW
```

---

## 🖼️ BACKGROUNDS

| Komponente | Beschreibung | Wann verwenden |
|---|---|---|
| `Aurora` | Nordlicht-Effekt | Premium Hero-Sections |
| `Particles` | Teilchen-Animation | Tech, SaaS |
| `Iridescence` | Schillernder Farbeffekt | Premium-Produkte |
| `Beams` | Lichtstrahl-Animation | Tech, Energie |
| `GridDistortion` | Verzerrtes Grid | Kreativ |
| `HyperspeedBackground` | Hyperraum-Effekt | Gaming, Tech |
| `Hypnotic` | Hypnotischer Effekt | Kreative Sites |
| `LetterGlitch` | Buchstaben-Glitch | Cyberpunk |
| `MeshGradient` | Mesh-Verlauf | Modern, Clean |
| `Orbs` | Schwebende Orbs | Ambient Design |
| `Ripple` | Welleneffekt | Interactive |
| `StarField` | Sternenhimmel | Space, Night-Theme |
| `Threads` | Faden-Animation | Ambient |
| `WavyBackground` | Wellige Hintergründe | Organic Design |
| `DotMatrix` | Punkt-Matrix | Retro, Tech |
| `BallisticSlider` | Ballistischer Slider | Full-Screen Sections |
| `FluidSimulation` | Flüssigkeits-Simulation | Premium-Feeling |

**Installationsbeispiel:**
```bash
npx shadcn@latest add https://reactbits.dev/r/Aurora-TS-TW
```

**Verwendungsbeispiel:**
```tsx
import Aurora from "@/components/Aurora";
<Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} speed={0.5} amplitude={1.0} />
```

---

## 🎨 Komponenten-Kombinationen (Best Practices)

### Hero Section
```tsx
// Aurora Hintergrund + BlurText Titel + Magnet Button
<Aurora colorStops={["#6366f1", "#8b5cf6"]} />
<BlurText text="Dein Produkt" animateBy="words" direction="top" />
<Magnet><button>Jetzt starten</button></Magnet>
```

### Features Section
```tsx
// ScrollReveal + GlareCard + AnimatedList
<ScrollReveal>
  <GlareCard>Feature-Inhalt</GlareCard>
</ScrollReveal>
```

### Stats Section
```tsx
// CountUp für Zahlen
<CountUp from={0} to={10000} suffix="+" duration={2} />
```

### Testimonials
```tsx
// StackedCards oder InfiniteScroll
<StackedCards>...</StackedCards>
```

### Navigation
```tsx
// Dock für moderne Navigation
<Dock items={navItems} />
```

---

## ⚙️ Varianten

Jede Komponente gibt es in 4 Varianten:

| Variante | Sprache | Styling |
|---|---|---|
| `JS-CSS` | JavaScript | CSS Modules |
| `JS-TW` | JavaScript | Tailwind CSS |
| `TS-CSS` | TypeScript | CSS Modules |
| `TS-TW` | TypeScript | Tailwind CSS ← **Empfohlen** |

---

## 📦 Setup (einmalig)

```bash
# 1. shadcn initialisieren (falls noch nicht)
npx shadcn@latest init

# 2. Framer Motion installieren (für die meisten Komponenten)
npm install framer-motion

# 3. Gewünschte Komponente hinzufügen
npx shadcn@latest add https://reactbits.dev/r/[ComponentName]-TS-TW
```

---

## 🔗 Ressourcen

- **Dokumentation:** https://reactbits.dev
- **GitHub:** https://github.com/DavidHDev/react-bits
- **Lizenz:** MIT + Commons Clause (kostenlos für kommerzielle Nutzung)
