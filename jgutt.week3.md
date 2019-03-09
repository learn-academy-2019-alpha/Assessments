### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

-
- React is a modern, efficient answer to complex UI applications
- React is a full stack framework for modern web applications
- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer
smart components have state and state can be manipulated. dumb components have props and just display content.
 //Googled Answer
Smart components (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works. Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. Once that is done, the component is done with it.

#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer
yarn add installs a new package or the latest version of the package

 //Googled Answer
yarn add file:/path/to/local/folder installs a package that is on your local file system. This is useful to test out other packages of yours that haven’t been published to the registry. must be prefaced by file:

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

          let recipes = this.state.recipes.map(function(recipe, index){
            return(
              <li key={recipe.index}>{recipe.name}</li>
            )
          })

          <ul>
            {recipes}
          </ul>
        );
      }
    }

    export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer
text, button, ?

 //Googled Answer
 <input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text">
<input type="time">
<input type="url">
<input type="week">


 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer
there is a main component that holds and manages all values. this is state.

 //Googled Answer
state is managed within the component (similar to variables declared within a function).

 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer
the component with state manages all variables and methods. props display teh values that state has declared or manipulated

 //Googled Answer
 props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).

#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.
react was a struggle for me. it highlighted that my expectations of myself are too high and that im a perfectionist... when i didnt immediately pick up new information, i was so frustrated. it was nice that tic tac toe was on a monday and tuesday. it allowed me a weekend to absorb the week prior's information and then reflect on what would help me be successful building tic tac toe. my strength through this bootcamp (and actually in life, in general), is that im well-prepared and organized. i applied this to tic tac toe and watched + coded along with a video to build tic tac toe. then, i transferred that code into pseudocode that would help me feel organized and prepared to execute with my group on monday-tuesday. this was really important for me. when i got flustered, forgot syntax, or was unsure how to proceed, the pseudocode and preparation were grounding and guiding. if my brain is disorganized, i have a hard time communicating.
