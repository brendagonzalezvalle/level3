import React from 'react'
import Header from "./Header"
import Navbar from "./Navbar"
import BlogList from "./BlogList"
import BlogPost from "./BlogPost"
import Footer from "./Footer"
import data from "./data"
import index from "./index.css"

console.log(data)

const dataBlogPost = data.map(function(items){
  return (
  
  <BlogPost 
    title={items.title}
    subTitle={items.subTitle}
    author={items.author}
    date={items.date}
/>
    
  )

})
console.log(data)

function App() {
 
  // {dataBlogPost}

  return (
    <>
      <Header/>
        <Navbar 
        />
      <BlogList/>
      <Footer/>
     
    </>
  )
}

export default App
