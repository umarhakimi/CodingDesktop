import React, { Component,useState,useRef } from 'react';
import ReactDOM from 'react-dom';


// const Register = props => {

//     const [user, setUser] = useState(props.user)
//     const form = useRef(null)

//     const submit = e => {
//         e.preventDefault()
//         const data = new FormData(form.current)
//         fetch('/api/register', { method: 'POST', body: data })
//         .then(res => res.json())
//         .then(json => setUser(json.user))
//         return (
//             <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
//             <form ref={form} onSubmit={submit}>
//                 <div className="form-group text-left">
//                 <label htmlFor="exampleInputEmail1">Name</label>
//                 <input type="text"
//                        className="form-control"
//                        id="name"
//                        placeholder="Enter email"
//                 />
//                 </div>
//                 <div className="form-group text-left">
//                 <label htmlFor="exampleInputEmail1">Email address</label>
//                 <input type="email"
//                        className="form-control"
//                        id="email"
//                        aria-describedby="emailHelp"
//                        placeholder="Enter email"
//                 />
//                 </div>
//                 <div className="form-group text-left">
//                     <label htmlFor="exampleInputPassword1">Password</label>
//                     <input type="password"
//                         className="form-control"
//                         id="password"
//                         placeholder="Password"
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     className="btn btn-primary"
//                 >
//                     Register
//                 </button>
//             </form>
//         </div>

//         );
//     }

// }
const Register = props => {
    const [user, setUser] = useState(props.user)
    const form = useRef(null)

    const submit = e => {
      e.preventDefault()
      const data = new FormData(form.current)
      fetch('/api', { method: 'POST', body: data })
        .then(res => res.json())
        .then(json => setUser(json.user))
    }

    return (
      <form ref={form} onSubmit={submit}>
        <input type="text" name="user[name]" defaultValue={user.name} />
        {user.errors.name && <p>{user.errors.name}</p>}

        <input type="email" name="user[email]" defaultValue={user.email} />
        {user.errors.email && <p>{user.errors.email}</p>}

        <input type="submit" name="Sign Up" />
      </form>
    )
  }
export default Register;

if (document.getElementById('root')) {
    ReactDOM.render(<Register />, document.getElementById('root'));
}
