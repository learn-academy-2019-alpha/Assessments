### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)
- React is a modern, efficient answer to complex UI applications
- React is a full stack framework for modern web applications



 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer

 A "smart" component contains all the dumb components and all the logic which contains all the functions
 and method that make the site work, while a "dumb" component contains the barebones to be displayed.
 And I think the reason we bother to make the distinction between them is just because its a good practice
 and also it allows us to reuse the "dumb" components.

 //Googled Answer

 Smart components (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works. Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. Once that is done, the component is done with it. No keeping tabs on it, no checking in once in a while to see how things are going. Nope. Put the info on the page and move on. -Jason Arnold

 The reason we bother to distinct them from one another is to better separation of concerns. You understand your app and your UI better by writing components this way. Also, for better reusability. You can use the same "dumb" component with completely different state sources, and turn those into separate container components that can be further reused. Furthermore, "dumb" components are essentially your app’s “palette”. You can put them on a single page and let the designer tweak all their variations without touching the app’s logic. You can run screenshot regression tests on that page.

#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer

 When we used yarn ... we used it to install the package jest. So I assume we used it to install packages.

 //Googled Answer

 Yarn is a new package manager that replaces the existing workflow for the npm client or other package managers while remaining compatible with the npm registry. It has the same feature set as existing workflows while operating faster, more securely, and more reliably.


#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

on line 47 extends was missing

    class extends Recipes {
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
          You have to wrap it in a div
          <div>
            let recipes = this.state.recipes.map(function(recipe){
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

 <h1>
 <src>
 <button>

 //Googled Answer


 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer

State is what is going to be set by default

 //Googled Answer


 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer

 State can only be set in the parent, this what the default value will be set as and if you want to pass
 it down to the child you have to pass it as a props. You can also pass functions down to child by also making
 them into props

 //Googled Answer


#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

During the process of building tic tac toe I was still didnt grasp the concept of a local function inside the child component
and how it was able to "pass" information back to the parent. It wasn't until the last two or three days of working with
react that I understood that the local function was just the argument inside the parent function. The whole concept of component
really stood out to me because its so amazing that we can create a component and we reuse it with it being independent from
other copies of the same component. Overall, I want to learn more about react because it seems like such a powerful tool to have
in my arsenal. Although it was tough at first I enjoyed working with react.
