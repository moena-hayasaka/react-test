import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      radio: '1', // ラジオボタン選択値
      value: '', // テキストボックスの中身
      yourName: '',
      message: '' // 最終的に表示するメッセージ
    };
  }

  // value入力中
  handleInputText(event) {
    console.log('handleInput called!テキスト入力中');
    const inputText = event.target.value;
    this.setState({
      value: inputText
    });
  }

  // name入力中
  handleInputName(event) {
    console.log('handleInput called!name入力中');
    const inputName = event.target.value;
    this.setState({
      yourName: inputName
    });
  }

  // SENDボタンクリック時
  send() {
    console.log('send called!click');
    const { value } = this.state; // stateからvalueを取得
    // const { yourName } = this.state;
    // console.log(yourName);
    this.setState({
      value: '',
      message: value,
      // yourName: yourName
    });
    this.writeTest();
  }

  writeTest() {
    const { radio } = this.state; // stateからradioの値を取得
    let { value } = this.state; // stateからvalueを取得
    let { yourName } = this.state;
    if (radio === '1') {
      value = value + 'ちゃん';
    }
    console.log(radio);
    console.log(value);
    console.log(yourName);

    this.setState({
      message: value + 'happy' // OK
    })
  }

  render() {
    return (
      <div className="App">
        <h1>TestApp</h1>
        <div>
          <div>
            <input type="radio" name="textType" value="1" checked={this.state.radio === '1'} onChange={() => this.setState({ radio: '1' })} />type1
            <input type="radio" name="textType" value="2" checked={this.state.radio === '2'} onChange={() => this.setState({ radio: '2' })} />type2
            <input type="radio" name="textType" value="3" checked={this.state.radio === '3'} onChange={() => this.setState({ radio: '3' })} />type3
          </div>
          <input type="text" value={this.state.value} onChange={this.handleInputText.bind(this)} />
          <input type="text" value={this.state.yourName} onChange={this.handleInputName.bind(this)} />
          {/* 職業, 出身、居住域、趣味、すきなもの（複数）、URL*/}
          {/* 未記入の場合のバリデーション、分岐 */}
          <button onClick={this.send.bind(this)}>SEND</button>
        </div>
        <div className="output">
          {this.state.message}
        </div>
      </div>
    );
  }
}

export default App;
