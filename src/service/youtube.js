class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 3,
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 3,
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
        maxResults: 15,
        videoId: query
      },
    });
    return response.data.items.map(item => item.snippet.topLevelComment);
    //return response.data.items.map(item => item.snippet.topLevelComment.snippet.textOriginal);
  }

  async commentInsert(query) {
    const response = await this.youtube.get("commentThreads", {
      params: {

        "kind": "youtube#commentThread",
        "etag": "Ms5cdFTsVoMFteW_cT-9s4LC60A",
        "id": "Ugz1l3iZAMqHJiKRosR4AaABAg",
        "snippet": {
          "channelId": "UChY4PXxJI0aJYsGT1X6INWA",
          "videoId": "exddGlthSS8",
          "topLevelComment": {
            "kind": "youtube#comment",
            "etag": "Ms5cdFTsVoMFteW_cT-9s4LC60A",
            "id": "Ugz1l3iZAMqHJiKRosR4AaABAg",
            "snippet": {
              "channelId": "UChY4PXxJI0aJYsGT1X6INWA",
              "videoId": "exddGlthSS8",
              "textDisplay": "bbb",
              "textOriginal": "bbb",
              "authorDisplayName": "H cho",
              "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AMLnZu8nHWy1Bw9bYufZqh7rqDmiwQEMn43x8807U9tFng=s48-c-k-c0x00ffffff-no-rj",
              "authorChannelUrl": "http://www.youtube.com/channel/UCx0ykuykEskvtennqFv2-iA",
              "authorChannelId": {
                "value": "UCx0ykuykEskvtennqFv2-iA"
              },
              "canRate": true,
              "viewerRating": "none",
              "likeCount": 0,
              "publishedAt": "2022-09-08T07:03:00Z",
              "updatedAt": "2022-09-08T07:03:00Z"
            }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
        }

        // part: "snippet",
        // //etag: "c0yDufmTosE6ChhzA3n_S9Mdbpg",
        // kind: "youtube#comment",
        // id: "Ugx-6HDKBamNKfMNzbp4AaABAg",
        // snippet: {
        //   videoId: "exddGlthSS8",
        //   topLevelComment: {
        //     snippet: {
        //       textOriginal: "b"
        //     }
        //   }
        // }
      }
    });
    return response;
  }

}

export default Youtube;