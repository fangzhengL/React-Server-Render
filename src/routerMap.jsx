/**
 * Created by hzn on 2017/5/31.
 */
import React, {Component} from 'react';
import { Router} from 'react-router'
import router from "./router"
import { browserHistory } from 'react-router'

class RouterMap extends Component {
    render() {
        return  <Router history={browserHistory}>{router}</Router>
    }
}

export default RouterMap