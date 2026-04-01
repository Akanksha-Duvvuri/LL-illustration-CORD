# The Gossip Chain — Visualizing Linked Lists

An interactive, story-driven visualization of **Linked Lists** using a real-world analogy: gossip spreading from person to person.

---

## Concept

Imagine this:

> X heard something. X told Y. Y told Z. Z kept it to themselves...

Nobody knows the full chain — only who they told next. That's exactly how a **Linked List** works.

- Each person = a **node**
- Each person only knows who they told = `.next pointer`
- The last person tells no one = `null`

---

## What This Project Demonstrates

### Structure
- **Head** — the starting node
- **Tail** — the last node, points to `null`
- Nodes connected sequentially, one direction only

### Traversal — O(n)
Step through the chain one person at a time. No shortcuts — every node must be visited in order.

### Insert at Head — O(1)
Add a new gossip starter. They instantly become the new head, no shifting needed.

### Delete Head — O(1)
Remove the current head. The next node takes over as the new head.

---

## Features

- Step-by-step traversal with active node highlighting
- Insert new nodes dynamically at the head
- Delete the head node
- Reset the simulation back to the original chain
- Clean animated UI with pure inline styles

---

## How to Use

1. Click **Start Traversal** to begin
2. Click **Next Step** to move through each node one by one
3. Add a new person using the input field + **Insert at Head**
4. Remove the first person using **Delete Head**
5. Click **Reset** to restore the original X → Y → Z chain

---

## Why This Works

Instead of abstract pointers and memory addresses, this project uses a human analogy:

> Each person only remembers who they told — not who told them. So going back would be impossible

This makes `.next` intuitive, traversal obvious, and time complexity easier to reason about before you ever touch a whiteboard.

---

## Preview

```
X → Y → Z → NULL
```

The active node is highlighted in yellow. All other nodes dim during traversal so your eye follows the pointer naturally.

---

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Inline styles (no Tailwind)
- [Lucide React](https://lucide.dev) for icons

---

## Getting Started

```bash
git clone https://github.com/Akanksha-Duvvuri/LL-illustration-CORD
cd LL-illustration-CORD
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see it in the browser.

---

## Deploy on Vercel

The easiest way to deploy is via the [Vercel Platform](https://vercel.com/new). Push to GitHub, import the repo, and it's live — no config needed for a Next.js app.