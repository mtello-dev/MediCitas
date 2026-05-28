const API_URL = 'http://localhost:3000/api';

// LOGIN
const loginForm = document.getElementById('loginForm');

if(loginForm){

    loginForm.addEventListener('submit', async(e)=>{

        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try{

            const response = await fetch(`${API_URL}/auth/login`,{

                method:'POST',

                headers:{
                    'Content-Type':'application/json'
                },

                body: JSON.stringify({
                    email,
                    password
                })

            });

            const data = await response.json();

            if(data.token){

                localStorage.setItem('token', data.token);

                alert('Login exitoso');

                window.location.href = 'dashboard.html';

            }else{

                alert(data.mensaje);

            }

        }catch(error){

            console.log(error);

            alert('Error en el servidor');

        }

    });

}