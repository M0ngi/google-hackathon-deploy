import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../../components/footer';
import Header from '../../components/header';
import './style.css'

export default function GooglePage(){
    return (
        <>
            <Header />
            <section className="section-1">
                <img src="images/google.png" className="logo" />
                <form><br /><br />
                    <div className="s-box" >
                        <img src="images/search.svg" className="search-icon" />
                        <input type="text" className="s-input" />
                        <img src="images/google-mic.svg" className="vs-icon" />
                        <img src="images/camera.svg" className="cm-icon" />
                        <Link to={"/search"}>
                            <button  className="s-btn">Google Search</button>
                        </Link>
                        <input type="submit" className="s-btn" value="I'm Feeling Lucky" />
                    </div>
                </form>
                <div className="lang" id="box">
                    Google offered in:
                    <a href="#" className="a">Arabic</a>
                
                </div>
            </section>
    
            <Footer />
        </>
    );
}