import React from "react";

class StateClass extends React.Component {
  public state: { date: Date };
  constructor(props: any) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount(): void {
    $.ajax({
        url: "http://localhost:3000/api/getData",
        type: "GET",
        dataType: "jsonp",
        success: function (data: any) {
            console.log(data);
        },
        error: function (xhr:any, status: any, err: any) {
            console.log(err);
        },
        });
  }
  componentWillUnmount(): void {
      
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default StateClass;