import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const quizzes = [
  {
    _id: uuid(),
    title: "The Office",
    totalScore: 20,
    thumbnail:
      "https://ntvb.tmsimg.com/assets/p7893514_b_h8_ab.jpg?w=1280&h=720",
    mcqs: [
      {
        _id: uuid(),
        question:
          "What is the name of the company that acquires Dunder Mifflin?",
        options: ["Sabre", "Provean", "Decovo", "Zonos"],
        answer: 1,
      },
      {
        _id: uuid(),
        question: "What color shirt does Dwight typically wear to work?",
        options: [
          "Ketchup red",
          "Rust brown",
          "United Nations Blue",
          "Mustard Yellow",
        ],
        answer: 4,
      },
      {
        _id: uuid(),
        question: "What is Meredith's last name?",
        options: ["Scott", "Vance", "Kapoor", "Palmer"],
        answer: 4,
      },
      {
        _id: uuid(),
        question: "Where do The Dundies take place in the second season?",
        options: [
          "A tavern called 'Oz'",
          "A park down the street",
          "The Scranton Convention Center",
          "The local Chili's restaurant",
        ],
        answer: 4,
      },
      {
        _id: uuid(),
        question: "What department does Creed Bratton work in?",
        options: [
          "Customer Service",
          "Quality Assurance",
          "Accounting",
          "Sales",
        ],
        answer: 2,
      },
    ],
    categoryName: "TV Shows",
  },
  {
    _id: uuid(),
    title: "Friends",
    totalScore: 20,
    thumbnail:
      "https://setmywed.com/blog/wp-content/uploads/2020/06/Friends.jpg",
    mcqs: [
      {
        _id: uuid(),
        question: "Who are Monica and Ross' parents?",
        options: [
          "Jack and Judy",
          "Gerry and Mary",
          "Garry and Margaret",
          "Jack and Jill",
        ],
        answer: 1,
      },
      {
        _id: uuid(),
        question: "How many times was Ross legally divorced?",
        options: ["3", "4", "5", "6"],
        answer: 1,
      },
      {
        _id: uuid(),
        question:
          "Which of the following ingredients were not in Rachel's Thanksgiving trifle?",
        options: [
          "Ladyfingers and jam",
          "Beef with peas and onions",
          "Bananas and custard",
          "Raisins and cream",
        ],
        answer: 4,
      },
      {
        _id: uuid(),
        question: "What job did Monica's older boyfriend Richard have?",
        options: ["Dentist", "Ophthalmologist", "Professor", "Stockbroker"],
        answer: 2,
      },
      {
        _id: uuid(),
        question:
          "Who was briefly roommates with Australian dancer Janine Lacroix?",
        options: ["Rachael", "Ross", "Joey", "Chandler"],
        answer: 3,
      },
    ],
    categoryName: "TV Shows",
  },
  {
    _id: uuid(),
    title: "Schitts Creek",
    totalScore: 20,
    thumbnail:
      "https://wehoville.com/wp-content/uploads/2021/04/maxresdefault.jpg",
    mcqs: [
      {
        _id: uuid(),
        question:
          "Why did Johnny originally purchase the town of Schitt's Creek?",
        options: [
          "For Alexis",
          "For David",
          "As a gift for Moira",
          "For Rose Video store",
        ],
        answer: 2,
      },
      {
        _id: uuid(),
        question: "What is the name of the town's mayor?",
        options: ["Mike", "Roland", "Johnny", "Mutt"],
        answer: 4,
      },
      {
        _id: uuid(),
        question: "What does the sign that Roland adds to the town sign say?",
        options: [
          "It's not polite to stare!",
          "We're family!",
          "Schitt welcomes you home",
          "Don't worry, it's his sister.",
        ],
        answer: 4,
      },
      {
        _id: uuid(),
        question:
          "What recipe are Moira and David trying to make when they fold in the cheese?",
        options: ["Mac and Cheese", "Quesadillas", "Lasagna", "Enchiladas"],
        answer: 4,
      },
      {
        _id: uuid(),
        question: "What gift does Mutt surprise Alexis with?",
        options: ["A pair of shoes", "A bike", "A pair of glasses", "A dog"],
      },
    ],
    categoryName: 2,
  },
  {
    _id: uuid(),
    title: "React",
    totalScore: 20,
    thumbnail: "https://www.scnsoft.com/blog-pictures/cover-pics/react_js.png",
    mcqs: [
      {
        _id: uuid(),
        question:
          "What command is used to start the React local development server?",
        options: ["npm run dev", "npm build", "npm serve", "npm start"],
        answer: 4,
      },
      {
        _id: uuid(),
        question: "What is the children prop?",
        options: [
          "A property that lets you pass data.",
          "A property to nest components.",
          "A property to set an object as property",
          "A property to add child values to state",
        ],
        answer: 2,
      },
      {
        _id: uuid(),
        question:
          "A copy of the 'real' DOM that is kept in memory is called what?",
        options: ["Shadow DOM", "DOM", "Virtual DOM", "React DOM"],
        answer: 3,
      },
      {
        _id: uuid(),
        question:
          "Which operator can be used to conditionally render a React component?",
        options: ["&&", "||", "?", "!"],
        answer: 1,
      },
      {
        _id: uuid(),
        question:
          "When rendering a list using the JavaScript map() method, what is required for each element rendered?",
        options: ["key", "index", "data", "id"],
        answer: 1,
      },
    ],
    categoryName: "Technology",
  },
  {
    _id: uuid(),
    title: "Chess",
    totalScore: 20,
    thumbnail:
      "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1177",
    mcqs: [
      {
        _id: uuid(),
        question: "How many squares are there on a chess board?",
        options: ["32", "64", "99", "65"],
        answer: 2,
      },
      {
        _id: uuid(),
        question: "Who were the opponents in the famous Evergreen Game?",
        options: [
          "Adolf Anderssen vs. Jean Dufresne",
          "Paul Morphy vs. Howard Staunton",
          "Wilhelm Steinitz vs. Emanuel Lasker",
          "Jose Raul Capablanca vs. Alexander Alekhine",
        ],
        answer: 1,
      },
      {
        _id: uuid(),
        question: "Who was the first official World Chess Champion?",
        options: [
          "Garry Kasparov",
          "Bobby Fischer",
          "Wilhelm Steinitz",
          "Paul Morphy",
        ],
        answer: 3,
      },
      {
        _id: uuid(),
        question:
          "Other than world champion, what is the highest title a chess player can earn?",
        options: ["Master", "Grandmaster", "Expert", "Challenger"],
        answer: 2,
      },
      {
        _id: uuid(),
        question:
          "What is the name of the chess piece that can move diagonally?",
        options: ["Bishop", "Rook", "Queen", "Knight"],
        answer: 1,
      },
    ],
    categoryName: "Sports",
  },
];
