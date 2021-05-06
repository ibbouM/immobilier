import { AiOutlineFileAdd } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import GetAPI from "../../services/getAPI";
import loginService from "../../services/loginService";
import { useHistory } from "react-router";


var styles = {
  background: "#ed5545",
  color: "white",
};
var style2 = {
  width: "100%",
  height: "300px",
};

const Home = () => {
  let history = useHistory();
  const [HousingAll, setHousingAll] = useState([]);
  const [addAd, setAddAd] = useState("");
  const [searchAdd, setSearchAdd] = useState("");

  useEffect(() => {
    //console.log(HousingAll);
    GetAPI.GetAllHousing()
      .then((res) => setHousingAll(res.data))
      .catch(() => console.error("Failed!"));
  });

  const user = localStorage.getItem("user");

  let subscription;
  useEffect(() => {
    setAddAd(user);
    setSearchAdd(user);
    subscription = loginService.getLogin().subscribe((login) => {
      if (login) {
        // add message to local state if not empty

        setAddAd(login);
        setSearchAdd(login);
      } else {
        // clear messages when empty message received

        setAddAd(false);
        setSearchAdd(false);
      }
    });
  });

  const handleClick = (event) => {
   history.push({
      pathname: "/description",
      state: { details: event },
    });
    console.log(event)
  };

  return (
    <>
      <section  className="container py-4 pt-5">
        <h1 className="h3 text-center font-weight-bold mt-3 mb-4 ">
          Moteur de recherche pour louer et acheter entre particuliers des
          maisons ou des appartements
        </h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            {addAd ? (
              <a
                href="/ajoutannonce"
                className="btn  btn-block font-weight-semi-bold py-3 mb-4"
                style={styles}
              >
                <AiOutlineFileAdd /> Déposer une annonce gratuite
              </a>
            ) : (
              ""
            )}
          </div>

          {searchAdd ? (
            <div className="col-md-6">
              <a
                href="/annonces"
                className="btn  btn-block font-weight-semi-bold py-3 mb-4"
                style={styles}
              >
                <AiOutlineSearch /> Annonces
              </a>
            </div>
          ) : (
            <div className="col-md-8">
              <a
                href="/annonces"
                className="btn  btn-block font-weight-semi-bold py-3 mb-4"
                style={styles}
              >
                <AiOutlineSearch /> Annonce
              </a>
            </div>
          )}
        </div>

        {HousingAll.length === 0 ? (
          <h2 className="h4 text-center py-5 mb-5">
            Aucune annonce n'a été créé pour le moment
          </h2>
        ) : (
          HousingAll.map((key) => (
            <div onClick={() => handleClick(key)} className="row mb-4 row justify-content-md-center">
              <div className="col-xl-8 order-1">
                <div className="d-flex flex-column">
                  <a 
                    
                    className="cursor-pointer bg-white rounded rounded-huge shadow p-0 flex-grow-1 d-flex flex-column text-decoration-none"
                  >
                    <div className="position-relative rounded-top rounded-huge">
                      <div className=" border-bottom position-relative ">
                        <img
                          src={key.image[0].image}
                          alt=""
                          className="rounded-top rounded-huge  ng-lazyloaded"
                          style={style2}
                        />
                      </div>
                    </div>
                    <div className=" p-3 flex-grow-1">
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <div className="h4">
                            <span
                              className="badge font-weight-normal mr-2"
                              style={styles}
                            >
                              {key.surface}m²
                            </span>
                            <span
                              className="badge  font-weight-normal mr-2"
                              style={styles}
                            >
                              {key.numberpieces} pièces
                            </span>
                            <span
                              className="badge font-weight-normal mr-2"
                              style={styles}
                            >
                              {key.price} €
                            </span>
                          </div>
                        </div>
                      </div>

                      <h2 className="h6 font-weight-bold text-uppercase text-secondary ">
                        {key.housingtype} à{" "}
                        {key.leasecontract === "Vente" ? (
                          <span>vendre</span>
                        ) : (
                          <span>louer</span>
                        )}{" "}
                        {key.city}
                      </h2>
                      <h3 className="h6 font-weight-normal text-secondary">
                        {key.housingtype} {key.numberpieces} pièces{" "}
                        {key.surface}
                        m² {key.adresse}
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </>
  );
};

export default Home;
