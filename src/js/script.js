
function toggleDropdown() {
    const dropdown = document.getElementById("userDropdown");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        for (i = 0; i < dropdown.length; i++) {
            dropdowns[i].style.display = "block";
        }
        dropdown.style.display = "block";
        
    } else {
        dropdown.style.display = "none";
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.user-icon-post-drop')) {
        const dropdown = document.getElementById("userDropdown");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    }
}

// TASK 3. UNCOMMENT TO TEST
// READ HERE: https://jsonbin.io/api-reference
/*
let req = new XMLHttpRequest();
req.responseType = 'json';

req.onreadystatechange = () => {
    // if done recieving:
  if (req.readyState == XMLHttpRequest.DONE) {
    //populatePosts(req.response.record);
  }
};

req.open("GET", "https://api.jsonbin.io/v3/b/671d1b05e41b4d34e44932b2/latest", true);
req.setRequestHeader("X-Master-Key", "$2a$10$oZq1VTb9o0etGF.YjwqYK.jxJnRYiA0Q1pPvSBpRi3txVzVSTAKGe");
req.onload = function(e) {
    if (this.status == 200) {
      console.log('response', this.response); // JSON response from URI
      populatePosts(this.response.record);
    }
  };
req.send();

// TASK 4
// JSON data displayer from URI (uniform resource identifier)
function populatePosts(data) {

            
    const dataDisplay = document.getElementById("jsonDataDisplay");
    // HELP here: https://stackoverflow.com/questions/34907982/looping-through-json-data-to-generate-html
    // loop by object in data
    for(var post in data){

        console.log(data[post].postID);

        const postElement = document.createElement("article");
        postElement.className = "post"; // for style

        const postHeaderElement = document.createElement("div");
        postHeaderElement.className = "post-header";

        const userIconElement = document.createElement("a");
        userIconElement.className = "user-icon-post";
        userIconElement.setAttribute("alt", "user-icon");
        userIconElement.setAttribute("href", "login.html");

        const IconImgElement = document.createElement("img");
        IconImgElement.className = "user-icon-post";
        IconImgElement.setAttribute("src", "./res/images/me.png");

        const dateElement = document.createElement("p");
        dateElement.className = "post-date";
        dateElement.textContent = data[post].created;

        const postImgElement = document.createElement("img");
        if(data[post].img != ""){
            postImgElement.setAttribute("src", data[post].img)
        }

        const postTextElement = document.createElement("p");
        postTextElement.className = "post-text";
        postTextElement.textContent = data[post].content;

        const postLikeElement = document.createElement("button");
        postLikeElement.className = "like-btn";
        postLikeElement.textContent = "👍";

        dataDisplay.appendChild(postElement);

        postElement.appendChild(postHeaderElement);
        postElement.appendChild(postImgElement);
        postElement.appendChild(postTextElement);
        postElement.appendChild(postLikeElement);

        postHeaderElement.appendChild(userIconElement);
        userIconElement.appendChild(IconImgElement);

        postHeaderElement.appendChild(dateElement);

    }
     
}*/


// TASK 5, uncomment when ... yea
// this is working example (or would be, structurally)
// JSON data displayer from local source
document.addEventListener("DOMContentLoaded", async function () {
    fetch("./res/json/postitused.json")
        .then(response => response.json())
        .then(data => {
            
        const dataDisplay = document.getElementById("jsonDataDisplay");
        // HELP here: https://stackoverflow.com/questions/34907982/looping-through-json-data-to-generate-html
        // loop by object in data
        for(var post in data){

            console.log(data[post].postID);

            const postElement = document.createElement("article");
            postElement.className = "post"; // for style

            const postHeaderElement = document.createElement("div");
            postHeaderElement.className = "post-header";

            const userIconElement = document.createElement("a");
            userIconElement.className = "user-icon-post";
            userIconElement.setAttribute("alt", "user-icon");
            userIconElement.setAttribute("href", "login.html");

            const IconImgElement = document.createElement("img");
            IconImgElement.className = "user-icon-post";
            IconImgElement.setAttribute("src", "./res/images/me.png");

            const dateElement = document.createElement("p");
            dateElement.className = "post-date";
            dateElement.textContent = data[post].created;

            const postImgElement = document.createElement("img");
            if(data[post].img != ""){
                postImgElement.setAttribute("src", data[post].img)
            }

            const postTextElement = document.createElement("p");
            postTextElement.className = "post-text";
            postTextElement.textContent = data[post].content;

            const postLikeElement = document.createElement("button");
            postLikeElement.className = "like-btn";
            postLikeElement.textContent = "👍";

            dataDisplay.appendChild(postElement);

            postElement.appendChild(postHeaderElement);
            postElement.appendChild(postImgElement);
            postElement.appendChild(postTextElement);
            postElement.appendChild(postLikeElement);

            postHeaderElement.appendChild(userIconElement);
            userIconElement.appendChild(IconImgElement);

            postHeaderElement.appendChild(dateElement);
        }

    })
    .catch(error => console.error("Error fetching JSON data:", error));
});
