# Full Stack Spotify Clone with Next.js 13.4 App Router, Tailwind, Supabase, PostgreSQL, Stripe

For DEMO, use [Stripe Testing Cards](https://stripe.com/docs/testing)

[DEPLOYED WEBSITE](https://alex-eickelman-spotify.vercel.app/)

This is a repository for a Full Stack Spotify Clone with Next.js 13.4 App Router, Tailwind, Supabase, PostgreSQL, Stripe

Key Features:

- Song upload
- Stripe integration
- Tailwind design for sleek UI
- Tailwind animations and transition effects
- Full responsiveness for all devices
- Credential authentication with Supabase
- Github authentication integration
- File and image upload using Supabase storage
- Client form validation and handling using react-hook-form
- Server error handling with react-toast
- Play song audio
- Favorites system
- Playlists / Liked songs system
- Advanced Player component

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/Aeickelman40/spotify-clone.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

### Add SQL Tables

Use `database.sql` file, create songs and liked_songs table 

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
