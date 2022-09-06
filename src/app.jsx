import { useEffect, useState, useCallback } from "react";
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [comments, setComments] = useState(null);

  const selectVideo = video => {
    setSelectedVideo(video);

    youtube
      .commentList(video.id)
      .then(comments => {
        setComments(comments);
      });
  }

  const search = useCallback(query => {
    youtube
      .search(query) //
      .then(videos => {
        setVideos(videos);
        setSelectedVideo(null);
      });
  }, []);

  useEffect(() => {
    // youtube
    //   .mostPopular() //
    //   .then(videos => setVideos(videos));
    youtube
      .search("무한도전") //
      .then(videos => {
        setVideos(videos);
        setSelectedVideo(null);
      });
  }, [youtube]);

  return (
    <>
      <SearchHeader onSearch={search} />
      <div className={styles.app}>

        <section className={styles.content}>
          {selectedVideo && (
            <div className={styles.detail}>
              <VideoDetail video={selectedVideo} comments={comments} />
            </div>
          )}

          <div className={styles.list}>
            <VideoList
              videos={videos}
              onVideoClick={selectVideo}
              display={selectedVideo ? "list" : "grid"}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
