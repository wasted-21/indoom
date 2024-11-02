import SignMenu from "./signmenu";

export default function AvatarMenu(){

/*

 // to give role ( will delete )
  const role = 'admin';
  //Check Role for Sign
  const sign = () => {
    switch(role) {
      case "superadmin":  return <AdminMenu/>;
      case "admin": return <AdminMenu/>;
      case "support":  return <SupportMenu />;
      case "user": return <UserMenu />;    

      default: return <SignMenu/>;
    } 
  } 

*/
  return(
    <>
      <SignMenu/>
    </>
  );
}




