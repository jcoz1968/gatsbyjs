import React from "react"
import { Link } from "gatsby"
import styles from './layout.module.scss'

// HeaderLink component
const HeaderLink = props => (
    <Link className={styles.link} to={props.to}>{props.text}</Link>
)

export default () => (
    <header className={StyleSheet.container}>
        <div className={styles.row}>
            <Link to='/'>My Gatsby blog</Link>
        </div>
        <div className={styles.row}>
            <HeaderLink to='/' text='ARTICLES' />
            <HeaderLink to='/about' text='ABOUT' />
        </div>
    </header>
)