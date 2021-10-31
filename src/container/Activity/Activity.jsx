import { useState } from "react";
import AddActivity from "../../component/Activity/AddActivity";

const Activity = () => {
    const [isAdd, setIsAdd] = useState(false);

    const addActivityHandler = () => {
        setIsAdd((prevStete) => !prevStete);
    };
    return (
        <div>
            <button onClick={addActivityHandler}>Add</button>
            {isAdd && <AddActivity />}
        </div>
    );
};

export default Activity;
