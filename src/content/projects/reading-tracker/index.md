---
title: "Reading Tracker"
description: "A minimal reading log that captures what I actually want to remember, not just what I finished."
date: "May 13 2026"
demoURL: ""
repoURL: ""
---

Goodreads tracks books. I wanted something that tracked *reading* — the marginal notes, the questions a book opened up, the other books it sent me to, the thing I was thinking about when I put it down.

## The problem with existing tools

Every reading app I tried optimized for the wrong thing. Finished vs. unfinished. Star ratings. Annual reading challenges. None of that captures anything I actually care about. I don't need a leaderboard. I need a way to find that note I wrote six months ago about a chapter on systems thinking and figure out which book it was in.

## What this does differently

- Books are nodes, not line items — each one can link to others that it referenced or led to
- Notes are timestamped and taggable, attached to specific passages or just freeform
- No ratings, no "currently reading" status bar, no gamification
- Export to plain markdown so it's not trapped in an app

## Status

Working prototype, personal use only. The graph view of connected books is the part I'm most interested in developing but haven't gotten right visually yet.

## Stack

- Next.js
- SQLite + Prisma
- Deployed on Vercel (personal instance)

May open-source eventually. May also just keep it as the world's most over-engineered personal spreadsheet. ⬢
