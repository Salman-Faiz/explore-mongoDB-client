import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers]= useState(loadedUsers)

    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`,{

            method:"DELETE"
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount>0){
                const remainingUsers = users.filter(user => user._id !== _id);
                setUsers(remainingUsers);
                alert('data delete successfully');
            }
        })

    }
    return (
        <div>
            <Link to={'/'}><h3>Add user</h3></Link>
            <h2>Total users {loadedUsers.length}</h2>

            <div >
                {
                    loadedUsers.map(user => <div style={{
                        background: 'aquamarine', border: '5px solid black', borderRadius: '5px', padding: '5px', marginBottom: '5px'
                    }} key={user._id}> <h5> user id:{user._id}</h5> <h3>{user.name}</h3>
                        <h4>{user.email}</h4>
                        <button onClick={()=>{handleDelete(user._id)} } style={{ marginBottom: '5px', color: 'red' }}>delete</button>
                        <Link to={`/update/${user._id}`}><button style={{ color: 'blue' }}>update</button></Link>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Users;