import React, { Component } from 'react'

export default class HornedBeast extends Component {
  render() {
    return (
      <>
        <div className="card">
          <img src={this.props.imageUrl} alt={this.props.description} title={this.props.title} />
          <div className="cardInfo">
            <h2>{this.props.title}</h2>
            <p>Description: {this.props.description}</p>
            <p>horns: {this.props.horns}</p>
            <p>keyword: {this.props.keyword}</p>
          </div>
        </div>
      </>
    )
  }
}
