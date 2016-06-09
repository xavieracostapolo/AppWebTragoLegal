import React, {Component} from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';
import TragoList from './components/trago_list';
import TragoItem from './components/trago_item';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            tragos : [],
            trago: null
        };
    }

    componentDidMount(){
        
        console.log('El componente esta disponible en el DOM');
        //this.tragoSearch('PC94N0BQBM'); 
        // this.tragoSearch('3C9TN0BQE7');
        this.tragoSearch('EC9NN0BQXY');
    }

    tragoSearch(codigo){
        let _component = this;
        
        var trago = {
            id: '',
            codigo: '',
            mensaje: '',
            fechaHora: '',
            estilo: ''
        };
        
        var tmpTrago = _component.state.tragos.slice();
        
        var urlService = 'https://tragolegal.herokuapp.com/v1/tragolegal/';
        // var urlService = 'http://localhost:8081/v1/tragolegal/';
        
        fetch(urlService + codigo)  
        .then(  
            function(response) {  
                if (response.status !== 200) {  
                    console.log('Looks like there was a problem. Status Code: ' +  
                    response.status);  
                    return;  
                }

                // Examine the text in the response  
                response.json().then(function(data) {  
                    
                    trago.mensaje = data.mensaje;
                    trago.codigo = data.codigo;
                    trago.fechaHora = data.fecha;
                    trago.id = data.id;
                                      
                    tmpTrago.push(trago);
                    
                    _component.setState({
                        tragos : tmpTrago,
                        trago : trago
                    });
                });  
            }  
        )  
        .catch(function(err) {  
            console.log('Fetch Error :-S', err);  
        });
    }

    render() {
        return (
            <div className="jumbotron">
                <div>
                    <h1>Trago Legal</h1>
                </div>
                <SearchBar 
                    onBuscarCodigo = {(codigo)=> {this.tragoSearch(codigo)}}
                />
                <TragoItem trago={this.state.trago} />
                <TragoList  tragos={this.state.tragos} />
          </div>  
        );
    }
}

ReactDom.render(<App/>, document.querySelector('.container'));
