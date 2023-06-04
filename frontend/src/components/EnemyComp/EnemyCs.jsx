import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

function Enemy() {

    return(
        <><div className="enemy">
            <h1>COMING SOON~</h1>
            <ProgressBar>
                <ProgressBar striped variant="success" now={100} key={1} />
            </ProgressBar>
//will be reactive with checking off tasks in the future.  When below 50% use varient="warning" now={50 - 25}, if below 25% use varient="danger" now={24 - 0} in ProgressBar tags
        </div><div className="enemy-img">
                <ul>
                    Not ready to impliment, *COMING SOON!*
                </ul>
            </div></>

    )
}
export default Enemy;