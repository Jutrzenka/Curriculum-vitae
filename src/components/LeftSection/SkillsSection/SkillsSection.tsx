import React from "react";
import "./_SkillsSection.css";
import {Skill} from "../../Skill/Skill";

export const SkillsSection = () => {
    return (
        <div className={"SkillsSection"}>
            <div className={"SkillsSection_Data"}>
                <h2 className={"SkillsSection_name"}>Umiejetności:</h2>
            </div>
            <Skill title={"HTML"} point={4}/>
            <Skill title={"CSS"} point={3}/>
            <Skill title={"JavaScript"} point={4}/>
            <Skill title={"TypeScript"} point={3}/>
            <Skill title={"REST"} point={4}/>
            <Skill title={"Redux"} point={2}/>
        </div>
    )
}