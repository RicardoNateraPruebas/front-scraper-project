import { useState } from 'react'

function Form({setData, setShow, reference}) {
  const [formData,setFormData] = useState({Web:"Todas",Categorias:"Mobile",search:""})
  
  const onChange = (e)=>{
    setFormData((prevState)=>({
        ...prevState,
        [e.target.name]: e.target.value
    }))
  }
  const {Web,Categorias,search} = formData;

  const handleClick = (e) => {
      e.preventDefault()
      setShow(true)
      setData(formData)
  }

  return (
    <div className="container">
    <form>
          <div>
            <label htmlFor="Web">Web:</label>
            <select id="Web" name="Web" value={Web} onChange={onChange}>
                <option value="Todas">Todas</option>
                <option value="MercadoLibre">Mercado Libre</option>
                <option value="Buscape">Buscape</option>
            </select>
            <label htmlFor="Categorias">Categories:</label>
            <select id="Categorias" name="Categorias" value={Categorias} onChange={onChange}>
                <option value="Mobile">Mobile</option>
                <option value="Refrigerator">Refrigerator</option>
                <option value="TV">TV</option>
            </select>
            <input type="search" id="search" name="search" placeholder="Search" value={search} onChange={onChange}/>
            <button ref={reference} onClick={handleClick}>Search</button>
          </div>
    </form>
    </div>
  )
}

export default Form