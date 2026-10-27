# Operation: Make Sakshi Smile ■

> *"You asked me to make it up to you. My brain had zero ideas, so I made you a whole game instead."*

A personalized 16-bit retro pixel-art apology game concept built with **React**, **Vite**, **JavaScript**, and **CSS**.

---

## 🎮 Features & Screen Flow

1. **01 · Welcome — A Very Important Mission**:
   - Dreamy purple-pink pixel-art twilight sky, crescent moon, twinkling stars, and mountain ridge.
   - Animated waving pixel boyfriend sprite with sweet greeting.
   - Spinning Chupa Chups lollipop tribute teaser.
   - Top navigation with stage tracker dots (1–8) and 8-bit retro chiptune audio toggle.

2. **02 · Boyfriend Damage Report**:
   - Perforated receipt-style diagnostic report.
   - Status meters: *Unnecessary teasing (99%)*, *Apology ability (404 not found)*, *Patience under investigation*, *Love (permanently maxed out)*.
   - Verdict: *"Diagnosis: Boyfriend is an idiot. Unfortunately, he's your idiot."*

3. **03 · The Apology Book**:
   - Warm parchment open book with a typewriter line-by-line reveal.
   - Pause / resume and instant reveal skip button.
   - Sincere, sweet apology letter.

4. **04 · The Chupa Chups Offering**:
   - Interactive collectible Chupa Chups lollipop with sparkle burst.
   - Official real-world redemption voucher with copyable claim code.

5. **05 · Sakshi's Little Library**:
   - Interactive bookshelf with 3 openable books:
     - *101 Ways to Annoy Your Boyfriend*
     - *How to Apologise Properly*
     - *The Story of Us* (with personal affectionate memories & photo frame).

6. **06 · Boyfriend Rehabilitation Centre**:
   - Interactive pixel boyfriend on stage with 4 actions:
     - 🔨 `BONK` (foam hammer swoops down with dizzy stars!)
     - 🤗 `HUG` (warm golden glow and blushing cheeks)
     - 🥺 `BEG` (dramatic apologetic bow with anime tears)
     - 🍭 `FEED LOLLIPOP` (happy munching with heart eyes)

7. **07 · The Final Decision**:
   - `I'M HAPPY 💕` triggers a grand confetti celebration and fanfare.
   - `I'M PISSED >:(` playfully runs away and dodges the cursor with a smoke puff!
   - Sincere fallback button: *"Okay, jokes aside... I'm still upset"* opens a tender, non-dismissive modal acknowledging her feelings.

8. **08 · Bonus: Make-It-Up-To-You Coupons**:
   - 5 interactive 3D flip cards:
     - 🍿 Movie Night of Her Choice
     - 🍜 Favourite Food Feast
     - 🗺️ Fully Planned Date by Boyfriend
     - 💬 Uninterrupted Conversation
     - 🎁 Wildcard Mystery Surprise
   - Interactive **STAMP / REDEEM** button for each coupon!

---

## ✏️ How to Personalize the Text & Inside Jokes

All customizable text, inside jokes, nicknames, letter lines, and coupons are centralized in **[src/personalization.js](file:///c:/Users/anind/WebstormProjects/siteforsd/src/personalization.js)**!

Every editable section is highlighted with:
```javascript
// ===========================================================================
// ✏️ [EDIT HERE] NAMES & TITLES
// ===========================================================================
```

### What You Can Customize:
| Section | Config Key in `src/personalization.js` | What It Controls |
|---|---|---|
| **Names & Nicknames** | `girlfriendName`, `girlfriendNickname`, `boyfriendSignoff` | Her name, cute nicknames, your sign-off |
| **Welcome Dialog** | `welcome.dialogue` | The opening speech lines |
| **Damage Report** | `damageReport.metrics`, `damageReport.diagnosis` | Status items, percentages, and funny notes |
| **Apology Letter** | `apologyLetter.paragraphs` | Each paragraph of the sincere letter |
| **Lollipop Tribute** | `chupaChups.introText`, `chupaChups.couponCode` | The peace tribute and coupon voucher |
| **Books & Notes** | `library.books` | Chapters, annotations, and personal memories |
| **Rehab Centre** | `rehabilitation.actions` | Dialogue reactions when bonking, hugging, etc. |
| **Coupons** | `coupons` | Titles, descriptions, and promises of the 5 cards |

---

## 🚀 How to Run Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:5173/` in your browser.

---

## 🌐 Deploy to GitHub Pages

This project is configured with a GitHub Actions workflow in [`.github/workflows/deploy.yml`](file:///c:/Users/anind/WebstormProjects/siteforsd/.github/workflows/deploy.yml) and relative base paths (`base: './'`).

### Method 1: Automatic Deployment (Recommended)
1. Commit and push your changes to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete Operation Make Sakshi Smile game"
   git push origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. GitHub Actions will automatically build and publish your site!

### Method 2: One-Command Manual Deployment
Run:
```bash
npm run deploy
```
This builds the site and pushes it to the `gh-pages` branch using the included `gh-pages` package.
