import { createContext, useState,useReducer, useEffect } from "react";
const AuthContext = createContext();

export const authreducer = (state, action) => {
    
  switch (action.type) {
    case "LOGIN":
      return {
        name: action.payload.name,
        role: action.payload.role,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        name: null,
        role: null,
        token: null,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authreducer, {
    name: null,
    role: null,
    token: null,
  });
  // const [run,isrun] = useState(false);

//immediatly upadte the state when page refreshes




  useEffect(() => {

    const isuser =  JSON.parse(localStorage.getItem("user"));
    if(isuser){
     

    const { name, role, token } = isuser;
   dispatch({type:"LOGIN",payload:{name,role,token}});



    }
  }, []);
  
  
  
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
