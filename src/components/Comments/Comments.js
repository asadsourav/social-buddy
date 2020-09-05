import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';



const Comments = (props) => {
                // getting post id from route 
    const {postId} = useParams();
                //  destructing props 
    const {userId,id} = props.post;
                // declaring state for upcoming comments
    const [comments,setComments] = useState([])
                    // loading comments from api 
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response => response.json())
        .then(data =>setComments(data))
    },[]);
                    // creating fake id to generate random user image
    const fakeId = Math.round(Math.random()*10)

    // console.log(comments,fakeId)

                    // creating image property in every  comment 

    for (let i = 0; i < comments.length; i++) {
        const element = comments[i];
        element.image =  `https://randomuser.me/api/portraits/thumb/men/${fakeId + i}.jpg`
    }

                        // declaring styles for listText,avartar etc 
    const useStyles = makeStyles((theme) => ({
        root: {
            minWidth: 275,
            marginBottom: '20px',
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
    const classes = useStyles();
    
    return (
        <div>
            {
                comments.map(comment =>
                <List className={classes.root}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt=''  src = {comment.image} />
                          
                      </ListItemAvatar>
                      <ListItemText
                        primary= {`${comment.name}`}
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className={classes.inline}
                              color="textPrimary"
                            >
                              {`${comment.email}`}
                            </Typography>
                            {`---'${comment.body}'`}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </List>)
            }
        </div>
    );
};

export default Comments;