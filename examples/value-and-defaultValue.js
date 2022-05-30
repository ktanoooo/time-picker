/* eslint no-console:0 */

import 'rc-time-picker-date-fns-format-ja/assets/index.less';

import React from 'react';
import ReactDom from 'react-dom';

import TimePicker, { formatTime } from 'rc-time-picker-date-fns-format-ja';

class App extends React.Component {
  state = {
    value: new Date(),
  };
  handleValueChange = (value) => {
    console.log(value && formatTime(value, 'HH:mm:ss'));
    this.setState({ value });
  };
  clear = () => {
    this.setState({
      value: undefined,
    });
  };
  render() {
    return (
      <div>
        <TimePicker
          defaultValue={this.state.value}
          onChange={this.handleValueChange}
        />
        <TimePicker
          value={this.state.value}
          onChange={this.handleValueChange}
        />
        <button onClick={this.clear}>clear</button>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('__react-content'));
