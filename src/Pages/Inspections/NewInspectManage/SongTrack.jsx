import React from "react";
import { IoMdDownload } from "react-icons/io";

const SongTrack = ({ setActiveTab, singleSongData, refetch }) => {
  console.log(singleSongData);
  const {
    audio,
    user,
    status,
    trackType,
    isRelease,
    instrumental,
    secondaryTrackType,
    parentalAdvisory,
    releaseTitle,
    subtitle,
    line,
    primaryArtist,
    writer,
    composer,
    musicDirector,
    producer,
    actor,
    filmDirector,
    genre,
    upcEan,
    subGenre,
    producerCatalogNumber,
    productionYear,
    label,
    publisher,
    youtubeUrl,
    isrc,
    catalogNumber,
    tiktokStartInSecond,
    trackLanguage,
    releaseDate,
    isAdvancePurchase,
    advancePurchaseDate,
    correctionNote,
    createdAt,
    releaseId,
    labelName,
  } = singleSongData;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = audio;
    link.download = `${releaseTitle}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white p-2 rounded">
      <div className="grid grid-cols-5 text-xs font-semibold bg-green-100 rounded-sm p-2">
        <span>TITLE</span>
        <span>ARTIST</span>
        <span>DURATION</span>
        <span>5031862</span>
        <span>Download</span>
      </div>
      <div className="grid grid-cols-5 text-xs font-semibold bg-gray-50 shadow-sm rounded-sm p-2">
        <span>{releaseTitle}</span>
        <span>
          {primaryArtist?.map((artist, index) => (
            <React.Fragment key={index}>
              {artist?.primaryArtistName}
              <br />
            </React.Fragment>
          ))}
        </span>
        <span>5.4s</span>
        <span>{releaseId}</span>
        <span
          id="download_button"
          className="text-green-600 font-bold text-lg flex items-center justify-center text-center ml-3 cursor-pointer border-2 w-6 h-6 border-green-600 rounded-full"
          onClick={handleDownload}
        >
          <IoMdDownload />
        </span>
      </div>
      <div className="mt-2">
        <audio controls>
          <source src={audio} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default SongTrack;
