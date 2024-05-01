import React from "react";

const ShowDetailsRelease = ({ singleSongData }) => {
  console.log("song data", singleSongData);
  const {
    audio,
    _id,
    image,
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
    genre,
    upcEan,
    subGenre,
    producerCatalogNumber,
    productionYear,
    labelName,
    labelId,
    publisher,
    youtubeUrl,
    isrc,
    catalogNumber,
    tiktokStartInSecond,
    trackLanguage,
    releaseDate,
    isAdvancePurchase,
    advancePurchaseDate,
    isApproved,
    correctionNote,
    tackDown,
    songStatus,
    createdAt,
  } = singleSongData?.data;

  return (
    <div className="grid grid-cols-2 view-release-main bg-white w-full p-5 mb-5">
      <p>
        <span className="font-bold">Primary Track Type:</span> {trackType}
      </p>
      <p>
        <span className="font-bold">
          Is this track consider a key track for the release:
        </span>{" "}
        {isRelease}
      </p>
      <p>
        <span className="font-bold">Instrumental:</span> {instrumental}
      </p>
      <p>
        <span className="font-bold">Secondary Track Type: </span>{" "}
        {secondaryTrackType}
      </p>
      <p>
        <span className="font-bold">Parental advisory: </span>{" "}
        {parentalAdvisory}
      </p>
      <p>
        <span className="font-bold">Release Title: </span> {releaseTitle}
      </p>
      <p>
        <span className="font-bold">Sub Title: </span> {subtitle}
      </p>
      <p>
        <span className="font-bold">Line-1: </span> {line}
      </p>
      <p>
        <span className="font-bold">Line-2: </span> {line}
      </p>
      <p>
        <span className="font-bold">Primary Artist: </span>
        {primaryArtist?.map((item, index) => (
          <span key={index}>{item?.primaryArtistName}</span>
        ))}
      </p>

      <p>
        <span className="font-bold">Writer: </span>
        {writer?.map((item, index) => (
          <span key={index}>{item?.writerName}</span>
        ))}
      </p>

      <p>
        <span className="font-bold">Composer: </span>
        {composer?.map((item, index) => (
          <span key={index}>{item.composerName}</span>
        ))}
      </p>

      <p>
        <span className="font-bold">Music Derector: </span>
        {musicDirector?.map((item, index) => (
          <span key={index}>{item.musicDirectorName}</span>
        ))}
      </p>
      <p>
        <span className="font-bold">Producer: </span>{" "}
        {producer?.map((item, index) => (
          <span key={index}>{item.producerName}</span>
        ))}
      </p>
      <p>
        <span className="font-bold">Genre:</span> {genre}
      </p>
      <p>
        <span className="font-bold">UPC/EAN:</span> {upcEan}
      </p>
      <p>
        <span className="font-bold">SubGenre:</span> {subGenre}
      </p>
      <p>
        <span className="font-bold">Producer Catalouge number:</span>{" "}
        {producerCatalogNumber}
      </p>
      <p>
        <span className="font-bold">Production year:</span> {productionYear}
      </p>
      <p>
        <span className="font-bold">Label Name:</span> {labelName}
      </p>
      <p>
        <span className="font-bold">Publisher:</span> {publisher}
      </p>
      <p>
        <span className="font-bold">Track Language:</span> {trackLanguage}
      </p>
      <p>
        <span className="font-bold">ISRC:</span> {isrc}
      </p>
      <p>
        <span className="font-bold">Tiktok preview start in seconds:</span>{" "}
        {tiktokStartInSecond}
      </p>
    </div>
  );
};

export default ShowDetailsRelease;
