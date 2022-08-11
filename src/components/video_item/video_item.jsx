import React from 'react';
import styles from './video_item.module.css'; // 같은 폴더안에있는 css

// props: props.video.snippet.thumbnails.medium.url
// -> video: { snippet } => snippet.thumbnails.medium.url
// -> 디컨스트럭팅
const VideoItem = ({ video: { snippet } }) => (
  <li className={styles.container}>
    <div className={styles.video}>
      <img
        className={styles.thumbnail}
        src={snippet.thumbnails.medium.url}
        alt="video thumbnail"
      />
      <div className={styles.metadata}>
        <p className={styles.title}>{snippet.title}</p>
        <p className={styles.channel}>{snippet.channelTitle}</p>
      </div>
    </div>
  </li>
);

export default VideoItem;