import React, { useState, useEffect } from 'react';
import CommentItem from '../comment_item/comment_item';

import styles from './video_detail.module.css';

const VideoDetail = ({ video, video: { snippet }, comments }) => {

  // a.map(item => (
  //   console.log(item)
  // ))


  // useEffect(() => {

  // }, [comments]);

  console.log(comments)

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
          <div key={element.id}>
            <div className={styles.commentContainer} >
              <div className={styles.imgContainer}>
                <img className={styles.img} src="/images/user.svg" alt="logo" />
              </div>
              <div className={styles.commentText1}>{element.snippet.textOriginal}</div>

            </div>
            <div className={styles.commentText2}>{element.snippet.updatedAt}</div>
            {/* <div className={styles.commentText2}>{element.snippet.likeCount}</div> */}

          </div>

        ))
      }



      <div>

      </div>

      <div>

      </div>

      <div>

      </div>

    </section>
  )
};

export default VideoDetail;