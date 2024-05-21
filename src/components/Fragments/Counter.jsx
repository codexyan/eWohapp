import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor");
  }

  componentDidMount() {
    this.setState({ count: this.state.count + 1 });
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  render() {
    return (
      <>
        <p className="mb-4 font-bold text-center">
          Total Pesanan with Statefull Component
        </p>
        <div className="flex flex-row items-center justify-center gap-3">
          <h1 className="px-5 py-3 font-medium bg-white rounded-md shadow">
            {this.state.count}
          </h1>
          <button
            className="px-4 py-3 text-white bg-blue-800 rounded-lg shadow-md hover:bg-blue-900"
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Tambah Pesanan
          </button>
          {console.log("render")}
        </div>
      </>
    );
  }
}

export default Counter;
