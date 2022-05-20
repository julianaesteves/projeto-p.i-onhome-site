import Border from "../../../../components/Border";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import './style.css';

export default function Workers({nome}) {
    return (
        <div className="worker-mainContainer">
            <Border>
                <div className="worker--container">
                    <AccountBoxIcon sx={{color: "#fff", fontSize: 30}}/>
                    <p className="worker--name">Jaime</p>
                </div>
            </Border>
        </div>
    )
}