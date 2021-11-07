import { useState } from "react";
import ActivityCard from "../../component/Activity/ActivityCard";
import AddActivity from "../../component/Activity/AddActivity";
import Modal from "../../component/Modal/Modal";

const Activity: React.FC = () => {
    const [isAdd, setIsAdd] = useState<boolean>(false);

    const addActivityHandler = () => {
        setIsAdd((prevStete) => !prevStete);
    };
    return (
        <div className='w-full h-full flex gap-8 flex-wrap'>
            <div className='w-56 h-56 bg-white rounded-lg'>
                <div
                    className='flex items-center justify-center h-full text-green-600 cursor-pointer'
                    onClick={addActivityHandler}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 4v16m8-8H4'
                        />
                    </svg>
                </div>
            </div>
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />

            {isAdd && (
                <Modal>
                    <AddActivity />
                </Modal>
            )}
        </div>
    );
};

export default Activity;
