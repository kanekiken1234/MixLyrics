import React, { useState } from 'react';
import LandingImg from "../svgs/5870.jpg";
import '../styles/search.css';
import { ReactComponent as SearchIcon } from "../svgs/search.svg";
import { useHistory } from 'react-router-dom';

const Search = () => {
    const [songName, setSongName] = useState('');
    const history = useHistory();

    const handleSubmit = () => {
        history.push('/lyrics', { songName });
    }
    return (
        <div className='content'>
            <div className="landing-image">
                <img src={LandingImg} />
            </div>
            <div className="search">
                <div className="title">
                    <div className="title-1">Seach for Lyrics.</div>
                    <div className="title-2">Bringing Lyrics to you from MusixMatch API.</div>
                </div>
                <div className="search-bar">
                    <input
                        autoFocus
                        placeholder="write song name with artist name "
                        onChange={e => setSongName(e.target.value)}></input>
                    <SearchIcon onClick={handleSubmit} />
                </div>
            </div>
        </div>
    );
}

export default Search;