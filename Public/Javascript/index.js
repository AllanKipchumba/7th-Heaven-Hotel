// Hamburger

$('.navbar-toggler').on('click', () => {

    $('.animated-icon2').toggleClass('open');
});


function validation() {
    const form = $('#form')
    const email = $('#email')
    const text = $('#text')
    var pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your email address is valid";
        text.style.color = "#4CAF50";
    } else {
        form.classList.add("invalid");
        form.classList.remove("valid");
        text.innerHTML = "Please enter valid email address";
        text.style.color = "#FF0000";
    }

    if (email === "") {
        form.classList.remove("invalid");
        form.classList.remove("valid");
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }
}













// function isSpecialCharacter(char) {
//     //declared variable and assigned string
//     const special = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
//     //declared default variable
//     var contains = false;
//     //start variable declaration # condition # step /incremental step
//     for (let i = 0; i < special.length; i++) {
//       // console.log(special[i]);
//       //condition
//       if (char === special[i]) {
//         contains = true;
//       }
//     }
//     //return result
//     return contains;
//   }
//   //step 1
//   function validateEmail(email) {
//     const first_char = email.charAt(0);
//     const is_first_char_special = isSpecialCharacter(first_char);
//     const last_char = email.charAt(email.length - 1);
//     const is_last_char_special = isSpecialCharacter(last_char);
//     const contains_at = email.includes('@');
//     const contains_dot = email.includes('.');
//     const contains_space = email.includes(' ');
//     console.log(
//       contains_at,
//       contains_dot,
//       !contains_space,
//       email.length < 70,
//       !is_first_char_special,
//       !is_last_char_special,
//     );
//     return (
//       contains_at &&
//       contains_dot &&
//       !contains_space &&
//       email.length < 70 &&
//       !is_first_char_special &&
//       !is_last_char_special
//     );
//   }