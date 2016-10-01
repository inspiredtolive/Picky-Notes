import React from 'react';
import { Link } from 'react-router';
import Connection from '../Connection.js';
import LectureTitle from './sub/LectureTitle.jsx';
import LectureBox from './sub/LectureBox.jsx';
import ParticipantList from './sub/ParticipantList.jsx';

class Lecture extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      continueButtonDisplay: 'none',
      readyButtonDisplay: 'inline-block'
    };
  }

  componentWillMount() {
    this.props.getState().room.socket.on('all ready', () => {
      // loading
      console.log('user is ready');
    });

    this.props.getState().room.socket.on('all notes saved', () => {
      // redirect to compile view
      console.log('all notes saved and redirect');
      this.setState({continueButtonDisplay: 'inline-block'});
    });
  }

  sendReady() {
    this.props.getState().room.socket.emit('user ready');
    this.setState({readyButtonDisplay: 'none'});
  }

  endLecture() {
    this.props.getState().room.socket.emit('lecture end');
  }

  redirectToCompile () {

  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <LectureTitle />
          </div>
          {/*<button className="btn btn-lg btn-danger" onClick={this.endLecture}>
            End Lecture
          </button>*/}
          <Link className="btn btn-lg btn-danger" to="/compile">
            End Lecture
          </Link>
          <button className="btn btn-lg btn-success" style={{display: this.state.readyButtonDisplay}} onClick={this.sendReady.bind(this)}>
            Ready
          </button>
          <Link className="btn btn-lg btn-success" style={{ display: this.state.continueButtonDisplay}} to="/compile">
            Continue
          </Link>
        </div>
        <div className="row">
          <div className="col-md-9">
            <LectureBox />
          </div>
          <div className="col-md-3">
            <ParticipantList />
          </div>
        </div>
      </div>
    );
  }
}

export default Connection(Lecture);
