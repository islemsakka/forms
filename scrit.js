var formvalid = document.querySelectorAll('input');
var arr = Array.from(document.querySelectorAll('input'));
var bout = document.getElementById('send');
bout.addEventListener('click', isempty);
function isempty(event) {
    for (let i of arr) {
        if (i.value.length < 1) {
            event.preventDefault();
            alert(`champ ${i.name} vide`);
        }

    }

}
var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
var email = document.getElementById('mail');
bout.addEventListener('click', mail_check);

function mail_check(event) {
    if (!regex.test(email.value)) {
        event.preventDefault();
        return alert('addresse mail non valide');
    }
}


var ptest = document.getElementById('password');
//ptest.addEventListener('click',checkpassword);
bout.addEventListener('click', verif);
//function checkpassword(event){
// alert('donner un password qui ne dépasse pas 8 caractères et qui contient chiffres et lettres');
//}
function verif(event) {
    if (ptest.value.length <= 8) {
        event.preventDefault();
        alert('mot de passe trop courte');
    }
    else if 
         (ptest.value.match(/[0-9]/g) &&
            !ptest.value.match(/[A-Z]/g)) {
            
            alert('mot de passe doit contenir au moin un caractère majuscule');
        }
}

