import React from "react";

import "./_HobbySection.css";

export const HobbySection = () => {
    return (
        <div className={"HobbySection"}>
            <h2 className={"HobbySection_Name"}>Hobby i zainteresowania:</h2>
            <article className={"HobbySection_Article"}>
                <ol className={"HobbySection__List"}>
                    <li className={"HobbySection___ListElement"}>
                        <p className={"HobbySection___Text"}>
                            Wszystko co związane z fantastyką
                        </p>
                    </li>
                    <li className={"HobbySection___ListElement"}>
                        <p className={"HobbySection___Text"}>
                            Gry strategiczne zarówno komputerowe jak i planszowe
                        </p>
                    </li>
                    <li className={"HobbySection___ListElement"}>
                        <p className={"HobbySection___Text"}>
                            Od niedawna fotografia
                        </p>
                    </li>
                </ol>
            </article>
        </div>
    )
}