import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import GetAPI from "../../services/getAPI";
import "../body/body.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import maison from "../../../src/image/maison.png";

var style2 = {
  display: "block",
  height: "95%",
  marginleft: "auto",
  width: "95%",
};

const Description = () => {
  const [list, setList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const data = location.state.details;
    const tab = [data];
    console.log(tab);
    setList(tab);
  }, []);

  return (
    <>
      <section className="container py-4 pt-5">
        {list.map((key) => (
          <div className="row mb-4 row justify-content-md-center">
            <div className="col-md-6 order-1">
              <div style={{ paddingBottom: "30px", position: "relative" }}>
                <Carousel
                  arrows
                  autoPlaySpeed={3000}
                  centerMode={false}
                  className=""
                  containerClass="container"
                  dotListClass=""
                  draggable
                  focusOnSelect={false}
                  infinite
                  itemClass=""
                  keyBoardControl
                  minimumTouchDrag={80}
                  renderButtonGroupOutside={false}
                  renderDotsOutside
                  responsive={{
                    desktop: {
                      breakpoint: {
                        max: 3000,
                        min: 1024,
                      },
                      items: 1,
                    },
                    mobile: {
                      breakpoint: {
                        max: 464,
                        min: 0,
                      },
                      items: 1,
                    },
                    tablet: {
                      breakpoint: {
                        max: 1024,
                        min: 464,
                      },
                      items: 1,
                    },
                  }}
                  showDots
                  sliderClass=""
                  slidesToSlide={1}
                  swipeable
                >
                  <img
                    src={key.image[0].image}
                    alt=""
                    className="rounded-top rounded-huge"
                    style={style2}
                  />
                  <img
                    src={key.image[1].image}
                    alt=""
                    className="rounded-top rounded-huge"
                    style={style2}
                  />
                  <img
                    src={key.image[2].image}
                    alt=""
                    className="rounded-top rounded-huge"
                    style={style2}
                  />
                  <img
                    src={key.image[3].image}
                    alt=""
                    className="rounded-top rounded-huge"
                    style={style2}
                  />
                  <img
                    src={key.image[4].image}
                    alt=""
                    className="rounded-top rounded-huge"
                    style={style2}
                  />
                  <img
                    src={key.image[5].image}
                    alt=""
                    className="rounded-top rounded-huge"
                    style={style2}
                  />
                  <img
                    src={key.image[6].image}
                    alt=""
                    className="rounded-top rounded-huge"
                    style={style2}
                  />
                  <img
                    src={key.image[7].image}
                    alt=""
                    className="rounded-top rounded-huge"
                    style={style2}
                  />
                </Carousel>
              </div>

              <div className="mb-4">
                <h1 className="h3 text-center font-weight-bold mt-3 mb-1">
                  {key.city}
                </h1>
              </div>

              <div className="text-center mb-4  d-md-block">
                <div className="d-inline-block bg-white rounded-pill shadow-sm py-2">
                  <div className="badgecolor d-inline-block rounded-pill text-white font-weight-bold py-2 px-3 mx-2">
                    {key.numberpieces} pièces
                  </div>
                  <div className="badgecolor d-inline-block rounded-pill text-white font-weight-bold py-2 px-3 mx-2">
                    {key.surface} m²
                  </div>
                  <div className="badgecolor d-inline-block rounded-pill text-white font-weight-bold py-2 px-3 mx-2">
                    {key.price} €
                  </div>
                </div>
              </div>
              <div className="bg-white rounded rounded-huge shadow p-3 p-md-5 mb-4">
                <h2 className="h6 font-weight-bold">
                  Caractéristiques du bien
                </h2>
                <p className="mb-1">
                  Appartement ou maison : <strong>{key.housingtype}</strong>
                </p>

                <p className="mb-1">
                  Etat général du bien: <strong>{key.description[0]}</strong>
                </p>
                <p className="mb-1">
                  Chauffage: <strong>{key.description[1]}</strong>
                </p>
                <p className="mb-1">
                  Performance énergétique: <strong>{key.description[5]}</strong>
                </p>

                <p className="mb-1">
                  Gaz à effet de serre: <strong>{key.description[6]}</strong>
                </p>
              </div>
              <div className="bg-white rounded rounded-huge shadow p-3 p-md-5 mb-4">
                <h2 className="h6 font-weight-bold">Description du bien</h2>

                <p className="mb-1">
                  Double vitrage : <strong>{key.description[2]}</strong>
                </p>
                <p className="mb-1">
                  Climatisation : <strong>{key.description[3]}</strong>
                </p>
                <p className="mb-1">
                  Volets électriques : <strong>{key.description[4]}</strong>
                </p>
                <p className="mb-1">
                  Nombre de chambre : <strong>{key.description[7]}</strong>
                </p>
              </div>

              <div className="bg-white rounded rounded-huge shadow p-3 p-md-5 mb-4">
                <h2 className="h6 font-weight-bold">Coordonnées</h2>
                <p className="mb-1">
                  Adresse : <strong>{key.adresse}</strong>
                </p>
                <p className="mb-1">
                  Département : <strong>{key.department}</strong>
                </p>
                <p className="mb-1">
                  Numéro de téléphone :{" "}
                  <strong>{key.customer.numberphone}</strong>
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Description;
