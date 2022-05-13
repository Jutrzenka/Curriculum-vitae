import React from "react";

import "./_RightSectionHeader.css";

export const RightSectionHeader = () => {
    return (
        <header className={"RightSection_Header"}>
            <h1 className={"RightSection__Name"}>Kacper Czaja</h1>
            <p className={"RightSection__Description"}>Początkujący programista</p>
            <article className={"RightSection__Article"}>
                <p className={"RightSection__Text"}>
                    Przykładam dużą wagę do szczegółów.
                </p>
                <p className={"RightSection__Text"}>
                    Po trzech latach pracy jako sprzedawca rozwinąłem swoje umiejętności miekkie.
                </p>
                <p className={"RightSection__Text"}>
                    Mogą się one przydać przy potencjalnej komunikacji z klientem.
                </p>
                <p className={"RightSection__Text"}>
                    W przyszłości chciałbym rozwinąć się również w kierunku backend developera.
                </p>
                <p className={"RightSection__Text"}>
                    Aktualnie jestem w trakcie kursu z Express.js i Nest.js.
                </p>
                <p className={"RightSection__Text"}>
                    Mieszkam w Suwałkach, ale przeprowadzka do Olsztyna nie byłaby problemem.
                </p>
            </article>
        </header>
    )
}