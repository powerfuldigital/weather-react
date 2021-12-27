import React from "react";
import Loader from "react-loader-spinner";

export default class Loading extends React.Component {
  render() {
    return (
      <div className="Loading">
        <Loader
          type="Puff"
          color="#F4008E"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
}
