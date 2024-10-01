import SignMenu from "./signmenu";
import UserMenu from "./usermenu";
import AdminMenu from "./adminmenu";
import SupportMenu from "./supportmenu";

import { useState } from "react";


export default function MainMenu(){
  // to give role ( will delete )
  const [role, setRole] = useState('');

  const sign = () => {
    //Check Role for Sign
    switch(role) {
      case "superadmin":  return <AdminMenu/>;
      case "admin": return <AdminMenu/>;
      case "support":  return <SupportMenu />;
      case "user": return <UserMenu />;    

      default: return <SignMenu/>;
    } 
  }
  
  return(
    <>
      {sign()}
    </>
  );
}




