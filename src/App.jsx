import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Booksmarks from './Components/Bookmarks/Booksmarks'
import Header from './Components/Header/Header'

function App() {
  return (
    <>
      <Header></Header>
      <div className='md:flex w-11/12 mx-auto'>
        <Blogs></Blogs>
        <Booksmarks></Booksmarks>
      </div>
    </>
  )
}

export default App
