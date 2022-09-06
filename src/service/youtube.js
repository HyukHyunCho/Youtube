class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 30,
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 30,
        type: "video",
        q: query,
        relevanceLanguage: "ko"
      },
    });
    return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
  }

  async commentList(query) {
    const response = await this.youtube.get("commentThreads", {
      params: {
        part: "snippet",
        maxResults: 10,
        videoId: query
      },
    });
    return response.data.items.map(item => item.snippet.topLevelComment);
    //return response.data.items.map(item => item.snippet.topLevelComment.snippet.textOriginal);
  }
}

export default Youtube;