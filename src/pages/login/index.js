import React from 'react';
// import logo from './logo.svg';
import styles from './Index.module.css';

function Header(props) {
  return (
    <header className={styles['login-header']}>
      <h2>{props.name}</h2>
    </header>
  )
}
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      passWord: ""
    }
  }
  handleSubmit = (e) => {
    console.log(this.state.userName, this.state.passWord);
    if (!this.state.userName) {
      alert("请输入用户名")
    } else if (!this.state.passWord) {
      alert("请输入密码")
    } else {
      console.log('this.props', this.props);
      this.props.history.push('/homePage')
    }
    e.preventDefault();
  }
  handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    this.setState({
      [name]: value
    })

  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <span className={styles['label-name']}>Name:</span>

          <input name="userName" type="text" value={this.state.userName} onChange={this.handleChange}></input>
        </label>
        <br />
        <label>
          <span className={styles['label-name']}>Password:</span>

          <input name="passWord" type="text" value={this.state.passWord} onChange={this.handleChange}></input>
        </label>
        <br />
        <input className={styles['submit-login']} type="submit" value="Submit"></input>
      </form>
    )
  }

}
class App extends React.Component {
  render() {
    return (
      <div className={`${styles['App']} ${styles['App-header']}`}>
        <div className={styles['login-back']}>
          <Header name="登录" />
          <Login {...this.props} />
        </div>
      </div>
    )
  }
}

export default App;
