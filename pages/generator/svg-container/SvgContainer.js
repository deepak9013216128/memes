import React, { Component } from "react";

export default class SvgContainer extends Component {
  renderMemeText = () => {
    const textStyle = {
      fontFamily: "Impact",
      fontSize: "50px",
      textTransform: "uppercase",
      fill: "#FFF",
      stroke: "#000",
      userSelect: "none",
      zIndex: 100
    };

    return this.props.captions.map((caption, index) => {
      return (
        <text
          key={index}
          style={textStyle}
          x={caption.topX}
          y={caption.topY}
          dominantBaseline="middle"
          textAnchor="middle"
          // onMouseDown={event => this.handleMouseDown(event, "top")}
          // onMouseUp={event => this.handleMouseUp(event, "top")}
        >
          {caption.text}
        </text>
      );
    });
  };

  render() {
    if (!this.props.meme) return null;

    console.log(this.props);

    var wrh = this.props.meme.width / this.props.meme.height;
    var newWidth = 600;
    var newHeight = newWidth / wrh;

    return (
      <svg
        width={newWidth}
        height={newHeight}
        xmlns="http://www.w3.org/2000/svg"
        xmlnshlink="http://www.w3.org/1999/xlink"
      >
        <image
          ref={el => {
            this.imageRef = el;
          }}
          xlinkHref={this.props.meme.memeDataUrl}
          width="100%"
          height="100%"
        />
        {this.renderMemeText()}
      </svg>
    );
  }
}
