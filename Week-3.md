### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)
- React is a modern, efficient answer to complex UI applications

- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer
smart components are components with a state, and dumb are ones without a state. This is an important distinction because of the role that state has within a component and how that state can be carried about the entire application.

 //Googled Answer


#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?
 //Your Answer
yarn adds packages. Dependencies will be automatically updated.

 //Googled Answer


#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes extends Component {
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
          {this.state.recipes.map(function(recipe)}{
            return(
              <li key={recipe.name}>{recipe.name}</li>
            )
          })

          <ul>
            {recipes}
          </ul>

          </div>
        );
      }
    }

    export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer
button, image, sumbit.

 //Googled Answer


 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer
State is information that is stored and remembered. almost like a default position. Say each person has their normal state, if someone gets very happy or very sad, there is a change to their state and the new state they are in is their current state. This is like programming where the state is set as something, and can always be referenced. When we promt code to change the state, we can set that change as the current state.

 //Googled Answer


 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer
we need props to pass things from one component to another.

 //Googled Answer
We used one react component in multiple places here but with a different name. As you can see we can pass props to our React component using attributes and then can access them inside our component using this.props pretty straightforward. Props are similar to passed arguments to a function.

#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

i found it very difficult to build the code from scratch. I can understand the code when i see it played out on the screen, but creating it myself is the difficult part. I think it was difficult just because i wasnt fully confident in the material yet. It was a little confusing of what needed to get passed where, but i think repetition will be what helps me get it down. 
