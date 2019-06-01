import React from "react";
import { Carousel } from "antd-mobile";
import "../assets/poster.scss"

export default class Poster extends React.Component {
  state = {
    data: ["404"]
  };
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          "13b1b651b9bd07cdc",
          "2cb06f2f76f8a73ac",
          "174f0c1def6ddbc89",
          "12ee8e36b5d5355a5",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ]
      });
    }, 100);
  }
  render() {
    return (
      <Carousel
        autoplay={false}
        vertical
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={index => console.log("slide to", index)}
      >
        {this.state.data.map(val => (
          <div style={{ backgroundColor: "#000","position": "relative"}}>
            <div style={{"position": "absolute"}}>
            {(() => {
              switch (val) {
                case "12ee8e36b5d5355a5":
                  return (
                    <img
                      src={
                        "http://pic.555dreams.xin/images/2019/06/01/IMG_0843.gif"
                      }
                      alt="gif"
                      className="gif"
                    />
                  );
                  break;
                case "2":
                  return (
                    <img
                      src={
                        "http://pic.555dreams.xin/images/2019/06/01/IMG_0846.gif"
                      }
                      alt="gif"
                      className="gif"
                    />
                  );
                  break;
                case "3":
                  return (
                    <img
                      src={
                        "http://pic.555dreams.xin/images/2019/06/01/IMG_0847.gif"
                      }
                      alt="gif"
                      className="gif"
                    />
                  );
                  break;
                case "4":
                  return (
                    <img
                      src={
                        "http://pic.555dreams.xin/images/2019/06/01/IMG_0849.gif"
                      }
                      alt="gif"
                      className="gif"
                    />
                  );
                  break;
                case "5":
                  return (
                    <img
                      src={
                        "http://pic.555dreams.xin/images/2019/06/01/IMG_0850.gif"
                      }
                      alt="gif"
                      className="gif"
                    />
                  );
                  break;
                case "6":
                  return (
                    <img
                      src={
                        "http://pic.555dreams.xin/images/2019/06/01/IMG_0848.gif"
                      }
                      alt="gif"
                      className="gif"
                    />
                  );
                  break;
                default:
                  return null;
              }
            })()}
            </div>
            <img
              src={`http://pic.555dreams.xin/images/2019/06/01/${val}.png`}
              alt=""
              style={{
                width: "375px",
                height: 667,
                verticalAlign: "top"
              }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event("resize"));
                this.setState({ imgHeight: "auto" });
              }}
            />
          </div>
        ))}
      </Carousel>
    );
  }
}
