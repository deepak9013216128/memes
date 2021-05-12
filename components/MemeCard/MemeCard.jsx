import React, { useEffect, useState, useMemo } from "react";
import { Card } from "react-bootstrap";

export default function MemeCard({ meme }) {
  useEffect(() => {
    const cld = cloudinary.Cloudinary.new({
      cloud_name: "meme-collections",
      secure: true,
    });
    meme.type === "video" &&
      cld.videoPlayer &&
      cld.videoPlayer(meme.url, {
        controls: true,
        preload: "auto",
        muted: true,
        publicId: meme.url,
      });
  }, []);
  return meme.type === "video" ? (
    <Card className="m-3">
      <video id={meme.url} className="cld-video-player cld-fluid"></video>
    </Card>
  ) : (
    <Card className="m-3">
      <img
        style={{
          margin: "auto",
        }}
        width="100%"
        src={`https://res.cloudinary.com/meme-collections/image/upload/${meme.url}`}
        alt={meme.type}
      />
    </Card>
  );
}
