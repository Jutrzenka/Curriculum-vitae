import React from "react";
import "./_LeftSection.css"
import {ContactSection} from "./ContactSection/ContactSection";
import {SkillsSection} from "./SkillsSection/SkillsSection";
import { LanguageSection } from "./LanguageSection/LanguageSection";

export const LeftSection = () => {
    return (
        <div className={"LeftSection"}>
            <div className={"LeftSection_Margin"}/>
            <div className={"LeftSection_Pictures"}>
                <img className={"LeftSection_Images"} src={"./photo.png"} alt={"Obrazek przedstawiający - Kacper Czaja"}/>
            </div>
            <ContactSection/>
            <SkillsSection/>
            <LanguageSection/>
        </div>
    )
}