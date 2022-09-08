class YoutubeFetch {
  constructor(key) {
    this.key = key;
      this.getRequestOptions = {
        method: "GET",
        redirect: "follow",
      };
  }
  
  // async mostPopular() {
  //   const response = await fetch(
  //     `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
  //     this.getRequestOptions
  //   );
  //   const result = await response.json();
  //   return result.items;
  // }

  async mostPopular() {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items;
  }

  async search(query) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items.map(item => ({ ...item, id: item.id.videoId }));
  }

  async commentList() {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=10&videoId=H6kME8OcS8s&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result;
  }

  async commentInsert() {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=10&videoId=H6kME8OcS8s&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result;
  }

}

export default YoutubeFetch;