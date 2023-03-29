import { createContext, useState } from "react";

const UserContext = createContext(null);

///Higher Order Component - a function that returns a component
export const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  const signInUser = (username, password) => {
    const newUser = {
      username,
      password,
    };
    setUser(newUser);
  };

  const signOutUser = () => {
    setUser(null);
  };

  return (
    // {{user}} is the same as {{user:user}}
    <UserContext.Provider
      value={{
        user,
        actions: {
          signIn: signInUser,
          signOut: signOutUser,
        },
      }}>
      {/* A special React prop that lets you pass components as data to other components */}
        {props.children}
      </UserContext.Provider>
  );
};

export default UserContext;
