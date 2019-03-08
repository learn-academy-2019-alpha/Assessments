Carrie Johnson
### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React is a modern, efficient answer to complex UI applications
- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer
"smart(logic)" is where all your code would be, executing
"dumb(logic)" is where code is recalled

 //Googled Answer
#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

 //Your Answer
"yarn add" will add the JSON packed file

 //Googled Answer
"yarn add aides the files and it's adding it to the package.json and yarn.lock which is what is always being updated"

#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React from 'react';

    class Recipes extends React.Component {
      constructor(props){
        super(props)
        this.state = {
          recipes:
            name: ['Meatballs', 'Mac & Cheese']

        }
      }

      render() {

        return (
          recipes = this.state
          let newRecipe = this.state.recipes.map(function(recipe, index) => {
            return(
              <li key={recipe.name}>{recipe.name}</li>
            )})

          <ul>
            {newRecipes}
          </ul>
        );
      }
    }

    export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer
<input type="button">
<input type="image">
<input type="month">

 //Googled Answer
See above.

 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer
State means storing values so you can use them else where in your code.

 //Googled Answer
State is an implementation of the State pattern in JavaScript. ... The State pattern simply says that you can say an object is in a certain state, and some of its behavior changes accordingly. The responsibility of changing an object's state is left entirely up to the developer.

 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer
Component state is an object managed in a component
Props are not fun and give us the ability to pass down state values to other components.

 //Googled Answer


#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

My group, the Tripod, mob programmed. We learned a lot from each other especially since we each have different strengths and weaknesses. We could pick up where one could not and that was especially helpful. The original framework was very difficult, my difficulty was thinking about what came first and trying to grasp what to code and in what order. I learn by repetition and that was especially useful in this exercise.
