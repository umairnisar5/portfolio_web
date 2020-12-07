const projects = [
    {
      name: "Breakout Game",
      github: "https://github.com/umairnisar5/breakout-game",
      path: "https://umairnisar5.github.io/breakout-game/"
    },
  
    {
        name: "New Year Countdown",
        github: "https://github.com/umairnisar5/New-Year-Countdown",
        path: "https://umairnisar5.github.io/New-Year-Countdown/"
    },
    {
        name: "Rlaxer",
        github: "https://github.com/umairnisar5/relaxer-app",
        path:  "https://umairnisar5.github.io/relaxer-app/"
    },
    {
      name: "Sportable-list",
      github: "https://github.com/umairnisar5/sortable-list",
      path:  "https://umairnisar5.github.io/sortable-list/"
  },
  {
      name: "Booking Seat ",
      github: "https://https://github.com/umairnisar5/booking",
      path:  "https://umairnisar5.github.io/booking/"
  },
  {
      name: "Speak-number-gussing",
      github: "https://github.com/umairnisar5/speak-number-gusesing",
      path:  "https://umairnisar5.github.io/speak-number-gusesing/"
  },
  {
      name: "Typing-Game",
      github: "https://github.com/umairnisar5/typing-game-",
      path:  "https://umairnisar5.github.io/typing-game-/"
  },
  {
      name: "Music-Player",
      github: "https://github.com/umairnisar5/music-player",
      path:  "https://umairnisar5.github.io/music-player/"
  },
  {
      name: "Meal Finder",
      github: "https://github.com/umairnisar5/meal-finder",
      path:  "https://umairnisar5.github.io/meal-finder/"
  },
  {
      name: "Menu-Slider",
      github: "https://github.com/umairnisar5/menu-slider",
      path:  "https://umairnisar5.github.io/menu-slider/"
  },
  {
      name: "Memory-card",
      github: "https://github.com/umairnisar5/memory-cards",
      path:  "https://umairnisar5.github.io/memory-cards/"
  },

  {
      name: "Lyrics-search",
      github: "https://github.com/umairnisar5/lyrics-search",
      path:  "https://umairnisar5.github.io/lyrics-search/"
  },
 
  {
      name: "Hangman-Game",
      github: "https://github.com/umairnisar5/hangman-game1",
      path:  "https://umairnisar5.github.io/hangman-game1/"
  },
  {
      name: "Red Queen ",
      github: "https://github.com/umairnisar5/red-queen-api",
      path:  "https://umairnisar5.github.io/red-queen-api/"
  },
//   {
//       name: "Exchance rate",
//       github: "https://umairnisar5.github.io/Exchange-rate/",
//       path:  "https://github.com/umairnisar5/Exchange-rate"
//   },
//   {
//       name: "Web Animations",
//       github: "https://github.com/umairnisar5/red-queen-api",
//       path:  "https://umairnisar5.github.io/web-animation-api/"
//   },
  {
      name: "Login Page",
      github: "https://github.com/umairnisar5/java1",
      path:  "https://umairnisar5.github.io/java1/"
  },
  ];

const projectContainer = document.getElementsByClassName("projects")[0];

projects.forEach((project) => {
  const newProject = `  <div>
  <h1>${project.name}</h1>
  <a href="${project.github}" target="_blank">
    <button class="generalBtn">View Project On GitHub</button>
  </a>
  <iframe src="${project.path}" frameborder="0"></iframe>
  </div>
  </div> 
  `;
  projectContainer.innerHTML += newProject;
});