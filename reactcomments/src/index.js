import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';


const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="sam" />
            <CommentDetail author="julia" />
            <CommentDetail author="baby" />
            
        </div>

    );
};


ReactDom.render(<App />, document.querySelector('#root'));