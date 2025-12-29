import React from "react";

const SectionHeader = ({ number, title }) => {
    return (
        <div className="flex items-center w-full mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 flex items-center whitespace-nowrap">
                <span className="text-teal-300 font-mono text-xl md:text-2xl mr-2">{number}.</span>
                {title}
            </h2>
            <div className="h-[1px] bg-slate-700 w-full ml-6 md:w-72" />
        </div>
    );
};

export default SectionHeader;
