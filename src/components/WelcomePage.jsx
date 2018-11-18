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
    const bgImageCSS = {
      height: '100%',
      backgroundImage: `url(${Background})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }

    const titleCSS = {
      left: '0',
      top: '50%',
      width: '100%',
      color: '#000',
      textAlign: 'center',
      position: 'absolute'
    }

    const textCSS = {
      color: '#fff',
      padding: '18px',
      fontSize: '25px',
      letterSpacing: '10px'
    }

    return (
      <div>
        Gang
        <div style={bgImageCSS}>
          <div style={titleCSS}>
            <span style={textCSS}>Congratulations!</span>
            <span style={textCSS}>Looks like everything is up and running, now it's time to start coding</span>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
