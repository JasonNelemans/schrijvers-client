import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import { storiesByUser } from "../../store/profilePage/actions";
import { selectProfilePage } from "../../store/profilePage/selectors";
import ProfileStory from "./ProfileStory";
import "./profilepage.css";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const profile = useSelector(selectProfilePage);

  useEffect(() => {
    if (!user.id) return;
    if (profile.length !== 0) return;
    dispatch(storiesByUser(user.id));
  });

  return (
    <div className="profile-page">
      <div className="buttons">
        <Button variant="danger" className="button">
          Post verhaal
        </Button>
        <Button variant="light" className="button">
          Wijzig
        </Button>
      </div>
      <div className="my-stories-container">
        <h2>Mijn verhalen</h2>
        <div className="my-stories">
          {profile.map((story) => {
            return <ProfileStory key={story.title} {...story} />;
          })}
        </div>
      </div>
    </div>
  );
}
