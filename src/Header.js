import { Avatar } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import { useDataLayerValue } from "./DataLayer";
import "./Header.css";
import QuickSearch from "./QuickSearch";

function Header() {
  const [{ user, isSearchActive }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className={`header__left ${isSearchActive ? "d-none" : ""}`}>
        {/* <Search />
        <input type="text" placeholder="Search for Artists, Songs, Albums" /> */}
        <QuickSearch />
      </div>
      <div className={`${!isSearchActive ? "d-block b-none" : ""}`}></div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.displayName} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
