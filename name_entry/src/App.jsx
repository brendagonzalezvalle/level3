import { useState } from 'react'



function App() {
  const [formData, setFormData] = useState({
    fruit: ""
  })

  const [listData, setListData] = useState([])

  function handleChange(event){
    event.preventDefault()
    const valueOfInput = event.target.value
    console.log(valueOfInput)

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: valueOfInput
      }

    })
    console.log(formData)
  }

  function handleSubmit(event){
    event.preventDefault()


    setListData((prevListData) => [
      ...prevListData,
      formData

    ])

    const valueOfInput = event.target.value
    

  
  }
  const liNames = listData.map((items)=> {
    return <li> {items.fruit}</li>
  })


  return (
    <div>
    
      <form onSubmit={handleSubmit}>
        <input 
      
        type='text'
        name='fruit'
        value={formData.fruit}
        onChange={(event)=> handleChange(event)}
        
        />
        
      
        <div id="names-container">

          <h1 id="header1"> Fruit Name: {formData.fruit}  </h1>
          <button>Submit</button>

        </div>
      </form>

   <ol>
      {liNames}
    </ol>   
      
    
</div>
  )
  console.log(formData)
}


export default App
