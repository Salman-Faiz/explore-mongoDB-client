import { Link, useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedData = useLoaderData();
    const handleUpdate= event =>{
        event.preventDefault();
        
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
      
        const user = {name,email}
      
        console.log(user)

        fetch(`http://localhost:5000/users/${loadedData._id}`,{
            method:'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount>0){
                alert('data updated successfully')
                form.defaultValue='';
            }
        })
    }



    return (
        <div>
            <h4>Update information of :{loadedData.name}</h4>

            <form onSubmit={handleUpdate}>
                <input type="text" name="name"  defaultValue={loadedData?.name} id="" /> <br />
                <input type="email" name="email" defaultValue={loadedData?.email} id="" /> <br />

                <input type="submit" value="update data" />
            </form>
            <Link to={'/users'}>See all users</Link>
        </div>
    );
};

export default Update;