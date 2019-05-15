// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"
let articleObjects = [];
function closeAllArticles(){
  articleObjects.forEach((article => {
    if(article.domElement.classList.contains("article-open")){
      article.expandArticle();
    }
  }))
}
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
      closeAllArticles();
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
  constructor(parent, {header, date, paragaraphs}) {
    this.parent = parent;
    this.header = header;
    this.date = date;
    this.paragaraphs = paragaraphs;

    this.article = document.createElement("div");
    this.article.classList.add("article");
    this.parent.appendChild(this.article);

    this.populateArticle();
  }

  populateArticle() {
    let date = this.getDateElement(this.date);
    let header = this.getHeaderElement(this.header);
    let paragraphs = this.getParagraphElements(this.paragaraphs);
    let expandButton = this.getExpandElement();

    this.article.appendChild(header);
    this.article.appendChild(date);
    paragraphs.forEach(element => {
      this.article.appendChild(element);
    })
    this.article.appendChild(expandButton);
  }
  getDateElement(dateText) {
    let element = document.createElement("p");
    element.classList.add("date");
    element.textContent = dateText;
    return element;
  }
  getHeaderElement(headerText) {
    let element = document.createElement("h2");
    element.textContent = headerText;
    return element;
  }
  getParagraphElements(paragraphArray) {
    let elementArray = [];
    paragraphArray.forEach(item => {
      let element = document.createElement("p");
      element.textContent = item;
      elementArray.push(element);
    });
    return elementArray;
  }
  getExpandElement(){
    let span = document.createElement("span");
    span.classList.add("expandButton");
    return span;
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/
let articleContainer = document.querySelector(".articles");

let testArticle = {
  header:"This article was added programatically!",
  date:"May 15th, 2019",
  paragaraphs: [
    "Paragraph 1",
    "Paragraph 2",
    "Paragraph 3",
    "Paragraph 4",
  ]
}
new ArticleCreator(articleContainer, testArticle);

let articles = document.querySelectorAll(".article");
articles.forEach(item => {
  articleObjects.push(new Article(item));
})
