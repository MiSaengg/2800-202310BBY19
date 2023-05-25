<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>            
        <a href="#contributors">Contributors</a>      
    </li>
    <li>
      <a href="#technology-used">Technology used</a>      
    </li>
    <li><a href="#how-did-we-use-ai">How did we use AI</a></li>
    <li><a href="#getting-started">Getting started</a></li>
    <li><a href="#file-contents-of-folder">File Contents of folder</a></li>
    <li><a href="#learn-more">Learn More</a></li>
    <li><a href="#references">References</a></li>
    <li><a href="#credits">Credits</a></li>
    <li><a href="#licence">Licence</a></li>
  </ol>
</details>
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



## How to use?

| 1. Create New story | 2. Collaborate to story | 3. Merge the story |
|---|---|---|
|<img src="https://user-images.githubusercontent.com/111412548/241064059-6648a2ec-c6b6-4da9-855d-d7c2ee88b066.gif"  width="100%" height="300" />|<img src="https://user-images.githubusercontent.com/111412548/241064042-aafbe5df-c271-4199-8ceb-25c21e22e955.gif"  width="100%" height="300" />|<img src="https://user-images.githubusercontent.com/111412548/241064069-ae3429a1-c9d0-40ff-8ac8-e1b43218f2c0.gif"  width="100%" height="300" />|

## Technology used

![image](https://user-images.githubusercontent.com/63331153/241052172-540c6ca9-2f07-4a00-bc50-85104ec67bbb.png)

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma^4.13.0-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
[![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)](https://javascript.info/)
[![Node Badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://javascript.info/)
![Next JS](https://img.shields.io/badge/Next^13.3.2-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss^3.3.2-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
<img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" height="20px" style="border : 1px solid black; padding: 5px">
![MongoDB](https://img.shields.io/badge/MongoDB^6.0-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
[![VScode Badge](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)](https://javascript.info/)

## How did we use AI?
1. AI played a pivotal role in the creation of our app, particularly in the coding phase. We employed OpenAI's Codex model, also known as Co-Pilot, which enhanced our development efficiency and ensured the application of best practices. This model provided real-time code suggestions, assisted in debugging, and served as an invaluable tool for problem-solving, thereby expediting the coding process and bolstering the overall quality of the app.
2. In addition to aiding in the app's creation, AI was integral in preparing the data needed for our app. We incorporated OpenAI's Ada model into a Python-based data processing pipeline for dataset fine-tuning. The Ada model helped clean and organize the dataset by identifying and correcting inaccuracies, eliminating duplicates, and filling in missing values. This meticulous dataset preparation improved the data quality, tailoring it to our application's needs and contributing to the app's overall performance.
3. Our app harnesses the power of AI for several functions. One of its key applications is in text completion, where we utilize OpenAI's text-davinci-003 and 002 model. As users embark on their creative writing journey, the AI model suggests potential progressions for their story, aiding them in their creativity. Another critical function of AI in our app is in genre detection. The app analyses user-generated text and assigns it to a predefined genre. This capability not only assists in organizing the content but also paves the way for personalized recommendations.
4. Despite these advancements, we encountered a few challenges along the way, primarily dealing with the variability and ambiguity of human language. Our genre detection feature, given the subjectivity and context-dependence of language, found it challenging to always correctly categorize the genre. However, we took these limitations as opportunities for improvement. We diversified our training datasets and used user feedback for model fine-tuning. We also allowed users to manually correct the AI-detected genre, and their corrections were fed back into the model for future learning. This iterative process helped the model learn from its mistakes and adapt to user inputs, thereby continually improving over time.

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

## References

[NextJS](https://nextjs.org/)
[Prisma](https://www.prisma.io/)
[Tailwind css](https://tailwindcss.com/)
[NextAuth](https://next-auth.js.org/)
[OpenAI](https://openai.com/)
[Vercel](https://vercel.com/docs)
[MongoDB](https://www.mongodb.com/)

## Credits

<img src="https://issp.bcit.ca/BCIT_logo.png"  width="100" height="100" />

## Licence
[MIT Licence](https://www.mit.edu/~amini/LICENSE.md)

## Contact Info
| Jasper                                   | David                                                       | Noel              | Juan                    |
|-----|-----|-----|-----|
| ✉️`ohyj0906@gmail.com` | ✉️`gunheedavidcho@gmail.com`  | ✉️`dndyd4924@gmail.com` | ✉️`juanchung7v@gmail.com`|