import React,  {useEffect, useState} from 'react'
import axios from 'axios';
import '../App.css'
import { getToken } from '../utils';
import useUser from '../Hooks/useUser';



export const Feed = () => {
	const [tweets, setTweets] = useState([]);
	const [content, setContent] = useState("");

	const user = useUser();
	const getTweets = () =>{
		axios.get('https://clone-tw-bl3r3.herokuapp.com/tweets',{
			headers: {
				'Authorization': `Bearer ${getToken()}` 
			}
		}
		)
			.then((res) => {
				setTweets(res.data)
			}).catch((err) => {
				console.log(err)
			})
	};

	useEffect(() => {
	getTweets()
}, [])

	const mySubmitHandler = async (event) => {
    event.preventDefault();
    let data = {
			content: content,
			id: user.id
		}
		let response = await axios.post("https://clone-tw-bl3r3.herokuapp.com/create-tweet", data);
		let result = response.data;
		getTweets();
		return result;
  }

	return (
		<div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <div className="tweetBox">
        <form onSubmit={mySubmitHandler}>
          <div className="tweetbox__input">
            <img
              src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
              alt=""
            />
            <input type="text" placeholder="Que estas Pensando?" value={content} onChange={ e => setContent(e.target.value)} />
          </div>
          <button type="submit" className="tweetBox__tweetButton">Tweet</button>
        </form>
      </div>
      
     
		 {tweets.map((tweet,i) => (
			 <div className="post" key={i}>
			 <div className="post__avatar">
				 <img
					 src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
					 alt=""
				 />
			 </div>

			 <div className="post__body">
				 <div className="post__header">
					 <div className="post__headerText">
						 <h3>
							 {`${tweet.user.name} ${tweet.user.last_name}`}
							 <span className="post__headerSpecial"
								 ><span className="material-icons post__badge"> verified </span>{`@${tweet.user.username}`}</span>
						 </h3>
					 </div>
					 <div className="post__headerDescription">
						 <p>{tweet.content}</p>
					 </div>
				 </div>
				 <div className="post__footer">
					 <span className="material-icons"> repeat </span>
					 <span className="material-icons"> favorite_border </span>
					 <span className="material-icons"> publish </span>
				 </div>
			 </div>
		 </div>
		 ))}
			
      
    </div>
	)
}
