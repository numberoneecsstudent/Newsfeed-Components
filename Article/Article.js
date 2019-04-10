// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class ArticleElement {
  constructor(article) {
    // assign this.domElement to the passed in domElement
    this.article = article;
    // create a reference to the ".expandButton" class. 
    this.articleButton = article.querySelector('.article-buttons');
    this.expandButton = article.querySelector('.expandButton');
    this.articleContent = article.querySelector('article-content');

    this.expandButton.addEventListener('click', () => this.expandArticle());


    // Using your expandButton reference, update the text on your expandButton to say "expand"
    
    // Set a click handler on the expandButton reference, calling the expandArticle method. 
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.article.classList.toggle('article-open');
    this.expandButton.innerText === 'expand' ? this.expandButton.innerText = 'collapse' : this.expandButton.innerText = 'expand';
  }
}



/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/
const articles = document.querySelectorAll('.article');
articles.forEach( article => new ArticleElement(article));