import React from "react";

function Footer(){
  let year =new Date().getFullYear();
  return(
    <footer>
      <p className="footer">copyright {year} </p>
    </footer>
    
  );
}
export default Footer;