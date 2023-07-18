import React, {useState, createContext} from "react";

export const Context = createContext();

export const ContextProvider = probs =>  {
    const [username, setUsername] = useState("");
    const [secret, setSecret] = useState("");

    const value = {
      username,
      setUsername,  
      secret,
      setSecret,
    };

    return <Context.Provider value={value}>{probs.children}</Context.Provider>;
};  