import { useState } from 'react'
import './App.css'
import MyForm from './components/MyForm'

export default function App() {

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    DOB: "",
    email: "",
    username:"",
    password:"",
  }) 

  const inputs = [
    {
      id:1,
      name: "firstName",
      label: "First Name",
      placeholder: "Enter your first name",
      type: "text",
    },
    {
      id:2,
      name: "lastName",
      label: "Last Name",
      placeholder: "Enter your last name",
      type: "text",
    },
    {
      id:3,
      name: "username",
      label: "Username",
      placeholder: "Enter your username",
      type: "text",
    },
    {
      id:4,
      name: "DOB",
      label: "Date of Birth",
      placeholder: "Enter your DOB",
      type: "date",
    },
    {
      id:5,
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      type: "email",
    },
    {
      id:6,
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      type: "password",
    },
  ]

  const handleSubmit = (e) =>{
    e.preventDefault();  
    console.log(data);
  }

  const handleChange = (e) =>{
    setData({...data, [e.target.name] : e.target.value })
  }

  
  return (
    <div className='form'>
        <form className='myform' onSubmit={handleSubmit}>
          {
            inputs.map((input)=>(
              <MyForm
                key={input.id}
                value = {data[input.name]}
                onChange = {handleChange}
                {...input}/>
            ))
          }
          <button>Submit</button>
          
        </form>
    </div>
  )
}
