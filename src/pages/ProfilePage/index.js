import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import { storiesByUser } from "../../store/profilePage/actions";
import { selectProfilePage } from "../../store/profilePage/selectors";
import ProfileStory from "./ProfileStory";
import "./profilepage.css";
import { NavLink } from "react-router-dom";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const profile = useSelector(selectProfilePage);

  useEffect(() => {
    //If user not logged in, halt useEffect function.
    if (!user.id) return;
    //Halt action if stories of loggedIn user already fetched. 
    if (profile.length !== 0) return;
    //If stories of user not yet fetched, dispatch thunk.
    dispatch(storiesByUser(user.id));
  });

  //Tell user to login before continuing to profile page
  if (user.name === null) {
    return (
      <div className="login-profile-container">
        <div className="login-profile">
          <h2>Log in om door te gaan...</h2>
          <Button variant="secondary" as={NavLink} to='/login'>Inloggen</Button>
        </div>
      </div>
    );
  }

  //If LoggedIn
  return (
    <div className="profile-page">
      <div className="buttons">
        {/*Empty for now */}
        <Button variant="info" className="button">
          Nieuw verhaal
        </Button>
      </div>
      <div className="my-stories-container">
        <h2>Mijn verhalen</h2>
        <div className="my-stories">
          {/*Map over all stories of loggedIn user to render */}
          {profile.map((story) => {
            return <ProfileStory key={story.title} {...story} />;
          })}
        </div>
      </div>
    </div>
  );
}
