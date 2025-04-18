
const posts = [
    {
      id: 1,
      title: "How to Start with React",
      excerpt: "Learn the basics of React in this beginner-friendly guide.",
      date: "April 18, 2025",
      image: "/images/img3.jpg",
      content: `
React is a JavaScript library for building user interfaces. It’s component-based and declarative, making it easy to build complex UIs.

**Getting started**: use \`npx create-react-app my-app\` or use Vite for faster builds.

Why React?
- Reusable components
- Fast rendering with Virtual DOM
- Great ecosystem and community

Explore further with hooks like \`useState\`, \`useEffect\`, and libraries like React Router.
    `,
     

    },
    {
      id: 2,
      title: "Tailwind CSS v4 Overview",
      excerpt: "What’s new in Tailwind v4 and why it’s a game-changer.",
      date: "April 17, 2025",
      image: "/images/img2.jpg",
      content: `
      Tailwind CSS v4 introduces major improvements in performance and developer experience.
      
      **New in v4**:
      - Lightning-fast build time
      - Tree-shaking improvements
      - Updated design tokens and default spacing
      
      Tailwind empowers developers to build clean, responsive UIs with utility classes. Combine it with React for ultimate frontend flow.
          `,
    },
    {
      id: 3,
      title: "Building Interactive UIs",
      excerpt: "Tips for creating smooth, interactive frontend experiences.",
      date: "April 16, 2025",
      image: "/images/img1.jpg",

      content: `
## Introduction
Building interactive UIs requires not only technical knowledge but also an understanding of the user's experience. Smooth transitions, animations, and intuitive controls are all part of the design principles that make your frontend engaging and responsive.

## 1. Focus on User Interaction
The most important part of building interactive UIs is understanding **how users interact with your app**. Whether it's a simple button or a complex form, the interaction should feel natural and intuitive.

### Tips:
- **Hover effects**: Use subtle hover effects on buttons or links to indicate interaction.
- **Focus states**: Provide a clear focus state on interactive elements for accessibility.

## 2. Animations and Transitions
Animations bring life to a UI, but they must be used thoughtfully. Well-designed transitions and animations make the UI feel responsive and can guide the user through tasks.

### Tips:
- **CSS Animations**: Use CSS transitions for smooth visual effects. For example:
  `,

    },
  ];
  
  export default posts;
  