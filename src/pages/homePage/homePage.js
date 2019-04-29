import React from 'react'
import styles from './homePage.module.css'



function Header(props) {
  return (
    <header className={styles['login-header']}>
      <h2>{props.name}</h2>
    </header>
  )
}
class HomePage extends React.Component {
  render() {
    return (
      <div className={`${styles['App']} ${styles['App-header']}`}>
        <div className={styles['login-back']}>
          <Header name="eeeee" />
        </div>
      </div>
    )
  }
}

export default HomePage;