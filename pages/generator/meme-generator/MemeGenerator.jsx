import React, { Component } from "react";
import SvgContainer from "../svg-container/SvgContainer";
import styles from "../Memes.module.scss";

class MemeGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      captions: [],
      meme: null,
    };
  }

  static getDerivedStateFromProps(props, currentState) {
    // If no image defined return default states which will render null
    if (!props.selectedMeme) return currentState;

    // Check if meme has changed to change the state rendering
    if (currentState.meme && props.selectedMeme.id === currentState.meme.id)
      return currentState;
    let captions = [];

    const textGap = props.selectedMeme.height / props.selectedMeme.box_count;
    for (let count = 0; count < props.selectedMeme.box_count; count++) {
      captions.push({
        text: "",
        topX: "50%",
        topY: 50 + textGap * count,
      });
    }

    return {
      meme: props.selectedMeme,
      captions: [...captions],
    };
  }

  changeCaption(event, index) {
    this.setState({
      captions: [
        ...this.state.captions.slice(0, index),
        {
          ...this.state.captions.slice(index, index + 1)[0],
          text: event.currentTarget.value,
        },
        ...this.state.captions.slice(index + 1),
      ],
    });
  }

  generateInputTextBoxes = () => {
    let placeholders = [];
    if (this.state.captions.length === 2) {
      placeholders = ["Upper", "Lower"];
    } else {
      placeholders = ["First", "Second", "Third", "Fourth", "Fifth"];
    }
    return this.state.captions.map((caption, index) => (
      <div className="ui fluid input" key={index}>
        <input
          type="text"
          placeholder={placeholders[index] + " text"}
          onChange={(event) => this.changeCaption(event, index)}
          value={caption.text}
        />
      </div>
    ));
  };

  render() {
    if (!this.props.selectedMeme)
      return <div className={`ui modal ${styles.memeContainer}`} />;
    return (
      <div className={`ui modal ${styles.memeContainer}`}>
        <i className="close icon" />
        <div className="header">Generate Meme</div>
        <div className="image scrolling content">
          <div className="ui big image">
            <SvgContainer
              meme={this.props.selectedMeme}
              captions={this.state.captions}
            />
          </div>

          <div className="description">
            <div className="fixed-scroll">
              <div className="ui header">
                Write the captions for the meme to be generated
              </div>
              <div>{this.generateInputTextBoxes()}</div>
            </div>
          </div>
        </div>
        <div className="actions">
          <div className="ui black deny button">Cancel</div>
          <div className="ui positive right labeled icon button">
            Generate
            <i className="checkmark icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
