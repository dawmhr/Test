export type Answer = {
  label: string;
  value: string;
};

export type Question = {
  key: number;
  question: string;
  correct: string;
  answer: Answer[];
};

export const useQuestion = () => {
  const QUESTION_LIST: Question[] = [
    {
      key: 1,
      question:
        "What is Webpack and what is its primary purpose in a React project?",
      correct: "moduleBundling",
      answer: [
        { label: "A testing library", value: "testingLibrary" },
        { label: "A task runner", value: "taskRunner" },
        { label: "A module bundler", value: "moduleBundling" },
        { label: "A state management library", value: "stateManagement" },
      ],
    },
    {
      key: 2,
      question: "What is the purpose of the webpack-dev-server?",
      correct: "developmentServer",
      answer: [
        { label: "Database server for Webpack", value: "databaseServer" },
        {
          label: "Development server for live reloading",
          value: "developmentServer",
        },
        {
          label: "Build server for production deployment",
          value: "buildServer",
        },
        {
          label: "Package manager for webpack plugins",
          value: "packageManager",
        },
      ],
    },
    {
      key: 3,
      question:
        "How can you split your code into smaller chunks for better performance using Webpack?",
      correct: "codeSplitting",
      answer: [
        { label: "Code merging", value: "codeMerging" },
        { label: "Code splitting", value: "codeSplitting" },
        { label: "Code duplication", value: "codeDuplication" },
        { label: "Code optimization", value: "codeOptimization" },
      ],
    },
    {
      key: 4,
      question: "What is the purpose of the Webpack Loader concept?",
      correct: "fileTransformation",
      answer: [
        { label: "Code splitting", value: "codeSplitting" },
        { label: "File transformation", value: "fileTransformation" },
        { label: "Code merging", value: "codeMerging" },
        { label: "Code linting", value: "codeLinting" },
      ],
    },
    {
      key: 5,
      question: "How does Webpack handle CSS in a React project?",
      correct: "styleLoader",
      answer: [
        {
          label: "CSS is not supported in React projects",
          value: "notSupported",
        },
        { label: "CSS is handled by the browser", value: "handledByBrowser" },
        {
          label: "CSS is manually included in the HTML file",
          value: "manuallyIncluded",
        },
        {
          label: "Webpack Style Loader processes and bundles CSS",
          value: "styleLoader",
        },
      ],
    },
    {
      key: 6,
      question: "What is TypeScript, and how does it differ from JavaScript?",
      correct: "staticTyping",
      answer: [
        { label: "A JavaScript framework", value: "framework" },
        {
          label: "A superset of JavaScript with static typing",
          value: "staticTyping",
        },
        { label: "A testing library for JavaScript", value: "testingLibrary" },
        { label: "A build tool for JavaScript projects", value: "buildTool" },
      ],
    },
    {
      key: 7,
      question: "What is the purpose of TypeScript interfaces?",
      correct: "typeChecking",
      answer: [
        { label: "Managing state in React", value: "stateManagement" },
        {
          label: "Type checking and defining contracts",
          value: "typeChecking",
        },
        { label: "Handling asynchronous tasks", value: "asyncTasks" },
        { label: "Styling components in React", value: "styling" },
      ],
    },
    {
      key: 8,
      question:
        "How does TypeScript support object-oriented programming concepts?",
      correct: "classesAndInheritance",
      answer: [
        {
          label: "Through functional programming",
          value: "functionalProgramming",
        },
        { label: "Using mixins", value: "mixins" },
        { label: "Classes and inheritance", value: "classesAndInheritance" },
        { label: "Singleton patterns", value: "singletonPatterns" },
      ],
    },
    {
      key: 9,
      question: 'What is the purpose of TypeScripts "strict" mode?',
      correct: "enhancedTypeChecking",
      answer: [
        { label: "Disabling type checking", value: "disableTypeChecking" },
        { label: "Enabling dynamic typing", value: "dynamicTyping" },
        {
          label: "Enhancing type checking with stricter rules",
          value: "enhancedTypeChecking",
        },
        {
          label: "Removing all type annotations",
          value: "removeTypeAnnotations",
        },
      ],
    },
    {
      key: 10,
      question: "How can you use TypeScript with React?",
      correct: "tsxFiles",
      answer: [
        { label: "By using JavaScript files only", value: "jsFiles" },
        {
          label: "By using TypeScript files with the .ts extension",
          value: "tsFiles",
        },
        {
          label: "By using JSX files with the .jsx extension",
          value: "jsxFiles",
        },
        {
          label: "By using TypeScript files with the .tsx extension",
          value: "tsxFiles",
        },
      ],
    },
    {
      key: 11,
      question:
        "What is the purpose of CSS-in-JS libraries like Styled Components?",
      correct: "stylingReactComponents",
      answer: [
        { label: "Managing state in React", value: "stateManagement" },
        { label: "Handling asynchronous tasks", value: "asyncTasks" },
        { label: "Styling React components", value: "stylingReactComponents" },
        { label: "Managing forms in React", value: "formManagement" },
      ],
    },
    {
      key: 12,
      question: "How does SCSS differ from CSS?",
      correct: "syntacticSugar",
      answer: [
        {
          label: "SCSS is a completely different programming language",
          value: "differentLanguage",
        },
        { label: "SCSS is a subset of CSS", value: "subsetOfCSS" },
        {
          label: "SCSS is written in a functional programming style",
          value: "functionalStyle",
        },
        {
          label: "SCSS provides syntactic sugar and additional features to CSS",
          value: "syntacticSugar",
        },
      ],
    },
    {
      key: 13,
      question:
        "What are the benefits of using Styled Components in a React project?",
      correct: "scopedStyles",
      answer: [
        { label: "Global styles and shared classes", value: "globalStyles" },
        { label: "Performance optimization", value: "performanceOptimization" },
        {
          label: "Scoped styles and automatic class generation",
          value: "scopedStyles",
        },
        {
          label: "Inline styles for better flexibility",
          value: "inlineStyles",
        },
      ],
    },
    {
      key: 14,
      question: "How can you apply conditional styles in Styled Components?",
      correct: "usingProps",
      answer: [
        { label: "Using global CSS classes", value: "globalClasses" },
        { label: "Using media queries", value: "mediaQueries" },
        {
          label: "Using state and lifecycle methods",
          value: "stateAndLifecycle",
        },
        { label: "Using props and dynamic styling", value: "usingProps" },
      ],
    },
    {
      key: 15,
      question: "What is the purpose of CSS preprocessors like Sass or SCSS?",
      correct: "codeOrganization",
      answer: [
        { label: "Reducing file size of CSS files", value: "reduceFileSize" },
        {
          label: "Improving browser compatibility",
          value: "browserCompatibility",
        },
        {
          label:
            "Code organization and reusability with features like variables and mixins",
          value: "codeOrganization",
        },
        {
          label: "Enabling advanced animations and transitions",
          value: "advancedAnimations",
        },
      ],
    },
    {
      key: 16,
      question: "What is the purpose of unit testing in a React application?",
      correct: "isolateAndVerify",
      answer: [
        {
          label: "Ensuring perfect user experience",
          value: "perfectExperience",
        },
        {
          label: "Checking overall application performance",
          value: "performanceCheck",
        },
        {
          label:
            "Isolating and verifying the correctness of individual units of code",
          value: "isolateAndVerify",
        },
        {
          label: "Testing the application in a production-like environment",
          value: "productionEnvironment",
        },
      ],
    },
    {
      key: 17,
      question: "What is Jest, and how does it relate to React testing?",
      correct: "testingFramework",
      answer: [
        {
          label: "A styling library for React components",
          value: "stylingLibrary",
        },
        { label: "A server-side rendering tool for React", value: "ssrTool" },
        {
          label: "A testing framework commonly used for React applications",
          value: "testingFramework",
        },
        {
          label: "A state management library for React",
          value: "stateManagement",
        },
      ],
    },
    {
      key: 18,
      question: "What is the purpose of the React Testing Library?",
      correct: "userCentricTesting",
      answer: [
        {
          label: "Performance testing for React components",
          value: "performanceTesting",
        },
        { label: "Unit testing for React components", value: "unitTesting" },
        {
          label: "User-centric testing by simulating user interactions",
          value: "userCentricTesting",
        },
        {
          label: "Backend API testing for React applications",
          value: "apiTesting",
        },
      ],
    },
    {
      key: 19,
      question:
        'What is the significance of the "act" function in React testing?',
      correct: "updateAndReRender",
      answer: [
        {
          label: "Mocking external dependencies",
          value: "mockingDependencies",
        },
        { label: "Measuring code coverage", value: "codeCoverage" },
        {
          label: "Updating and re-rendering components in a synchronous way",
          value: "updateAndReRender",
        },
        { label: "Testing asynchronous code", value: "asyncTesting" },
      ],
    },
    {
      key: 20,
      question: "How can you test asynchronous code in a React component?",
      correct: "usingAsyncAwait",
      answer: [
        {
          label: "By avoiding asynchronous operations in tests",
          value: "avoidingAsync",
        },
        { label: "Using timeouts for delaying actions", value: "timeouts" },
        {
          label:
            "Using async/await syntax or promises for asynchronous testing",
          value: "usingAsyncAwait",
        },
        {
          label: "Manually triggering asynchronous events in tests",
          value: "manualTriggering",
        },
      ],
    },
  ];

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledQuestions = shuffleArray([...QUESTION_LIST]);

  // Shuffle the answer arrays for each question
  const shuffledQuestionsWithAnswers = shuffledQuestions.map((question : Question) => {
    const shuffledAnswers = shuffleArray(question.answer);
    return { ...question, answer: shuffledAnswers };
  });

  const randomQuestions = () => {
    return shuffledQuestionsWithAnswers;
  };

  return {
    randomQuestions,
  };
};
