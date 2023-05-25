<br />
<div align="center">
  <a href="https://github.com/MiSaengg/2800-202310BBY19">
    <img src="https://user-images.githubusercontent.com/63331153/241055297-632c888a-0b47-49d0-b889-69714ac606b2.png" alt="Logo" width="200" height="200">
  </a>

  <h3 align="center">Stories of Million</h3>


  <p align="center">
    A community platform that connects writers and readers, fosters collaboration, provides feedback, and assists in creating unique stories leveraging the OpenAI API.
    <br />
    <a href="https://github.com/MiSaengg/2800-202310BBY19"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://2800-202310-bby-19.vercel.app/">See Project</a>
    ·
    <a href="https://github.com/MiSaengg/2800-202310BBY19/issues">Report Bug</a>
    ·
    <a href="https://github.com/MiSaengg/2800-202310BBY19/issues">Request Feature</a>
  </p>
</div>


## Contributors

| Jasper                                   | David                                                       | Noel              | Juan                    |
| ---------------------------------------- | ----------------------------------------------------------- | ----------------- | ----------------------- |
| _Hi, My name is Jasper, Let's do this! _ | _Hi, my name is David, time to harness the power of AI :D _ | _Hi, my name is Noel, We got this o2o _ | _Hi, my name is Juan! _ |
| `Team Lead Fullstack`                            | `Fullstack`                                               | `Fullstack`     | `Fullstack`           |
| ✉️`ohyj0906@gmail.com` | ✉️`gunheedavidcho@gmail.com`  | ✉️`dndyd4924@gmail.com` | ✉️`juanchung7v@gmail.com`|

## Technology used

![image](https://user-images.githubusercontent.com/63331153/241052172-540c6ca9-2f07-4a00-bc50-85104ec67bbb.png)

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
[![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)](https://javascript.info/)
[![Node Badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://javascript.info/)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
<img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" height="20px" style="border : 1px solid black; padding: 5px">
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
[![VScode Badge](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)](https://javascript.info/)

## How did we use AI?


## Getting Started

1. Get a free( OR not free ) API Key at 

- [https://openai.com/](https://openai.com/)
- [https://developers.google.com/identity/protocols/oauth2](https://developers.google.com/identity/protocols/oauth2)
- [https://www.mongodb.com/](https://www.mongodb.com/)

2. Clone the repo
   ```sh
   git clone https://github.com/MiSaengg/2800-202310BBY19
   ```
3. Install NPM packages

   ```sh
   npm install
   ```
4. Create and Enter your API in `.env`
   ```js
    NEXTAUTH_URL="http://localhost:3000/"
    NEXTAUTH_SECRET=""

    DATABASE_URL=""
    GOOGLE_CLIENT_ID=""
    GOOGLE_CLIENT_SECRET=""
    NEXT_PUBLIC_OPENAI_API_KEY=""
   ```


run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## File Contents of folder

```
📦 2800-202310BBY19
├─ .gitignore
├─ README.md
├─ app
│  ├─ (auth)
│  │  ├─ layout.jsx
│  │  ├─ signin
│  │  │  └─ page.jsx
│  │  └─ signout
│  │     └─ page.jsx
│  ├─ (site)
│  │  ├─ createMainThread
│  │  │  └─ page.jsx
│  │  ├─ layout.jsx
│  │  ├─ loading.jsx
│  │  ├─ profile
│  │  │  ├─ layout.jsx
│  │  │  └─ page.jsx
│  │  └─ threads
│  │     ├─ [threadId]
│  │     │  ├─ layout.jsx
│  │     │  ├─ loading.jsx
│  │     │  ├─ mainThread.jsx
│  │     │  └─ page.jsx
│  │     ├─ layout.jsx
│  │     ├─ loading.jsx
│  │     └─ page.jsx
│  ├─ components
│  │  ├─ EasterEggTrigger
│  │  │  ├─ EasterEggBBY19Trigger.jsx
│  │  │  ├─ EasterEggCatTrigger.jsx
│  │  │  └─ EasterEggPop.jsx
│  │  ├─ auth
│  │  │  ├─ GoogleSignInButton.jsx
│  │  │  └─ SignInButton.jsx
│  │  ├─ box
│  │  │  ├─ ConnectorLine.jsx
│  │  │  ├─ LReadTextBox.jsx
│  │  │  ├─ RReadTextBox.jsx
│  │  │  └─ mainTreadBox.jsx
│  │  ├─ button
│  │  │  ├─ Button.jsx
│  │  │  ├─ LikesCompleteButton.jsx
│  │  │  └─ VotesCompleteButton.jsx
│  │  ├─ card
│  │  │  ├─ SimpleProfileCard.jsx
│  │  │  ├─ StoryCard.jsx
│  │  │  ├─ profileCardInfo.jsx
│  │  │  └─ profilepage.jsx
│  │  ├─ form
│  │  │  └─ TextField.jsx
│  │  ├─ modal
│  │  │  └─ Modal.jsx
│  │  └─ ui
│  │     ├─ Contributors.jsx
│  │     └─ button.jsx
│  ├─ favicon.ico
│  ├─ footer.jsx
│  ├─ globals.css
│  ├─ head.jsx
│  ├─ header.jsx
│  ├─ layout.jsx
│  ├─ newUser
│  │  └─ page.jsx
│  ├─ page.jsx
│  └─ provider.jsx
├─ jsconfig.json
├─ lib
│  └─ prisma
│     ├─ branchThread.js
│     ├─ index.js
│     ├─ mainThreads.js
│     ├─ threads.js
│     └─ users.js
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ pages
│  └─ api
│     ├─ auth
│     │  └─ [...nextauth].js
│     ├─ profile
│     │  └─ index.js
│     ├─ threads
│     │  ├─ [threadId]
│     │  │  ├─ index.js
│     │  │  ├─ like
│     │  │  │  └─ index.js
│     │  │  └─ unlike
│     │  │     └─ index.js
│     │  ├─ branchThread
│     │  │  └─ index.js
│     │  ├─ index.js
│     │  ├─ mainThread
│     │  │  ├─ index.js
│     │  │  ├─ unvote
│     │  │  │  └─ index.js
│     │  │  └─ vote
│     │  │     └─ index.js
│     │  └─ mergeThread
│     │     └─ index.js
│     ├─ user
│     │  └─ [userId]
│     │     └─ index.js
│     └─ users
│        ├─ [userEmail]
│        │  └─ index.js
│        └─ index.js
├─ postcss.config.js
├─ prisma
│  └─ schema.prisma
├─ public
│  ├─ CollaborateWithOthers2.gif
│  ├─ CreateYourOwnStory2.gif
│  ├─ MergeStory2.gif
│  ├─ SAM_Logo_Final.png
│  ├─ bookCover
│  │  ├─ comedy.png
│  │  ├─ crime.png
│  │  ├─ fantasy.png
│  │  ├─ history.png
│  │  ├─ horror.png
│  │  ├─ psychology.png
│  │  ├─ romance.png
│  │  ├─ science-fiction.png
│  │  ├─ sports.png
│  │  ├─ thriller.png
│  │  └─ travel.png
│  ├─ catjamled.gif
│  ├─ fireworks.gif
│  ├─ fullHeart.svg
│  ├─ heart.svg
│  ├─ horror.png
│  ├─ image01.jpg
│  ├─ next.svg
│  ├─ nineteenbby.gif
│  ├─ nyancat.png
│  ├─ plus.svg
│  ├─ refresh.svg
│  ├─ samLogo3.png
│  ├─ sammember.png
│  ├─ sifi.png
│  ├─ typeWriter.jpg
│  ├─ vercel.svg
│  ├─ vote.png
│  └─ voted.png
└─ tailwind.config.js
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).