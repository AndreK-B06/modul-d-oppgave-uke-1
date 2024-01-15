import { Component } from "react";
import App from "../../App";
import "./PostCardImage.css";

const poste = [
    {title: "My vecation", 
    body: "Best vecation ever!, mett a lot of people"},
    {title: "Insane Party",
    body: "Insane party last night, and now i have an insane hangover",
    sourceUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]
const PostCardImage = poste.map(poste) => {
  //JS here
  return (
    <article className='card-Image'>
        <h2>{poste.title}</h2>
        <img src="./img/vernazza.acif" alt="person on vacation" />
        <p>{poste.body}</p>
    </article>
  )
}
export default "PostCardImage"
