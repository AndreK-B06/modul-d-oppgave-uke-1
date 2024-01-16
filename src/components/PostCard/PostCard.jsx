import { Component } from "react";
import App from "../../App";
import "./PostCard.css";

const poste = [
    {title: "Mounten tripp", 
    body: "Awwsometime at the mounten dis winter"},
    {title: "Bord",
    body: "I am sooooo bord at home..."}]
const PostCard = poste.map(poste) => {
  //JS here
  return (
    <article className='card'>
        <h2>{poste.title}</h2>
        <p>{poste.body}</p>
    </article>
  );
}