import React, { Component } from "react";
import propTypes from "prop-types";
import Input from "./Input";
import Word from "./Word";
import Timer from "./Timer";
import AllRank from "../AllRank/AllRank";
import Rank2 from "../Rank2/DifficultyRank";

import "./Board.css";
import Settings from "./../Settings/Settings";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "GameUser1",
      mode: "a",
      score: 0,
      word: "소나기",
      gametext: "고딕",
    };
    this.onChange = this.onChange.bind(this);
    this.CheckAnswer = this.CheckAnswer.bind(this);
    this.TimeOut = this.TimeOut.bind(this);
  }

  onChange(key, value) {
    this.setState({
      [key]: value,
    });
  }

  CheckAnswer(value) {
    if (this.state.word === value) {
      this.setState({
        score: this.state.score + 1,
      });
    } else {
      return false;
    }
  }
  TimeOut() {
    alert("데이터 전송.");
    //var tempnick = prompt("원하는 닉네임을 입력해 주세요");
    let today = new Date();
    const result = {
      username: this.state.name,
      score: this.state.score,
      mode: this.state.mode,
      date: today,
    };
    AllRank(result);
    Rank2(result);
    // alert(tempnick);
  }
  render() {
    return (
      <div>
        <div>
          <ul>
            <li className="user_inpo">이름 : {this.state.name}</li>
            <li className="user_inpo">점수 : {this.state.score}</li>
            <li className="user_inpo">난이도: {this.state.mode}</li>
            <li className="user_inpo">폰트: {this.state.gametext}</li>
          </ul>
        </div>
        <p className="Timer">
          <Timer
            mode={this.state.mode}
            onChange={this.onChange}
            TimeOut={this.TimeOut}
          />
        </p>
        <Word
          id="word"
          score={this.state.score}
          word={this.state.word}
          onChange={this.onChange}
        ></Word>
        <Input
          word={this.state.word}
          onChange={this.onChange}
          onEnter={this.CheckAnswer}
        />

        <Settings
          //settingsValue={this.state.settingsValue}
          onChange={(key, value) => this.onChange(key, value)}
        />
      </div>
    );
  }
}

Game.propTypes = {
  name: propTypes.string,
  mode: propTypes.string,
  score: propTypes.number,
  word: propTypes.string,
};

export default Game;
