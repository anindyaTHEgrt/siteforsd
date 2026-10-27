/**
 * =============================================================================
 * 💌 OPERATION: MAKE SAKSHI SMILE - PERSONALIZATION CONFIGURATION
 * =============================================================================
 * 
 * ✏️ HEY! THIS IS YOUR MASTER CUSTOMIZATION FILE!
 * Every single piece of text, inside joke, date coupon, and apology line 
 * can be edited right here to make it 1000% personal for Sakshi.
 * 
 * Look for the "✏️ [EDIT HERE]" markers below!
 * =============================================================================
 */

export const personalConfig = {
  // ===========================================================================
  // ✏️ [EDIT HERE] NAMES & TITLES
  // ===========================================================================
  girlfriendName: "Sakshi",
  girlfriendNickname: "Pretty Girl", // ✏️ e.g. "Choti", "Pari", "Gunda", or whatever cute nickname you use
  boyfriendName: "Your Boyfriend",   // ✏️ Replace with your actual name if you wish!
  boyfriendSignoff: "Your slightly stupid but very lucky boyfriend ■",

  // ===========================================================================
  // ✏️ [EDIT HERE] SCREEN 01: WELCOME MISSION
  // ===========================================================================
  welcome: {
    badge: "TOP SECRET MISSION // CLASSIFIED",
    title: "OPERATION: MAKE SAKSHI SMILE",
    subtitle: "A personalised pixel-art apology game concept",
    // ✏️ [EDIT HERE] The opening speech bubble:
    dialogue: [
      "Hey Sakshi! ■",
      "So... you asked me to make it up to you.",
      "And my brain decided to stop functioning at the worst possible moment.",
      "So I made you a whole game instead.",
      "You're welcome. Hehe. 🎮✨"
    ],
    startButtonText: "START MISSION ■",
    hintText: "Tip: Turn on the sound in the top right for retro chiptune vibes 🎵"
  },

  // ===========================================================================
  // ✏️ [EDIT HERE] SCREEN 02: BOYFRIEND DAMAGE REPORT
  // ===========================================================================
  damageReport: {
    title: "BOYFRIEND DAMAGE REPORT",
    subtitle: "INCIDENT REF #00-OOPSIE // OFFICIAL DIAGNOSTIC",
    // ✏️ [EDIT HERE] The status items on the receipt:
    metrics: [
      {
        label: "Unnecessary teasing",
        status: "dangerously high",
        percentage: 99,
        severity: "critical", // 'critical', 'warning', 'info', 'success'
        note: "Subject could not resist making silly remarks"
      },
      {
        label: "Ability to come up with an apology in the moment",
        status: "404 not found",
        percentage: 0,
        severity: "critical",
        note: "System froze entirely when asked what to do"
      },
      {
        label: "Sakshi's patience with this idiot",
        status: "under investigation",
        percentage: 12,
        severity: "warning",
        note: "Running on critically low reserves"
      },
      {
        label: "Ability to make Sakshi smile",
        status: "downloading...",
        percentage: 76,
        severity: "info",
        note: "Buffer loading at 100kb/s with love"
      },
      {
        label: "Love for Sakshi",
        status: "permanently maxed out",
        percentage: 100,
        severity: "success",
        note: "Overflow error: cannot measure beyond infinity"
      }
    ],
    // ✏️ [EDIT HERE] The diagnosis punchline:
    diagnosis: "Diagnosis: Boyfriend is an idiot. Unfortunately, he's YOUR idiot.",
    buttonText: "BEGIN REHABILITATION ➔"
  },

  // ===========================================================================
  // ✏️ [EDIT HERE] SCREEN 03: THE SINCERE APOLOGY LETTER
  // ===========================================================================
  apologyLetter: {
    title: "The Apology Book",
    recipient: "Dear Sakshi,",
    // ✏️ [EDIT HERE] Customize each paragraph of your heartfelt letter!
    paragraphs: [
      "So, you asked me to make it up to you, and in that moment, my brain had absolutely nothing. Zero ideas. No thoughts. Just vibes.",
      "Which is honestly impressive, considering I somehow have enough brainpower to annoy you in the first place. ■",
      "I know I was joking around, but I get that it made you a little mad, and I'm sorry. I don't want to brush that off just because I meant it as a joke. I care about how you feel, even when I'm just being my usual annoying self.",
      "So I made you this little game. Is it a completely reasonable response to being told to make it up to your girlfriend? Probably not. Could I have just bought you a Chupa Chups and apologised like a normal person? Absolutely.",
      "But you deserve a little effort, and I wanted to make something that's just for you.",
      "You're my favourite person to annoy, my favourite person to talk to, and someone I never want to make feel like her feelings don't matter.",
      "I'm still learning how to get things right. But I want to be someone who listens, who knows when to stop joking around, and who makes you feel loved even in the smallest moments.",
      "Also, please note that the boyfriend in this game is very sorry, extremely cute, and currently accepting bonks as punishment.",
      "I love you, Sakshi. Here's your virtual Chupa Chups for now. Your actual one is a separate matter. ■"
    ],
    signoff: "Love,\nYour slightly stupid but very lucky boyfriend ■",
    continueButtonText: "RECEIVE TRIBUTE ➔"
  },

  // ===========================================================================
  // ✏️ [EDIT HERE] SCREEN 04: THE CHUPA CHUPS OFFERING
  // ===========================================================================
  chupaChups: {
    title: "The Chupa Chups Offering",
    introText: "“I've been advised that peace negotiations may require appropriate tribute.”",
    unlockedText: "One Chupa Chups for the pretty girl. Not a bribe. Definitely not a bribe. ■",
    flavor: "Strawberry & Cream Edition 🍓🍦",
    // ✏️ [EDIT HERE] Real-world coupon details:
    couponTitle: "OFFICIAL REDEMPTION VOUCHER",
    couponCode: "SAKSHI-SWEET-TREAT-01",
    couponDescription: "Valid for one (1) real-world Chupa Chups of your favorite flavor, hand-delivered with zero complaints.",
    claimButtonText: "COLLECT & CONTINUE ➔"
  },

  // ===========================================================================
  // ✏️ [EDIT HERE] SCREEN 05: SAKSHI'S LITTLE LIBRARY
  // ===========================================================================
  library: {
    title: "Sakshi's Little Library",
    subtitle: "Click any book to inspect its classified pages",
    books: [
      {
        id: "book-1",
        color: "#FF8FA3",
        title: "101 Ways to Annoy Your Boyfriend",
        author: "By Sakshi (Certified Expert)",
        preview: "A tactical guide to maintaining upper-hand supremacy.",
        // ✏️ [EDIT HERE] Inside joke notes in Book 1:
        pages: [
          "Chapter 1: The 'I'm Fine' stare that paralyzes his nervous system.",
          "Chapter 2: Stealing his oversized hoodies because they smell nice (and belong to you now).",
          "Chapter 3: Looking completely gorgeous while making him wait an extra 15 minutes.",
          "Verdict: 10/10 flawless tactics. Would get annoyed by you again any day."
        ]
      },
      {
        id: "book-2",
        color: "#80ED99",
        title: "How to Apologise Properly",
        author: "By Boyfriend (First Edition, Under Revision)",
        preview: "A study on why saying 'it was just a joke bro' never works.",
        // ✏️ [EDIT HERE] Lessons in Book 2:
        pages: [
          "Lesson 1: If she is mad, do not ask 'Are you mad?' - you already know.",
          "Lesson 2: Joking when she needs reassurance is a critical error.",
          "Lesson 3: Making a whole retro pixel game is a great start, but actual listening and hugs are mandatory.",
          "Boyfriend Promise: Learning in progress, but dedicated forever."
        ]
      },
      {
        id: "book-3",
        color: "#C77DFF",
        title: "The Story of Us",
        author: "By Us (Ongoing Masterpiece)",
        preview: "Contains memories, giggles, and endless love.",
        // ✏️ [EDIT HERE] Personal affectionate note in Book 3:
        pages: [
          "Entry 01: You make every ordinary day feel like a special adventure.",
          "Entry 02: Even when we argue or I do something silly, there is no one else I'd rather be with.",
          "Entry 03: Thank you for your warmth, your smile, and your patience with me.",
          "P.S. I really do love you more than words or pixels can say."
        ]
      }
    ],
    continueButtonText: "VISIT REHABILITATION CENTRE ➔"
  },

  // ===========================================================================
  // ✏️ [EDIT HERE] SCREEN 06: BOYFRIEND REHABILITATION CENTRE
  // ===========================================================================
  rehabilitation: {
    title: "Boyfriend Rehabilitation Centre",
    instruction: "Choose your disciplinary action or give him some mercy:",
    stats: {
      initialHealth: 100,
      initialLove: 100
    },
    // ✏️ [EDIT HERE] Actions and dialog lines:
    actions: {
      bonk: {
        label: "BONK 🔨",
        description: "Administer foam hammer justice",
        dialogue: [
          "Ouch! Fair enough, I deserved that! 🤕",
          "*BONK* Okay okay, brain cells recalibrating! 🔨",
          "Dizzy but repentant! Please be gentle! 😵💫",
          "Another bonk?! My cranium is 90% love for you anyway!"
        ]
      },
      hug: {
        label: "HUG 🤗",
        description: "Offer gentle emotional healing",
        dialogue: [
          "Awwwww... my heart just melted into warm soup. 💖",
          "Warmest hug ever. I promise not to let go first! 🥰",
          "System fully recharged with your warmth! ✨",
          "Thank you for being so soft with me even when I'm silly."
        ]
      },
      apologise: {
        label: "BEG 🥺",
        description: "Force him to apologize dramatically",
        dialogue: [
          "I AM SO SORRY SAKSHI! I'LL BE THE BEST BOYFRIEND EVER! 😭🙇",
          "*dramatic theatrical bow* Forgive this humble clown, my queen! 👑",
          "I pledge 1000 uninterrupted listens to your stories! 📜",
          "Zero excuses, 100% genuine sorry from the bottom of my heart!"
        ]
      },
      feed: {
        label: "FEED LOLLIPOP 🍭",
        description: "Tribe peace offering",
        dialogue: [
          "OMNOMNOM! 🍭 Sweetest thing ever (after you of course)!",
          "Mmm strawberry! Peace treaty temporarily honoured! 🍓",
          "Sugar rush activated! 10x more energy to pamper you! 🚀",
          "Lollipop accepted with supreme gratitude! 😋"
        ]
      }
    },
    continueButtonText: "PROCEED TO FINAL DECISION ➔"
  },

  // ===========================================================================
  // ✏️ [EDIT HERE] SCREEN 07: FINAL DECISION
  // ===========================================================================
  finalDecision: {
    title: "The Final Decision",
    // ✏️ [EDIT HERE] Prompt question:
    question: "“Okay, Sakshi. I've completed my mission... or have I? ■ How are we feeling, madam?”",
    
    // ✏️ [EDIT HERE] Happy button response:
    happyResponse: {
      buttonText: "I'M HAPPY 💕",
      heading: "MISSION ACCOMPLISHED! 🏆✨",
      text: "“YAY! You made my little pixel heart very happy. I still owe you the effort to match it in real life.”",
      rewardUnlocked: "Bonus Unlocked: Make-It-Up-To-You Golden Coupons! 🎟️"
    },

    // ✏️ [EDIT HERE] Playful dodging button taunts:
    angryButton: {
      initialText: "I'M PISSED >:(",
      dodges: [
        "Nope! Too slow! 💨",
        "Whoops! Can't click me! 🏃💨",
        "Wait wait wait, rethink! 🥺",
        "Missed me! Hehe 😜",
        "Are you suuuure? 👀",
        "Error 404: Anger not accepted! 🛡️"
      ]
    },

    // ✏️ [EDIT HERE] Sincere fallback modal for genuine feelings:
    sincereFallback: {
      triggerLinkText: "Okay, jokes aside... I'm still upset.",
      modalTitle: "Hey, from the bottom of my heart...",
      modalBody: "That's completely okay. You don't have to feel better immediately just because I made a cute game.\n\nYour feelings are 100% valid, and I don't want you to feel pressured to say you're happy if you aren't yet.\n\nI'm here to listen, to talk whenever you're ready, and to make things right in whatever way you need. No jokes, no games. Just me listening. 💜",
      closeButtonText: "Thank you for understanding 🤍"
    }
  },

  // ===========================================================================
  // ✏️ [EDIT HERE] SCREEN 08: MAKE-IT-UP-TO-YOU COUPONS
  // ===========================================================================
  coupons: [
    {
      id: "coupon-1",
      icon: "🍿",
      tag: "MOVIE NIGHT",
      title: "Movie Night of Your Choice",
      description: "Any movie you pick (even if it's a cheesy rom-com I tease you about). Comes with unlimited popcorn and blanket cuddles.",
      promise: "Guaranteed: Zero complaining, 100% snack sharing."
    },
    {
      id: "coupon-2",
      icon: "🍜",
      tag: "FOOD PASS",
      title: "Favourite Food Feast",
      description: "You choose the spot or cravings, no 'I don't know, whatever you want'. Your favourite dishes ordered without question.",
      promise: "Guaranteed: Your cravings prioritized instantly."
    },
    {
      id: "coupon-3",
      icon: "🗺️",
      tag: "DATE NIGHT",
      title: "Fully Planned Date by Me",
      description: "A complete date planned entirely by the boyfriend from start to finish. You just dress up, show up, and relax.",
      promise: "Guaranteed: Zero decision fatigue for Sakshi."
    },
    {
      id: "coupon-4",
      icon: "💬",
      tag: "DEEP TALK",
      title: "Uninterrupted Conversation",
      description: "100% undivided attention. Phones away, no silly distractions. A cozy space for whatever is on your mind.",
      promise: "Guaranteed: Active listening with warm tea/coffee."
    },
    {
      id: "coupon-5",
      icon: "🎁",
      tag: "WILDCARD",
      title: "The Mystery Surprise",
      description: "One surprise of Sakshi's demanding: whether it's flowers, an adventure, a treat, or simply a long tight hug.",
      promise: "Guaranteed: Redeemable anytime, never expires."
    }
  ]
};
