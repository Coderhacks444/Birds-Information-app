# Birds Info App

A comprehensive Next.js application for bird enthusiasts, providing detailed information about bird care, breeding, and medicine.

## Features

- **Home Page**: Introduction to bird care and companionship
- **Birds Page**: Detailed guide for big birds (Ringnecks, Love Birds, African Greys, etc.)
- **Finches Page**: Complete finch care guide (Zebra Finches, Canaries, Gouldians, etc.)
- **Hens Page**: Comprehensive poultry and backyard chicken information

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages Overview

### Home (/)
- Introduction to bird care
- Benefits of bird ownership
- Getting started guide

### Birds (/birds)
- Ringneck Parrots care and breeding
- Love Birds information
- African Grey Parrots guide
- Other big birds (Cockatoos, Macaws, Conures)

### Finches (/finches)
- Zebra Finches care guide
- Canary breeding and health
- Gouldian Finches (advanced care)
- Other finch species

### Hens (/hens)
- Backyard chicken care
- Egg production and breeding
- Health and medicine
- Other poultry (Ducks, Geese, Quail)

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- CSS3 with modern styling

## Project Structure

```
app/
├── components/
│   └── Navigation.tsx
├── birds/
│   └── page.tsx
├── finches/
│   └── page.tsx
├── hens/
│   └── page.tsx
├── globals.css
├── layout.tsx
└── page.tsx
```