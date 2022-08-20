import React from "react";
import styles from "../style";
import {logo} from "../assets";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => {
  return(
        <section className= {`flex-col ${styles.flexCenter} ${styles.paddingY}`}>
            <div className= {`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                <div className="flex flex-1 flex-col justify-start mr-10">
                     <img 
                      src = {logo}
                      alt = "hoo_bank"
                      className="w-[266px] h-[72px] object-contain"
                     />
                     <p className= {`${styles.paragraph} mt-4 max-w-[310px]`}>
                        A new way to make the payment easy, reliable and easy
                     </p>
                </div>
                <div className="flex-[1.5] w-full flex flex-row flex-wrap justify-between mt-10 md:mt-0">
                 {footerLinks.map((footerLink)=>(
                  <div className="flex flex-col ss:my-0 my-4 min-w-[150px]" key = {footerLink.key}>
                       <h4 className="font-poppins font-medium text-white leading-[27px] text-[18px]">{footerLink.title}</h4>
                       <ul>
                          {footerLink.links.map((link,index)=>(
                             <li 
                             key = {link.name}
                              className = {`font-poppins font-normal mt-3 ${index !== footerLink.links.length -1 ? "mb-4" :"mb-0"} text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}
                              >
                               {link.name}
                             </li>
                          ))}
                       </ul>
                  </div>
                 ))}
                </div>
            </div>
            <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
                 <p className="font-poppins font-normal text-center text-white leading-[27px] text-[18px]">
                  2022 Hoobank. All right reserved.
                 </p>
                
                <div className="flex flex-row md:mt-0 mt-6">
                     {socialMedia.map((social,index)=>(
                       <img
                        key={social.name}
                        src = {social.icon}
                        alt = {social.id}
                        className = {`w-[21px] h-[21px] object-contain cursor-pointer
                          ${index !== socialMedia.length-1 ? "mr-6" : "mr-0"} 
                        `}
                        />
                     ))}
                </div>
            </div>
        </section>
  )
}
export default Footer;