import '../../styles/image.styles.css'
const CardImagen = (props) => {

    return (
        <>

            <div className="card" >
                <img className="card-img-top" src={props.imagen} alt="Card image cap" />
            </div>
        </>
    )

}

export default CardImagen;