form.addEventListener("submit", ()=>{
    const register = {
        email: email.value,
        password: password.value
    }
    fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(register),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
            .then(data => {
                if(data.status == "error") {
                    success.style.display = "none"
                    error.style.display = "block"
                    error.innerText = data.error
                } else {
                    error.style.display = "none"
                    success.style.display = "block"
                    success.innerText = data.success
                }
            })
})



// // const form = document.getElementById('myForm');

// form.addEventListener('submit', () => {
//     // event.preventDefault();

//     const email = document.getElementById('email');
//     const password = document.getElementById('password');
//     const success = document.getElementById('success');
//     const error = document.getElementById('error');

//     const register = {
//         email: email.value,
//         password: password.value
//     };

//     fetch('/api/register', {
//         method: 'POST',
//         body: JSON.stringify(register),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then((res) => res.json())
//     .then((data) => {
//         if (data.status === 'error') {
//             success.style.display = 'none';
//             error.style.display = 'block';
//             error.innerText = data.error;
//         } else {
//             error.style.display = 'none';
//             success.style.display = 'block';
//             success.innerText = data.success;
//         }
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
// });
