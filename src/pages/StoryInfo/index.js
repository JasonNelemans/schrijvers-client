import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { selectUser } from "../../store/user/selectors";
import { fetchStoryInfo } from "../../store/storyInfo/actions";
import { selectStoryInfo } from "../../store/storyInfo/selectors";
import "./storyinfo.css";
import HeatMap from "./HeatMap";

export default function StoryInfo() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector(selectUser);
  const info = useSelector(selectStoryInfo);

  useEffect(() => {
    //Halt action if !id or !user.id to stop error
    if (!id) return;
    if (!user.id) return;
    //Fetch story with all paragraphs
    dispatch(fetchStoryInfo(user.id, id));
  }, [id, user.id, dispatch]);

  return (
    <div className="story-info-container">
      <div className='storyInfo-buttons'>
        <Button variant='secondary' as={NavLink} to="/profile">Go back</Button>
      </div>
      <h2>{info.title}</h2>
      <p style={{ fontWeight: "normal" }}>
        type: <strong>{info.type}</strong> genre: <strong>{info.genre}</strong>{" "}
      </p>
      <div className="heatmap-container">
        <h4>Heatmap</h4>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <span>Paragraaf lengte: <strong>{info.paragraphs.length}</strong></span>
          <span>Titel geklikt: <strong>{info.titleClicked}</strong> keer</span>
        </div>
        <HeatMap {...info} />
      </div>
    </div>
  );
}
