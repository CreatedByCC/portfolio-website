const projects = [
  {
    title: "My Developer Portfolio",
    description: "Built from scratch with React and Tailwind, this site reflects my journey from science teacher to fullstack developer. It showcases my learning progress, favorite tools, and ever-expanding skills.",
    link: "https://github.com/chantel/portfolio",
    tech: ["React", "Tailwind", "Vite"],
    type: "personal",
    image: "./project-images/my-developer-portfolio.jpg"
  },
  {
    title: "Sticky Note App",
    description: "An interactive app that lets users create, edit, and delete sticky notes to track tasks and ideas. Notes are saved locally so they persist between sessions, and users can search through them for quick access.",
    link: "https://github.com/CreatedByCC/sticky-note-app",
    demo: "https://createdbycc.github.io/sticky-note-app/",
    tech: ["React", "JavaScript", "CSS", "HTML"],
    type: "learning",
    image: "./project-images/sticky-note-app.jpg"
  },
  {
    title: "Name Tag Generator",
    description: "A bulk name tag creator that starts with preset names and lets users add or remove entries dynamically. Built with React and styled for clarity and ease of use.",
    link: "https://github.com/CreatedByCC/name-tag-generator",
    demo: "https://createdbycc.github.io/name-tag-generator/",
    tech: ["React", "JavaScript", "CSS", "HTML"],
    type: "learning",
    image: "./project-images/name-tag-generator.jpg"
  },
  {
    title: "Name Tag Generator with Hooks",
    description: "A React-based app for bulk name tag creation using functional components and hooks. Users can add, remove, and persist name tags via local storage, with a streamlined UI for quick editing.",
    link: "https://github.com/CreatedByCC/name-tag-generator-hooks",
    tech: ["React", "JavaScript", "CSS", "HTML"],
    type: "learning",
    image: "./project-images/name-tag-generator.jpg"
  },
  {
    title: "Hotel Booking App",
    description: "A hotel search tool that lets users filter accommodations based on preferences like amenities and room types. Built with React and styled for a smooth user experience.",
    link: "https://github.com/CreatedByCC/hotel-booking-app",
    demo: "https://createdbycc.github.io/hotel-booking-app",
    tech: ["React", "JavaScript", "CSS", "HTML"],
    type: "learning",
    image: "./project-images/hotel-booking-app.jpg"
  },
  {
    title: "File Metadata Microservice",
    description: "A backend API that accepts file uploads and returns metadata including filename, type, and size. Built as part of FreeCodeCamp’s APIs and Microservices certification.",
    link: "https://github.com/CreatedByCC/file-metadata-freecodecamp",
    tech: ["Node.js", "Express", "Multer"],
    type: "learning"
  },
  {
    title: "Exercise Tracker Microservice",
    description: "A RESTful API that allows users to create profiles, log workouts, and retrieve exercise history with optional filters. Built for FreeCodeCamp’s APIs and Microservices certification.",
    link: "https://github.com/CreatedByCC/exercise-tracker-freecodecamp",
    tech: ["Node.js", "Express", "MongoDB"],
    type: "learning"
  },
  {
    title: "URL Shortener Microservice",
    description: "A backend service that generates shortened URLs and redirects users to the original link. Built for FreeCodeCamp’s APIs and Microservices certification using Express and MongoDB.",
    link: "https://github.com/CreatedByCC/url-shortener",
    tech: ["Node.js", "Express", "MongoDB"],
    type: "learning"
  },
  {
    title: "Request Header Parser Microservice",
    description: "An Express-based API that returns client metadata such as IP address, language, and software from incoming HTTP headers. Built for FreeCodeCamp’s APIs and Microservices certification.",
    link: "https://github.com/CreatedByCC/header-parser",
    tech: ["Node.js", "Express"],
    type: "learning"
  },
  {
    title: "Timestamp Microservice",
    description: "An API that returns Unix and UTC timestamps based on user input or the current date. Built for FreeCodeCamp’s APIs and Microservices certification using Express.",
    link: "https://github.com/CreatedByCC/timestamp-microservices",
    tech: ["Node.js", "Express"],
    type: "learning"
  },
  {
    title: "Find Your Hat",
    description: "An interactive terminal game where players navigate a field to retrieve their lost hat while avoiding holes and boundaries. Built with JavaScript and designed for command-line play as part of Codecademy's curriculum.",
    link: "https://github.com/CreatedByCC/find-your-hat",
    tech: ["JavaScript", "Node.js"],
    type: "learning"
  },
  {
    title: "Zestful Investing",
    description: "A responsive landing page for a fictional investment company, built using HTML and CSS with Flexbox. Designed as part of Codecademy's curriculum to practice layout and media queries.",
    link: "https://github.com/CreatedByCC/zestful-investing",
    demo: "https://createdbycc.github.io/zestful-investing/",
    tech: ["HTML", "CSS", "Flexbox"],
    type: "learning",
    image: "./project-images/zestful-investing.jpg"
  },
  {
    title: "Meal Generator",
    description: "A command-line app that randomly generates daily meal plans for breakfast, lunch, and dinner. Built as part of Codecademy's message generator project using JavaScript.",
    link: "https://github.com/CreatedByCC/meal-generator",
    tech: ["JavaScript", "Node.js"],
    type: "learning"
  },
  {
    title: "Tea Cozy",
    description: "A fictional tea shop website built with HTML and CSS, using Flexbox for layout and responsiveness. Designed as part of Codecademy's curriculum to practice semantic structure and visual hierarchy.",
    link: "https://github.com/CreatedByCC/tea-cozy",
    demo: "https://createdbycc.github.io/tea-cozy/",
    tech: ["HTML", "CSS"],
    type: "learning",
    image: "./project-images/tea-cozy.jpg"
  },
  {
    title: "HTML & CSS Cheat Sheet",
    description: "A reference page built with HTML and CSS that includes a custom color theme, font styles, and a structured table layout. Created as part of Codecademy's curriculum to reinforce semantic markup and styling fundamentals.",
    link: "https://github.com/CreatedByCC/html-css-cheat-sheet",
    demo: "https://createdbycc.github.io/html-css-cheat-sheet/",
    tech: ["HTML", "CSS"],
    type: "learning",
    image: "./project-images/html-css-cheat-sheet.jpg"
  },
  {
    title: "JavaScript Calculator",
    description: "A functional calculator built with React and styled using CSS, designed to meet FreeCodeCamp’s Front End Development Libraries project requirements. Handles chained operations, decimals, and dynamic input display.",
    link: "https://github.com/CreatedByCC/js-calculator-freecodecamp",
    demo: "https://createdbycc.github.io/js-calculator-freecodecamp/",
    tech: ["React", "JavaScript", "CSS", "HTML"],
    type: "learning",
    image: "./project-images/js-calculator.jpg"
  },
  {
    title: "Drum Machine",
    description: "A React-based app that plays drum sounds when users click buttons or press corresponding keys. Built for FreeCodeCamp’s Front End Development Libraries certification using Vite and custom styling.",
    link: "https://github.com/CreatedByCC/drum-machine-freecodecamp",
    demo: "https://createdbycc.github.io/drum-machine-freecodecamp/",
    tech: ["React", "JavaScript", "CSS", "HTML", "Vite"],
    type: "learning",
    image: "./project-images/drum-machine.jpg"
  },
  {
    title: "Random Quote Machine",
    description: "A React app that displays a random quote and author with each button click, and includes a Twitter share option. Built for FreeCodeCamp’s Front End Development Libraries certification using Vite and custom styling.",
    link: "https://github.com/CreatedByCC/random-quote-machine-freecodecamp",
    demo: "https://createdbycc.github.io/random-quote-machine-freecodecamp/",
    tech: ["React", "JavaScript", "CSS", "HTML", "Vite"],
    type: "learning",
    image: "./project-images/random-quote-machine.jpg"
  },
  {
    title: "Markdown Previewer",
    description: "A React app that converts markdown input into live HTML preview using the Marked library. Built for FreeCodeCamp’s Front End Development Libraries certification with Vite and custom styling.",
    link: "https://github.com/CreatedByCC/markdown-previewer-freecodecamp",
    demo: "https://createdbycc.github.io/markdown-previewer-freecodecamp/",
    tech: ["React", "JavaScript", "CSS", "HTML", "Vite"],
    type: "learning",
    image: "./project-images/markdown-previewer.jpg"
  },
  {
    title: "Tree Map Diagram",
    description: "A D3.js-powered data visualization that displays hierarchical data as nested rectangles. Built for FreeCodeCamp’s Data Visualization certification, this project includes interactive tooltips, a legend, and dynamic sizing based on data values.",
    link: "https://github.com/CreatedByCC/tree-map-freecodecamp",
    demo: "https://createdbycc.github.io/tree-map-freecodecamp/",
    tech: ["JavaScript", "D3.js", "HTML", "CSS"],
    type: "learning",
    image: "./project-images/tree-map-diagram.jpg"
  },
  {
    title: "Choropleth Map Visualization",
    description: "A D3.js-based data visualization that displays U.S. education data as a choropleth map. Built for FreeCodeCamp’s Data Visualization certification, featuring interactive tooltips, a legend, and dynamic color scaling.",
    link: "https://github.com/CreatedByCC/choropleth-freecodecamp",
    demo: "https://createdbycc.github.io/choropleth-freecodecamp/",
    tech: ["JavaScript", "D3.js", "HTML", "CSS", "JSON"],
    type: "learning",
    image: "./project-images/chloropleth-map.jpg"
  },
  {
    title: "Scatterplot Graph",
    description: "A D3.js-based data visualization that plots professional cycling times against race years. Built for FreeCodeCamp’s Data Visualization certification, featuring interactive tooltips, axes, and a legend to highlight doping allegations.",
    link: "https://github.com/CreatedByCC/scatterplot-freecodecamp",
    demo: "https://createdbycc.github.io/scatterplot-freecodecamp/",
    tech: ["JavaScript", "D3.js", "HTML", "CSS"],
    type: "learning",
    image: "./project-images/scatterplot-graph.jpg"
  },
  {
    title: "Bar Chart Visualization",
    description: "A D3.js-powered bar chart that visualizes U.S. GDP data over time. Built for FreeCodeCamp’s Data Visualization certification, featuring dynamic axes, tooltips, and responsive scaling.",
    link: "https://github.com/CreatedByCC/bar-chart-freecodecamp",
    demo: "https://createdbycc.github.io/bar-chart-freecodecamp/",
    tech: ["JavaScript", "D3.js", "HTML", "CSS"],
    type: "learning",
    image: "./project-images/bar-chart.jpg"
  },
  {
    title: "Heat Map Visualization",
    description: "A D3.js-based data visualization that displays monthly global temperature variance across years. Built for FreeCodeCamp’s Data Visualization certification, featuring interactive tooltips, a legend, and dynamic color scaling.",
    link: "https://github.com/CreatedByCC/heat-map-freecodecamp",
    demo: "https://createdbycc.github.io/heat-map-freecodecamp/",
    tech: ["JavaScript", "D3.js", "HTML", "CSS"],
    type: "learning",
    image: "./project-images/heat-map.jpg"
  },
  {
    title: "Survey Form",
    description: "A responsive survey form built with HTML and CSS, designed to collect user feedback. Created for FreeCodeCamp’s Responsive Web Design certification, featuring semantic structure, form validation, and mobile-first styling.",
    link: "https://github.com/CreatedByCC/survey-form-freecodecamp",
    demo: "https://createdbycc.github.io/survey-form-freecodecamp/",
    tech: ["HTML", "CSS"],
    type: "learning",
    image: "./project-images/survey-form.jpg"
  },
  {
    title: "Roman Numeral Converter",
    description: "A JavaScript function that converts decimal numbers into Roman numerals. Built for FreeCodeCamp’s JavaScript Algorithms and Data Structures certification, using loops and array mapping for efficient conversion.",
    link: "https://github.com/CreatedByCC/roman-numeral-converter-freecodecamp",
    tech: ["JavaScript"],
    type: "learning"
  },
  {
    title: "Telephone Number Validator",
    description: "A JavaScript function that checks whether a given string is a valid US phone number. Built for FreeCodeCamp’s JavaScript Algorithms and Data Structures certification using regular expressions and conditional logic.",
    link: "https://github.com/CreatedByCC/telephone-number-validator-freecodecamp",
    tech: ["JavaScript"],
    type: "learning"
  },
  {
    title: "Palindrome Checker",
    description: "A JavaScript function that checks whether a given string is a palindrome, ignoring punctuation, case, and spacing. Built for FreeCodeCamp’s JavaScript Algorithms and Data Structures certification using regex and string manipulation.",
    link: "https://github.com/CreatedByCC/palindrome-checker-freecodecamp",
    tech: ["JavaScript"],
    type: "learning"
  },
  {
    title: "Cash Register",
    description: "A JavaScript function that calculates change for a transaction based on available cash-in-drawer. Built for FreeCodeCamp’s JavaScript Algorithms and Data Structures certification using nested arrays, loops, and conditional logic.",
    link: "https://github.com/CreatedByCC/cash-register-freecodecamp",
    tech: ["JavaScript"],
    type: "learning"
  },
  {
    title: "Caesar’s Cipher",
    description: "A JavaScript function that decodes ROT13-encoded strings by shifting each letter 13 places in the alphabet. Built for FreeCodeCamp’s JavaScript Algorithms and Data Structures certification using loops, conditionals, and character codes.",
    link: "https://github.com/CreatedByCC/caesars-cipher-freecodecamp",
    tech: ["JavaScript"],
    type: "learning"
  },
  {
    title: "GitHub Repo Gallery",
    description: "A dynamic webpage that fetches and displays repositories from a GitHub profile using the GitHub API. Visitors can click on individual repos to view more details. Built with HTML, CSS, and JavaScript to practice API integration and DOM manipulation.",
    link: "https://github.com/CreatedByCC/github-repo-gallery",
    demo: "https://createdbycc.github.io/github-repo-gallery/",
    tech: ["JavaScript", "HTML", "CSS", "GitHub API"],
    type: "learning",
    image: "./project-images/github-repo-gallery.jpg"
  },
  {
    title: "Guess the Word",
    description: "A browser-based word-guessing game where players have 8 attempts to guess the correct word. Built with HTML, CSS, and JavaScript to practice DOM manipulation, event handling, and game logic.",
    link: "https://github.com/CreatedByCC/guess-the-word",
    demo: "https://createdbycc.github.io/guess-the-word/",
    tech: ["JavaScript", "HTML", "CSS"],
    type: "learning",
    image: "./project-images/guess-the-word.jpg"
  },
  {
    title: "Image Generator",
    description: "A simple webpage that generates a random image when the button is clicked. Built with HTML, CSS, and JavaScript to practice API integration and DOM manipulation.",
    link: "https://github.com/CreatedByCC/image-generator",
    demo: "https://createdbycc.github.io/image-generator/",
    tech: ["JavaScript", "HTML", "CSS"],
    type: "learning",
    image: "./project-images/image-generator.jpg"
  },
  {
    title: "Subscription Calculator",
    description: "A responsive webpage that calculates the cost of various subscription plans over different durations. Built with HTML, CSS, and JavaScript to practice modular functions, layout design, and user input handling.",
    link: "https://github.com/CreatedByCC/sub-calculator",
    demo: "https://createdbycc.github.io/sub-calculator/",
    tech: ["JavaScript", "HTML", "CSS"],
    type: "learning",
    image: "./project-images/subscription-calculator.jpg"
  },
];

export default projects;