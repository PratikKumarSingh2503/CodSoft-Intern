import React from 'react';
import './topbar.css';
import { Link } from 'react-router-dom';

const Topbar = () => {
    return (
        <div className='nav'>
            <div className='left'>
                <h3>Job<span>Board</span></h3>
            </div>

            <div className='middle'>
                <Link to="/" className='midlink'>HOME</Link>
                <Link to="/news" className='midlink'>NEWS</Link>
                <Link to="/politics" className='midlink'>POLITICS</Link>
                <Link to="/techinfo" className='midlink'>TECH INFO</Link>
                <Link to="/" className='midlink'>LOGOUT</Link>
            </div>

            <div className='right'>
                <div className='sub-right'>
                    <p>search</p>
                </div>
                <div className='login'>
                    <Link to="/login" className='rightlink'>LOGIN / </Link>
                    <Link to="/signup" className='rightlink'>SIGNUP</Link>
                </div>
            </div>
        </div>
    );
}

export default Topbar;