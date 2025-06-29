
document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    const commentBox = document.createElement('div');
    commentBox.innerHTML = `<strong>${name}</strong>: ${comment}`;
    document.getElementById('commentsSection').appendChild(commentBox);
    this.reset();
});

document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('appointmentResponse').innerText = "Your appointment request has been received. We will contact you soon.";
    this.reset();
});
