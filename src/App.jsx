
import { Link } from 'react-router-dom';
import './App.css'

function App() {
 const handleSubmit= event =>{
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;

  const user = {name,email}

  console.log(user)

  fetch('http://localhost:5000/users',{
    method: "POST",
    headers: {
      "content-type" : "application/json",
    },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data =>{
    console.log(data)

    if(data.insertedId){
      alert('data sent successfully')
    }
    form.reset();
  })
  
 }

  return (
    <>
      <h1>Simple CRUD operations</h1>

     <Link to={'/users'}> <h3>see total user </h3></Link>

      <form onSubmit={handleSubmit} >
      <input type="text" name="name" placeholder='name' id="" /> <br />
      <input type="email" name="email" placeholder='email' id="" /> <br />

      <input type="submit" value="add user" />

      </form>
   
   
    </>
  )
}

export default App
