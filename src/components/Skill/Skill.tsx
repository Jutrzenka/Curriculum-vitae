import React, {useEffect, useState} from "react";
import "./_Skill.css";

interface Props {
    title: string;
    point: number;
}

export const Skill = ({title, point}:Props) => {
    let arraySkill = []
    for (let i = 1; i <= 5; i++) {
        if (i <= point) {
            arraySkill.push(<li className={"Skill__Point"}/>)
        } else {
            arraySkill.push(<li className={"Skill__NonPoint"}/>)
        }
    }
    return (
        <div className={"Skill"}>
            <div className={"Skill_Data"}>
                <h3 className={"Skill_title"}>{title}:</h3>
                <div className={"Skill_Points"}>
                    <ol className={"Skill_list"}>
                        {arraySkill}
                    </ol>
                </div>
            </div>
        </div>
    )
}