import React, { Component } from "react";

export default class App extends Component {
  state = {
    profile:{
        nom: "Amin",
        prenom: "Kammoun",
        gmail: "aminkammoun001@gmail.com",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQGqW7u_tH__yw/profile-displayphoto-shrink_800_800/0/1567958495001?e=1637193600&v=beta&t=EFb3TMWTAy6hRNsoYKVROX0iRvjaZjHHRP1ZKNI6cn4"
    },
    count : 0,
    isShow : true
  };
  addition = () => {this.setState({count: this.state.count+1})}
  substraction = () => {this.setState({count: this.state.count-1})}
  handleShow = () => {this.setState({isShow: !this.state.isShow})}
  componentDidMount ()  {setInterval ( this.addition, 1000);}
  

  render() {
    return (
      <div className="box">
        {
          this.state.isShow && <div className="show">
          <img src={this.state.profile.img} alt="" srcset="" />
            <h3> Name : {this.state.profile.nom}</h3>
            <h3> LastName : {this.state.profile.prenom} </h3>
            <h3> Your Email : {this.state.profile.gmail}</h3>
            <div className="compteur">
              <h1>{this.state.count}</h1>
              <button onClick={() => this.addition()}>+</button>
              <button onClick={() => this.substraction()}>-</button>
              </div>
          </div>
        }
          <button onClick ={() => this.handleShow()}>{this.state.isShow? "Hide" : "Show"}</button>
          
      </div>
     
    );
  }
}
