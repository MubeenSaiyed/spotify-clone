import React from "react";
import "./SongRow.css";
import DefaultImage from "./assets/images/Spotify-Icon-Logo.wine.png";
import { useDataLayerValue } from "./DataLayer";

function SongRow({ track }) {
  const [{ currentSong }, dispatch] = useDataLayerValue();

  const selectSong = (song) => {
    dispatch({
      type: "SET_CURRENT_SONG",
      current_song: song,
    });
  };

  return track ? (
    <div
      className="song-row"
      onClick={() => {
        selectSong(track);
      }}
    >
      <img
        className="song-row__album"
        src={track.album.images[0]?.url || DefaultImage}
        alt=""
      />
      <div className="song-row__info">
        <h1>{track?.name || `${track.type}_${track.track_number}`}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}
          {track.album.name}
        </p>
      </div>
    </div>
  ) : (
    <div className="song-row">
      <h1>Please select form the playlists</h1>
    </div>
  );
}

export default SongRow;
