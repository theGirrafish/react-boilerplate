import React, {PureComponent} from 'react';
import Logo from '../assets/images/react.jpg';
import Background from '../assets/images/background.jpg';

class WelcomePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const textCSS = {
      color: '#fff',
      padding: '18px',
      fontSize: '25px',
      letterSpacing: '10px'
    }

    return (
      <div className='background'>
        <img className='react_logo' src={Logo}/>
        <div className='text'>
          <span className='title'>The React Boilerplate</span>
          <span className='subtitle'>Congratulations!</span>
          <span className='subtitle'>Looks like everything is up and running.</span>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
