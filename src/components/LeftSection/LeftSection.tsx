import React from "react";
import "./_LeftSection.css"
import {ContactSection} from "./ContactSection/ContactSection";

export const LeftSection = () => {
    return (
        <div className={"LeftSection"}>
            <div className={"LeftSection_Margin"}/>
            <div className={"LeftSection_Pictures"}>
                <img className={"LeftSection_Images"} src={"./avatar.png"} alt={"Obrazek przedstawiający - Kacper Czaja"}/>
            </div>
            <ContactSection/>
        </div>
    )
}