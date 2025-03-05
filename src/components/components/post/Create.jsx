import React from 'react'
import "./Create.css";
import img from "../../images/group.jpg"
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AddIcon from '@mui/icons-material/Add';

const Create = () => {
  return (
    <div className='create-post'>
      <form>
        <div className='create-wrapper'>
          <img src={img} alt='profile_image' className='profile-image' />
          <textarea
            placeholder='What are you thinking?'
            rows={3.5}
            cols={105}
            className='create-input'></textarea>
        </div>
        <hr />
        <div className='create-post-or-file'>
          <p><MissedVideoCallIcon style={{ color: "coral", marginRight: "10px" }} />Go Live</p>
          <p><AddToPhotosIcon style={{ color: "coral", marginRight: "10px" }} />Photos</p>
          <p><OndemandVideoIcon style={{ color: "coral", marginRight: "10px" }} />Videos</p>
          <p className='flex items-center' style={{width: "150px", height: "40px", backgroundColor: "coral"}}><AddIcon style={{ color: "coral", marginRight: "10px", color: "#fff" }} /><input style={{color: "#fff"}} type='submit' value="Create Post" className='create-post-btn' />
          </p>        </div>
      </form>

    </div>
  )
}

export default Create
