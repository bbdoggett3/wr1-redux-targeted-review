import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getAlbum} from '../ducks/albumReducer';

class Album extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            url: '',
            album: []
        }
    }

    render(){
        const photos = this.state.album.map( photo => {
            return <div key={`photoId_${photo.id}`}>
                <span className='photo-title'>{photo.title}</span>
                <img className='photo-img' alt={photo.title} src={photo.url}/>
            </div>
        })
        return (
            <div className='photo-album'>
                {photos}
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getAlbum})(Album);