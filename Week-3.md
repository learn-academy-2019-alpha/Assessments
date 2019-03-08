### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React is a modern, efficient answer to complex UI applications
- React is a flexible library that plays the role of V in an MVC framework

 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer

 The "dumb" components simply collect your component calls (ex: <Search />) to display them. They contain no logic of how the components actually operate. The "smart" components contain your logic and the code that actually makes the component work, aka "smart".

 //Googled Answer

 Basically the same answer as above.

#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

 //Your Answer

Yarn add is adding the package that we call. So if we call `yarn add react`, it will install the react package. The `package.json` file will always be updated after adding a package wih yarn.

 //Googled Answer

 Yarn add package-name installs the “latest” version of the package.
 In general, a package is simply a folder with code and a package.json file that describes the contents.

#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';


    class Recipes extends Component {
      constructor(props){
        super(props)
        this.state = {
          recipes:
            name: ['Meatballs', 'Mac & Cheese']
        }
      }

      render() {
        return (
          let recipesList = this.state.recipes.map((recipe, index) => {
              <li key={index}>{recipe}</li>
          )})

          <ul>
            {recipesList}
          </ul>
        );
      }
    }

    export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer

<input type="button">
<input type="radio">
<input type="submit">

 //Googled Answer

 Basically what I answered above.

 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer

 State is the current value of an attribute. So lets say we wanted to address the color of your eyes. The color of your eyes would be stored into the state of "eye color". If your eyes are blue, the state value of eye color would be equal to blue.

 //Googled Answer

 The heart of every React component is its “state”, an object that determines how that component renders & behaves.

 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer

 Component state is the state values that reside inside of the component itself. Component props are the state values that are passed into the component.

 //Googled Answer

 A state in React Component is its own local state, the state cannot be accessed and modified outside the component and can only be used inside the component which is very similar to, you already guessed it a function own local scope.

 A React component is a reusable component which can be used over and over again in the UI, but not always we are going to render the same component with same data. Sometimes we have to change the data or content inside a component. That’s why props are introduced in React.

#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

My experience with tic-tac-toe was good. I spent the weekend before building it with a walkthrough online because I was concerned about my ability to fully build tic-tac-toe on my own. I'm glad I did this because it helped me understand key aspects of React. Additionally, I built tic-tac-toe a few more times, on my own, to further grasp React. For me, it's all about repetition. The more I do something, the clearer it becomes.

Ps. The Tripod is the All-Star group as we work extremely diligently together. A possible future pairing of the Tripod on a group project will most likely produce amazing results.
