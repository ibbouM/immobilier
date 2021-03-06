import GetAPI from "../../services/getAPI";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

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

const UpdateAd = () => {
  const [updateHousing, setUpdateHousing] = useState({
    leasecontract: "",
    price: "",
  });

  const [showLoading, setShowLoading] = useState(false);

  const [fileData, setFileData] = useState({
    image: "",
  });

  const location = useLocation();

  useEffect(() => {
    const id = location.state.ids;
    console.log(id);
    console.log(updateHousing.leasecontract);
    console.log(updateHousing.price);
    console.log(fileData);
  });

  const handleSubmit = (event) => {
    setShowLoading(true);
    event.preventDefault();

    var formData = new FormData();
    for (const key of Object.keys(fileData.image)) {
      formData.append("image", fileData.image[key]);
    }

    formData.append("price", updateHousing.price);
    formData.append("leasecontract", updateHousing.leasecontract);
    const id = location.state.ids;

    GetAPI.PatchHousing(formData, id)
      .then((res) => {
        setShowLoading(false);
        /* setUpdateHousing(res) */ console.log(res);
      })
      .catch(() => console.error("Failed!"));
  };

  const handleChange = (event) => {
    setUpdateHousing({
      ...updateHousing,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFileData({ image: e.target.files });
  };

  return (
    <>
      <section className="container py-4 pt-5">
        <h1 className="h3 text-center font-weight-bold mt-3 mb-4">
          Modifier votre annonce
        </h1>
        <div className="row mb-4 row justify-content-md-center">
          <div className="col-xl-8 order-1">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="bg-white rounded rounded-huge shadow p-3 p-md-5 mb-4">
                <h2 style={text} className="h6 font-weight-bold ">
                  Vous souhaitez mettre un bien immobilier en :{" "}
                </h2>
                <br />

                <select
                  name="leasecontract"
                  value={updateHousing.leasecontract}
                  onChange={handleChange}
                  className="form-control col-md-6"
                >
                  <option>Selectionner...</option>
                  <option value="Vente">Vente</option>
                  <option value="Location">Location</option>
                </select>
                <br />

                <h2 style={text} className="h6 font-weight-bold">
                  A quel prix souhaitez-vous vendre ou louer votre bien?
                </h2>
                <br/>
                <div class="input-group">
                  <input
                    value={updateHousing.price}
                    onChange={handleChange}
                    name="price"
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
                  Photos <span style={star}> *</span>
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
                  style={style}
                  onChange={handleFileChange}
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
                  Enregistrement de la modification et mise en ligne de
                  l'annonce
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

export default UpdateAd;
