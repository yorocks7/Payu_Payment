import { Component, React } from "react/cjs/react.production.min";

class Payment extends Component {
  state = {
    key: 'JPM7Fg',
    txnid: 'PFa9vgBFkoXfz5',
    amt: '10.00',
    fname: 'PayU User',
    email: 'test@gmail.com',
    phone: '9876543210',
    info: 'iPhone',
    surl: 'https://apiplayground-response.herokuapp.com/',
    furl: 'https://apiplayground-response.herokuapp.com/',
    hash: '14caa92ef253769f4278f3a594f55aa844ea9c810c8e49d5102f1ffbf0b53ae4db982610fbc6a0927e3175ace71321b8dd9020b64fd9c70e83f21a2904087d37'
  }

  onPay = () => {
    const body = {
      ...this.state,
    }
    var formBody = [];
    for (var property in body) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(body[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    console.log(body);
    console.log(formBody);

    var xhr = new XMLHttpRequest();
    const url = 'https://test.payu.in/_payment';
    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // xhr.send(JSON.stringify({
    //   body
    // }));
    xhr.send(formBody);
    xhr.onload = () => {
      console.log(this.responseText);
      var data = JSON.parse(this.responseText);
      console.log(data);
    }
  }

  render () {
    return (
      <div style={{paddingTop: '10%'}}>
        <div>
          <label>KEY </label>
          <input value={this.state.key} onChange={(e) => this.setState({key: e.target.value})} />
        </div>
        <br/>
        <div>
          <label>TXN ID </label>
          <input value={this.state.txnid}  onChange={(e) => this.setState({txnid: e.target.value})}/>
        </div>
        <br/>
        <div>
          <label>AMOUNT </label>
          <input value={this.state.amt}  onChange={(e) => this.setState({amt: e.target.value})}/>
        </div>
        <br/>
        <div>
          <label>FIRST NAME </label>
          <input value={this.state.fname}  onChange={(e) => this.setState({fname: e.target.value})}/>
        </div>
        <br/>
        <div>
          <label>EMAIL </label>
          <input value={this.state.email}  onChange={(e) => this.setState({email: e.target.value})}/>
        </div>
        <br/>
        <div>
          <label>PHONE </label>
          <input value={this.state.phone}  onChange={(e) => this.setState({phone: e.target.value})}/>
        </div>
        <br/>
        <div>
          <label>P-INFO </label>
          <input value={this.state.info}  onChange={(e) => this.setState({info: e.target.value})}/>
        </div>
        <br/>
        <div>
          <label>SURL </label>
          <input value={this.state.surl}  onChange={(e) => this.setState({surl: e.target.value})}/>
        </div>
        <br/>
        <div>
          <label>FURL </label>
          <input value={this.state.furl}  onChange={(e) => this.setState({furl: e.target.value})}/>
        </div>
        <br/>
        <div>
          <label>HASH </label>
          <input value={this.state.hash}  onChange={(e) => this.setState({hash: e.target.value})}/>
        </div>
        <br/>
        <button onClick={() => this.onPay()}>
          PAY
        </button>
      </div>
    )
  }
}

export default Payment;