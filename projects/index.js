const menuEventHandler = () => {
  const navBarLinks = document.getElementsByClassName("navbar-links")[0];
  navBarLinks.classList.toggle("active");
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

  projects.forEach((e) => {
    const titleElement = document.createElement("h3");
    titleElement.innerText = e.title;

    const stacksElement = document.createElement("span");
    stacksElement.innerHTML = e.stacks;

    titleElement.appendChild(stacksElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("info");
    descriptionElement.innerText = e.description.join(" ");

    const stackDescriptionElement = document.createElement("p");
    stackDescriptionElement.classList.add("info");
    stackDescriptionElement.innerText = e.stack_description.join(" ");

    const linksElement = document.createElement("ul");
    linksElement.classList.add("links");

    if (e.github) {
      const listItem = document.createElement("li");
      const anchorItem = document.createElement("a");
      anchorItem.href = e.github;
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

    if (e.web) {
      const listItem = document.createElement("li");
      const anchorItem = document.createElement("a");
      anchorItem.href = e.web;
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

    if (e.playstore) {
      const listItem = document.createElement("li");
      const anchorItem = document.createElement("a");
      anchorItem.href = e.playstore;
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

    if (e.github || e.web || e.playstore) parentDiv.appendChild(linksElement);

    const listItem = document.createElement("li");
    listItem.appendChild(parentDiv);

    document.getElementById("personal__projects").appendChild(listItem);
  });
};

window.onload = () => {
  personalProjectsHandler();
};
