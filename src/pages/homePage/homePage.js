import React from 'react'
import './homePage.css'



function Header(props) {
  return (
    <header className="login-header">
      <h2>{props.name}</h2>
    </header>
  )
}
class HomePage extends React.Component {
  render() {
    return (
      <div className="App App-header">
        <div className="login-back">
          <Header name="eeeee" />
        </div>
      </div>
    )
  }
}

export default HomePage;