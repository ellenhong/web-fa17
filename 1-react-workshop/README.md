# React Workshop

## Table of Contents
* [Reminders](#reminders)
* [Activity!](#activity)
* [React Lesson](#lesson)

## Reminders <a name="reminders"></a>
* Sign up for tabling!!!
  * Do it by the end of this meeting or we will CALL YOU OUT.
* Pay your dues!
  * $30 venmo @innoD pretty plssss
* Follow & add songs to our [SPOTIFY PLAYLIST](https://open.spotify.com/user/ellenphantt/playlist/24uFfWtpzXkcgIoGSKhnck)
    
## Activity! <a name="activity"></a>
* Pair up with a friend -- try to pick somebody you haven't met yet : )
* Come up with a NEW social media website
  * It can be a dating app, photos, news feed, anything connected to social media
* Make a [Figma](https://www.figma.com/) account
* Create a lo-fi mockup using Figma
  * Create rough boxes & text; map out where the divs are

## React Lesson <a name="lesson"></a>
* All eyes on Peter now :^)
* Slides [here](https://docs.google.com/presentation/d/1I0WCMyMinoNldM9aKh1sXTZYmMTXi5u4jgvHHAwDdY0/edit)

### Notes
* npm - package manager
  * Install Gatsby: `npm install -g gatsby-cli`
  * `cd` into a project directory, then `gatsby new [project_name]`
* React = view layer only
  * flexible! 
    * It's easy to drag & drop React on top of other applications
  * declarative!
    * Describe the layout of a page & divide your page into reusable components
      * like building with Legos
    * Modularize your layout
  * fast!
    * Renders & shows changes on the frontend very quickly
    * Does this through a virtual DOM
* JSX = hybrid of Javascript & HTML
  * essentially just like normal HTML -- except that every tag, upon React processing, is changed into a function call
  * Every component is a function call
* Props vs. state
  * State is supposed to handle interactivity within ONE component
    * DO NOT use state to keep track of your actual application's state
    * These states should be passed down to/from props 
  * Props should handle communication between different components
* Redux & Flux
  * The state is in a store
    * If you change something, it gets sent to the store, and those changes trickle back down through the whole app
    * Compared to an MVC framework: not as much of a linear development/cycle
  * Everything you do gets automatically propagated via the store, back down to the display
    * Analogy: You talk directly to CEO, gets trickled down to VP, managers, etc.
* Lifecycle methods & rendering
  * Every component in React has a lifecycle
  * Built-in methods called at different stages of each component's lifetime
  * When you first create something, there's a process of displaying it
    * If you change it, it receives new information & has to update how it looks in response to new information
    * There are lifecycle methods that allow you to hook into these events & call something in response to it
  * Analogous to Java interface: each component has built-in methods like `componentDidMount()`
  * Actual DOM: objects on the page (HTML components in the form of a tree structure)
  * React keeps a virtual representation of the DOM
    * makes changes on its virtual DOM, then pushes those changes out onto the actual DOM
  * What if you tried to use jQuery with React?
    * jQuery manipulates the DOM
    * If you try to use both, the changes made with React may conflict with jQuery's changes to the actual DOM
    * Avoid using them together!!
  * method `shouldComponentUpdate()` --> stops the component from updating the actual DOM
* Rendering
  * Every React component comes with a `render()` method
  * Return the HTML you want people to see when you load the component
  * `render()` is called EVERY TIME the state changes
    * This is why you don't want to manipulate the DOM when you're using React
    * eg. You could render multiple copies of a number on top of itself
* Gatsby --> means we don't have to worry about server setup
  * Generates a static site for us, so we can host sites on heroku, surge, etc.
* SASS: CSS pre-processor
  * Makes your life easier!
  * Variables (eg. declaring colors), Mixins (reusing the same style snippet), Nesting
  * Gets compiled into CSS


