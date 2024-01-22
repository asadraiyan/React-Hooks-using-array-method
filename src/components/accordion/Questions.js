export const questions = [
  {
    id: 1,
    question: "What is React.js and why is it used?",
    answer:
      "React.js is a JavaScript library for building user interfaces, particularly for single-page applications. It is used for creating reusable UI components that efficiently update and render when the underlying data changes, providing a more efficient and seamless user experience.",
  },
  {
    id: 2,
    question: "Explain the Virtual DOM in React.",
    answer:
      "The Virtual DOM is a lightweight copy of the actual DOM in memory. React uses it to optimize updates by comparing the current Virtual DOM with a previous snapshot. When changes occur, React calculates the most efficient way to update the actual DOM, minimizing unnecessary manipulations and improving performance.",
  },
  {
    id: 3,
    question: "What is JSX in React?",
    answer:
      "JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML elements and components in a syntax similar to XML or HTML. JSX makes it easier to write and understand React components. It is not mandatory, but it is a recommended practice in React development.",
  },
  {
    id: 4,
    question: "Explain the concept of state in React.",
    answer:
      "In React, the state is an object that represents the current condition of a component. It can be changed over time in response to user actions or other events. When the state of a component changes, React re-renders the component, reflecting the updated state on the user interface.",
  },
  {
    id: 5,
    question: "What are controlled and uncontrolled components in React?",
    answer:
      "Controlled components are React components whose state is controlled by React. They receive the current state and updates via props, and they typically have a callback function that modifies the state. Uncontrolled components, on the other hand, store their state in the DOM and are not controlled by React. They are often used when integrating with non-React code or libraries.",
  },
];
