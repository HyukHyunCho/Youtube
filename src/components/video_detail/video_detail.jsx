import React, { useState, useEffect } from 'react';
import CommentItem from '../comment_item/comment_item';

import styles from './video_detail.module.css';

const VideoDetail = ({ youtube, video, video: { snippet }, comments }) => {

  // a.map(item => (
  //   console.log(item)
  // ))


  useEffect(() => {

    youtube
      .commentInsert()
      .then(comments => {
        console.log(comments)
      });

  }, [comments]);

  //console.log(comments)

  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        type="text/html"
        title="youtube video player"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h2>{snippet.title}</h2>
      <h3>{snippet.channelTitle}</h3>
      <pre className={styles.description}>{snippet.description}</pre>



      {/* <div>
        {
          [{ "id": 1 }, { "id": 2 }, { "id": 3 }].map(item => (
            <div key={item.id}>{item.id}</div>
          ))
        }
      </div> */}

      {
        comments && comments.map(element => (
          <div className={styles.container} key={element.id}>
            <div className={styles.authorContainer}>
              <img className={styles.img} src={element.snippet.authorProfileImageUrl} alt="logo" />
            </div>
            <div className={styles.mainContainer}>
              <div className={styles.top}>
                <div className={styles.userid}>{element.snippet.authorDisplayName}</div>
                <div className={styles.time}>{element.snippet.updatedAt}</div>
              </div>
              <div className={styles.middle}>
                <div className={styles.comment}>{element.snippet.textOriginal}</div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.likeCount}>{element.snippet.likeCount}</div>
              </div>
            </div>
          </div>

        ))
      }


    </section>
  )
};

export default VideoDetail;