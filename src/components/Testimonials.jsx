import React from "react";
import styles from "../style";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";
const Testimonials = () => {
  return (
    <section id = "clients" className= {`flex-col relative ${styles.flexCenter} ${styles.paddingY}`}>
        <div className="absolute z-[0] w-[60%] h-[50%] -right-[50%] rounded-full blue__gradient"/>
        
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
          <h2 className={`${styles.heading2}`}>What people are <br className="sm:block hidden" />saying about us</h2>
          <div className="w-full md:mt-0 mt-6">
                 <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                    Everything you need to accept card 
                    payment and grow your business 
                    anywhere on the planet.
               </p>
          </div>
        </div>

        <div className="flex flex-wrap z-[1] sm:justify-start justify-center w-full feedback-container relative">
           {feedback.map((card)=>(
            <FeedbackCard key = {card.id} {...card} />
           ))}
        </div>
    </section>
  )
}
export default Testimonials