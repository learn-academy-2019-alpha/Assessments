### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:


- React is a modern, efficient answer to complex UI applications

- React is a flexible library that plays the role of V in an MVC framework -


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer
smart component is a component that maintains state and carries more information has more active role and a dumb component doesn't have state/ doesn't deal with as much information?

 //Googled Answer
 dumb component's only job is to send something back to the DOM and doesn't keep track of information more just display, it is a basic function like greeter that just says hello. smart components have to keep track of state and control how the app works, they are also class based components.


#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer
installing the most up to date version of the react library.


 //Googled Answer


#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes extends Component  {
      constructor(props){
        super(props)
        this.state = {
          name:
            [ 'Meatballs',
            'Mac & Cheese']

        }
      }

      render() {

        return (

          let recipeName = this.state.recipes.map((recipe, index) => {
            return(
              <li key={index}>{recipe}</li>
            )
          }))

          <ul>
            {recipeName}
          </ul>
        );
      }
    }

    export default Recipes;



#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer
image
button
password

 //Googled Answer


 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer
not sure how i would but i guess i would try to explain that it is something that exists in each individual component and is altered each time it is set, and the components original state should never itself be changed though. so original state is unchanged code and when state is set within the component it is taking in the new information we are giving it and applying it to the original code.


 //Googled Answer
components data is stored in the components state and can be modified based on users interactions

 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.

state is something that exists in the individual components but props are what can pass on information so the state of one component can become the property of the baby component



 //Googled Answer
 For parent-child communication, simply pass props.

Use state to store the data your current page needs in your controller-view.
Use props to pass data & event handlers down to your child components.

Props-
are immutable
which lets React do fast reference checks
are used to pass data down from your view-controller
your top level component
have better performance
use this to pass data to child components

State-
should be managed in your view-controller
your top level component
is mutable
has worse performance
should not be accessed from child components
pass it down with props instead


#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.
