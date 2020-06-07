import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                Are you sure you want to do this?
                </div>

            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="sam"
                    timeAgo="Today at 4:45PM"
                    content="nice blog post"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="julia"
                    timeAgo="Today at 2:00AM"
                    content="like it"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="baby"
                    timeAgo="Yesterday at 5:00PM"
                    content="woooo"
                />
            </ApprovalCard>



        </div >

    );
};


ReactDom.render(<App />, document.querySelector('#root'));