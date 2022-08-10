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
  stacksElement.innerHTML = `${project.posted} 🕔${project.readTime}`;

  titleElement.appendChild(stacksElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.classList.add("info");
  descriptionElement.innerText =
    project.description.join(" ").slice(0, 350) + " ...";

  const linksElement = document.createElement("ul");
  linksElement.classList.add("links");

  if (project.web) {
    const listItem = document.createElement("li");
    const anchorItem = document.createElement("a");
    anchorItem.href = project.web;
    anchorItem.target = "_blank";
    anchorItem.classList.add("github");

    const divItem = document.createElement("div");
    divItem.innerText = "Read More";
    divItem.classList.add("media__link");
    divItem.classList.add("github");

    const imgItem = document.createElement("img");
    imgItem.src =
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg";

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

  parentDiv.appendChild(linksElement);

  const listItem = document.createElement("li");
  listItem.appendChild(parentDiv);

  document.getElementById(ulID).appendChild(listItem);
};

const blogsHandler = () => {
  const projects = [
    {
      title: "Getting Started With VS Code",
      posted: "12-08-2021",
      readTime: "10mins",
      description: [
        `An overview of the world's best code editor and tips & tricks on how to use it.`,
        `Visual Studio Code is a source-code editor made by Microsoft for Windows, Linux, and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git. Users can change the theme, keyboard shortcuts, preferences, and install extensions that add additional functionality.`,
      ],
      web: "https://mak626.notion.site/Getting-Started-With-VS-Code-a6592d55ad24459485b5d8dcffc28d66",
    },
    {
      title: "Power Of Console Logging",
      posted: "12-08-2021",
      readTime: "6mins",
      description: [
        `A simple yet one of the most vital tools to efficient debugging. The console.log() is a method in JavaScript which outputs a message to the web console.`,
        `The console.log() is a method in JavaScript which outputs a message to the web console. The message may be a single string (with optional substitution values), or it may be anyone or more JavaScript objects.`,
      ],
      web: "https://mak626.notion.site/mak626/Power-Of-Console-Logging-48c861f838a04b5d99cf50799e47733a",
    },
  ];

  projects.forEach((e) => projectParser(e, "blogs"));
};

window.onload = () => {
  blogsHandler();
};
