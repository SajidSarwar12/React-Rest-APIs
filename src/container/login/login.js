// import React, { useState } from 'react';
// import './login.css';
// import './../../assets/styles/globalStyles.css';
// import PropTypes from 'prop-types';
// import { Axios } from 'axios';


// const loginPage = ({ setToken }) => {
//     // ('.message a').click(function(){
//     //     ('form').animate({height: "toggle", opacity: "toggle"}, "slow");
//     //  });

    

//     const loginUser = (credentials) => {
//         return Axios.post('http://localhost:8080/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(credentials)
//         })
//           .then(data => data.json())
//        }

//     const [username, setUsername] = useState();
//     const [password, setPassword] = useState();

    

//     const handleSubmit = async e => {
//         e.preventDefault();
//         const token = await loginUser({
//           username,
//           password
//         });
//         setToken(token);
//       }
      

//     return (
//         <body>
//             <div class="login-page">
//                 <div class="form">
//                     <form class="register-form" onSubmit={handleSubmit}>
//                         <input type="text" placeholder="name" />
//                         <input type="password" placeholder="password" />
//                         <input type="text" placeholder="email address" />
//                         <button>create</button>
//                         <p class="message">Already registered? <a href="#">Sign In</a></p>
//                     </form>
//                     <form class="login-form">
//                         <input type="text" placeholder="username" onChange={e => setUserName(e.target.value)}/>
//                         <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
//                         <button type='submit'>login</button>
//                         <p class="message">Not registered? <a href="#">Create an account</a></p>
//                     </form>
//                 </div>
//             </div>
//             <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
//         </body>
//     );
// }

// loginPage.propTypes = {
//     setToken: PropTypes.func.isRequired
//   }

// export default loginPage;