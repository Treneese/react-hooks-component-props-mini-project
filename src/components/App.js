import React from "react";
import blogData from "../data/blog";
import About from './About'
import Header from './Header'
import ArticleList from './ArticleList'

function App() {
  return (
  <div className="App">
    learn react!
    <Header name = {blogData.name} blogData = {blogData}/>
    <About image = {blogData.image} about = {blogData.about}/>
    <ArticleList posts = {blogData.posts} />
  </div>
  )
}

export default App;

