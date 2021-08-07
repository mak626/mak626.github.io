const navMenu = document
  .getElementById("navbar-menu")
  .addEventListener("click", () => {
    const navBarLinks = document.getElementsByClassName("navbar-links")[0];
    navBarLinks.classList.toggle("active");
  });

const stacksHandler = () => {
  const stacks = [
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      name: "Node JS",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      name: "HTML",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      name: "CSS",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
      name: "JS",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      name: "Python",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      name: "C++",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg",
      name: "Bash",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
      name: "VS Code",
    },
    {
      icon: "https://iconape.com/wp-content/files/np/64149/svg/google-apps-script.svg",
      name: "Google Apps Script",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg",
      name: "Google Sheets",
    },
  ];

  stacks.forEach((e) => {
    const imageElement = document.createElement("img");
    imageElement.src = `${e.icon}`;
    imageElement.alt = `${e.name}`;

    const listItem = document.createElement("li");
    listItem.appendChild(imageElement);

    document.getElementById("stacks-data").appendChild(listItem);
  });
};

window.onload = () => {
  stacksHandler();
};
