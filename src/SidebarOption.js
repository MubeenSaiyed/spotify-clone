import React from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
import "./SidebarOption.css";

const spotify = new SpotifyWebApi();

function SidebarOption({ title, Icon, playlistsId }) {
  const [{ discover_weekly, isSearchActive }, dispatch] = useDataLayerValue();

  const addPlaylistId = () => {
    if (title === "Search") {
      dispatch({
        type: "SET_IS_SEARCH_ACTIVE",
        isSearchActive: !isSearchActive ? true : false,
      });
      return;
    }
    spotify.getPlaylist(`${playlistsId}`).then((res) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: res,
      });
    });
  };
  return (
    <div className="sidebarOption" onClick={addPlaylistId}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
