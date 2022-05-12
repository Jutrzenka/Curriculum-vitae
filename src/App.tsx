import React, {useState} from 'react';
import {LeftSection} from "./components/LeftSection/LeftSection";

import "./_App.css";

export const App = () => {
    const [width, setWidth] = useState(60);
    return (
    <div className="App">
        <div className={"CV"} style={{width: `${width}%`}}>
            <LeftSection/>
        </div>
    </div>
  );
}
