import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../components/Button";
import styled from "styled-components";
import { List } from "antd";
import { LoadingOutlined } from "@ant-design/icons";




const Home = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPostData();
  }, []);

  //Empty array is a second argument and it is a dependency array

  const fetchUserData = () => {
    axios
      .get("http://localhost:8080/api/users")
      .then(({ data }) => setUsers(data.users))
      .catch((err) => console.log(err));

    // fetch(`http://localhost:8080/api/users`, {
    //   method: "GET",
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => setUsers(data.users))
    //   .catch((err) => console.log(err));
  };

  const fetchPostData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));

    //   fetch(`https://jsonplaceholder.typicode.com/posts`, {
    //     method: "GET",
    //   })
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((data) => setPosts(data))
    //     .catch((err) => console.log(err));
  };

  const testFunction = () => {
    alert("Testing function");
  };

  if (loading) {
    return (
      <LoadingOutlined
        style={{ height: "100vh" }}
        className="display-1 text-danger d-flex align-items-center justify-content-center"
      />
    );
  }

  return (
    <>
      <div className="container">
        {users &&
          users.map((user) => (
            <div className="alert alert-primary" key={user.age}>
              {user.name} age is {user.age} years old
            </div>
          ))}

        <Button handleClick={fetchUserData} title="Fetch User data" />
        <Button handleClick={testFunction} title="testing" />
        <List
          bordered
          dataSource={posts}
          renderItem={(item) => <List.Item>{item.title}</List.Item>}
        />

        {/* {posts &&
          posts.map((post) => <PostList key={post.id}>{post.title}</PostList>)} */}
      </div>
    </>
  );
};

export default Home;

const PostList = styled.div`
  background-color: indigo;
  color: #fff;
  border: 1px solid #999;
  padding: 2px;
`;

// import { useState } from "react";

// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("STATE=>", email, password);
//   };

//   return (
//     <div className="container">
//       <h1 className="display-4 text-center">Learning React</h1>
//       <br />

//       <div className="row">
//         <div className="col-md-6 offset-md-3">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="exampleInputEmail1" className="form-label">
//                 Email address
//               </label>
//               <input
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 type="email"
//                 className="form-control"
//                 id="exampleInputEmail1"
//                 aria-describedby="emailHelp"
//               />
//               <div id="emailHelp" className="form-text">
//                 We'll never share your email with anyone else.
//               </div>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="exampleInputPassword1" className="form-label">
//                 Password
//               </label>
//               <input
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 type="password"
//                 className="form-control"
//                 id="exampleInputPassword1"
//               />
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
