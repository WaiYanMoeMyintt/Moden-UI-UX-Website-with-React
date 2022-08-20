import React from "react";
import styles from "../style";
import Button from "./Button";
const CTA = () => {
  return (
      <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
          <div className="flex flex-1 flex-col">
              <h2 className= {`${styles.heading2}`}>Let's try our service now!</h2>
              <p className= {`${styles.paragraph} mt-5 max-w[470px]`}>
                  Everything you need to accept payment card and
                  grow your business anywhere on the planet.
              </p>
          </div>

          <div className = {`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-10 mt-0`}>
            <Button />
          </div>
      </section>
  )
}
export default CTA;