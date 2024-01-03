import { useContext } from "react";
import { UserDataContext } from "../App";

function AppHeader() {
  const userData = useContext(UserDataContext);
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>
        สวัสดีคุณ {userData.username} ({userData.level})
        <img src={userData.avatar}></img>
      </h2>
    </div>
  );
}

export default AppHeader;
