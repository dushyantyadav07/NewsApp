import React, { Component } from "react";
import "./background.css";

export default class Newsitem extends Component {
  render() {
    return (
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="card">
          <img src={this.props.pic} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {this.props.title.slice(0, 50) + "..."}
            </h5>
            <h6 className="card-source hlr">
              {this.props.source}
              {`${new Date(this.props.date).getDate()}/${new Date(
                this.props.date
              ).getMonth()}/ ${new Date(this.props.date).getFullYear()}`}
            </h6>
            <p className="card-text">
              {this.props.description.slice(0, 150) + "....."}
            </p>
            <a href="/" className="btn btn-dark text-danger w-100 btn-sm">
              Read full Article
            </a>
          </div>
        </div>
      </div>
    );
  }
}

// api keys
// 846909bd8e1942e79b516112b25b9dea
