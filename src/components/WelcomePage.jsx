import React, {PureComponent} from 'react';
import Logo from '../images/favicon.ico';

class WelcomePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>Hello! Welcome to my simple React Boilerplate!</h1>
        <img src={Logo} alt='code'/>
      </div>
    );
  }
}

export default WelcomePage;
