import Product from './Product'

function ProductList({products}) {
  let id=0
  return (
    <div className='container' style={{display:"grid"}}>
    
        {products.map((producto)=>
            <Product key={id++} {...producto}/>
        )}
    </div> 
  )
}

export default ProductList