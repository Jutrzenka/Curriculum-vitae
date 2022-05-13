import React from "react";

import "./_EducationSection.css";

export const EducationSection = () => {
    return (
        <div className={"EducationSection"}>
            <h2 className={"EducationSection_Name"}>Wykształcenie:</h2>
            <article className={"EducationSection_Article"}>
                <ol className={"EducationSection__List"}>
                    <li className={"EducationSection___ListElement"}>
                        <p className={"EducationSection___Text"}>
                            01/09/12 - 26/06/15 - <span className={"EducationSection___Span"}>Gimnazjum nr 3 w Suwałkach</span>
                        </p>
                    </li>
                    <li className={"EducationSection___ListElement"}>
                        <p className={"EducationSection___Text"}>
                            01/09/15 - 27/04/18 - <span className={"EducationSection___Span"}>II Liceum ogólnokształcące w Suwałkach</span>
                        </p>
                    </li>
                    <li className={"EducationSection___ListElement"}>
                        <p className={"EducationSection___Text"}>
                            <span className={"EducationSection___Span"}>Po znalezieniu pracy zamierzam studiować zaocznie</span>
                        </p>
                    </li>
                </ol>
            </article>
        </div>
    )
}