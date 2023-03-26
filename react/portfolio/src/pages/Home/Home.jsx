import React from 'react'
import Header from "../../compo/Header"
import classes from "./Home.module.css"
import { useNavigate } from 'react-router-dom';
function Home() {
  let navigate = useNavigate();

  function goSkills() {
    navigate("/Skills");
  }

  return (
    <div className={classes["home-page"]}>
      <Header />
      <main className={classes["home-page__content-wrapper"]}>
        <div className={classes["home-page__content"]}>
          <h1 className={classes["home-page__heading"]}>
            you can travel Plla2's portfolio
          </h1>
          <h2 className={classes["home-page__title"]}>Plla2</h2>
          <p className={classes["home-page__context"]}>
            소개소개소개~!
          </p>
        </div>
        <button className={classes["home-page__btn"]} onClick={goSkills}>
          <span className={classes["home-page__btn-skills"]}>Start!!</span>
        </button>
      </main>
    </div>
  )
}

export default Home