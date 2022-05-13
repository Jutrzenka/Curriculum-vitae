import React, {useState} from 'react';
import {LeftSection} from "./components/LeftSection/LeftSection";

import "./_App.css";

export const App = () => {
    const [width, setWidth] = useState(45);
    return (
    <div className="App" style={{fontSize: `${width/4.5}px`}}>
        <div className={"CV"} style={{width: `${width}%`}}>
            <LeftSection/>
        </div>
    </div>
  );
}
