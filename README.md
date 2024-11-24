# Drizzl CMS

A modern, headless CMS built with PayloadCMS, Next.js, and MongoDB Atlas. This project serves as a content management system with a clean, user-friendly interface for managing digital content.

## 🚀 Tech Stack

- **Framework**: Next.js 15.0.3
- **CMS**: PayloadCMS
- **Database**: MongoDB Atlas
- **Styling**: Tailwind CSS
- **Authentication**: Built-in PayloadCMS auth
- **Deployment**: Vercel

## 🌐 Environments

### Production
- URL: https://drizzl-cms.vercel.app
- Admin Dashboard: https://drizzl-cms.vercel.app/admin

### Staging
- URL: https://drizzl-99711elvh-rachael-oldham-knotts-projects.vercel.app
- Admin Dashboard: https://drizzl-99711elvh-rachael-oldham-knotts-projects.vercel.app/admin
- Identifier: Look for "[Staging]" in admin panel title

## 🔄 Development Workflow

1. Clone and Install
```bash
git clone https://github.com/reokdev/drizzl.git
cd drizzl
npm install
```

2. Development
```bash
# Switch to staging branch
git checkout staging

# Run development server
npm run dev

# Make changes and commit
git add .
git commit -m "your changes"
git push origin staging
```

3. Deployment
- Changes to staging branch auto-deploy to staging environment
- Create PR from staging → main for production deployment
- Merging to main auto-deploys to production

## 🗄️ Database

- Single MongoDB Atlas database for both environments
- Use "[TEST]" prefix for staging content
- Database automatically backs up through MongoDB Atlas

## 🔐 Services

- **Vercel**: Hosting and deployments
- **MongoDB Atlas**: Database
- **GitHub**: Source control

## 📝 Development Notes

- Node.js Version: ^18.20.2 || >=20.9.0
- React Version: 19 (RC)
- Next.js Version: 15.0.3

## 🛠️ Local Development

1. Set up environment variables:
```bash
cp .env.example .env
```

2. Update .env with your values:
```
DATABASE_URI=your_mongodb_uri
PAYLOAD_SECRET=your_secret
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

3. Run the development server:
```bash
npm run dev
```

## 📚 Project Structure

```
drizzl/
├── src/
│   ├── app/           # Next.js app directory
│   ├── collections/   # PayloadCMS collections
│   ├── components/    # React components
│   └── payload.config.ts  # PayloadCMS configuration
├── public/            # Static assets
└── package.json
