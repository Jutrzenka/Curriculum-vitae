import React, {useEffect, useRef, useState} from 'react';
import { useReactToPrint } from 'react-to-print';
import {LeftSection} from "./components/LeftSection/LeftSection";

import "./_App.css";

enum Size {
    zoomOut,
    zoomIn,
}

export const App = () => {
    const [width, setWidth] = useState(65);
    const [fontSize, setFontSize] = useState(width/4.5);
    const componentRef = useRef<any>(null);

    useEffect(() => {
        setFontSize(width/4.5);
    },[width])

    const print = (
        <div style = {{  display : "none"}}>
            <div className={"CV"} ref={componentRef}>
                <div className={"Document"}>
                    <LeftSection/>
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
                    if (prevState > 30) {
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
        onAfterPrint: () => {setWidth(60); setFontSize(60/4.5)}
    });

    return (
    <div className="App">
        <div className={"DocumentManager"}>
            <button className={"DocumentManager_BUTTON"} onClick={() => handleEnlarge(Size.zoomOut)}>-</button>
            <button className={"DocumentManager_BUTTON"} onClick={handlePrint}>Drukuj</button>
            <button className={"DocumentManager_BUTTON"} onClick={() => handleEnlarge(Size.zoomIn)}>+</button>
        </div>
        <div className={"CV"} style={{width: `${width}%`}}>
            <div className={"Document"} style={{fontSize: `${fontSize}px`}}>
                <LeftSection/>
            </div>
        </div>
        {print}
    </div>
  );
}
