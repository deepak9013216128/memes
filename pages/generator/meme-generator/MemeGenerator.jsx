import React, { Component } from "react";
import SvgContainer from "../svg-container/SvgContainer";
import { Modal } from "react-bootstrap";
import styles from "../Memes.module.scss";

class MemeGenerator extends Component {
  state = {
    captions: [],
    meme: null,
  };

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

  changeCaption = (event, index) => {
    console.log(event, index);
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
  };

  render() {
    let placeholders = [];
    if (this.state.captions.length === 2) {
      placeholders = ["Upper", "Lower2"];
    } else {
      placeholders = ["First", "Second", "Third", "Fourth", "Fifth"];
    }

    if (!this.props.selectedMeme)
      return (
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <div className={`ui ${styles.memeContainer}`}></div>
        </Modal>
      );
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <div className={`ui ${styles.memeContainer}`}>
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
                <div>
                  {this.state.captions.map((caption, index) => (
                    <div className="ui fluid input" key={index}>
                      <input
                        type="text"
                        placeholder={placeholders[index] + " text"}
                        onChange={(event) => alert("helo")}
                        value={caption.text}
                      />
                    </div>
                  ))}
                </div>
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
      </Modal>
    );
  }
}

export default MemeGenerator;
