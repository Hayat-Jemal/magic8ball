const title = document.getElementById("title")
// const mgc8bl = document.getElementById("wrapper-mgc8ball");
const input = document.getElementById("input");
const button = document.getElementById("button");
const answer = document.getElementById("answers");
const backBtn = document.createElement("button");

button.addEventListener("click", ask);

// a function that displays random magic8ball image when ask button clicked
let rot = 360;
function ask() {
  const imgArray = [
    "images/magic8ball_1.png",
    "images/magic8ball_2.png",
    "images/magic8ball_3.png",
    "images/magic8ball_4.png",
    "images/magic8ball_5.png",
    "images/magic8ball_6.png",
    "images/magic8ball_7.png",
    "images/magic8ball_8.png",
    "images/magic8ball_9.png",
    "images/magic8ball_10.png",
    "images/magic8ball_11.png",
    "images/magic8ball_12.png",
    "images/magic8ball_13.png",
    "images/magic8ball_14.png",
    "images/magic8ball_15.png",
    "images/magic8ball_16.png",
    "images/magic8ball_17.png",
    "images/magic8ball_18.png",
    "images/magic8ball_19.png",
    "images/magic8ball_20.png",
  ];
  if (input.value.length != 0) {
   
    // selecting random index from imgArray
    const randomImgIndex = Math.floor(Math.random() * imgArray.length);
    console.log(randomImgIndex);
    // Create image tag to insert random image
    const img = document.createElement("img");
    // img.src = imgArray[getRandomImage()];
    img.src = imgArray[randomImgIndex];
    // append selected random image into html
    answer.appendChild(img);

    // hide input field and ask button
    
  } else {
    alert("Enter a question.");
   
  }
  backBtn.addEventListener("click", function returnToAsk() {
    content.style.display = "block";
    input.value = "";
     title.style.display = "block";
    answer.innerHTML = "";
  });
  const content = document.getElementById("content");
  content.style.display = "none";
  title.style.display = "none";

  // create p tag and append to html to display users question after user clicked ask button
  const askedQuestion = document.createElement("p");
  askedQuestion.setAttribute("id", "text");
  answer.prepend(askedQuestion);
  askedQuestion.innerText = input.value;

  // // create return button to ask another
  backBtn.setAttribute("id", "backBtn");
  //with out "id" js works but we want to add css styles
  backBtn.innerText = "Ask more questions";
  backBtn.style.textAlign = "center";
  answer.appendChild(backBtn);

  // rotate the answer
  answer.style.transition = "all 1s ease-in-out";
  answer.style.transform = "rotate(" + rot + "deg)";
  rot += 360;
     

}


