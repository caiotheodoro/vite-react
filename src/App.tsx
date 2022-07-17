import { Header } from "./components/Header/Header"
import { Post } from "./components/Post/Post"
import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { PostProps } from "./Interfaces/Post"



const posts: PostProps[] = [
  {
      id: 1,
      author: {
          avatarUrl: 'https://avatars.dicebear.com/api/jdenticon/1.svg',
          name: 'John Doe',
          role: 'Admin'
      },
      content: [
          {
              type: 'paragraph',
              content: 'Fala pessoal, tudo bem?'
          },
          {
              type: 'paragraph',
              content: 'Lorem ipsum dot sit ament, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur consectetur, nisi velit consectetur nisi velit, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur consectetur, nisi velit consectetur nisi velit, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur consectetur, nisi velit consectetur nisi velit, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur consectetur, nisi velit consectetur nisi velit, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur consectetur, nisi velit consectetur nisi velit, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur consectetur, nisi velit consectetur nisi velit, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur consectetur, nisi velit consectetur nisi velit, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur consectetur, nisi velit consectetur nisi velit, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur consectetur, nisi velit consectetur nisi velit, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur consectetur, nisi velit consectetur nisi velit, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur consectetur, nisi velit consectetur nisi velit, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur consectetur, nisi velit consectetur n'
          },
          {
              type: 'link',
              content: 'caiotheodoro.vercel.app'

          },

      ],
      publishedAt: new Date('2022-05-22T13:27:00'),
  },
  {
      id: 2,
      author: {
          avatarUrl: 'https://avatars.dicebear.com/api/jdenticon/2.svg',
          name: 'Testersson',
          role: 'Web developer'
      },
      content: [
          {
              type: 'paragraph',
              content: 'Ola pessoal, tudo bem?'
          },
          {
              type: 'paragraph',
              content: 'Gostaria de saber mais sobre o que está acontecendo no seu projeto.'
          },
          {
              type: 'link',
              content: 'google.com'

          },

      ],
      publishedAt: new Date('2022-05-22T13:27:00'),
  }
]




function App() {
  return (

    <>
      <Header />
    
       <div className={styles.wrapper}>
       <Sidebar />
       <main>
      { posts.map(post => (
        <Post key={post.id} {...post}   />

      ))}
    
       </main>
       </div>
    </>
  )
}

export default App
