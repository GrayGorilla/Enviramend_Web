import React from "react";
import Button from '@material-ui/core/Button';
import logo from ".././logo.svg";
import "./Home.css";

function Home(props) {
  const { classes } = props;
  return (
    <div className="Home">
      <header className="App-header">
        <h1 className="title">enviramend</h1>
        <a href="./enviramend.apk" style={{textDecoration: 'none'}} download>
          <Button variant="contained" size="large" color="primary" className="mainButton">
              Click to Download
          </Button>
        </a>

      </header>
    </div>
  );
}

export default Home;
