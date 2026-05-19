---
title: "Night Sky Tracker"
description: "A local-first app for logging observations, tracking objects, and planning sessions around weather and moon phase."
date: "May 13 2026"
demoURL: ""
repoURL: ""
---

Started this after realizing I was keeping my stargazing notes in a Notes app folder that was becoming impossible to search. Wanted something built around the actual workflow of going outside at night with a telescope.

## What it does

- Log observations by object (Messier catalog, NGC, planets, custom)
- Attach notes, sketches, and conditions (seeing, transparency, bortle class)
- Pull moon phase and astronomical twilight times for any date and location
- Flag objects by visibility window for your coordinates
- Offline-first — works in the field with no signal

## Status

Core logging and moon phase data are working. The visibility planner is half-built. The sketch attachment feature exists but needs a better mobile interface — turns out drawing on a phone at night in the cold is harder than expected.

## Stack

- React Native for cross-platform mobile
- SQLite via Expo SQLite for local storage
- Astronomy Engine for ephemeris calculations
- No backend — everything runs on device

Planning to ship a TestFlight build before summer. ⬢
