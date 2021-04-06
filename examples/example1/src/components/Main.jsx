import VJSX from '../vjsx'
import marked from 'marked'
import hljs from 'highlight.js'
import 'github-markdown-css'
import 'highlight.js/styles/vs2015.css'
import { main } from './Main.module.scss'
import './container.scss'

import Example from './Example'
import Header from './Header'
//import Container from './Container'
import article from './article.md?raw'

const {log} = console

marked.setOptions({
  highlight: function (code, lang) {
    return hljs.highlightAuto(code, [lang]).value
  }
})
const Main = () =>(<div class={main}>
    <Header />
    <div class='container'>
      {
        marked(article).split('<hr>').map((htmStr,i)=>{
          const s = <section innerHTML={htmStr} class='markdown-body'/>
          if(i===4) s.appendChild(<Example />)
          return s
        })
      }
    </div>
  </div>
)

export default Main