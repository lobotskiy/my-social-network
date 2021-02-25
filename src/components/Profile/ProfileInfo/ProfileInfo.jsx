import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  
  return (
    <div>
      <div>
        <img className={s.imgBg} src='https://www.corporatecare.com/wp-content/uploads/bigstock-Workplaces-In-A-Modern-Panoram-102102638-e1530543346898.jpg' />
      </div>
      <div className={s.descriptionBlock}>
         <img src={props.profile.photos.large} />
         
      </div>
    </div>
  )
} 

export default ProfileInfo;