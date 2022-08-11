import React, { useState, useRef } from 'react'

import './Share.scss'
import profileImg from '@/assets/img/profileImg.jpg'
import { UilScenery, UilPlayCircle, UilLocationPoint, UilSchedule, UilTimes } from '@iconscout/react-unicons'

const Share = () => {
  const [img, setImg] = useState<string>('')
  const imgRef = useRef<HTMLInputElement>(null)

  function onImgChange (e: React.ChangeEvent<HTMLInputElement>) {
    if ((e.target.files as FileList)[0]) {
      const file = e.target.files![0]
      const newImg = URL.createObjectURL(file)
      setImg(newImg)
    }
  }
  return (
    <div className="share">
      <img src={profileImg} alt=""/>
      <div>
        <input type="text" placeholder="What's happening"/>
        <div className="post-options">
          <div className="option"
            style={{ color: 'var(--photo)' }}
            onClick={() => imgRef.current && imgRef.current.click()}
          >
            <UilScenery/>
            Photo
          </div>
          <div className="option"
               style={{ color: 'var(--video)' }}
          >
            <UilPlayCircle/>
            Video
          </div>
          <div className="option"
               style={{ color: 'var(--location)' }}
          >
            <UilLocationPoint/>
            Location
          </div>
          <div className="option"
               style={{ color: 'var(--schedule)' }}
          >
            <UilSchedule/>
            Schedule
          </div>
          <button className="button share-btn">share</button>
          <div style={{ display: 'none' }}>
            <input type="file" name="myImg" ref={imgRef} onChange={onImgChange}/>
          </div>
        </div>
        {img && (
          <div className="preview-img">
            <UilTimes onClick={() => setImg('')}/>
            <img src={img} alt=""/>
          </div>
        )}
      </div>

    </div>
  )
}

export default Share
