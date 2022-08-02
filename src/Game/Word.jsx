import React, { PureComponent } from "react";
import propTypes from "prop-types";
import Wordlist from "./Wordlist";
import "./Board.css";

class Word extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      p_score: 0,
      wordlist: Wordlist,
    };
    this.handleChange = this.handleChange.bind(this);
    this.randomWord = this.randomWord.bind(this);
    this.checkScore = this.checkScore.bind(this);
  }

  handleChange() {
    const { onChange } = this.props;
    if (onChange) {
      onChange(this.props.id, this.state.wordlist[0]);
    }
  }

  randomWord() {
    var randomidx = 0;
    var temp = null;
    for (let i = 0; i < this.state.wordlist.length; i++) {
      randomidx = Math.round(Math.random() * (this.state.wordlist.length - 1));
      temp = this.state.wordlist[randomidx];
      // eslint-disable-next-line react/no-direct-mutation-state
      this.state.wordlist[randomidx] = this.state.wordlist[i];
      // eslint-disable-next-line react/no-direct-mutation-state
      this.state.wordlist[i] = temp;
    }
    this.handleChange();
  }

  checkScore(score) {
    if (this.state.p_score !== score) {
      this.randomWord();
      this.setState({
        p_score: score,
      });
    }
  }

  render() {
    const { id, score } = this.props;
    this.checkScore(score);

    return (
      <div>
        <h1 className="Question_text" id={id} onClick={this.randomWord}>
          {this.state.wordlist[0]}
        </h1>
      </div>
    );
  }
}

Word.propTypes = {
  wordlist: propTypes.array,
  type: propTypes.oneOf(["text", "number", "price"]),
  name: propTypes.string.isRequired,
  onChange: propTypes.func,
  score: propTypes.number,
};

Word.defaultProps = {
  onChange: () => {},
  autoFocus: false,
  type: "text",
};
export default Word;
