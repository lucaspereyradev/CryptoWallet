import React from 'react';

const AppWrap = (Component) =>
    function HOC() {
        return (
            <div className="float-right h-screen w-[83%] px-4 lg:w-[86%] lg:px-10">
                <Component />
            </div>
        );
    };

export default AppWrap;
