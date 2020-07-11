'use strict';

/* document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  }); */

const titleClickHandler = function(event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  console.log(event);
      
  /* [DONE] remove class 'active' from all article links */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */

  console.log ('clickedElement:', clickedElement);
  console.log('clickedElement (with plus): ' + clickedElement);

  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts article.active');
  
  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');
  console.log (articleSelector);

  /* [DONE]  find the correct article using the selector (value of 'href' attribute) */

  const goodArticle = document.querySelector(articleSelector);
  console.log (goodArticle);

  /* [DONE] add class 'active' to the correct article */
          
  goodArticle.classList.add('active');

}

  
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';
  
function generateTitleLinks() {

  /* [DONE] remove contents of titleList */
    
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  console.log('titleList:', titleList);  

  /* [DONE] find all the articles and save them to variable: articles */
    
  const articles = document.querySelectorAll(optArticleSelector);
  
  let html = '';
  
  for (let article of articles) {
      
    /* [DONE] get the article id */

    const articleId = article.getAttribute('id');      
  
    /* [DONE] find the title element */
      
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
  
    /* [DONE] get the title from the title element */
      
    article.getAttribute(optTitleSelector); 
  
    /* [DONE] create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleId + '</span></a></li>';
    console.log ('linkHTML:', linkHTML);
  
    /* [DONE] insert link into html variable */
      
    html = html + linkHTML;
    console.log('HTML:', html);
      
  }
  
  titleList.innerHTML = html;

}
  
generateTitleLinks();

const links = document.querySelectorAll('.titles a');
console.log('links:', links);
  
for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

/* function generateTitleLinks () {
    
  /* [DONE] remove list from the left column /

  const titleList = document.querySelector (optTitleListSelector);
  titleList.innerHTML = '';
  console.log('titleList:', titleList);  

  /* [DONE] for each article /
  
  const articles = document.querySelectorAll(optArticleSelector);
    
  for (const article of articles) {

    /* [DONE] get the article id and write it to const /

    const idArticle = article.getAttribute('id');

    /* [DONE] find the title element and write it to const /

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* [DONE] write HTML and write it to const /
 
    const linkHTML = '<li><a href="#' + idArticle + '"><span>' + idArticle + '</span></a></li>';
    console.log ('linkHTML:', linkHTML);

    /* [DONE] insert created HTML to the left column /
    
    titleList.insertAdjacentHTML('beforeend', linkHTML);

  }

}

generateTitleLinks (); */