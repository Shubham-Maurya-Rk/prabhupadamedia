import React,{useState} from 'react';
import './Post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RecommendIcon from '@mui/icons-material/Recommend';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import {Users} from '../../dummyData'

function Post({post}) {
    const [like, setLike] = useState(post.like);
    const [isLiked, setisLiked] = useState(false);
    const [isFav, setIsFav] = useState(false);
    const likehandler=()=>{
        setisLiked(!isLiked);
        setLike(like+(isLiked?-1:1));
    }
  return (
    <div className="Post">
        <div className="postBox1 d-flex aic">
            <div className="postProfile d-flex aic">
                <img src={process.env.PUBLIC_URL+Users.filter(u=>u.id===post.userId)[0].profilePicture} alt="Profile" />
                <h3>{Users.filter(u=>u.id===post.userId)[0].username}</h3>
                <p>{post.date}</p>
            </div>
            <MoreVertIcon/>
        </div>
        <div className="postBox2">
            <p>{post.desc}</p>
            <img src={process.env.PUBLIC_URL+post.photo} alt="post" />
        </div>
        <div className="postBox3 d-flex aic">
            <div className="postBox3Btns d-flex aic">
                <RecommendIcon htmlColor={isLiked?'blue':'black'} onClick={likehandler}/>
                <FavoriteIcon htmlColor={isFav?'red':'black'} onClick={()=>setIsFav(!isFav)}/>
                <p>{like} likes</p>
            </div>
            <div className="postBox3Comments">
                <p className='d-flex aic'><CommentIcon htmlColor='#004990'/>{post.comment} comments</p>
            </div>
        </div>
    </div>
  )
}

export default Post