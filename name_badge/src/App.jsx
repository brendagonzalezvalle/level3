import { useState } from 'react'


function App() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    placeOfBirth: '',
    phone: '',
    favFood: '',
    comments: ''

  })

  function handleChange(event){
   console.log("handle change")
   setFormData(prevForm =>{
    
    return {
      ...prevForm,
      [event.target.name]: event.target.value

    }
   })
  }
 console.log(formData)

  return (
    <div>
      <form>
        <input 
          type='text' 
          placeholder='First Name' 
          name='firstName'
          onChange={handleChange}
          value={formData.firstName}
          />
        <input 
          type='text' 
          placeholder='Last Name' 
          name='lastName'
          onChange={handleChange}
          value={formData.lastName}
        />
        <input type='email' placeholder='Email' name='email'/>
        <input type='text' placeholder='Place of Birth' name='placeOfBirth'/>
        <input type='number' placeholder='Phone' name='phone'/>
        <input type='text' placeholder='Favorite Food' name='favFood'/>
        <textarea placeholder='Tell us about yourself' name='comments'/>
        <button>Submit</button>


      </form>

      <h1>Test App</h1>
    </div>
         
  )
}

export default App
