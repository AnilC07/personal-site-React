import { createContext, useState } from "react";

import { commentaires } from "./data";

export const UserCtx = createContext({
  formulaire: {},

  commentaires: [],

  setFormulaire: () => {},

  addCommentaire: () => {},

  displayToast: () => {},
});

const UserService = ({ children }) => {
  const [state, setState] = useState({
    formulaire: {
      id:  Date.now(),
      genre:"",
      identite: "",
      email: "",
      isPro: false,
      fonction: "",
      entreprise: "",
      message: "",
    },

    commentaires: commentaires,

    setFormulaire: (name, value) => {
      setState((formulaire) => ({...formulaire,[name]:value}));
    },

    

    // addCommentaire: (newComments) => {
    //   const shallowArrOfComments = [...commentaires];
    //   shallowArrOfComments.unshift(newComments);
    //   setInfoFormulaire(commentaires);
    // },

  });
  return <UserCtx.Provider value={state}>
  {children}
  </UserCtx.Provider>;
};

export default UserService;
