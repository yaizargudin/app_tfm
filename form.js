function processMessage(message){
    var div = document.getElementById('result');
    div.innerHTML += '<p>'+message+'</p>';

}

function callModel(story){
    // Define the API URL
    const apiUrl = 'http://127.0.0.1:5000/?story='+story;
 
    // Make a GET request
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {

        processMessage(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
function getStory() {
    var story = document.getElementById("story").value;
    if(story.length > 10){
        callModel(story)
    }else{
        console.log("Es demasiado corta la historia")
    }
  }

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("check").addEventListener("click", getStory);
});
