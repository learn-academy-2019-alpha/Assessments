### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

<!-- - React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs) -->
- React is a modern, efficient answer to complex UI applications
<!-- - React is a full stack framework for modern web applications -->
- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer: Smart components is where all the logic is displayed, and should hold most of the code for your app. The dumb components should be the bare minimum meaning they dont have any logic within them and is just being displayed. Also the smart components control the dumb ones.


 //Googled Answer


#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer: Yarn add ... will add packages that you want to your project. The file that will be automatically updated are you dependencies.


 //Googled Answer


#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

1) need to have class extends recipes
2) Need to put div to wrap around li and ui
3) get rid of let recipe = from return

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

 //Your Answer: button, radio and date


 //Googled Answer


 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer: I would explain state to a friend as the default data that we can later change in our code. For example a stoplight is red, but we can change it to green.


 //Googled Answer


 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer: Component state is where the default values of your data is stored. A prop is used to transfer over functions to other components. The parent component allows the child component to use its functional code as a "prop" however is still maintained in the parent component.


 //Googled Answer


#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

Tic-tac-toe was actually really challenging at first. I didn't really understand react well enough but I decided to go attempt and do it with Jess and Maria who were huge in helping me further the knowledge. I definitely need to study React more. I understand how props work and what state is, but I need to practice how to write it. I can look at the screen and tell you what its doing but I cant write it on my own yet and I need to be able to do that soon (hopefully). Building tic tac toe from scratch felt really good as we did complete the project, however it felt like I didn't have a 100% grasp on everything we did.
Collapse
