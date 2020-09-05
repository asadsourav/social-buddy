import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Comments from '../Comments/Comments';

                // styles for card content
const useStyles = makeStyles((theme)=>({
    root: {
      minWidth: 275,
      marginBottom :'20px',
      backgroundColor: theme.palette.background.paper,

    },
    inline: {
        display: 'inline',
      },
   
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  }));



const PostDetails = () => {
                    // getting post id from route path 
    const {postId} = useParams();
                    // declaring state for upcoming post
    const [post,setPost] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(data => setPost(data))
    },[]);

  const classes = useStyles();

    return (
            //  post area 
        <div>
           <Card className={classes.root} variant="outlined">
      <CardContent>
        
        <Typography variant="h5" component="h2">
          {post.title}
        </Typography>
        
        <br/>
        <Typography variant="body2" component="p">
                {post.body}
        </Typography>
      </CardContent>
      
    </Card>

    {/* comment area  */}
    <h4>Top comments</h4>
        {
            <Comments post = {post}></Comments>
        }
  
        </div>
    );
};

export default PostDetails;