import GetAPI from "../../services/getAPI";
import React, { useState, useEffect } from "react";

import "../Form/form.css";

const style = {
  background: "#ed5545",
};
const star = {
  color: "red",
};
const text = {
  color: "#ed5545",
};

const AddAnnonce = () => {
  const [Housing, setHousing] = useState({
    lastname: "",
    firstname: "",
    leasecontract: "",
    housingtype: "",
    adresse: "",
    city: "",
    department: "",
    surface: "",
    numberpieces: "",
    price: "",
    description: "",
    description2: "",
    description3: "",
    description4: "",
    description5: "",
    description6: "",
    description7: "",
    description8: "",
    customer: "",
  });
  const [fileData, setFileData] = useState({
    image: "",
  });

  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    console.log(Housing.lastname);
    console.log(Housing.firstname);
    console.log(Housing.leasecontract);
    console.log(Housing.housingtype);
    console.log(Housing.adresse);
    console.log(Housing.city);
    console.log(Housing.department);
    console.log(Housing.surface);
    console.log(Housing.numberpieces);
    console.log(Housing.price);
    console.log(Housing.description);
    console.log(Housing.description2);
    console.log(Housing.description3);
    console.log(Housing.description4);
    console.log(Housing.description5);
    console.log(Housing.description6);
    console.log(Housing.description7);
    console.log(Housing.description8);
    console.log(fileData);
  });

  const handleSubmit = (event) => {
    setShowLoading(true);
    event.preventDefault();
    const descriptions = {
      description1: Housing.description,
      description2: Housing.description2,
      description3: Housing.description3,
      description4: Housing.description4,
      description5: Housing.description5,
      description6: Housing.description6,
      description7: Housing.description7,
      description8: Housing.description8,
    };

    const idCustomer = localStorage.getItem("id");

    console.log(idCustomer);
    var formData = new FormData();
    for (const key of Object.keys(fileData.image)) {
      formData.append("image", fileData.image[key]);
    }
    for (const keys of Object.keys(descriptions)) {
      formData.append("description", descriptions[keys]);
    }

    formData.append("lastname", Housing.lastname);
    formData.append("firstname", Housing.firstname);
    formData.append("leasecontract", Housing.leasecontract);
    formData.append("housingtype", Housing.housingtype);
    formData.append("adresse", Housing.adresse);
    formData.append("city", Housing.city);
    formData.append("department", Housing.department);
    formData.append("surface", Housing.surface);
    formData.append("numberpieces", Housing.numberpieces);
    formData.append("price", Housing.price);
    formData.append("customer", idCustomer);

    GetAPI.CreateHousing(formData)
      .then(function (response) {
        setShowLoading(false);

        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleChange = (event) => {
    setHousing({ ...Housing, [event.target.name]: event.target.value });
  };

  const handleFileChange = (e) => {
    setFileData({ image: e.target.files });
  };

  return (
    <>
      <section className="container py-4 pt-5">
        <h1 className="h3 text-center font-weight-bold mt-3 mb-4">
          D??posez gratuitement votre annonce immobili??re
        </h1>
        <div className="row mb-4 row justify-content-md-center">
          <div className="col-xl-8 order-1">
            <form
              onSubmit={handleSubmit}
              action=""
              encType="multipart/form-data"
            >
              <div className="bg-white rounded rounded-huge shadow p-3 p-md-5 mb-4">
                <p className="font-weight-regular">
                  <strong>
                    {" "}
                    D??posez gratuitement votre annonce pour vendre ou louer
                    votre appartement, maison ou immeuble de rapport.
                  </strong>
                  <br />
                  <br />
                  <strong>Pour vendre ou louer</strong> votre appartement ou
                  votre maison directement et{" "}
                  <strong>gratuitement entre particuliers</strong>, nous vous
                  invitons ?? remplir le formulaire ci-dessous avec la plus{" "}
                  <strong>grande pr??cision possible.</strong>
                  <br />
                  <br />
                  Le temps que vous y consacrerez sera largement rentabilis?? en
                  vous <strong>??vitant</strong> ensuite des{" "}
                  <strong>appels inutiles</strong> et en offrant aux acheteurs
                  une{" "}
                  <strong>
                    qualit?? d'informations et de lisibilt?? sur votre bien
                  </strong>{" "}
                  (Voir exemple d'annonce <strong>d'appartement</strong> ou de{" "}
                  <strong>maison.</strong>
                  <br />
                  <br />
                  Merci pour votre collaboration.
                </p>
              </div>
              <div className="alert-info rounded rounded-huge shadow p-3 mb-4">
                <p className="text-center mb-0">
                  Les champs marqu??s d'une <span style={star}>*</span> sont
                  obligatoires.
                </p>
              </div>
              <div className="bg-white rounded rounded-huge shadow p-3 p-md-5 mb-4">
                <h2 style={text} className="h6 font-weight-bold ">
                  Vous souhaitez mettre un bien immobilier en :{" "}
                  <span style={star}>*</span>
                </h2>
                <br />
                <select
                  name="leasecontract"
                  value={Housing.leasecontract}
                  onChange={handleChange}
                  className="form-control col-md-6"
                >
                  <option>Selectionner...</option>
                  <option value="Vente">Vente</option>
                  <option value="Location">Location</option>
                </select>
                <br />
                <h2 style={text} className="h6 font-weight-bold ">
                  Quel type de bien souhaitez-vous vendre ou louer ?{" "}
                  <span style={star}>*</span>
                </h2>
                <br />
                <select
                  name="housingtype"
                  value={Housing.housingtype}
                  onChange={handleChange}
                  className="form-control col-md-6"
                >
                  <option>Selectionner...</option>
                  <option value="Appartement">Appartement</option>
                  <option value="Maison">Maison</option>
                </select>
                <br />
              </div>

              <div className="bg-white rounded rounded-huge shadow p-3 p-md-5 mb-4">
                <h2 style={text} className="h6 font-weight-bold ">
                  Localisation du bien <span style={star}>*</span>
                </h2>
                <br />
                <input
                  name="department"
                  value={Housing.department}
                  onChange={handleChange}
                  id="department"
                  className="form-control col-md-6"
                  type="text"
                  placeholder="Code Postal"
                />
                <br />
                <input
                  name="city"
                  value={Housing.city}
                  onChange={handleChange}
                  id="city"
                  className="form-control col-md-6"
                  type="text"
                  placeholder="Ville"
                />
                <br />
                <input
                  name="adresse"
                  value={Housing.adresse}
                  onChange={handleChange}
                  id="adresse"
                  className="form-control col-md-6"
                  type="text"
                  placeholder="Adresse du bien"
                />
              </div>
              <div className="bg-white rounded rounded-huge shadow p-3 p-md-5 mb-4">
                <h2 style={text} className="h6 font-weight-bold ">
                  Caract??ristiques du bien <span style={star}>*</span>
                </h2>
                <br />
                <h2 className="h5 font-weight-bold text-dark">
                  Combien y a-t-il de pi??ce?
                </h2>
                <select
                  name="numberpieces"
                  value={Housing.numberpieces}
                  onChange={handleChange}
                  className="form-control col-md-6"
                >
                  <option>Selectionner...</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6+">6+</option>
                </select>
                <br />
                <div class="input-group">
                  <input
                    name="surface"
                    value={Housing.surface}
                    onChange={handleChange}
                    className="form-control col-md-5"
                    type="text"
                    placeholder="Surface"
                  />
                  <div class="input-group-prepend">
                    <div class="input-group-text">m??</div>
                  </div>
                </div>

                <br />
                <select
                  name="description"
                  value={Housing.description}
                  onChange={handleChange}
                  className="form-control col-md-6"
                >
                  <option>Etat g??n??ral du bien...</option>
                  <option value="Parfait ??tat">Parfait ??tat</option>
                  <option value="Usag?? normal">Usag?? normal</option>
                  <option value="A Rafraichir">A Rafraichir</option>
                  <option value="A R??nover">A R??nover</option>
                </select>
                <br />
                <input
                  name="description2"
                  value={Housing.description2}
                  onChange={handleChange}
                  id="description2"
                  className="form-control col-md-6"
                  type="text"
                  placeholder="Type de chauffage (Gaz, ??lectrique...)"
                />
                <br />
                <h2 className="h5 font-weight-bold text-dark">
                  Y a-t-il du double vitrage?
                </h2>
                <select
                  name="description3"
                  value={Housing.description3}
                  onChange={handleChange}
                  id="description3"
                  className="form-control col-md-6"
                >
                  <option>S??lectionner...</option>
                  <option value="Oui">Oui</option>
                  <option value="Non">Non</option>
                </select>
                <br />
                <h2 className="h5 font-weight-bold text-dark">
                  Y a-t-il une climatisation?
                </h2>
                <select
                  name="description4"
                  value={Housing.description4}
                  onChange={handleChange}
                  id="description4"
                  className="form-control col-md-6"
                >
                  <option>S??lectionner...</option>
                  <option value="Oui">Oui</option>
                  <option value="Non">Non</option>
                </select>
                <br />
                <h2 className="h5 font-weight-bold text-dark">
                  Y a-t-il des volets ??lectriques?
                </h2>
                <select
                  name="description5"
                  value={Housing.description5}
                  onChange={handleChange}
                  id="description5"
                  className="form-control col-md-6"
                >
                  <option>S??lectionner...</option>
                  <option value="Oui">Oui</option>
                  <option value="Non">Non</option>
                </select>
                <br />
                <select
                  name="description6"
                  value={Housing.description6}
                  onChange={handleChange}
                  id="description6"
                  className="form-control col-md-6"
                >
                  <option>Performance ??nerg??tique...</option>
                  <option value="A">A : inf??rieur ou ??gal ?? 50</option>
                  <option value="B">B : de 51 ?? 90</option>
                  <option value="C">C : de 91 ?? 150</option>
                  <option value="D">D : de 151 ?? 230</option>
                  <option value="E">E : de 231 ?? 330</option>
                  <option value="F">F : de 331 ?? 450</option>
                  <option value="G">G : sup??rieur ?? 450</option>
                </select>
                <br />
                <select
                  name="description7"
                  value={Housing.description7}
                  onChange={handleChange}
                  id="description7"
                  className="form-control col-md-6"
                >
                  <option>Gaz ?? effet de serre...</option>
                  <option value="A">A : inf??rieur ou ??gal ?? 5</option>
                  <option value="B">B : de 6 ?? 10</option>
                  <option value="C">C : de 11 ?? 20</option>
                  <option value="D">D : de 21 ?? 35</option>
                  <option value="E">E : de 36 ?? 55</option>
                  <option value="F">F : de 56 ?? 80</option>
                  <option value="G">G : sup??rieur ?? 80</option>
                </select>
                <br />
                <h2 className="h5 font-weight-bold text-dark">
                  Combien y a-t-il de chambre?
                </h2>
                <select
                  name="description8"
                  value={Housing.description8}
                  onChange={handleChange}
                  id="description8"
                  className="form-control col-md-6"
                >
                  <option>S??lectionner...</option>
                  <option value="1">1 chambre</option>
                  <option value="2">2 chambre</option>
                  <option value="3">3 chambre</option>
                  <option value="4">4 chambre</option>
                  <option value="5+">5+ chambre</option>
                </select>
                <br />

                <h2 className="h5 font-weight-bold text-dark">
                  A quel prix souhaitez-vous vendre ou louer votre bien?
                </h2>
                <div class="input-group">
                  <input
                    name="price"
                    value={Housing.price}
                    onChange={handleChange}
                    id="price"
                    className="form-control col-md-6"
                    type="text"
                    placeholder="Prix de vente ou loyer charges comprises"
                  />
                  <div class="input-group-prepend">
                    <div class="input-group-text">???</div>
                  </div>
                </div>
                <br />
              </div>
              <div className="bg-white rounded rounded-huge shadow p-3 p-md-5 mb-4">
                <h2 style={text} className="h6 font-weight-bold ">
                  Photos
                  <span style={star}> *</span>
                </h2>
                <br />
                <p className="font-weight-regular">
                  L?? encore, dans un souci de qualit?? et{" "}
                  <strong>d'efficacit?? de votre annonce</strong>, nous vous
                  encourageons vivement ?? prendre le temps de l'illustrer avec
                  des <strong>photos soign??es</strong> et montrant votre bien
                  sous tous les angles.
                </p>
                <h3 className="h6">
                  {" "}
                  Liste id??ale des photos a nous faire parvenir (8 photos
                  minimum) :{" "}
                </h3>
                <ul>
                  <li>Photos de la rue (3 cot??s)</li>
                  <li>
                    Face immeuble et ou r??sidence (sous 2 angles si possible)
                  </li>
                  <li>Hall d'entr??e</li>
                  <li>Escalier ou ascenseur</li>
                  <li>Palier</li>
                  <li>Chaque pi??ce (sous 2 angles si possible)</li>
                  <li>
                    Vue ext??rieure, balcon, terrasse (sous 2 angles si possible)
                  </li>
                  <li>Plan</li>
                </ul>
                <h2 className="h5 font-weight-bold text-dark">
                  Importer vos photos en les s??lectionnant (ctrl+clique) dans
                  l'ordre que vous souhaitez qu'ils apparaissent:
                </h2>

                <input
                  onChange={handleFileChange}
                  style={style}
                  className="form-control-file"
                  type="file"
                  name="image"
                  id="image"
                  accept="image/png, image/jpeg, image/jpg"
                  multiple
                />
              </div>
              <div className="bg-white rounded rounded-huge shadow p-3 p-md-5 mb-4">
                <h2 style={text} className="h6 font-weight-bold ">
                  Coordonn??es <span style={star}>*</span>
                </h2>
                <input
                  name="lastname"
                  value={Housing.lastname}
                  onChange={handleChange}
                  id="lastname"
                  className="form-control col-md-6"
                  type="text"
                  placeholder="Votre nom"
                />
                <br />
                <input
                  name="firstname"
                  value={Housing.firstname}
                  onChange={handleChange}
                  id="firstname"
                  className="form-control col-md-6"
                  type="text"
                  placeholder="Votre pr??nom"
                />
                <br />
              </div>
              <div className="bg-white rounded rounded-huge shadow p-3 p-md-5 mb-4">
                <h2 style={text} className="h6 font-weight-bold ">
                  Enregistrement et mise en ligne de l'annonce
                </h2>
                <ul>
                  <li>
                    Vous attestez l'exactitude des informations ci-dessus et
                    ??tre un particulier agissant pour son propre compte.
                  </li>
                  <li>
                    Nous nous r??servons le droit de refuser toute annonce dont
                    nous jugerions l???attractivit?? en termes de forme ou de
                    contenu insuffisante pour la pr??senter ?? nos acheteurs.
                  </li>
                </ul>

                <div className="text-center pt-4">
                  <button type="submit" className=" button">
                    Enregistrer
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddAnnonce;
