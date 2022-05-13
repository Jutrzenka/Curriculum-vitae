import React from "react";
import "./_ContactSection.css"

export const ContactSection = () => {
    return (
        <div className={"ContactSection"}>
            <div className={"ContactSection_Data"}>
                <h2 className={"ContactSection_name"}>Kontakt:</h2>
            </div>
            <div className={"ContactSection_Data Phone"}>
                <div className={"Data"}>
                    <h3 className={"ContactSection__title"}>Numer telefonu:</h3>
                    <p className={"ContactSection__text"}>+48 537 379 386</p>
                </div>
            </div>
            <div className={"ContactSection_Data Mail"}>
                <div className={"Data"}>
                    <h3 className={"ContactSection__title"}>E-mail:</h3>
                    <p className={"ContactSection__text"}>kacperczaja1999@gmail.com</p>
                </div>
            </div>
            <div className={"ContactSection_Data Address"}>
                <div className={"Data"}>
                    <h3 className={"ContactSection__title"}>Adres:</h3>
                    <p className={"ContactSection__text"}>Suwałki</p>
                </div>
            </div>
        </div>
    )
}