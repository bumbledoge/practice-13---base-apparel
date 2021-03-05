let email = document.querySelector('.f1').value;

let check = email.search('#');

$(".f1").submit(function(e) {
    if(check)
        e.preventDefault();
        console.log(check);
})