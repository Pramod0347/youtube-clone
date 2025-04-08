import React from 'react';
import Comment from './Comment';

const commentsData = [
    {
        name: "Pramod G",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "Pramod G",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                    
                ]
            },
            {
                name: "Pramod G",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                    {
                        name: "Pramod G",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [
                            {
                                name: "Pramod G",
                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                replies: [
                                    
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Pramod G",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [ ]
    },
    {
        name: "Pramod G",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [ ]
    },
    {
        name: "Pramod G",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "Pramod G",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                    
                ]
            }
        ]
    },
    {
        name: "Pramod G",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "Pramod G",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                    {
                        name: "Pramod G",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [
                            
                        ]
                    },
                ]
            }
        ]
    }
]

const CommentsList = ({comments}) => {
    return comments.map((comment, index) =>(
        <div>
             <Comment key={index} data={comment} />
             <div className='pl-5 border-l-2 border-gray-200 ml-5'>
                <CommentsList comments={comment.replies}/>
             </div>
        </div>
    ));
};
const commentsContainer = () => {
  return (
    <div>
        <h1 className='text-2xl font-bold'> Comments:</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default commentsContainer;
