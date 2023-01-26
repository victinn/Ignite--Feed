import {Post} from "./components/Post"
import './global.css'
import styles from "./App.module.css"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

const posts = [
  {
    id: 1,
    author: {
      avatar: "https://avatars.githubusercontent.com/u/87485590?v=4",
      name: "Vitin",
      role: "Full-Stack Dev"
    },
    content: [
      {type: "paragrraph", content:"Fala galeraa 👋"},
      {type: "paragraph", content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},

      {type:"link", content: "👉 jane.design/doctorcare"},
    ],
    publishedAt: new Date('2023-01-21 09:42:00'),
  },

  {
    id: 2,
    author: {
      avatar: "https://avatars.githubusercontent.com/u/97693994?v=4",
      name: "Otavio",
      role: "Full-Stack Dev"
    },
    content: [
      {type: "paragrraph", content:"Fala galeraa 👋"},
      {type: "paragraph", content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},

      {type:"link", content: "👉 jane.design/doctorcare"},
    ],
    publishedAt: new Date('2023-01-23 12:30:00'),
  }
]

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                  key={post.id} /* Ajuda o react a entender o que ja tava na tela e o que não tava, para aumentar velocidade da execução quando algo precisa ser renderizado novamente */
                  author = {post.author}
                  content = {post.content}
                  publishedAt = {post.publishedAt}             
              />
            )
          })}
        </main>
      </div>
    </div> 
  )
}

