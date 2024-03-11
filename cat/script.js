document.addEventListener('DOMContentLoaded', function () {
    loadComments();

    document.getElementById('commentForm').addEventListener('submit', function (event) {
        event.preventDefault();

        var name = document.getElementById('name').value;
        var comment = document.getElementById('comment').value;

        // Send the data to the server using AJAX (optional, but recommended)
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'submit_comment.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Handle the response from the server
                loadComments(); // Reload comments after submission
            }
        };
        xhr.send('name=' + name + '&comment=' + comment);
    });
});

function loadComments() {
    var commentsContainer = document.getElementById('comments');

    // Clear previous comments
    commentsContainer.innerHTML = '';

    // Fetch comments from server
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'get_comments.php', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Handle the response from the server
            var comments = JSON.parse(xhr.responseText);
            comments.forEach(function (comment) {
                var commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');
                commentDiv.innerHTML = '<strong>' + comment.name + '</strong>: ' + comment.comment;
                commentsContainer.appendChild(commentDiv);
            });
        }
    };
    xhr.send();
}
