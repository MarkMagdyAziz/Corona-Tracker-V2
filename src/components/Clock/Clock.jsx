import React, { Component } from 'react';
// import moment from 'moment';
import Clock from 'react-live-clock';
import styles from './Clock.module.css'
// import { Switch } from 'antd';

class Time extends Component {
    render() {
        return (
            <div className={styles.time}>
                    <Clock format={"h:mm:ss A"} ticking={true}/>
            </div>
        );
    }
}

export default Time;