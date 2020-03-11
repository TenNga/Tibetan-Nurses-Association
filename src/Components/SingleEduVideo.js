import React from 'react';
import ModalVideo from 'react-modal-video'
import '../../node_modules/react-modal-video/scss/modal-video.scss';

class SingleEduVideo extends React.Component {
    
  state = {
      isOpen: false
    }
  openModal =() =>{
    this.setState({isOpen: true})
  }

  render () {
    return (
      <div>
        <ModalVideo 
            channel='youtube' 
            isOpen={this.state.isOpen} 
            videoId='01QIPeFt3PM' 
            onClose={() => this.setState({isOpen: false})} 
            ratio={'16:9'}
        />
        <button onClick={this.openModal}>Video Title</button>
      </div>
    )
  }
}

export default SingleEduVideo;