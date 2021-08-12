const menuEventHandler = () => {
  const navBarLinks = document.getElementsByClassName("navbar-links")[0];
  navBarLinks.classList.toggle("active");
};

/**
 * @param {Object[]} project
 * @param {string} ulID
 */
const projectParser = (project, ulID) => {
  const titleElement = document.createElement("h3");
  titleElement.innerText = project.title;

  const stacksElement = document.createElement("span");
  stacksElement.innerHTML = project.stacks;

  titleElement.appendChild(stacksElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.classList.add("info");
  descriptionElement.innerText = project.description.join(" ");

  const stackDescriptionElement = document.createElement("p");
  stackDescriptionElement.classList.add("info");
  stackDescriptionElement.innerText = project.stack_description.join(" ");

  const linksElement = document.createElement("ul");
  linksElement.classList.add("links");

  if (project.github) {
    const listItem = document.createElement("li");
    const anchorItem = document.createElement("a");
    anchorItem.href = project.github;
    anchorItem.target = "_blank";
    anchorItem.classList.add("github");

    const divItem = document.createElement("div");
    divItem.innerText = "Github";
    divItem.classList.add("media__link");
    divItem.classList.add("github");

    const imgItem = document.createElement("img");
    imgItem.src = "https://image.flaticon.com/icons/png/512/25/25231.png";

    divItem.appendChild(imgItem);
    anchorItem.appendChild(divItem);
    listItem.appendChild(anchorItem);
    linksElement.appendChild(listItem);
  }

  if (project.web) {
    const listItem = document.createElement("li");
    const anchorItem = document.createElement("a");
    anchorItem.href = project.web;
    anchorItem.target = "_blank";
    anchorItem.classList.add("github");

    const divItem = document.createElement("div");
    divItem.innerText = "Web";
    divItem.classList.add("media__link");
    divItem.classList.add("github");

    const imgItem = document.createElement("img");
    imgItem.src = "https://www.svgrepo.com/show/295345/internet.svg";

    divItem.appendChild(imgItem);
    anchorItem.appendChild(divItem);
    listItem.appendChild(anchorItem);
    linksElement.appendChild(listItem);
  }

  if (project.playstore) {
    const listItem = document.createElement("li");
    const anchorItem = document.createElement("a");
    anchorItem.href = project.playstore;
    anchorItem.target = "_blank";
    anchorItem.classList.add("github");

    const divItem = document.createElement("div");
    divItem.innerText = "Playstore";
    divItem.classList.add("media__link");
    divItem.classList.add("github");

    const imgItem = document.createElement("img");
    imgItem.src =
      "https://iconape.com/wp-content/files/fa/64777/png/google-play-store.png";

    divItem.appendChild(imgItem);
    anchorItem.appendChild(divItem);
    listItem.appendChild(anchorItem);
    linksElement.appendChild(listItem);
  }

  const parentDiv = document.createElement("div");
  parentDiv.classList.add("project");
  parentDiv.appendChild(titleElement);
  parentDiv.appendChild(stacksElement);
  parentDiv.appendChild(descriptionElement);
  parentDiv.appendChild(stackDescriptionElement);

  if (project.github || project.web || project.playstore)
    parentDiv.appendChild(linksElement);

  const listItem = document.createElement("li");
  listItem.appendChild(parentDiv);

  document.getElementById(ulID).appendChild(listItem);
};

const personalProjectsHandler = () => {
  const projects = [
    {
      title: "Attendo",
      stacks: "NodeJS | Flutter",
      description: [
        `An application developed for 70+ faculty members at our college to easily fetch attendance of students from Google Meetings and export it into an excel sheet anytime.`,
        `Provides auto-generated timetable based on teacher's attendance history and pattern.`,
        `Reduced the time for taking attendance from 15 mins to 15 seconds.`,
      ],
      stack_description: [
        `Used NodeJS for server side (Google Cloud Functions) , Google APIs for classroom data handling , firebase for database, puppeteer for fetching attendance from the Google Meet using request interception and Mocha framework for unit testing.`,
      ],
      github: "https://github.com/mak626/attendo",
      playstore:
        "https://play.google.com/store/apps/details?id=com.attendo.attendo",
    },
    {
      title: "Discord Bot",
      stacks: "NodeJS",
      description: [
        `Helps in managing the 200+ members of the discord channel.`,
        `Capable of distributing the members into teams and assigning them roles for teams.`,
        `Has additional features foreasy management and administration.`,
        `Fully optimized and scalable for new features.`,
      ],
      stack_description: [
        `Uses NodeJS at backend and firebase for storing server member details and Heroku for deployment.`,
      ],
      github: "https://github.com/dscmbcet/oogway-public",
    },
    {
      title: "VS Code Java Installer",
      stacks: "Batch Script",
      description: [
        `An installer to setup Java For VS Code for CSE students to easily get started with the language`,
      ],
      stack_description: [
        `Helped 20+ of my friends to facilitate their study in Java`,
      ],
      github: "https://github.com/mak626/vscode-java-installer",
    },
    {
      title: "Co-Beep",
      stacks: "Python",
      description: [
        `Automates the entire procedure of taking appointments for COVID vaccination in www.cowin.gov.in and alerts the user on successful booking.`,
      ],
      stack_description: [
        `Uses selenium for OTP authentication (Google Messages Web) and COWIN APIs for taking appointments.`,
      ],
    },
  ];

  projects.forEach((e) => projectParser(e, "personal__projects"));
};

const neo_g_ProjectsHandler = () => {
  const projects = [
    {
      title: "MARK 1 : Simple Quiz-1",
      stacks: "NodeJS",
      description: [`A NodeJS CLI for quiz with stored Score Board`],
      stack_description: [`Used NodeJS, chalk and read-sync libraries`],
      github: "https://github.com/mak626/simple-quiz-1",
      web: "https://replit.com/@mak626/mark1",
    },
    {
      title: "MARK 2 : Simple Quiz-2",
      stacks: "NodeJS",
      description: [`A NodeJS CLI for quiz with stored Score Board`],
      stack_description: [`Used NodeJS, chalk and read-sync libraries`],
      github: "https://github.com/mak626/simple-quiz-2",
      web: "https://replit.com/@mak626/mark2",
    },
    {
      title: "MARK 3 : Hosting",
      stacks: "Github",
      description: [`Hosted all projects in github`],
      stack_description: [`Used git, github desktop`],
      github: "https://github.com/mak626/project-router",
      web: "./",
    },
    {
      title: "MARK 4 : PortFolio",
      stacks: "NodeJS",
      description: [`A NodeJS CLI for quiz with stored Score Board`],
      stack_description: [`Used NodeJS, chalk and read-sync libraries`],
      github: "https://github.com/mak626/mak626.github.io/",
      web: "../",
    },
    {
      title: "MARK 5 : PortFolio Blogs",
      stacks: "NodeJS",
      description: [`A NodeJS CLI for quiz with stored Score Board`],
      stack_description: [`Used NodeJS, chalk and read-sync libraries`],
      github: "https://github.com/mak626/mak626.github.io/",
      web: "../blogs",
    },
    {
      title: "MARK 6 : Banana Translator",
      stacks: "HTML | CSS | JS",
      description: [`Translates the given text to a random minion styled text`],
      stack_description: [`Used HTML, CSS, JS and API Calls`],
      github: "https://github.com/mak626/banana-text-translator",
      web: "https://mak626.github.io/banana-text-translator/",
    },
    {
      title: "MARK 7 : Ferb Translator",
      stacks: "HTML | CSS | JS",
      description: [`Translates the given text to a random ferb styled text`],
      stack_description: [`Used HTML, CSS, JS and API Calls`],
      github: "https://github.com/mak626/ferb-text-translator",
      web: "https://mak626.github.io/ferb-text-translator/",
    },
    {
      title: "MARK 8 : Emoji Interpreter",
      stacks: "ReactJS",
      description: [
        `Interprets meaning of given emoji.`,
        `Supports over 600+ emojis.`,
      ],
      stack_description: [`Used React JS and Web Scraping to extract emojis`],
      github: "https://github.com/mak626/emoji-interpreter",
      web: "https://2mm8w.csb.app/",
    },
    {
      title: "MARK 9 : Book Recommentation App",
      stacks: "ReactJS",
      description: [
        `Shows list of my favourite books.`,
        `Can filter through genres.`,
      ],
      stack_description: [`Used React JS`],
      github: "https://github.com/mak626/book-recommentation-app",
      web: "https://mak626.github.io/book-recommentation-app/",
    },
    {
      title: "MARK 10 : Cash Register",
      stacks: "HTML | CSS | JS",
      description: [
        `Help the user by telling how can he/she return the change to the customer with minimum number of notes`,
      ],
      stack_description: [`Used HTML, CSS, JS`],
      github: "https://github.com/mak626/cash-register",
      web: "https://mak626.github.io/cash-register/",
    },
    {
      title: "MARK 11 : Is Your Birthday Lucky",
      stacks: "HTML | CSS | JS",
      description: [
        `Checks if sum of digits of birthday is divisible by the lucky number`,
      ],
      stack_description: [`Used HTML, CSS, JS`],
      github: "https://github.com/mak626/is-your-birthday-lucky",
      web: "https://mak626.github.io/is-your-birthday-lucky/",
    },
    {
      title: "MARK 12 : Fun With Traingles",
      stacks: "HTML | CSS | JS",
      description: [`App to calculate basic operations of a traingle`],
      stack_description: [`Used HTML, CSS, JS`],
      github: "https://github.com/mak626/fun-with-triangles",
      web: "https://mak626.github.io/fun-with-triangles/",
    },
    {
      title: "MARK 13 : Birthday Palindrome",
      stacks: "HTML | CSS | JS",
      description: [
        `Checks whether your birthdate is palindrome in dd-mm-yyyy, mm-dd-yyyy, mm-dd-yy formats`,
      ],
      stack_description: [`Used HTML, CSS, JS`],
      github: "https://github.com/mak626/birthday-pallindrome",
      web: "https://mak626.github.io/birthday-pallindrome/",
    },
    {
      title: "MARK 14 : Stock Check",
      stacks: "ReactJS",
      description: [`A Stock Profit/Loss Checking app`],
      stack_description: [`Used ReactJS`],
      github: "https://github.com/mak626/stock-check",
      web: "http://mak626.github.io/stock-check",
    },
  ];

  projects.forEach((e) => projectParser(e, "neo-g__projects"));
};

window.onload = () => {
  personalProjectsHandler();
  neo_g_ProjectsHandler();
};
