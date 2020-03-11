import React from 'react';
import ModalVideo from 'react-modal-video'
import './css/SingleEduVideo.css';
import '../../node_modules/react-modal-video/scss/modal-video.scss';

class SingleEduVideo extends React.Component {
    
  state = {
      isOpen: false
    }
  openModal =() =>{
    this.setState({isOpen: true})
  }

  

  render () {
      const {title, videoId } = this.props.data
    return (
      <div className="single-video-container">
        <ModalVideo 
            channel='youtube' 
            isOpen={this.state.isOpen} 
            videoId={videoId} 
            onClose={() => this.setState({isOpen: false})} 
        />
        <img id="thumb" src={'https://img.youtube.com/vi/'+ videoId +'/0.jpg'} onClick={this.openModal} />
        <h4 id="title">{title}</h4>
      </div>
    )
  }
}

export default SingleEduVideo;