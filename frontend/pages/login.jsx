import { Head } from "next/document";
import React, { useState } from "react";
import Layouts from "../src/layouts/Layouts"


const login = () => {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault();
    // kode untuk mengirim data login ke server
  };


  return (
    <Layouts noBg extraCls={"ex"} noHeader noFooter>
       {/* <form onSubmit={handleSubmit}>
          <div className="form-item">
            <label>Username</label>
            <input type ="text"></input>
          </div>
        </form> */}
        <section className="login">
          <div className="form-box">
            <div className="form-value">
              <form action="">
                <h2>Login</h2>
                <div className="inputbox">
                  <input type="text" required/>
                  <label htmlFor="">Username</label>
                </div>
                <div className="inputbox">
                  <input type="password" required/>
                  <label htmlFor="">Password</label>
                </div>
                <div className="forget">
                  <label htmlFor=""><input type="checkbox" />Remember me</label>
                  <a href="">Forget Password</a>
                </div>
                <button>Log In</button>
                <div className="register">
                  <p>Dont have a account <a href="">Register</a></p>
                </div>
              </form>
            </div>
          </div>
        </section>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </Layouts>
    
       
     
  );
};

export default login;