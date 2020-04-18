import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../store/user/selectors';
import { storiesByUser } from '../../store/profilePage/actions';
import { selectProfilePage } from '../../store/profilePage/selectors';

export default function ProfilePage() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const profile = useSelector(selectProfilePage);
  
  useEffect(() => {
    if(!user.id) return;
    if(profile.length !== 0) return;
    dispatch(storiesByUser(user.id))
  })

  return (
    <div className="profile-page">
      <h1>THIS IS THE PROFILE PAGE</h1>
    </div>
  )
}