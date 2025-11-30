# CSE 134B HW5 - Completed Site

### Part 1: CustomElement Creation (16 pts)

- **You should use CSS variables to style your cards.**
- **You should use CSS grid or flexbox to layout your cards.**
- **You should use the CustomElements API to create your custom elements.**

You will develop a page containing a large list of a CustomElement, `<project-card>`, using JavaScript. We believe this would be a great opportunity to showcase a list of experiences or projects in your portfolio, but you can decide what context these cards would be good for **(which also means you don't need to make the custom element name `<project-card>` if it doesn't make sense. In that case, change it to some other name that has the word "card" in it and let us know then what you'd be changing it to on your PDF)**. However, there must be clear effort to effectively integrate the project with your existing portfolio. You may replace content from previous versions of your site that were achieving the same effect.

**This element should consist of, at minimum:**

- **`<h2>` tag, ex: for your project name**
- **`<picture>` tag with effective use of alt text**
- **Some space for a short description**
- **`A hyperlink for further reading` (`<a>` tag is fine)
  Additionally, for full credit, each project-card should be rich in detail and contextually relevant, unrelated sample images + Lorem ipsum text will not receive full credit.** Additional elements are welcome (e.g., date, keywords, author, etc.). Extra credit may be given in limited circumstances for particularly creative applications.

We expect the design of these cards to be clean, responsive, and easy to reuse. Give some love and attention to this as points may be lost if there are readability and responsiveness issues.

Keep in mind that you will eventually need to be able to dynamically create these cards as CustomElements using JavaScript and populate them from localStorage and from a JSON file fetched remotely.

**Deliverable A: if you used an element that is NOT called <project-card> add a line that explains what you used instead. If you did use project-card there is no need to map to this problem. (0 pts)**

**Deliverable B: Include a screenshot of the <project-card> embedded in your site** (no need to screenshot dev tools). **For the purposes of part 1, you may hardcode the contents of project-card for the screenshot. (10 pts, possible extra credit of up to 3 points for particularly creative applications)**

**Deliverable C: Include a copy of or screenshot of the project-card markup that appears ON THE BROWSER WHEN A PROJECT CARD IS CREATED(observe this statement carefully:** **do not just write <project-card></project-card> and call it a day. Do not screenshot your JS code for your component and call it a day.**) (6 pts)

###  Part 2: Data Loading (30 pts)

- **You should use either JSONBin API or My JSON Server to store your data in the cloud.**
- **You should use the localStorage API to store your data locally.**
- **You should use the fetch or XMLHttpRequest API to fetch data from a server.**

**Before you start, please delete any hard-coded markup for the project cards as you will use JS to fill them in. This makes it more obvious to graders that the buttons are working.**

Incorporate two buttons, "Load Local" and "Load Remote". Both should fetch an array of relevant JSON data to populate the cards. "Load Local" fetches from `localStorage`, while "Load Remote" fetches from a remote server. 

You should be able to handle a pre-determined set of data stored in both `localStorage` and the cloud. **It is OK if both datasets do not have identical contents** (it will probably be easier this way), but both datasets should be in either **JSON** or **XML** format.

Choose either option from the following as the endpoint where you fetch data from:

**JSONBin** for cloud data storage:

[https://jsonbin.io/Links to an external site.](https://jsonbin.io/)

**My JSON Server**: 

[https://my-json-server.typicode.com/Links to an external site.](https://my-json-server.typicode.com/)
TIP: If you choose to use this option there is a limit on the number of fields per object (empirically 5).

**Deliverable D: Include a link and/or basic instructions for finding the buttons you created.
(15 pts for load local, 15 pts for load remote. You may not get full credit if there are obvious aesthetic, layout, or readability issues when the cards are populated.)**

**TIP: If you are planning to add event listeners for your cards, event delegation may be a useful concept in this case, for details on event delegation please read [https://medium.com/@rohitkuwar/event-delegation-what-it-is-and-why-its-useful-59e983f87f97Links to an external site.](https://medium.com/@rohitkuwar/event-delegation-what-it-is-and-why-its-useful-59e983f87f97)

------

### Part 3: Crud Actions (30 pts)

Create another page that allows you to perform the remaining CRUD actions (mainly create [POST], update [POST or PUT], and delete [DELETE]) on any data in either the localStorage or cloud-based version through a form. For simplicity, you do not have to worry about making the localStorage and cloud data consistent with each other. Changes should take effect upon the next load of your <project-cards> (via "load local" or "load remote" whichever is applicable)

**UPDATE: Following some student concerns we will allow part 3 to be completed on a separate deployment and website from part 2. You may also use a separate remote data store if applicable. If you choose to take advantage of this, make sure deliverable D reflects the link and repo.**

**Deliverable E: include a link to this page (and repo if different from the other parts), as well as example form inputs we can use to test create and update. (each method is 10 pts)**

**TIP: This part with JSONBIN will require an API key, even if your bin is public. But** **pasting your API key directly could lead to it being exposed in your repo. Client-side code cannot inject env vars or secrets for you (as it's typically a backend/build system process) so trying to hide the API key can end up being a complicated process depending on your choice of framework or deployment. If you are not familiar with working with environment variables I would only recommend doing CRUD on remote if you do not care about publishing your JSONBIN API Key (you can always rotate or revoke the key after the quarter ends).**

**[Links to an external site.](https://medium.com/@rohitkuwar/event-delegation-what-it-is-and-why-its-useful-59e983f87f97)**

### Part 4: Other Enhancements (10 pts):

Continue working on your existing portfolio site from HW2/3, making any enhancements to your markup, styling, or scripts as you see fit. **At this point, you also have the freedom to prune any unwanted content,** as long as **it doesn't affect your previous Netlify deployments.**

**Deliverable F:** Add a paragraph **(something I can read in 15-30 seconds)** to your gradescope submission explaining the changes you made and why you decided to implement those changes. Make sure the README will be readable immediately upon opening your repo on Github.

There is some element of subjectivity involved in this, but concrete and earnest effort to improve things on the CSS, HTML, & JS front will earn you most of the points.

**Deliverable G: For full credit, your commit history must also include regular commits with clear and thoughtfully written** documentation. Add a screenshot of all commits made between November 29 and December 5. You do not need to screenshot the specific files changed or changes within the files, only the descriptions. [This resourceLinks to an external site.](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/) (particularly the Commit Message Comparisons section) should give you a good idea of what is expected. Do not worry about commits made before July 28, 2025.**
**

 

**Extra Credit A - Framework Version (5 pts):** After the vanilla JavaScript version, you can recreate this project using a library or framework of your choice for further extra credit. You must also analyze the performance impact and lines of code difference when using the framework or library. The framework version should not require a complex setup for the grader. DO NOT use frameworks for any of the earlier parts, this one has to be separate.

**Deliverable EC-A: Include the analysis in paragraph form, plus a url to your repo and deployment.**