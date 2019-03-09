### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:


- React is a modern, efficient answer to complex UI applications

- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer
 A smart component is a component that holds the logic of your program where as a dumb component generally holds little to no logic. The reason we bother to make the distinction between them is to keep the work flow clear and concise. A dumb component can be passed around a program without a second thought, but a smart component would need some thinking before being passed around.


 //Googled Answer
 Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. Once that is done, the component is done with it.

 Smart components (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works.


#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer
 yarn add installs a package and it's dependencies to your machine. Your package.json and yarn.lock files will always be updated when using yarn add.


 //Googled Answer


#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes extends Component {    //Needs to inherit the component class
      constructor(props){
        super(props)
        this.state = {
          recipes:[
            {name: 'Meatballs'},
            {name: 'Mac & Cheese'}]    //Needs to be wrapped in brackets, not sure if objects can be in state?

        }
      }

      render() {

        return (
          <div>    //Needs <div> tag
          let recipes = this.state.recipes.map(function(recipe){
            return(
              <li key={recipe.name}>{recipe.name}</li>
            )
          })

          <ul>
            {recipes}
          </ul>
          </div>    // Closing </div> tag
        );
      }
    }

    export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer
  I honestly don't know three html input types.

 //Googled Answer
 button, date, url


 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer
 I would explain state by comparing it a persons mood. Depending on what you do or what happens to you during the day your mood changes. State works in a similar way by being able to change depending on how you affect it.

 //Googled Answer


 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer
 Component state is the state of that specific component and can be changed within it via setState. Prop state is just the instance of the parent components state being passed down to a child component and cannot be changed via setState.

 //Googled Answer


#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

My experience with tic-tac-toe was overall very positive. Being able to pass props around and manipulate them within the child helped with my understanding of inheritance. I learned that information isn't actually passed back to the parent. Instead information is being used within the child and then being rendered from within. Building the application from scratch gave me a better appreciation of how much time goes into all of the complex apps and websites that I use today. I enjoy using React.
