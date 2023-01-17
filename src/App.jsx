import {Post} from "./components/Post"
import './global.css'
import styles from "./App.module.css"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Vitin" 
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo mollitia repellat amet iusto. Enim, tempore totam ducimus ipsum placeat consequatur vero natus minima blanditiis dolore sint voluptatibus? Autem, ad perspiciatis?"
          />

          <Post author="Outra pessoa" content="uiui"/>
        </main>
      </div>
    </div>  
  )
}

