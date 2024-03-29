import React, { Component } from 'react';
class AddProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isNewProductAdd: false,
      data: [{ "name": "KIA Seltos", "id": 1 }, { "name": "MG Hector", "id": 2 }],
      textFieldValue: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const obj = { 'name': this.refs.itemName.value, "id": this.state.data.length + 1 };
    const newArray = this.state.data.slice(); // Create a copy
    newArray.push(obj); // Push the object
    this.setState({ data: newArray });
  }
  onClickClose(d) {
    const list = this.state.data;
    list.splice(d, 1);
    this.setState({ data: list });
  }
  render() {
    const listItems = this.state.data.map((d, i) =>
      <tr>
        <td key={d.name}>{d.name}</td>
        <td><button className="btn btn-danger" onClick={() => this.onClickClose(i)}>Remove</button></td>
      </tr>
    );
    return (
      <div className="container">
        <div className="row">
          <div className="col-xl-8 mx-auto text-center">
            <div className="section-title">
              <h2>Car sales</h2>
              <p>Buy or Sell car online</p>
            </div>
          </div>
        </div>
        <div className="form-group d-flex">
          <input type="text" ref="itemName" className="form-control" placeholder="add a new car name to product list..." />
          <button onClick={this.handleClick} type="submit" className="btn btn-success ml-3 add-cart-btn">Add to Cart</button>
        </div>
        <div className="container">
          <h4 className="float-right mb-3">Total count = {this.state.data.length}</h4>
        </div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Car Product list name</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>{listItems}</tbody>
        </table>
      </div>
    );
  }
}
export default AddProduct