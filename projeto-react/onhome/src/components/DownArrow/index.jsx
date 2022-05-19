import React from 'react'
import { Link } from "react-scroll";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import './style.css';

const DownArrow = () => {
    return (
        <div className="down--arrow">
            <Link to="solutions--container" smooth={true} duration={1000}>
                <ExpandMoreIcon
                    style={{ color: "white", fontSize: 100, cursor: "pointer" }}
                />{" "}
            </Link>
        </div>
    )
}

export default DownArrow