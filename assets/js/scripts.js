const editMood = () => {
    document.getElementsByClassName("question-header")[0].style.display = "none";
    document.getElementsByClassName("edit-mood-container")[0].style.display = "block";
}

const setMood = moodId => {
    if (!moodId)
        return;
    fetch(`/moods/${moodId}`)
    .then(response => response.json())
    .then(data => {
        if(!data)
            return;
        document.getElementById("imgMood").src=`/images/${data.mood.icon}`;
        document.getElementById("moodTitle").innerText = `${data.mood.message} Thank you for your feedback.`;
        document.getElementsByClassName("question-header")[0].style.display = "flex";
        document.getElementsByClassName("edit-mood-container")[0].style.display = "none";
    });
}

const addComment = (data) => {
    document.getElementById(`txtAddComment${data.getAttribute("data-id")}`).style.display = "block";
}