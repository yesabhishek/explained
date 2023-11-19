---
title: Sveltekit
description: Simple guide to create your first Sveltekit App and deploy it.
---

SvelteKit is built on Svelte, a UI framework that uses a compiler to let you write breathtakingly concise components that do minimal work in the browser, using languages you already know — HTML, CSS and JavaScript. It's a love letter to web development.

It's a framework for rapidly developing robust, performant web applications using Svelte. If you're coming from React, SvelteKit is similar to Next. If you're coming from Vue, SvelteKit is similar to Nuxt.

### Why Svelte

- **Built-in Routing:** SvelteKit comes with automatic routing, so you can easily
create different pages for your app without manual setup. It's like a built-in
GPS for your website.

- **Server-Rendered Pages:** SvelteKit generates HTML on the server for faster
loading and better SEO. Think of it as preparing a delicious meal in advance
instead of cooking from scratch when someone orders.

- **Adaptive Images:** SvelteKit can automatically resize and optimize images
based on the user's device, giving your site faster load times and a
smoother experience. It's like having a chameleon that adjusts its
appearance to match the surroundings.

- **Stores for State Management:** SvelteKit's stores let you manage your
app's data and share it between components without extra complexity.
Imagine a magical notebook that everyone in your team can use to write
and share important notes.

- **Prerendering for Speed:** SvelteKit creates pre-rendered versions of your
pages, making them load almost instantly. It's like having your webpage
already laid out on the table before your guest arrives, so there's no wait
time

### Awesome Developer Experience

- Smaller Bundle Size and Faster
Performance: Svelte's unique compilation
approach shifts much of the work to build
time, resulting in smaller bundle sizes and
faster runtime performance.

- Simplified Code: Svelte's declarative syntax
and built-in state management (via
reactivity) reduce the amount of boilerplate
code needed.

- Easy Learning Curve: Svelte's
straightforward syntax and approachable
concepts make it easier for developers to
learn and adopt

> Now that you're interested, let's start to code👨🏻‍💻

### Development Steps

- Install Sveltekit
- Install TailwindCSS (for styling the UI)
- Explain the project structure
- Write the actual code
- Review Code
- Push the code to GitHub
- 1-Click Deploy via Vercel

#### 1️⃣ Install Sveltekit

Open Command Prompt and type the below commands.

```
npm create svelte@latest myAppName
cd myAppName
npm install
npm run dev
```

#### 2️⃣ Install TailwindCSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

// Copy the below lines in svelte.config.js

import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter()
  },
  preprocess: vitePreprocess()
};
export default config;

```

Almost forgot, add the below lines in the styles.css file under src folder.

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```


> 🎉 Awesome! You should have completed the installation setup by now :)

#### 3️⃣ Explain the project structure

- 📁 **src/**
  - 📁 **routes/**
    - 📄 **index.svelte** *(Main page of the app)*
    - 📄 **about.svelte** *(About page)*
    - 📄 **contact.svelte** *(Contact page)*
  - 📁 **components/**
    - 📄 **Header.svelte** *(Reusable header component)*
    - 📄 **Footer.svelte** *(Reusable footer component)*
  - 📁 **lib/**
    - 📄 **api.js** *(API handling functions)*
  - 📄 **app.html** *(Main HTML file)*
  - 📄 **app.svelte** *(Main layout component)*
  - 📄 **hooks.js** *(Custom hooks or utilities)*
- 📁 **static/**
  - *(Static files like images, fonts, etc.)*
- 📁 **routes/**
  - 📁 **api/**
    - 📄 **example.json.js** *(Example API endpoint)*
- 📁 **public/**
  - *(Publicly accessible files)*
- 📄 **package.json** *(Node.js package configuration)*
- 📄 **svelte.config.js** *(Svelte configuration file)*
- 📄 **tsconfig.json** *(TypeScript configuration)*
- 📄 **postcss.config.js** *(PostCSS configuration)*
- 📄 **tailwind.config.js** *(Tailwind CSS configuration)*
- 📄 **.gitignore** *(Git ignore file)*
- 📄 **README.md** *(Project documentation)*




#### 4️⃣ Write the actual code

Navigate to the localhost port where the app is currently running (most probably localhost:5173). 

Create a new fact folder in routes folder under src. Create a +page.svelte file inside fact folder we created just now.

```bash
<script>
  let catFactString = "";

  async function getCatFact() {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch("https://catfact.ninja/fact?max_length=140", requestOptions)
      .then((response) => response.json())
      .then((result) => (catFactString = result.fact))
      .catch((error) => console.log("error", error));
  }
</script>

<div class="flex m-auto h-screen">
    <h1 class="text-lg text-blue-600 font-semibold text-center my-2">{catFactString}</h1>
    <button
      on:click={getCatFact}
      class="px-8 py-3 bg-black text-white rounded-3xl">Get Cat Fact</button
    >
<div>
```

> 🎉 Awesome! We have written a application code that fetches interesting cat facts from an external open-source API, and then displays on the UI.


#### 5️⃣ Review Code

>“If you have to spend effort looking at a fragment of code and figuring out what it’s doing, then you should extract it into a function and name the function after the what.” — Martin Fowler

#### 6️⃣ Push Code to GitHub

1. **Navigate to GitHub:**

   Go to [GitHub](https://github.com) and log in to your account.

2. **Create a New Repository:**

   - Click on the `+` icon in the top right corner of the GitHub homepage.
   - Select "New repository" from the dropdown menu.

3. **Fill in Repository Details:**

   - Enter `myAppName` as the Repository name.
   - Add an optional description.
   - Choose visibility (public or private).
   - Optionally, select a license, add a `.gitignore` file, or choose an initial README file.

4. **Create the Repository:**

   - Click the "Create repository" button.

5. **Locally, in Your Terminal:**

   - Navigate to your local project directory using the command line.

6. **Initialize a Git Repository:**

   - Run the following command to initialize a Git repository:

     ```bash
     git init
     ```

7. **Add Your Files:**

   - Add your project files to the repository with the following command:

     ```bash
     git add .
     ```

   - This stages all the files in the current directory for the next commit.

8. **Make Your First Commit:**

   - Commit the changes with a meaningful message:

     ```bash
     git commit -m "Initial commit"
     ```

9. **Set the Remote Repository:**

   - Link your local repository to the GitHub repository you created:

     ```bash
     git remote add origin https://github.com/yourusername/myAppName.git
     ```

   - Be sure to replace `yourusername` with your GitHub username.

10. **Push the Code:**

    - Push the committed code to GitHub:

      ```bash
      git push -u origin main
      ```

11. **Authenticate with GitHub:**

    - If you're not already logged in to GitHub via the command line, you'll be prompted to authenticate.

12. **Verify on GitHub:**

    - Refresh the GitHub repository page, and you should see your code there.

> 🎉 Congratulations! You've successfully created a new GitHub repository called `myAppName` and pushed your local code to it.


#### 7️⃣ Deploy app to Vercel (Free Tier)

1. Go to [Vercel](https://vercel.com) and log in to your account.

2. **Create a New Project:**

   - Click on the "+ New Project" button in the top right corner of the Vercel dashboard.
   - Choose the "Import Git Repository" option.

3. **Connect to GitHub:**

   - Click on the "Connect" button next to the GitHub logo.
   - Authorize Vercel to access your GitHub account if prompted.

4. **Select the Repository:**

   - Search for and select the `myAppName` repository from the list of your GitHub repositories.

5. **Configure the Project:**

   - Vercel will automatically detect the necessary settings. Ensure that the settings are correct, including the framework if applicable.

6. **Deploy Settings:**

   - Choose the branch you want to deploy (usually `main` or `master`).
   - Set the build settings if needed. Vercel will try to auto-detect the build command.

7. **Deploy the Project:**

   - Click the "Deploy" button.

> 🎉 Congratulations! You've successfully created a new project in Vercel called `myAppName` and deployed the code from GitHub.


Please note, this blog is to
illustrate how to start developing frontend
apps and is subject to change in future.
Please read the official svelekit
documentation for more info.

If you found any challenges in the way or there are any issues/queries, please feel free to raise an issue in this [Nerd Nuggets](https://github.com/yesabhishek/Nerd Nuggets/issues). 