# Deployment & Testing Guide

## Local Development & Testing

### Prerequisites
- Node.js 18+ and npm
- Git

### 1. Clone and Install

```bash
git clone https://github.com/ufuomabrilliant08010-wq/football-prediction-platform.git
cd football-prediction-platform
npm install
```

### 2. Run Local Dev Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

**Test these pages:**
- Home: http://localhost:3000 (fixtures, wallet, leaderboard)
- Dashboard: http://localhost:3000/dashboard
- Leaderboard: http://localhost:3000/leaderboard
- Competitions: http://localhost:3000/competitions
- Match Detail: http://localhost:3000/matches/arsenal-aston-villa
- Admin: http://localhost:3000/admin
- Profile: http://localhost:3000/profile

### 3. Code Quality & Linting

```bash
npm run lint
```

### 4. Production Build Locally

```bash
npm run build
npm run start
```

Then test on http://localhost:3000

---

## Testing Checklist

### UI/UX Testing
- [ ] All pages load without errors
- [ ] Responsive design on mobile, tablet, desktop
- [ ] Navigation links work correctly
- [ ] Forms accept input (match detail page)
- [ ] Icons and images display properly
- [ ] Wallet display shows correct values
- [ ] Leaderboard table is readable

### Functionality Testing
- [ ] Match detail page loads with correct data
- [ ] Virtual wallet metrics update on interaction
- [ ] Betting slip form can accept input
- [ ] Links to different pages work smoothly
- [ ] No console errors or warnings

### Performance Testing
- [ ] Page load times < 3 seconds
- [ ] Smooth scrolling
- [ ] No layout shift issues
- [ ] Images optimized

---

## Publishing & Deployment Options

### Option 1: Vercel (Recommended - Zero Config)

**Best for:** Beginners, fast setup, free tier available

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Vercel auto-detects Next.js and deploys

3. **Get Live URL**
   - Your site will be live at something like: `https://football-prediction-platform.vercel.app`
   - Custom domain: Add in Vercel dashboard under Settings > Domains

**Vercel Pricing:**
- Free: 1 deployment per git push, 100GB bandwidth/month
- Pro: $20/month for team features and priority support

**No configuration needed!** Vercel handles Next.js automatically.

---

### Option 2: Netlify

**Best for:** Quick alternative to Vercel

1. **Go to Netlify**
   - Visit https://netlify.com
   - Click "Add new site" > "Import an existing project"
   - Select GitHub repo

2. **Configure build**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - (Netlify will auto-detect for Next.js)

3. **Deploy**
   - Click "Deploy"
   - Your site goes live automatically

---

### Option 3: Self-Hosted (Advanced)

#### Using Railway.app (Simple VPS)

1. **Push to GitHub**

2. **Go to Railway**
   - Visit https://railway.app
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Railway auto-detects Next.js**
   - Sets up Node.js environment
   - Builds and deploys automatically

4. **Get your URL**
   - Railway generates a live URL
   - Add custom domain in Settings

**Railway Pricing:**
- Free: $5/month credit
- Pay as you go after that ($0.10/GB RAM/hour)

#### Using AWS, DigitalOcean, or Heroku

For advanced users:
- **AWS Amplify:** Similar to Vercel, AWS-native
- **DigitalOcean App Platform:** $12+/month VPS with git integration
- **Heroku:** Traditional but more expensive for this use case

---

## Step-by-Step Deployment (Vercel - Recommended)

### Prerequisites
- GitHub account (your repo is already there)
- Email address

### Deployment Steps

**Step 1: Sign up at Vercel**
```
1. Go to https://vercel.com/signup
2. Click "Continue with GitHub"
3. Authorize Vercel to access your GitHub account
```

**Step 2: Import Project**
```
1. Click "Add New..." > "Project"
2. Find "football-prediction-platform"
3. Click "Import"
```

**Step 3: Configure (Optional)**
```
Leave defaults as-is for Next.js
Click "Deploy"
```

**Step 4: Wait for Build**
```
Vercel builds your app (usually 2-5 minutes)
You'll see a live URL when complete
```

**Step 5: Your Site is Live!**
```
Share: https://[your-project-name].vercel.app
Custom domain: Add in Settings > Domains
```

---

## Environment Variables

Currently the app uses mock data, but when integrating real services:

### Create `.env.local` for local development

```env
# Football API (e.g., RapidAPI Football API)
NEXT_PUBLIC_FOOTBALL_API_KEY=your_api_key_here
NEXT_PUBLIC_FOOTBALL_API_URL=https://api.example.com

# Database
DATABASE_URL=postgresql://user:pass@host:5432/dbname

# Authentication (Clerk, Auth0, etc.)
NEXT_PUBLIC_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_AUTH_CLIENT_ID=your_client_id

# Stripe (for future monetization tracking)
NEXT_PUBLIC_STRIPE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

### In Vercel Dashboard
```
Settings > Environment Variables
Add each variable above
Select which environments (Production, Preview, Development)
Redeploy
```

---

## Custom Domain Setup

### Using Vercel

1. **Go to Vercel Dashboard**
   - Project > Settings > Domains

2. **Add Domain**
   - Enter your domain (e.g., `footballpredictions.com`)
   - Vercel gives you DNS records

3. **Point DNS Records**
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Add the DNS records Vercel provides
   - Wait 10 minutes to 48 hours for propagation

4. **Verify**
   - Check Vercel dashboard for confirmation
   - Visit your custom domain

---

## SSL/HTTPS

- **Vercel:** Automatic free SSL via Let's Encrypt
- **Netlify:** Automatic free SSL via Let's Encrypt
- **Railway:** Automatic free SSL

No additional setup needed!

---

## Monitoring & Analytics

### Enable in Vercel

1. **Go to Settings > Analytics**
2. **Toggle on Web Analytics**
3. View metrics:
   - Page views
   - Visitors
   - Response times
   - Error rates

### Third-party Analytics (Optional)

Add to your Next.js app:

```bash
npm install @vercel/analytics
```

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## Troubleshooting

### Build Fails on Vercel

**Error:** "Build failed"

**Solution:**
1. Check `npm run build` works locally
2. Look at Vercel logs (Deployments tab)
3. Common fix: Clear node_modules
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

### Site shows old version

**Solution:**
1. Clear Vercel cache: Deployments > ⋯ > Redeploy
2. Clear browser cache (Ctrl+Shift+Del)
3. Check latest commit deployed

### Pages not found (404)

**Solution:**
1. Verify all routes exist in `app/` folder
2. Check file names match exactly
3. Next.js is case-sensitive on Linux servers

---

## Next Steps After Deployment

### 1. Add Real Football Data
- Integrate API like RapidAPI Football API
- Implement live score polling
- Add result settlement logic

### 2. Add Authentication
- Use Clerk, Auth0, or Supabase Auth
- Implement user login/signup
- Store user preferences

### 3. Add Database
- PostgreSQL with Prisma ORM
- Store users, bets, transactions, leaderboard
- Implement real wallet settlement

### 4. Add Notifications
- Email alerts (Resend, SendGrid)
- Push notifications
- In-app notifications

### 5. Performance Optimization
- Image optimization (Next.js Image)
- Code splitting
- Database query optimization
- Redis caching

---

## Useful Commands

```bash
# Run locally
npm run dev

# Build for production
npm run build

# Start production build
npm run start

# Lint code
npm run lint

# Check bundle size
npm run build -- --profile

# Clean and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## Support & Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **GitHub Discussions:** https://github.com/ufuomabrilliant08010-wq/football-prediction-platform/discussions
- **Vercel Community:** https://github.com/vercel/next.js/discussions

---

## Summary

**Quickest Path to Live:**
1. Sign up at Vercel.com
2. Connect your GitHub repo
3. Click Deploy
4. Live in 5 minutes ✅

That's it! Your football prediction platform is live and shareable.
