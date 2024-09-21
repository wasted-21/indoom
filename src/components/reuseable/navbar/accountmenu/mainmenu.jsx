
import SignMenu from "./signmenu";
import UserMenu from "./usermenu";
import AdminMenu from "./adminmenu";
import EmployeeMenu from "./employeemenu";



export default function MainMenu(){
  // to give role ( will delete )
  const role = "";

  const sign = () => {
    //Check Role for Sign
    switch(role) {
      case "admin": return <AdminMenu/> ;
      case "employee":   return <EmployeeMenu />; 
      case "user":   return <UserMenu />;    

      default: return <SignMenu/>;
    } 
  }
  
  return(
    <>
      {sign()}
    </>
  );
}




