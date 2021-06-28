import React,{useState,useEffect} from "react";
// import MyContext from '../MyContext';
import axios from "axios";
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
// import Car from '../Consumers/Car';
function mapStateToProps(state) {
  return { count: state.count };
}
function DataFetching({count}){
    const[posts,setPosts] = useState([]);
    // const[userData,setUserData] = useState([]);
//     const[userCreate,setUserCreate] = useState();
    // const userTest  = useContext(MyContext);
//     setUserCreate(userTest);
    
//       console.log("inisde the user data",userCreate);
// // console.log(user2);
// useEffect(()=>
//     {
      
//     },[])

    useEffect(()=>
    {
        axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
        .then(res =>{
            // console.log(res)
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
      <th>{count}</th>
      <th>ID</th>
      {/* {user.map(cars => <th key={cars.id}>{cars.name}</th>)} */}
      {/* key={carID}
      name={context.cars[carID].name} */}
      {/* {Object.keys(user.cars).map(carID => (
      <th>{user.cars.car[carID].name}</th>
                ))} */}
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
// export default DataFetching;
export default connect(mapStateToProps)(DataFetching);