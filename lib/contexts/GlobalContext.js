import React, { useContext, useState, createContext } from "react";
// import { useSelector } from "react-redux";
// import { selectUser } from "lib/store/selectors";

const globalContext = createContext({});

export const useGlobalStatus = () => useContext(globalContext);

const useProvideGlobal = () => {
    const [isLandingPage, setIsLandingPage] = useState(false);

    return {
        isLandingPage,
        handleIsLandingPage: setIsLandingPage,
    };
};

export const ProvideGlobal = ({ children }) => {
    const status = useProvideGlobal();
    return (
        <globalContext.Provider value={status}>
            {children}
        </globalContext.Provider>
    );
};
