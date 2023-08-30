import React, { Component } from "react";
import Newsitem from "./Newsitem";
import "./background.css";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      totalResults: 0,
    };
  }

  getAPIData = async () => {
    var response = await fetch(
      `https://newsapi.org/v2/everything?q=${this.props.q}&language=hi&bitcoin&apiKey=e3ec1797d2294036b1bfef9dd35f0cd7`
    );

    var result = await response.json();
    this.setState({
      articles: result.articles,
      totalResults: result.totalResults,
    });
  };
  componentDidMount() {
    this.getAPIData();
  }

  componentDidUpdate(oldProps) {
    if (this.props === oldProps) {
      this.getAPIData();
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="conainer-fluid">
          <div className="row">
            <h5 className="bgd text-center p-2">{this.props.q} News Section</h5>
            {this.state.articles.map((item, index) => {
              return (
                <Newsitem
                  key={index}
                  pic={item.urlToImage}
                  title={item.title}
                  description={item.description}
                  source={item.source.name}
                  date={item.publishedAt}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
