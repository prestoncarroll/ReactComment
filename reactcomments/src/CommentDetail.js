import React from 'react';


const CommentDetail = props => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src="/mysterio.jpeg" />
            </a>

            <div className="content">

                <a href="/" className="author">
                    {props.author}
                    </a>
                <div className="metadata">
                    <span className="date"> Today at 6:00PM</span>
                </div>
                <div className="text">Nice Blog Post!</div>
            </div>

        </div>


    );

};

export default CommentDetail;