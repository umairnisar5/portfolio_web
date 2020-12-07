const projects = [
    {
      name: "Breakout Game",
      github: "https://github.com/umairnisar5/breakout-game",
      path: "https://umairnisar5.github.io/Breakout-game/"
    },
  
    {
        name: "New Year Countdown",
        github: "https://github.com/umairnisar5/New-Year-Countdown",
        path: "https://umairnisar5.github.io/Nea-Year-Countdown/"
    },
    {
        name: "Rlaxer",
        github: "https://github.com/umairnisar5/relaxer-app",
        path:  "https://umairnisar5.github.io/Rlaxer/"
    },
    {
      name: "Sportable-list",
      github: "https://github.com/umairnisar5/sortable-list",
      path:  "https://umairnisar5.github.io/Sportable-list/"
  },
  {
      name: "Booking Seat ",
      github: "https://https://github.com/umairnisar5/booking",
      path:  "https://https://github.com/umairnisar5/booking/"
  },
  {
      name: "Speak-number-gussing",
      github: "https://github.com/umairnisar5/speak-number-gusesing",
      path:  "https://umairnisar5.github.io/Speak-number-gussing/"
  },
  {
      name: "Typing-Game",
      github: "https://github.com/umairnisar5/typing-game-",
      path:  "https://umairnisar5.github.io/Typing-Game/"
  },
  {
      name: "Music-Player",
      github: "https://github.com/umairnisar5/music-player",
      path:  "https://umairnisar5.github.io/Music-Player/"
  },
  {
      name: "Meal Finder",
      github: "https://github.com/umairnisar5/meal-finder",
      path:  "https://umairnisar5.io/Movie-seat-booking/"
  },
  {
      name: "Menu-Slider",
      github: "https://github.com/umairnisar5/menu-slider",
      path:  "https://umairnisar5.github.io/Model-Menu-Slider/"
  },
  {
      name: "Memory-card",
      github: "https://github.com/umairnisar5/memory-cards",
      path:  "https://muhammadtalha123.github.io/Memory-card/"
  },

  {
      name: "Lyrics-search",
      github: "https://github.com/umairnisar5/lyrics-search",
      path:  "https://umairnisar5.github.io/Lyrics-search/"
  },
 
  {
      name: "Hangman-Game",
      github: "https://github.com/umairnisar5/hangman-game1",
      path:  "https://umairnisar5.github.io/Hangman-Game/"
  },
  {
      name: "Net Flix ",
      github: "https://github.com/umairnisar5/top-five-netflix",
      path:  "https://umairnisar5.github.io/Expense-Tracker/"
  },
  {
      name: "Expence Tracker",
      github: "https://github.com/umairnisar5/expense-tracker-react-project",
      path:  "https://umairnisar5.github.io/Exchange-Rate-Calculator/"
  },
  {
      name: "Web Animations",
      github: "https://github.com/umairnisar5/red-queen-api",
      path:  "https:/https://github.com/umairnisar5/red-queen-api/"
  },
  {
      name: "E-commernce",
      github: "https://github.com/umairnisar5/e-commerce",
      path:  "https://github.com/umairnisar5/e-commerce"
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