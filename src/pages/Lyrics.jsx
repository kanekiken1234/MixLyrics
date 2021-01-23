import '../styles/lyrics.css';
import { useEffect, useState } from 'react';
import LyricsImg from "../svgs/lyrics.jpg";

const Lyrics = (props) => {

    const [lyricsData, setLyricsData] = useState();
    const query = props.location.state.songName

    useEffect(async () => {
        await fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=${query}&apikey=1370cfd097fa7ef3e793c9cc7667130f`, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(response => response.json())
            .then(data => {
                setLyricsData(data.message.body.lyrics.lyrics_body)
            })
            .catch(err => setLyricsData(`Lyric not found!,${err.message}`))
    }, [])

    return (
        <div className="lyrics-content">
            <div className="search-query">
                The song you searched for: "{query}"
            </div>
            <div className="lyrics-container">
                <div className="lyrics">
                    <h1>Lyrics: </h1>
                    {lyricsData}
                </div>
                <img src={LyricsImg} alt="" />
            </div>
        </div>
    );
}

export default Lyrics;