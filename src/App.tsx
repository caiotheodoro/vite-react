import { Header } from "./components/Header/Header"
import { Post } from "./components/Post/Post"
import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar/Sidebar"
function App() {
  return (

    <>
      <Header />
    
       <div className={styles.wrapper}>
       <Sidebar />
       <main>
       <Post 
        author="Caio"
        content="Lorem"
      />
      <Post 
        author="Caio"
        content="Lorem"
      />
       </main>
       </div>
    </>
  )
}

export default App
