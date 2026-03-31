#  The Gossip Chain — Visualizing Linked Lists

An interactive, story-driven visualization of **Linked Lists** using a real-world analogy: gossip spreading from person to person.

---

##  Concept

Imagine this:

> X heard something. X told Y. Y told Z. Z kept it to themselves...

Nobody knows the full chain — only who they told next.

That’s exactly how a **Linked List** works.

* Each person = a **node**
* Each person only knows who they told = `.next pointer`
* The last person tells no one = `null`

---

##  What This CORD illustration Project Demonstrates

This project visually explains key Linked List operations:

### Structure

* Head (starting node)
* Tail (last node → points to `null`)
* Nodes connected sequentially

### Traversal — Time Complexity **O(n)**

* Step through the chain one person at a time
* No shortcuts — must visit each node sequentially

### Insert at Head — **O(1)**

* Add a new “gossip starter”
* Instantly becomes the new head

### Delete Head — **O(1)**

* Remove the current head
* Next node becomes the new head

---

## Features

* Step-by-step traversal visualization
* Active node highlighting
* Insert new nodes dynamically
* Delete head node
* Reset simulation
* Clean UI with animated nodes

---

## How to Use

1. Click **Start Traversal**
2. Click **Next Step** to move through nodes
3. Add a new person using **Insert at Head**
4. Remove the first person using **Delete Head**
5. Click **Reset** to restore the original chain

---

## Why This Works

Instead of abstract pointers, this project uses a **human analogy**:

> Each person only remembers who they told — not who told them.

This makes:

* `.next` intuitive
* traversal obvious
* time complexity easier to understand

---

## Tech Stack

* React (Next.js)
* TypeScript
* Tailwind CSS + custom styles
* Lucide Icons

---

## Getting Started

```bash
git clone https://github.com/Akanksha-Duvvuri/LL-illustration-CORD
cd LL-illustration-CORD
npm install
npm run dev
```

---

## Preview

A simple chain of nodes visualized as people passing gossip:

```
X → Y → Z → NULL
```

---


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
