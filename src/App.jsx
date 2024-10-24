import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Booksmarks from './Components/Bookmarks/Booksmarks'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const [readTime,setReadTime]=useState(0);
  
  const handleBookmark = blog => {
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkRead = time => {
    const newReadTime = readTime + time;
    setReadTime(newReadTime);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-8 md:mx-auto'>
        <Blogs handleMarkRead={handleMarkRead} handleBookmark={handleBookmark}></Blogs>
        <Booksmarks readTime={readTime} bookmarks={bookmarks}></Booksmarks>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App;
