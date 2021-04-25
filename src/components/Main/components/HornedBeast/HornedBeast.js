import React, { Component } from 'react'

export default class HornedBeast extends Component {
  render() {
    return (
      <>
        <div className="card" key={this.props.keyword}>
          <img src={this.props.imageUrl} alt={`${this.props.description}, horns: ${this.props.horns}`} title={this.props.title} />
          <div className="cardInfo">
            <h2>{this.props.title}</h2>
            <p>Description: {this.props.description}</p>
          </div>
        </div>
      </>
    )
  }
}
