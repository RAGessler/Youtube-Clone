import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import SearchBar from "../../components/SearchBar/SearchBar";
import { DATA } from "../../localData"
import axios from "axios";
import CommentForm from "../../components/CommentForm/CommentForm";

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

  return (
    <div className="container">
      <h1>Welcome {user.first_name}! Choose from suggest videos below or type in your search above.</h1>
      {props.videos &&
        props.videos.items.map((video) => (
          <p key={video.id.videoId}>
            {video.id.videoId}
          </p>
        ))}
        <CommentForm />
    </div>
  );
};

export default HomePage;
