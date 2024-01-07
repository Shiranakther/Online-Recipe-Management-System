var terms = document.getElementById("terms");
        var button = document.querySelector(".register-button");
        button.disabled = true;
        terms.addEventListener("click", function(){
            if(terms.checked == true){
                button.disabled = false;
            }
            else{
                button.disabled = true;
            }
        })