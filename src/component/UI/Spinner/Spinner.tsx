const Spinner: React.FC<{ size: number }> = ({ size }) => {
    return (
        <div className='flex justify-center items-center'>
            <div
                className={`
        animate-spin
        rounded-full
        h-${size}
        w-${size}
        border-t-2 border-b-2 border-green-500
      `}
            ></div>
        </div>
    );
};

export default Spinner;
