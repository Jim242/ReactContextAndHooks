import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
       { title: 'Song 1', id: 1 },
       { title: 'Song 2', id: 2 },
       { title: 'Song 3', id: 3 } 
    ]);

    const [age, setAge] = useState(20)
    const addSong = (title) => {
        setSongs([...songs, { title, id: uuid() }])
    }

    useEffect(() => {
    //Calls when ever the page or components re renders
    // can limit the call in the array, to only call when that data has changed 
        [songs]
    })
    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return ( 
                        <li key={song.id}>{song.title}</li>
                    )
                })}
            </ul>
           <NewSongForm addSong={addSong} />
           <button onClick={() => setAge(age + 1)}>Add 1 age:{age}</button>
        </div>
    );
}

export default SongList;