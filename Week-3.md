### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React is a modern, efficient answer to complex UI applications
- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer
 "smart" components is where you build out all your logic and what needs to be executed.
 "dumb" components is when, on the component page, you're simply calling the "smart" component to execute and do all the logic.

 //Googled Answer

#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer
  adding in all the packages and components needed for that specific thing you want to download like yarn add react

 //Googled Answer

 yarn add is adding the files and it's adding in package.json and yarn.lock which is what is always being updated.


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
          let recipeName = recipes.map((recipe, index) => {
              <li key={index}>{recipe}</li>
        )})

          <ul>
            {recipesName}
          </ul>
        );
      }
    }

    export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer
 <input type="button">
 <input type="image">
 <input type="submit">

 //Googled Answer

 ^^^^

 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer

I know what a state is and how it works, but I had to google a "dummified" definition of it to better understand how to phrase it to someone not knowledgable in code.

 //Googled Answer

 states are what store the ideas and data of a component which you can call over and over as well as being able to rename it and re use it as well.

 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer

 component states can only be used within that component and are used internal in that one component.

 props are what you use to pass on the states into other components and make them reachable to other parts of the code.

 //Googled Answer


#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

Tic-tac-toe was really interesting because I mobbed it with my group we dubbed, the Tripod. We definitely needed a lot of help to make sure we were passing the states correctly in props. I learned a lot about how to pass props and definitely working together with two other people compared to just one. I was lucky enough to have really great partners in who were able to communicate and bounce off one another.

The Tripod group is something I would want from group projects in the future as we were really productive and worked through all our problems easily and smoothly.
