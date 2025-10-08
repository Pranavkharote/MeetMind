import React, { useEffect, useRef } from "react";
import Peer from "peerjs";

export default function VideoCall() {
  const myVideo = useRef();
  const remoteVideo = useRef();
  const peerRef = useRef();

  useEffect(() => {
    const peer = new Peer(undefined, {
      host: "localhost",
      port: 5000,
      path: "/myapp",
    });
    peerRef.current = peer;

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        myVideo.current.srcObject = stream;
        myVideo.current.play();

        peer.on("call", (call) => {
          call.answer(stream);
          call.on("stream", (remoteStream) => {
            remoteVideo.current.srcObject = remoteStream;
            remoteVideo.current.play();
          });
        });
      });

    peer.on("open", (id) => {
      console.log("My Peer ID:", id);
    });
  }, []);

  // For testing, you can manually call this in console:
  // peerRef.current.call('<another-peer-id>', stream)

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <h1 className="text-2xl font-bold">🎥 MeetMind Video Call</h1>
      <div className="flex gap-4">
        <video ref={myVideo} muted className="w-64 border rounded-lg" />
        <video ref={remoteVideo} className="w-64 border rounded-lg" />
      </div>
    </div>
  );
}
