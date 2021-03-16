import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class  Listing extends React.Component
{
	state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://run.mocky.io/v3/1acb6b7d-af22-46ab-9b63-4582813ad7e6`)
      .then(res => {
        const persons = res.data;
        console.log(persons.persons);

        console.log(persons.result);
     this.setState({ persons: persons.result});
      })
  }
  handleClick = (id) => {
    console.log('this is:', id);
	document.getElementById('orderid').innerHTML = id.entity_id;
	document.getElementById('title').innerHTML = id.title;
	document.getElementById('store_name').innerHTML = id.store_name;
	document.getElementById('customer_name').innerHTML = id.customer_name;
	document.getElementById('carrier_code').innerHTML = id.carrier_code;
	document.getElementById('base_currency_code').innerHTML = id.base_currency_code;
	document.getElementById('order_currency_code').innerHTML = id.order_currency_code;
	document.getElementById('billing_name').innerHTML = id.billing_name;
	document.getElementById('billing_address').innerHTML = id.billing_address;
	document.getElementById('shipping_name').innerHTML = id.shipping_name;
	document.getElementById('shipping_address').innerHTML = id.shipping_address;
	document.getElementById('payment_method').innerHTML = id.payment_method;
	document.getElementById('base_grand_total').innerHTML = id.base_grand_total;
	document.getElementById('base_total_paid').innerHTML = id.base_total_paid;
	document.getElementById('grand_total').innerHTML = id.grand_total;
	document.getElementById('total_paid').innerHTML = id.total_paid;
	document.getElementById('total_refunded').innerHTML = id.total_refunded;


  }
  render() {
    return (
      <div>
       <header> <h1>Sales Order Details</h1></header>
      <div className="container" id = "container-left" >
      <ul class="list-group" >
        { this.state.persons.map(person => <a href = "#"><li  className="list-group-item text-info"  onClick={() => this.handleClick(person)}>{person.shipping_name}</li></a>)}
        
      </ul>
  
        </div>
		<div id ="container-right" >
		<table>
		<tr>
		<td>
		<label  className="text-primary">Order ID  
		</label>
		</td>
		<td id = "orderid">
		
		</td>
		</tr>
			<tr>
		<td>
		<label  className="text-primary">Title  
		</label>
		</td>
		<td id = "title">
		
		</td>
		</tr>
			<tr>
		<td >
		<label  className="text-primary">Store Name  
		</label>
		</td>
		<td id = "store_name">
		
		</td>
		</tr>
			<tr>
		<td>
		<label  className="text-primary">Customer Name  
		</label>
		</td>
		<td id = "customer_name">
		
		</td>
		</tr>
		
			<tr>
		<td>
		<label  className="text-primary">Carrier Code  
		</label>
		</td>
		<td id = "carrier_code">
		
		</td>
		</tr>
			<tr>
		<td>
		<label  className="text-primary">Base Currency Code  
		</label>
		</td>
		<td id = "base_currency_code">
		
		</td>
		</tr>
		<tr>
		<td>
		<label  className="text-primary">Order Currency Code  
		</label>
		</td>
		<td id = "order_currency_code">
		
		</td>
		</tr>
		<tr>
		<td>
		<label  className="text-primary">Billing name  
		</label>
		</td>
		<td id = "billing_name">
		
		</td>
		</tr>
		<tr>
		<td>
		<label  className="text-primary">Billing address  
		</label>
		</td>
		<td id = "billing_address">
		
		</td>
		</tr>
		<tr>
		<td>
		<label  className="text-primary">Shipping name  
		</label>
		</td>
		<td id = "shipping_name">
		
		</td>
		</tr>
		<tr>
		<td>
		<label  className="text-primary">Shipping address  
		</label>
		</td>
		<td id = "shipping_address">
		
		</td>
		</tr>
			<tr>
		<td>
		<label  className="text-primary">Payment Method  
		</label>
		</td>
		<td id = "payment_method">
		
		</td>
		</tr>
			<tr>
		<td>
		<label  className="text-primary">Base Grand Total  
		</label>
		</td>
		<td id = "base_grand_total">
		
		</td>
		</tr>
			<tr>
		<td>
		<label  className="text-primary">Base Total Paid  
		</label>
		</td>
		<td id = "base_total_paid">
		
		</td>
		</tr>
			<tr>
		<td>
		<label  className="text-primary">Grand Total  
		</label>
		</td>
		<td id = "grand_total">
		
		</td>
		</tr>
			<tr>
		<td>
		<label  className="text-primary">Total Paid  
		</label>
		</td>
		<td id = "total_paid">
		
		</td>
		</tr>
			<tr>
		<td>
		<label  className="text-primary">Total Refunded  
		</label>
		</td>
		<td id = "total_refunded">
		
		</td>
		</tr>
		</table>
		</div>
        </div>
    )
  }
}



export default Listing;
