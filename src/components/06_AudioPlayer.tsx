import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      audio.addEventListener("timeupdate", updateTime);
      audio.addEventListener("loadedmetadata", () =>
        setDuration(audio.duration)
      );
      return () => {
        audio.removeEventListener("timeupdate", updateTime);
      };
    }
  }, []);

  const updateTime = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && progressRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      audioRef.current.currentTime = percent * duration;
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleVolumeToggle = () => {
    if (audioRef.current) {
      setIsMuted(!isMuted);
      audioRef.current.muted = !isMuted;
    }
  };

  return (
    <motion.div
      className="audio-player"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Barre de progression */}
      <div
        ref={progressRef}
        className="progress-bar"
        onClick={handleProgressClick}
      >
        <motion.div
          className="progress"
          style={{ width: `${(currentTime / duration) * 100}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${(currentTime / duration) * 100}%` }}
          transition={{ duration: 0.2 }}
        />
      </div>

      {/* Contrôles audio */}
      <div className="controls">
        <button className="play-pause" onClick={togglePlay}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        {/* Affichage du temps */}
        <span className="time">
          {new Date(currentTime * 1000).toISOString().substr(14, 5)} /{" "}
          {new Date(duration * 1000).toISOString().substr(14, 5)}
        </span>

        {/* Contrôle du volume */}
        <button className="volume" onClick={handleVolumeToggle}>
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
      </div>

      <audio ref={audioRef} src={src}></audio>
    </motion.div>
  );
};

export default AudioPlayer;
