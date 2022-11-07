import React, { useEffect, useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';

const VideoRoom = () => {
const [users,setUsers] = useState([]);
// console.log(users);

  const APP_ID='c50e5defd95d4d378f51ffb8cd21863e';
  const TOKEN='007eJxTYFj7NZwt4s3ij6+vdjTW3vrbGct+p6A1zaN+xysHIW3mLfsVGJJNDVJNU1LTUixNU0xSjM0t0kwN09KSLJJTjAwtzIxTuW5kJDcEMjK0fN7PwsgAgSA+N0NOfnJiTnBJUWpiLgMDACdMJSk=';
  const CHANNEL ='localStream';
  const client = AgoraRTC.createClient({
    mode: 'rtc',
    codec: 'vp8'
  })

  useEffect(()=>{
     client.join(APP_ID,CHANNEL,TOKEN,null)
     .then((uid)=>
        Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(),
          uid,
        ])
     )
     .then(([tracks,uid]) => {
      // console.log(tracks);
      const [audiotrack,videotrack]=tracks;
      client.publish(audiotrack,videotrack);
      setUsers((previousUsers) => [
        ...previousUsers,
        {
          uid,
          videotrack,
        },
      ]);
     })
  },[]);

  return (
    <div>
      <h1>VideoRoom
        {users.map((user)=>(
          <div key={user.uid}>{user.uid}</div>
        ))}
      </h1>
    </div>
  )
}

export default VideoRoom

