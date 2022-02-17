import React, { Component } from "react";

class Body extends Component {
  state = {
    videos: [
      { title: "1", imageUrl: "1-1" },
      { title: "2", imageUrl: "2-1" },
    ],
  };

  moreVideo = () => {
    console.log("moreVideo");
  };

  render() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=AIzaSyBy5L-Ab5p4_uvIc83-04ZUrPnxwGZMKn0",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const videos = [];

        //api로 받아온 제목, 이미지
        result.items.map((item) => {
          const obj = {};

          obj["title"] = item.snippet.title;
          obj["imageUrl"] = item.snippet.thumbnails.default.url;

          videos.push(obj);
        });

        var state = {};
        state["videos"] = videos;

        if (this.state.videos[0].title !== state.videos[0].title) {
          this.setState(state);
        }

        //console.log(this.state);
      })
      .catch((error) => console.log("error", error));

    return (
      <div>
        <ul>
          {this.state.videos.map((video) => (
            <>
              <li onClick={this.moreVideo}>
                <img src={video.imageUrl}></img>
                <br />
                <span>{video.title}</span>
              </li>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default Body;
