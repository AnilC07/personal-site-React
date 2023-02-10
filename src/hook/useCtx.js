// CUSTOM HOOK

import { useContext } from "react";
import  {UserCtx}  from '../Ctx'

const UseUser = () =>{
    const ctx = useContext(UserCtx);
    console.log(ctx)
    return ctx
}

export default  UseUser 