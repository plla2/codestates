import React from 'react'
import classes from "./MealsSummary.module.css"

function MealsSummary() {
  return (
    <div>
      <section className={classes.summary}>
        <h2>맛있는 음식을 배달해드립니다!!</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time and
          of course by experienced chefs!
        </p>
      </section>
    </div>
  )
}

export default MealsSummary