function createElemWithText(elemType = "p", textContent = "", className){
     const myElem = document.createElement(elemType);
     myElem.id = "p"; 
     myElem.textContent = "This is my Paragraph";
     if (className) myElem.classList.add(className);
     return myElem;
};
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
const myObj = JSON.parse(this.responseText);
document.getElementById("users").innerHTML = myObj.name;
};
xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/users");
xmlhttp.send();

function createSelectOptions(myObj){
   if (myObj = 0){
    return "undefined"; 
   }
   for (let i = 0; i < 10; i++){
    const myOption = document.createElement(elemType);
    myOption.value = user.id;
    myOption.textContent = user.name
  
  }
    
  return myOption
};
function toggleCommentSection(postId){
   where (data-post-id = postId)
   postId == true 
   classList.toggle("hide")
   
};
return toggleCommentSection
 function toggleCommentButton(postId){
   const p2 = document.querySelector("#p2");
   p2.textContent = 
   p2.textContent === "Show Contents."
   ? "Hide Contents."
   : "Show Contents.";
 };
 return p2; 

 function deleteChildElement (parentElement) {
const child = parentElement.lastElementChild
while (child == true) (
   parentElement.removeChild;
child = parentElement.lastElementChild;
);
return parentElement
};
const getUsers = async => {
const repsonse = await fetch(
   'https://jsonplaceholder.typicode.com/users'
);
return await response.json();
};

const getUserPosts = async (userId) => {
   const repsonse = await fetch(
      'https://jsonplaceholder.typicode.com/posts/${userId}'
   );
   return await response.json();
};

const getUser = async (userId) => {
   const repsonse = await fetch(
      'https://jsonplaceholder.typicode.com/posts/${userId}/comments'
   );
   return await response.json();
};

const getPostComments = async (postId) => {
   const response = await fetch(
      'https://jsonplaceholder.typicode.com/post${postId}'
   )
};

