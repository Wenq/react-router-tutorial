import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'

//hashHistory可以直接使用，而browserHistory还需要配置服务器.
//hash 部分并不会被浏览器发送到服务端，也就是说不管是请求 http://domain.com/index.html#foo 还是 http://domain.com/index.html#bar ，服务只知道请求了 index.html 并不知道 hash 部分的细节。而 History API 需要服务端支持，这样服务端能获取请求细节。

//http://react-guide.github.io/react-router-cn/docs/guides/basics/Histories.html

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
