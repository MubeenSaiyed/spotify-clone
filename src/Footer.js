import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import { PlaylistPlay, VolumeDown } from "@material-ui/icons";
import SpotifyGreenLogo from "./assets/images/Spotify-Icon-Logo.wine.png";
import { useDataLayerValue } from "./DataLayer";

function Footer() {
  const [{ current_song }, dispatch] = useDataLayerValue();
  // const { album, name, artists } = current_song;

  return (
    <div className="footer">
      {current_song ? (
        <div className="footer__left">
          <img
            className="footer__albumLogo"
            src={current_song?.album.images[0].url}
            alt=""
          />
          <div className="footer_songInfo">
            <h4>{current_song?.name}</h4>
            <p>{current_song?.artists[0].name}</p>
          </div>
        </div>
      ) : (
        <div className="footer__left">
          <h3>Select song</h3>
        </div>
      )}

      <div className="footer__center">
        <div className="footer_controls">
          <ShuffleIcon className="footer__green" />
          <SkipNextIcon className="footer__icon" />
          <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
          <SkipNextIcon className="footer__icon" />
          <RepeatIcon className="footer__green" />
        </div>
        <div className="footer_timespan">
          <span>2.39</span>
          <Slider />
          <span>4.46</span>
        </div>
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
