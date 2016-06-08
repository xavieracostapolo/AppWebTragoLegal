import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            codigo : ''
        }
    }

    render() {
         return (
            <div  className="search-bar">
                <input 
                    type="text" 
                    className="search-bar-textSearch"
                    onChange={event => this.onInputChange(event.target.value)}
                />
                <input 
                    type="button" 
                    value="Enviar"
                    onClick= {()=> this.props.onBuscarCodigo(this.state.codigo)}
                />                
            </div>
        );   
    }

    onInputChange(term){
        this.setState({
            codigo : term
        });
    }
}

export default SearchBar;