import React, { Component } from "react";

// Impresion en el DOM -* importante: nombra funcion que imprimira en el DOM - PascalCase
function ShowDate(dateJson) {
  return (
    <div className="content">
      <h3 className="content__title">{dateJson.title}</h3>
      <p className="content__userId">
        <strong>{dateJson.userId} </strong>
      </p>
      <p className="content__body">{dateJson.body}</p>
    </div>
  );
}
export default class PeticionApi extends Component {
  // Inicializo el estado
  state = {
    dates: [],
  };

  // Para hacer peticiones externa: investigar https://reactjs.org/docs/react-component.html#componentdidmount *
  async componentDidMount() {
    // Guardo en una variable la url donde realizare la peticion
    const url = "https://jsonplaceholder.typicode.com/posts";
    // Guardo la promesa que me devuelve el fetch
    const response = await fetch(url);
    // Convierto los datos a JSON y los guardo en una variable
    const resolve = await response.json();
    /** Ya que me duevelve un arreglo con objectos
     * recorro el arreglo con un forEach()
     */
    resolve.forEach((element) => {
      /** Creo un objecto date,
       * en el cual capturo los datos y los almaceno en su correspondiente variable
       */
      let date = {
        id: element.id,
        userId: element.userId,
        title: element.title,
        body: element.body,
      };
      /** De lo que ya hay en state['dates']
       * le vas a copiar/agregar
       * este object date
       */
      let dates = [...this.state.dates, date];
      // Actualizare el estado con destructuring
      this.setState({ dates });
      // Pruebo si se muestra en consola
      //   console.log(date);
    });
  }

  render() {
    let hello = () => <ShowDate />;
    return (
      <React.Fragment>
        <h2 className="subtitle">Peticion Fetch</h2>
        <select className="options">
          <option>-- selecciona una opcion --</option>
          {this.state.dates.length === 0 ? (
            <option>Cargando...</option>
          ) : (
            this.state.dates.map((element) => (
              <option onClick={hello} key={element.id} value={element.id}>
                {element.id}
              </option> 
              /** Importante:
               * ShowDate key= es importante darle un id ya que lo utiliza React para identificar sus compenentes
               */
              // <ShowDate
              //   key={element.id}
              //   title={element.title}
              //   userId={element.userId}
              //   body={element.body}
              // />
            ))
          )}
        </select>
        {this.state.dates.length === 0 ? (
            <h3>Cargando...</h3>
          ) : (
            this.state.dates.map((element) => (
              /** Importante:
               * ShowDate key= es importante darle un id ya que lo utiliza React para identificar sus compenentes
               */
              <ShowDate
                key={element.id}
                title={element.title}
                userId={element.userId}
                body={element.body}
              />
            ))
          )}
      </React.Fragment>
    );
  }
}
