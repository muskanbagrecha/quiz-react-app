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
      {
        _id: uuid(),
        question:
          "Which of the following was not the name of one of Alice and Frank Jr.'s kids?",
        options: ["Leslie", "Ursula", "Chandler", "Frank Jr. Jr."],
        answer: 2,
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
        question: "Which season Harvey is the Most Badass One",
        options: ["Season 1", "Season 2", "Season 6", "Every Season"],
        answer: 4,
      },
      {
        _id: uuid(),
        question: "In which season does Mike was imprisoned",
        options: ["Season 3", "Season 5", "Season 7", "Season 4"],
        answer: 4,
      },
      {
        _id: uuid(),
        question: "Harvey had what kind of emotional problems",
        options: ["Attachment Issues", "Panic Attack", "Trauma", "Stress"],
        answer: 1,
      },
    ],
    categoryName: "TV Shows",
  },
  {
    _id: uuid(),
    title: "React",
    totalScore: 20,
    thumbnail: "https://www.scnsoft.com/blog-pictures/cover-pics/react_js.png",
    mcqs: [
      {
        _id: uuid(),
        question: "Which season Harvey is the Most Badass One",
        options: ["Season 1", "Season 2", "Season 6", "Every Season"],
        answer: "Every Season",
      },
      {
        _id: uuid(),
        question: "In which season does Mike was imprisoned",
        options: ["Season 3", "Season 5", "Season 7", "Season 4"],
        answer: "Season 4",
      },
      {
        _id: uuid(),
        question: "Harvey had what kind of emotional problems",
        options: ["Attachment Issues", "Panic Attack", "Trauma", "Stress"],
        answer: "Attachment Issues",
      },
    ],
    categoryName: "Technology",
  },
];
