function Saludo(props){
    const{nombre,apellido,edad}=props.datos

    return(
      <h1>Hola {nombre} {apellido} {edad} y su apodo es {props.apodo}</h1>
    )
}
export default Saludo; 