import React, {useRef, useState} from 'react';
import { useReactToPrint } from 'react-to-print';
import {LeftSection} from "./components/LeftSection/LeftSection";

import "./_App.css";

export const App = () => {
    const [width, setWidth] = useState(60);
    const [fontSize, setFontSize] = useState(width/4.5);
    const componentRef = useRef<any>(null);

    const print = (
        <div style = {{  display : "none"}}>
            <div className={"CV"} ref={componentRef}>
                <div className={"Document"}>
                    <LeftSection/>
                </div>
            </div>
        </div>
    )

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        onAfterPrint: () => {setWidth(60); setFontSize(60/4.5)}
    });

    return (
    <div className="App">
        <button onClick={handlePrint}>PRINT</button>
        <div className={"CV"} style={{width: `${width}%`}}>
            <div className={"Document"} style={{fontSize: `${fontSize}px`}}>
                <LeftSection/>
            </div>
        </div>
        {print}
    </div>
  );
}
