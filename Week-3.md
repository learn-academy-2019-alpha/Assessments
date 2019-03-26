Week 3 Assessment
Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

False: React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)

React is a modern, efficient answer to complex UI applications

React is a full stack framework for modern web applications

False: React is a flexible library that plays the role of V in an MVC framework

2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.
//Your Answer
    A "smart" component is a component with state and a dumb component is one without state. It is useful to have states in components so that you can manipulate objects that you create in your program.

//Googled Answer

3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?
//Your Answer
    Yarn add installs what you need to create your first React app.  Yarn start automatically creates a directory called 'sample-app' in your current directory with all of the starter files already included.

//Googled Answer

5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:
import React, { Component } from 'react';

class Recipes extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: [
          {name: 'Meatballs'},
          {name: 'Mac & Cheese'}
      ]
    }
  }

  render() {

    return (

      let recipes = this.state.recipes.map(function(recipe){
        return(
          <li key={recipe.name}>{recipe.name}</li>
        )
      })

      <ul>
        {this.state.recipes}
      </ul>
    );
  }
}

export default Recipes;
6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)
//Your Answer
    Three html input types are password, number, and checkbox.

//Googled Answer

7. How would you explain state to a friend who doesn't know code?
//Your Answer
    I would say that "state" is a way of keeping track of and manipulating objects. I would also say that state can be useful for other things besides coding.

//Googled Answer

8. What is the difference between component state and props? Your answer should include a short explanation of both.
//Your Answer
    Component state refers to the objects that were set up in the component and props are the information from a parent component that are passed to its child components.

//Googled Answer

9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.
    Overall, I had a positive experience with creating the tic-tac-toe game, although it was very frustrating at times. I had a helpful partner throughout the whole process, so I am extremely thankful for that. I would say that I have gained a lot of experience with React state and props from this project.
