import React, { PureComponent } from "react";
import propTypes from "prop-types";
import "./Board.css"

class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  handleChange(e) {
    const { onChange } = this.props;
    if (onChange) {
      onChange(e.target.id, e.target.value);
    }
  }

  onKeyDown(e) {
    if (e.key === "Enter") {
      const { onEnter } = this.props;
      if (onEnter) {
        onEnter(e.target.value);
      }
      e.target.value = "";
    }
  }

  render() {
    return (
      <div>
        <input
        className="Answer_input"
          id="input"
          placeholder="정답을 입력하세요"
          onKeyDown={this.onKeyDown}
        />
      </div>
    );
  }
}

Input.propTypes = {
  name: propTypes.string.isRequired,
  onChange: propTypes.func,
  onEnter: propTypes.func,
  score: propTypes.number,
};
Input.defaultProps = {
  onChange: () => {},
  onEnter: () => {},
  score: 0,
};

export default Input;
