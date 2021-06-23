import React,{useState,useEffect} from "react";
import axios from "axios";
import { Table } from 'react-bootstrap';
function DataFetching(){
    const[posts,setPosts] = useState([]);
    useEffect(()=>
    {
        axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
        .then(res =>{
            console.log(res)
            setPosts(res.data)
        })
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(res => res.json())
        // .then(res => {
        //     console.log(res)
        //     setPosts(res.data)
        // })
        .catch(err =>{
            console.log(err)
        })
    },[])

    return(
<div>
    {/* <ul>
        {posts.map(post =>(
            <li key={post.id}>{post.title}</li>
        ))}
    </ul> */}
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
  {posts.map(post =>(
    <tr key={post.id}>
      <td>{post.id}</td>
      <td>{post.name}</td>
      <td>{post.email}</td>
    </tr>))}
    </tbody>
</Table>
</div>
    );
}
export default DataFetching;