import React from "react";
import "./_LeftSection.css"
import {ContactSection} from "./ContactSection/ContactSection";
import {SkillsSection} from "./SkillsSection/SkillsSection";

export const LeftSection = () => {
    return (
        <div className={"LeftSection"}>
            <div className={"LeftSection_Margin"}/>
            <div className={"LeftSection_Pictures"}>
                <img className={"LeftSection_Images"} src={"./avatar.png"} alt={"Obrazek przedstawiający - Kacper Czaja"}/>
            </div>
            <ContactSection/>
            <SkillsSection/>
            //@TODO Dorobić sekcję językową
        </div>
    )
}