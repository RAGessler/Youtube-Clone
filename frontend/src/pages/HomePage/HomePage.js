import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import SearchBar from "../../components/SearchBar/SearchBar";
import { DATA } from "../../localData"
import axios from "axios";
import CommentForm from "../../components/CommentForm/CommentForm";
import VideoCard from "../../components/VideoCard/VideoCard";
import './HomePage.css'

const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  // const [cars, setCars] = useState([]);

  // useEffect(() => {
  //   const fetchCars = async () => {
  //     try {
  //       let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       });
  //       setCars(response.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchCars();
  // }, [token]);

  useEffect(() => {        
    props.getSuggestedVideos()
},[])

  return (
    <div>
      <h2>Welcome {user.first_name}!</h2>
        <div className="container">
          <div className="row" >
          {props.videos &&
            props.videos.map((video) => (
              <div className="col-sm-3 top-buffer" key={video.id.videoId}>
                <VideoCard video={video}/>
              </div>
          ))}
          </div>
      </div>
    </div>
  );
};

export default HomePage;
