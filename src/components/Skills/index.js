import React, { useContext } from 'react';
import './index.scss';
import { ThemeContext } from "../../context/ThemeContext";

const Skills = () => {
    const { changeTheme, startThemeChangeTimer, stopThemeChangeTimer } = useContext(ThemeContext);

    function handleMouseEnter(e) {
        const type = e.nativeEvent.target.id;
        if (type) {
            changeTheme(type)
        }
    }

    return (
        <div className="skills">
            <h6>Skills</h6>
            <ul onMouseEnter={stopThemeChangeTimer}
                onMouseLeave={startThemeChangeTimer}
                onMouseOver={handleMouseEnter} >
                <li id="react" >React</li>
                <li id="angular">Angular</li>
                <li id="vue">Vue</li>
                <li id="rxjs">Laravel</li>
                <li id="redux">PHP</li>
                <li id="node">Node</li>
                <li id="ngrx">SYMFONY</li>
                <li id="javascript">JavaScript</li>
                <li id="javascript">Java</li>
                <li id="javascript">C++</li>
                <li id="javascript">Python</li>
                <li id="javascript">JEE</li>
                <li id="javascript">.NET</li>
                <li id="javascript">C#</li>
            </ul>
        </div>
    );
};

export default Skills;
