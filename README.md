# Tutorial

[View site](https://stephenjukes.github.io/Tutorial/)

## Lesson 1 - Basic HTML
* 20 mins: Touchtyping course
  * [Sign up](https://www.typingclub.com/)
  * First exercise
  
* 20 mins: Hello Word in Notepad
  * Tags and indentation
  * !DOCTYPE, html, head, title, title, body
  
* 20 mins: Codepen
  * [Sign up](https://codepen.io)
  * Tags (with <a href="./Lesson1.html">html</a> and <a href="https://stephenjukes.github.io/Tutorial/Lesson1.html">result</a>)
    * Headings
    * Paragraphs
    * Ordered lists
    * Unordered lists
    * Lists (ordered and unordered)
    * Tables
    * Input (if time)
      * type
      * attributes (https://www.w3schools.com/tags/tag_input.asp)
  * Introduction to HTML5 tags
  * Indentation
  * Inline styling
    
### Homework
* Touch typing (1 / day)
* Recreate [Burger King Menu](https://www.burgerking.co.uk/menu)
  * Include HTML and inline styles

#### Resources
* HTML Tags 
  * [W3Schools](https://www.w3schools.com/tags/ref_byfunc.asp)
  * [CheatSheet](https://htmlcheatsheet.com/)
* Styles
  * [CSS CheatSheet](https://websitesetup.org/css3-cheat-sheet/)
  
  
## Lesson 2 - Images and Links

* Folder structure (index, html, images)
* Introduction of attributes
* Links
  * url
  * path
* Images 
  * url
  * path
  * as link
  
(if still time, start on homepage with navbar)


## Lesson 3 - CSS. Basic styling

* Inline
* Style tag
* CSS file
* The benefit of CSS (Separation of concerns, DRY)
* Comments
* Examples of styling
  * Box Model
    * Height (px, %, rem, em)
    * Width
    * Padding
    * Border (radius)
    * Margin
    * Background / background-color (inc. image, linear-gradient)
      * Image
        * Repeat
        * Position
        * Size
    * Opacity
    * Shadow
    * Overflow
  * Text
    * Font
      * Family
      * Size
      * Line height
      * Weight
      * Shorthand
    * Color
    * Text-transform
    * Text-decoration
  * Transform
    * Translate
    * Rotate
     
### Homework
* [W3Schools - CSS Selectors](https://www.w3schools.com/css/exercise.asp?filename=exercise_selectors1)
* [W3Schools - CSS How To](https://www.w3schools.com/css/exercise.asp?filename=exercise_howto1)
* Style the html website you made last lesson

#### Resources
[W3Schools - CSS](https://www.w3schools.com/css/)


## Lesson 4: CSS Selectors

* tags (eg: li)
  * tags and descendants (eg: ul li)
  * tags and children (eg: ul > li)
* class
* id
* attribute
  * property name only (eg: input[type], input[checked])
  * property and value (eg: input[type="checkbox"])
* ::before
* ::after
* :first-child & :nth-child(n)
* :first-of-type & :nth-of-type(n)
* :not

### Resources
* https://www.w3schools.com/csSref/css_selectors.php


## Lesson 5: - CSS - Precedence and Specificity
 * Id, class, attribute and wildcard selector
 * Combining, 
   * Element with Id (div#myId)
   * Element with class (div.myClass)
   * Difference with
     * Id inside element (div# myId)
     * Class inside element (div .myClass)
     * Element inside element (div p)
     * Element as direct child of element  (div > p)
     * Elements with same CSS (div, p)
     * (Nest as many as desired)
 * [3 column weighting](https://specifishity.com/)
   1. Id
   1. Class  Attribute
   1. Tag
 * The meaning of 'Cascading' in 'Cascading Style Sheets'
 * Precedence
   1. Universal selector
   1. Single Element (tag)
   1. Last declaration
   1. Combined (nested?) selectors
   1. Class / Attribute
   1. ID
   1. <style> tag
   1. Inline
   1. !important (should be avoided in favour of anything lower than ID)
 * Introduce approach to SpeciFISHity homework
 
### Homework
 * [Khan Academy](https://www.khanacademy.org/computing/computer-programming/html-css/more-css-selectors/e/quiz--css-specificity-rules)
 * [SpeciFISHity quiz](https://estelle.github.io/CSS/selectors/exercises/specificity.html)
 * [What colour are the puppies?](http://www.cknuckles.com/csci270/examples/L10_CSS_Wrapup/5_specificity_exercise.html) 
   * Look at the Source for the questions and CSS (all commented out)
   * Copy the CSS into a plain text VS Code file
   * Provide weightings for each line of CSS (eg: 0-1-0)
   * Notice where each 'puppy' is in the html structure
   * Use the html location of each 'puppy' and the weightings to determine what colour each 'puppy' should be
   * ([solution](Lesson3_CSSPrecedenceAndSpecificity/PuppyColors.txt))

 
## Lesson 6: - Display, Visibility and Position (not including flex and grid)

  * Display
    * Block
    * Inline-block
    * Flex
   * Visibility
   * Position
     * Relative
     * Absolute
     * Fixed
     * z-index;
     
 
## Lesson 7: - Flexbox (and Grid?)
  * __Inititial setup__ 
    * parent and 3 children divs
    * With a child width of 200px
  * __Parent properties__
    * wrap and no-wrap
    * justify-content with small width
      * start, end, center, space-between, space-around, space-evenly
    * align-items, (with parent and child height)
      * start, end, center, stretch (default)
    * align-content (with child height)
    * flex-direction
      * row, column, row-reverse, column-reverse
      * justify-content and align-items are relative to the direction
  * __Child properties__
    * Order
    * Align-self
    * Without width and `flex: 1 1 auto` on all children
    * Explanation of each of the values: 1, 1 and auto

### Homework
* [Flexbox Froggy](https://flexboxfroggy.com/)

#### Resources
* https://css-tricks.com/snippets/css/a-guide-to-flexbox/

 
## Lesson 8: - Color
  * rgb and rgba
  * Hex Colors
    * Base (6, 2, 16)
    * Making red, blue, green 
    * Making greys
    * Mixing colors
    * Changing shades
    
## Lesson 9: More CSS
 * Centering
 * Variables
 * Hover
 * Transitions
 * Animations
 * Media queries
 
 ### Homework
 * [W3Schools CSS Quiz](https://www.w3schools.com/quiztest/quiztest.asp?qtest=CSS)
