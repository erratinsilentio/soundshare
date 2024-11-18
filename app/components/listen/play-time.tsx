import { FC } from "react";
import PlayButton from "./play-button";
import { TrackVersion } from ".";

interface PlayTimeProps {
  darkMode: boolean;
  isPlaying: boolean;
  currentVersion: TrackVersion | null;
  onPlayPause: () => void;
  currentTime: number;
  duration: number;
}

const PlayTime: FC<PlayTimeProps> = ({
  darkMode,
  isPlaying,
  currentVersion,
  onPlayPause,
  currentTime,
  duration,
}) => {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex justify-between items-center">
      <PlayButton
        darkMode={darkMode}
        isPlaying={isPlaying}
        currentVersion={currentVersion}
        onPlayPause={onPlayPause}
      />
      {/* SONG DURATION */}
      <div>
        {currentVersion
          ? `${formatTime(currentTime)} / ${formatTime(duration)}`
          : "0:00 / 0:00"}
      </div>
    </div>
  );
};

export default PlayTime;