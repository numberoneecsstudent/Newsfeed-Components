// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class ArticleElement {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    this.expandButton.textContent = 'expand'
    this.expandButton.addEventListener('click', (event) => this.expandArticle(event));
  }

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    
    // Set a click handler on the expandButton reference, calling the expandArticle method. 
  expandArticle(event) {
    //this.expandButton.classList.toggle('close');
    console.log(event.target);
    this.domElement.classList.toggle('article-open')
   
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/
let articles = document.querySelectorAll('.article');
articles.forEach( art =>{
return new ArticleElement(art)});