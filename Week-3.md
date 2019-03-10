### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:


- React is a modern, efficient answer to complex UI applications
- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer - smart(logic) components are the components that contains the logics and state. smart component control the dumb components by passing props. The dump components are responsible for display the props that are passed from the smart or logic component.  


 //Googled Answer - Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. Once that is done, the component is done with it. Smart components (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works.


#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer - yarn add will add packages


 //Googled Answer - Add package to dependencies


#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes extends Component {
      constructor(props){
        super(props)
        this.state = {
          recipes:
            [{name: 'Meatballs'},
            {name: 'Mac & Cheese'}]

        }
      }

      render() {

        return (
          <div>
          {this.state.recipes.map(function(recipe){
            return(
              <li key={recipe.name}>{recipe.name}</li>
            )
          })}
          </div>

        );
      }
    }

    export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer - Textarea , Radio button, dropdown list


 //Googled Answer - Checkbox, submit, range input


 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer - State is a part of a class component that contains the properties that are passed and rendered


 //Googled Answer - React states are objects that are managed within a component. We can use the state object to represent instances of our visual displays.


 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer - state is an object is that contains properties that can be changed. props are objects that are passed down from one component to another.


 //Googled Answer - React states are objects that are managed within a component. We can use the state object to represent instances of our visual displays. Props give us the ability to pass data between components


#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.
 -React is by far the hardest topic I had to learn but after practicing for a few weeks it is becoming more clear. The biggest challenges of React for me was the interaction between component. In particular, how we pass props from the smart component to the dumb component. Although I understood the concepts of props and state, it was hard for me to implement what I understood. One of the biggest breakthroughs I had was when we created treasure hunt with Matt. Going through the setting up React in atom and the setting up the component to pass props from another component helped me visualize what I was struggling with. So when I start working on tic-tac-toe it was easy for me to get start on the project. Although, there was some difficulty on the way it was easier to overcome it. Some concepts that stood out for me about react would be how everything is broken down to components, and how react combine HTML tags and JavaScript. Building something from scratch by myself was really exciting.
