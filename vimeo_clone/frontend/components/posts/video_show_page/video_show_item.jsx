import React from 'react'
import { NavLink } from 'react-router-dom'

const parseStringTitle = (title) => {
    const arrTitle = title.split('')
    if (title.length > 12) {
        return arrTitle.slice(0, 12).push('...').join('')
    } else {
        return title
    }
}

class VideoShowItem extends React.Component {
    constructor(props) {
        super(props)

    }  
    
    render() {
        const { post, user } = this.props

        return (
        <div onClick={this.props.clickHandler(post.id)}>
            <div className="user-posts-sidebar-container" >
                <div className="thumbnail-container">
                    <img 
                        className="user-posts-show-page-thumbnail"
                        src={post.thumbnailUrl} />
                </div>
                <div className="video-right-title-username-container">
                    <div className="video-right-title-container">
                        {parseStringTitle(post.title)}
                    </div>
                    <div className="video-right-username-container">
                        {user.username}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default VideoShowItem