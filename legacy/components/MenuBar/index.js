import { ModalBarMenu } from "../ModalMenu";
import { useState } from "react";

export function MenuBars() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const hidenOrShowMenu = { display: showMenu ? "block" : "none" };

  return (
    <div className="wrapBarMenu">
      <i onClick={handleShowMenu} className="fas fa-bars"></i>
      <div style={hidenOrShowMenu}>
        <ModalBarMenu />
      </div>
    </div>
  );
}
