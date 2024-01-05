$(document).ready(function() {
    let deleteBtn = $(".delete-btn");
    let searchForm = $("#search-form");
    let searchBtn = $("#submit-search");

    $(deleteBtn).on("click", function(e) {
        e.preventDefault();
        let deleteLink = $(this).attr('href');
        let result = confirm('Are you sure you want to delete this task?');

        if(result){
            window.location.href = deleteLink;
        }
    });

    $(searchBtn).on("click", function() {
        searchForm.submit();
    });
});

setTimeout(function(){
    let alertMessage = document.getElementById("success-message");   
    alertMessage.style="display:none";  
}, 2000);