import React, { useEffect, useState } from "react";
import loginService from "../../services/loginService";

import { AiOutlineFileAdd } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineFolderAdd } from "react-icons/ai";

import { BiLogIn } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";

import { TiMessages } from "react-icons/ti";

import { slide as Menu } from "react-burger-menu";

import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "../../Routes";
// navbar.collapse => ce sont les trois traits pour le men
var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: "-1px",
  },
  bmMenu: {
    background: "#ed5545",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.8)",
  },
};

var styles2 = {
  color: "white",
};
const Navbars = () => {
  const [favorites, setFavorites] = useState("");
  const [ad, setAd] = useState("");
  const [connect, setConnect] = useState("");
  const [register, setRegister] = useState("");
  const [addAd, setAddAd] = useState("");

  const user = localStorage.getItem("user");

  let subscription;
  useEffect(() => {
    setFavorites(user);
    setAd(user);
    setConnect(user);
    setRegister(user);
    setAddAd(user);
    console.log(favorites);
    subscription = loginService.getLogin().subscribe((login) => {
      if (login) {
        // add message to local state if not empty
        setFavorites(login);
        setAd(login);
        setConnect(login);
        setRegister(login);
        setAddAd(login);
      } else {
        // clear messages when empty message received
        setFavorites(false);
        setAd(false);
        setConnect(false);
        setRegister(false);
        setAddAd(false);
      }
    });
  });

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return (
    <>
      <Menu styles={styles}>
        <a href="/" className="text-decoration-none" style={styles2}>
          <AiOutlineHome /> Accueil
        </a>
       <br/>
        <a href="/annonces" className="text-decoration-none" style={styles2}>
          <AiOutlineSearch /> Annonces
        </a>

        {addAd ? (
          <a
            href="/ajoutannonce"
            className="text-decoration-none"
            style={styles2}
          >
            <AiOutlineFileAdd /> Déposer une annonce
          </a>
        ) : (
          ""
        )}

        <a href="/contact" className="text-decoration-none" style={styles2}>
          <TiMessages /> Nous contacter
        </a>
        

        {ad ? (
          <a
            href="/mesannonces"
            className="text-decoration-none"
            style={styles2}
          >
            <AiOutlineFolderAdd /> Mes annonces
          </a>
        ) : (
          ""
        )}

        {connect ? (
          <a
            onClick={clearLocalStorage}
            href="/"
            className="text-decoration-none"
            style={styles2}
          >
            <BiLogOut /> Se déconnecter
          </a>
        ) : (
          <a href="/login" className="text-decoration-none" style={styles2}>
            <BiLogIn /> Se connecter
          </a>
        )}

        {register ? (
          ""
        ) : (
          <a href="/signup" className="text-decoration-none" style={styles2}>
            <AiOutlineUserAdd /> S'inscrire
          </a>
        )}
      </Menu>

      <Routes></Routes>
    </>
  );
};

export default Navbars;
