import React from "react";

import "./_AnotherSection.css";

export const AnotherSection = () => {
    return (
        <div className={"AnotherSection"}>
            <h2 className={"CourseSection_Name"}>Inne:</h2>
            <article className={"CourseSection_Article"}>
                <div className={"CourseSection___ListElement"}>
                    <p className={"CourseSection___Text"}>
                        <span className={"EducationSection___Span"}>Prawo jazdy kategorii B</span>
                    </p>
                </div>
            </article>
        </div>
    )
}