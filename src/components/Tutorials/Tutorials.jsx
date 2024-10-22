import React, { useState, useEffect } from "react";
import "./Tutorials.css";
import YouTubeEmbed from "../YouTubeEmbed/YouTubeEmbed";
import { videosData } from "../../data/videosData";

const Tutorials = () => {
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [dietVideos, setDietVideos] = useState([]);

  // Use useEffect to randomly select 2 videos from each category on load
  useEffect(() => {
    // Filter exercise and diet videos
    const exercise = videosData.filter(video => video.category === "exercise");
    const diet = videosData.filter(video => video.category === "diet");

    // Shuffle the exercise videos and select 2
    const shuffledExercise = exercise.sort(() => 0.5 - Math.random()).slice(0, 2);
    setExerciseVideos(shuffledExercise);

    // Shuffle the diet videos and select 2
    const shuffledDiet = diet.sort(() => 0.5 - Math.random()).slice(0, 2);
    setDietVideos(shuffledDiet);
  }, []);

  return (
    <div className="Tutorials">
      <div className="tutorials-header">
        <span className="stroke-text">Watch Our</span>
        <span>Exercise & Diet</span>
        <span className="stroke-text">Tutorials</span>
      </div>
      
      <div className="video-section">
        <div className="video-category">
          <h3>Exercise Tutorials</h3>
          <div className="video-grid">
            {exerciseVideos.map((video) => (
              <YouTubeEmbed
                key={video.id}
                videoUrl={video.url}
                title={video.title}
              />
            ))}
          </div>
        </div>

        <div className="video-category">
          <h3>Diet Tutorials</h3>
          <div className="video-grid">
            {dietVideos.map((video) => (
              <YouTubeEmbed
                key={video.id}
                videoUrl={video.url}
                title={video.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
