const StateCard = ({ icon, title, message, children }) => {
    return (
        <div className="flex justify-center items-center py-20">
            <div className="w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8 text-center">

                <div className="text-6xl">
                    {icon}
                </div>

                <h2 className="text-3xl font-bold text-white mt-5">
                    {title}
                </h2>

                <p className="text-white/70 mt-3">
                    {message}
                </p>

                {children}

            </div>
        </div>
    );
};

export default StateCard;