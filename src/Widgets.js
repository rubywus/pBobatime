import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateIcon from '@mui/icons-material/Create';
//import { useRouter } from 'next/router'

function Widgets() {
//  const router = useRouter()
//
//  async function movelogInPage() {
//    router.push(`/loginPage/LogIn}`)
//  }
  return (
    <div className="widgets">
      <div className="widgets__account">
        <AccountCircleIcon fontSize="large" />
        <div className="widgets__loginContainer">
        <button>
            <h3>LogIn</h3>
        </button>
        </div>
        <div className="widgets__loginContainer">
        <button>
            <h3>SignUp</h3>
        </button>
        </div>

        <CreateIcon fontSize="large" />
      </div>
      
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search other's posts" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>BOBA GPA Ranking</h2>
        <h3>Coming soon...</h3>
        {/* <TwitterTweetEmbed tweetId={"858551177860055040"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        /> */}
      </div>

      <div className="widgets__widgetContainer">
        <h2>Popular Group</h2>
        <h3>Coming soon...</h3>
      </div>


    </div>
  );
}

export default Widgets;