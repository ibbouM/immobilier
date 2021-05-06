import GetAPI from "../../services/getAPI";
import loginService from "../../services/loginService";
import React, { useState, useEffect } from "react";

import { Link, Redirect, useHistory } from "react-router-dom";

import "../Form/form.css";

const Login = () => {
  const [loginCustomer, setloginCustomer] = useState({
    email: "",
    password: "",
  });
  const [state, setState] = useState("");
  useEffect(() => {
    console.log(state);
  });

  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: loginCustomer.email,
      password: loginCustomer.password,
    };
    console.log("vous avez cliqué!");
    GetAPI.Login(data)
      .then(function (response) {
        const res = response.data;
        
        if (res.user === true) {
          localStorage.setItem("accessToken", response.data.token);
          localStorage.setItem("id", response.data.id);
        const user= localStorage.setItem("user", response.data.user);
          setState(true);
          loginService.setLogin(user)

        }
        console.log(res);
      })
      .catch(function (error) {
        setState(false);
      });
  };

  const handleChange = (event) => {
    setloginCustomer({
      ...loginCustomer,
      [event.target.name]: event.target.value,
    });
  };

  let success;
  if (state === true) {
    success = history.push("/");
  } else if (state === false) {
    success = <h5 className="h5">Email ou mot de passe incorrecte</h5>;
  }
  return (
    <>
      <h1 className="h3 text-center font-weight-bold mt-3 mb-4 ">Connexion</h1>
      <div className="container mt-3 mb-4">
        <div className="card mx-auto border-0">
          <div className="card-header border-bottom-0 bg-transparent"></div>

          <div className="card-body pb-4">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-login"
                role="tabpanel"
                aria-labelledby="pills-login-tab"
              >
                <div>{success}</div>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={loginCustomer.email}
                      onChange={handleChange}
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      required
                      autofocus
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      value={loginCustomer.password}
                      onChange={handleChange}
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      required
                    />
                  </div>

                  <div className="text-center pt-4">
                    <button  type="submit" className="button">
                      Connexion
                    </button>
                  </div>

                  <div className="text-center pt-2">
                    <a
                      className="btn btn-link color"
                      href="http://localhost:3000/signup"
                    >
                      <Link to="/signup">
                        {" "}
                        <span className="textcolor">
                          Pas encore de compte?
                        </span>{" "}
                        S'inscrire
                      </Link>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
