import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

                // styles for card 
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom:'20px'
  },
 
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Posts = (props) => {
    const {title,body,id} = props.post;
    const classes = useStyles();
    return (
        
        <div>
            <Card className={classes.root} variant="outlined">
      <CardContent>
        
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        
        <br/>
        <Typography variant="body2" component="p">
                {body}
        </Typography>
      </CardContent>
      <CardActions>
           <Link to={`post_details/${id}`} style={{ textDecoration: 'none' }}>
      <Button variant="contained" color = "secondary" size="small"> View comments  </Button>
            </Link>
      </CardActions>
    </Card>
        </div>
    );
};

export default Posts;