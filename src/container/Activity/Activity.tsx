import { useState } from "react";
import AddActivity from "../../component/Activity/AddActivity";

const Activity: React.FC = () => {
    const [isAdd, setIsAdd] = useState<boolean>(false);

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
