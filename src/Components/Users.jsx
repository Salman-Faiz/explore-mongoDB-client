import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <Link to={'/'}><h3>Add user</h3></Link>
            <h2>Total users {users.length}</h2>

            <div>
                {
                    users.map(user => <div> <h5> user id:{user._id}</h5> <h3>{user.name}</h3>
                    <h4>{user.email}</h4> </div>)
                }
            </div>
        </div>
    );
};

export default Users;