import React, { Component } from 'react'
import Styler from './stylers/AddProductStyler'
import { connect } from 'react-redux'
import addProduct from '../../redux/actions/addProduct'

export class AddProduct extends Component {
    state = {
        currentName: "",
        currentPrice: ""
    }

    componentDidUpdate = () => {

    }

    inputHandler = (event) => {
        const value = event.target.value
        switch(event.target.getAttribute("name")){
            case "currentName":
                this.setState({currentName: value})
                break;
            case "currentPrice":
                const num_value = isNaN(Number(value)) ? "" : Number(value)
                this.setState({currentPrice: num_value})
                break;
            default:
                throw new Error('Value error');
        }
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.addProduct(this.state.currentName, this.state.currentPrice)
    }

    render() {
        return (
            <Styler>
                <h1>Add a product</h1>
                <form>
                    <div className="name">
                        <h3>Name:</h3>
                        <input type="text" name="currentName" onChange={this.inputHandler}></input>
                    </div>
                    <div className="price">
                        <h3>Price:</h3>
                        <input type="text" name="currentPrice" onChange={this.inputHandler}></input>
                    </div>
                    <div className="submit">
                        <input type="submit" value="Submit" onClick={this.submitHandler}></input>
                    </div>
                </form> 
            </Styler>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    products: reduxState.products.products
})

export default connect(mapStateToProps, { addProduct })(AddProduct)
