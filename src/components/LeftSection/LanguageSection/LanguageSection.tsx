import React from "react";

import "./_LanguageSection.css";
import {Skill} from "../../Skill/Skill";

export const LanguageSection = () => {
    return (
        <div className={"LanguageSection"}>
            <div className={"SkillsSection_Data"}>
                <h2 className={"SkillsSection_name"}>Język angielski:</h2>
            </div>
            <Skill title={"Pisanie"} point={3}/>
            <Skill title={"Czytanie"} point={4}/>
            <Skill title={"Słuchanie"} point={3}/>
            <Skill title={"Mówienie"} point={2}/>
        </div>
    )
}