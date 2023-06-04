import React from "react";

function Rules() {
    return (
        <><div className="header">
            <h1>Rules</h1>
        </div>
        <div className="rules">
            <ul>
                <li>
                    Roll a D6 to determine how many chores will be completed for the day.  If a die falls on the floor, re-roll.
                </li>
                <li>
                    Once chore number is determined, roll a D20 to determine what chores to complete.
                </li>
                <li>
                    Tasks 1, 13, and 20 are PERMANENT TASKS and CANNOT be edited or removed!
                </li>
                {/* <li>
                    If task is blue it is a temporarily priortized task.  Once complete, roll a D20 to assign a replacement task from the "Replacement Tasks" List.
                </li> */}
            </ul>
        </div></>
    )
}

export default Rules;