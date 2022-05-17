// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { DATA } from "./localData";
import axios from "axios";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoPage from "./pages/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import React, { useEffect, useState } from "react";
import SearchPage from "./pages/SearchPage/SearchPage";
import SearchBar from "./components/SearchBar/SearchBar";
import { Navigate, useNavigate } from 'react-router-dom';



function App() {

  const [suggestedVideos, setSuggestedVideos] = useState(DATA);
  const [relatedVideos, setRelatedVideos] =useState(DATA);
  const [comments, setComments] = useState([])
  const [searchedVideos, setSearchedVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState('')
  const navigate = useNavigate()

  async function getVideoComments(videoId){
    let response = await axios.get(`http://127.0.0.1:8000/api/comments/all/${videoId}/`);
    setComments(response.data);
  }

  async function searchVideos(searchQuery){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchQuery}&key=AIzaSyDU5w61sXAn96W8V1MW2c0NI3l75iYyW0w&type=video&part=snippet&fields=items(id,snippet)&maxResults=10`)
    setSearchedVideos(response.data.items)
  }

  function pickVideo(id) {
    let result = searchedVideos.filter((el) => {
      if(el.id.videoId === id){
        return true;
      }
      else{
        return false;
      }
    })
    setSelectedVideo(result[0])
  }

  useEffect(() => {
    if(selectedVideo !== ''){
    console.log('selectedVideo:',selectedVideo)
    navigate(`/video/${selectedVideo.id.videoId}`)
    }},[selectedVideo])
  return (
    <div>

      <Navbar />
      <SearchBar submitSearch={searchVideos}/>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage videos={suggestedVideos} />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/video/:videoId" element={<VideoPage selectedVideo={selectedVideo} comments={comments} getVideoComments={getVideoComments}/>} />
        <Route path="/results" element={<SearchPage videos={searchedVideos} submitVideoInfo={pickVideo} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;