### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)
- React is a modern, efficient answer to complex UI applications
###- React is a full stack framework for modern web applications
- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.

 //your answer
Dumb: a components without a state.
Smart: a component with a state.
We make a distinction because components with a state have more to maintain and are more involved.

 //Googled Answer
Smart components care more about how the rest of the code works.

#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

 //Your Answer
Yarn is adding a file.

 //Googled Answer
Yarn is adding a new package.  The dependencies are automatically updated.

#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes extends Components{
      constructor(props){
        super(props)
        this.state = {
          recipes:
            {name: 'Meatballs'},
            {name: 'Mac & Cheese'}
        }
      }

      render() {
        return (
        <div>
          <ul>
          {this.state.recipes.map(function(recipe){
                  return(
                  <li key={recipe.name}>{recipe.name}</li>
                  )
                })}
          </ul>
        </div>
        )
      }
    }

    export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer
Number, Button, Click

 //Googled Answer
Number, Button, Password

 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer
State is all the maintained attributes of a set of code.

 //Googled Answer
State is the information that influences the output of render.

 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.

 //Your Answer
State is the locally maintained data that determined render.  Props is parts of the state being passed to functions.

 //Googled Answer
State is the locally maintained data within a component.  Props is parts of the state being passed to the component.

#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

Tic-tac-toe was a very good learning experience.  I learned more about behind-the-scenes state and data management as well as well as how to maintain game states.  I am really liking React.  After the initial building of the frame, it is much simpler to make changes to parts of the code and not have to worry about the rest.  I have also learned that I like building from scratch and seeing the app at each stage of the build.
