// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Click to Open"
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", this.expandArticle.bind(this));

    this.closeButton = document.createElement("button");
    this.attatchButton();
  }

  expandArticle() {
    if (this.domElement.classList.contains("article-open")){
      TweenMax.to(this.domElement, .5, {height: "50px"});
      this.expandButton.textContent = "Click to Open";
    } else {
      TweenMax.to(this.domElement, .5, {height: "400px"});
      this.expandButton.textContent = "Click to Close";
    }
    this.domElement.classList.toggle("article-open");
  }

  attatchButton() {
    this.closeButton.textContent = 'X';
    this.domElement.appendChild(this.closeButton);
    this.closeButton.classList.add("closeButton");

    this.closeButton.addEventListener("click", this.closeArticle.bind(this));
  }

  closeArticle(){
    this.domElement.style.display = "none";
  }
}

class ArticleCreator {
  constructor(parent, header, date, paragaraphs) {
    this.parent = parent;
    this.header = header;
    this.date = date;
    this.paragaraphs = paragaraphs;
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll(".article");

articles.forEach(item => {
  new Article(item);
})

