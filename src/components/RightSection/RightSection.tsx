import React from "react";

import "./_RightSection.css";
import {RightSectionHeader} from "./RightSectionHeader/RightSectionHeader";
import {Separator} from "../Separator/Separator";

export const RightSection = () => {
    return (
        <div className={"RightSection"}>
            <div className={"RightSection_Gradient"}>
                <div className={"LeftSection_Margin"}/>
                <RightSectionHeader/>
                <Separator/>

            </div>
        </div>
    )
}