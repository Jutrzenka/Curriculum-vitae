import React, {useEffect, useRef, useState} from 'react';
import { useReactToPrint } from 'react-to-print';
import {LeftSection} from "./components/LeftSection/LeftSection";

import "./_App.css";
import {RightSection} from "./components/RightSection/RightSection";

enum Size {
    zoomOut,
    zoomIn,
}

export const App = () => {
    const [width, setWidth] = useState(65);
    const [fontSize, setFontSize] = useState(width);
    const componentRef = useRef<any>(null);

    useEffect(() => {
        setFontSize(width);
    },[width])

    const print = (
        <div style = {{  display : "none"}}>
            <div className={"CV"} ref={componentRef}>
                <div className={"Document"}>
                    <LeftSection/>
                    <RightSection/>
                </div>
            </div>
        </div>
    )

    const handleEnlarge = (option:Size) => {
        switch (option) {
            case Size.zoomIn:
                setWidth(prevState => {
                    if (prevState < 100) {
                        return prevState + 5
                    } else {
                        return prevState;
                    }
                });
                break;
            case Size.zoomOut:
                setWidth(prevState => {
                    if (prevState > 45) {
                        return prevState - 5
                    } else {
                        return prevState;
                    }
                });
                break;
        }
    }

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        onAfterPrint: () => {setWidth(60);}
    });

    return (
    <div className="App">
        <div className={"DocumentManager"}>
            <button className={"DocumentManager_BUTTON"} onClick={() => handleEnlarge(Size.zoomOut)}>-</button>
            <button className={"DocumentManager_BUTTON"} onClick={handlePrint}>Drukuj</button>
            <button className={"DocumentManager_BUTTON"} onClick={() => handleEnlarge(Size.zoomIn)}>+</button>
        </div>
        <div className={"CV"} style={{width: `${width}%`}}>
            <div className={"Document"} style={{fontSize: `${fontSize/80}vw`}}>
                <LeftSection/>
                <RightSection/>
            </div>
        </div>
        {print}
    </div>
  );
}
