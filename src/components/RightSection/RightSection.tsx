import React from "react";
import {RightSectionHeader} from "./RightSectionHeader/RightSectionHeader";
import {Separator} from "../Separator/Separator";
import {EducationSection} from "./EducationSection/EducationSection";

import "./_RightSection.css";
import {CourseSection} from "./CourseSection/CourseSection";
import {AnotherSection} from "./AnotherSection/AnotherSection";
import {HobbySection} from "./HobbySection/HobbySection";

export const RightSection = () => {
    return (
        <div className={"RightSection"}>
            <div className={"RightSection_Gradient"}>
                <div className={"LeftSection_Margin"}/>
                <RightSectionHeader/>
                <Separator/>
                <EducationSection/>
                <Separator/>
                <CourseSection/>
                <Separator/>
                <AnotherSection/>
                <Separator/>
                <HobbySection/>
            </div>
        </div>
    )
}