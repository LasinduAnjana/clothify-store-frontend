const NewReleaseCard = ({product}) => {
  return (
    <div className="lg:px-12 px-5 py-8 w-full rounded-xl">
        <img src={product.link} className="rounded-lg w-full h-48"/>
        <h5>{product.title}</h5>
        <h5>{product.price}</h5>
        <h5>{product.size}</h5>
        <h5>{product.material}</h5>
    </div>
  )
}

export default NewReleaseCard