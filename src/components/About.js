import { Component } from "react";
import UserContext from "../utils/context/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About User</h1>
        <div>
          Loggedin User:
          <UserContext.Consumer>
            {(context) => <span>{context.loggedInUser}</span>}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default About;
