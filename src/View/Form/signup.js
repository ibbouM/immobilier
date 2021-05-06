import GetAPI from "../../services/getAPI";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "../Form/form.css";

const Signup = () => {
  const [Customer, setCustomer] = useState({
    username: "",
    adresse: "",
    city: "",
    department: "",
    email: "",
    numberphone: "",
    password: "",
  });

  const [state, setState] = useState("");

  useEffect(() => {
    console.log(Customer.username);
    console.log(Customer.adresse);
    console.log(Customer.city);
    console.log(Customer.department);
    console.log(Customer.email);
    console.log(Customer.numberphone);
    console.log(Customer.password);
  });

  const [showLoading, setShowLoading] = useState(false);

  let history = useHistory();

  const handleSubmit = (event) => {
    setShowLoading(true);
    event.preventDefault();
    const adresses = {
      adresse: Customer.adresse,
      city: Customer.city,
      department: Customer.department,
    };

    console.log(adresses);
    const data = {
      username: Customer.username,
      adresse: adresses,
      email: Customer.email,
      numberphone: Customer.numberphone,
      password: Customer.password,
    };
    console.log(data);
    console.log("Vous avez cliqué!");

    GetAPI.CreateCustomer(data)
      .then(function (response) {
        setShowLoading(false);
        const result = response;
        console.log(result);
        setState(result);
        // setState(response);
        // console.log(result)
      })
      .catch(function (error) {
        console.log("error", error);
      });
  };

  const handleChange = (event) => {
    setCustomer({ ...Customer, [event.target.name]: event.target.value });
  };

  let success;
  if (state === "compte creer") {
    success = history.push("/");
  } else if (state === "compte deja creer") {
    success = (
      <h5 className="h5">
        Cette adresse e-mail est déjà utilisée. Veuillez en saisir une nouvelle
      </h5>
    );
  }

  return (
    <>
      <h1 className="h3 text-center font-weight-bold mt-3 mb-4 ">
        Inscription
      </h1>
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
                      type="text"
                      name="username"
                      value={Customer.username}
                      onChange={handleChange}
                      id="username"
                      className="form-control"
                      placeholder="username"
                      required
                      autoFocus
                    />
                  </div>
                 

                  <div className="form-group">
                    <input
                      type="text"
                      name="adresse"
                      value={Customer.adresse}
                      onChange={handleChange}
                      id="adresse"
                      className="form-control"
                      placeholder="adresse"
                      required
                      autoFocus
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="city"
                      value={Customer.city}
                      onChange={handleChange}
                      id="city"
                      className="form-control"
                      placeholder="city"
                      required
                      autoFocus
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="department"
                      value={Customer.department}
                      onChange={handleChange}
                      id="department"
                      className="form-control"
                      placeholder="department"
                      required
                      autoFocus
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={Customer.email}
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
                      type="tel"
                      name="numberphone"
                      value={Customer.numberphone}
                      onChange={handleChange}
                      className="form-control"
                      id="numberphone"
                      placeholder="Number Phone"
                      required
                      autofocus
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      value={Customer.password}
                      onChange={handleChange}
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      required
                    />
                  </div>

                  <div className="text-center pt-4">
                    <button type="submit" className="button">
                      S'inscrire
                    </button>
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

export default Signup;
