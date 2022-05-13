import React from "react";

import "./_CourseSection.css";

export const CourseSection = () => {
    return (
        <div className={"CourseSection"}>
            <h2 className={"CourseSection_Name"}>Kursy ukończone i w trakcie:</h2>
            <article className={"CourseSection_Article"}>
                <ol className={"CourseSection__List"}>
                    <li className={"CourseSection___ListElement"}>
                        <p className={"CourseSection___Text"}>
                            <span className={"EducationSection___Span"}>Bootcamp Studiuje.it</span> ukończony 20.03.2022r.
                        </p>
                    </li>
                    <li className={"CourseSection___ListElement"}>
                        <p className={"CourseSection___Text"}>
                            <span className={"CourseSection___Span"}>Kurs MegaK edycja 1</span> skończę go 14.08.2022r.
                        </p>
                    </li>
                </ol>
            </article>
        </div>
    )
}