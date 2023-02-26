import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import SearchResult from '../../components/search_result';
import './style.css'

export default function SearchPage(){
    return (
        <>
            <Header />

            <section className='search-section'>
                <form><br /><br />
                    <div className="s-box-search" >
                        <img src="images/search.svg" className="search-icon" />
                        <input type="text" className="s-input" />
                        <img src="images/google-mic.svg" className="vs-icon" />
                        <img src="images/camera.svg" className="cm-icon" />
                    </div>
                </form>
                <div className='res-container'>
                <SearchResult 
                    url="https://hackathon-mystery-forum.vercel.app/" 
                    name="Forum" 
                    icon="images/icon1.png" 
                    title="A forum to find interesting articles" 
                    description="The best of the BBC, with the latest news and sport headlines, weather, TV & radio highlights and much more from across the whole of BBC Online." 
                />
                <SearchResult 
                    url="https://hackathon-mystery-forum.vercel.app/" 
                    name="Forum" 
                    icon="images/icon1.png" 
                    title="A forum to find interesting articles" 
                    description="The best of the BBC, with the latest news and sport headlines, weather, TV & radio highlights and much more from across the whole of BBC Online." 
                />
                <SearchResult 
                    url="https://hackathon-mystery-forum.vercel.app/" 
                    name="Forum" 
                    icon="images/icon1.png" 
                    title="A forum to find interesting articles" 
                    description="The best of the BBC, with the latest news and sport headlines, weather, TV & radio highlights and much more from across the whole of BBC Online." 
                />
                <SearchResult 
                    url="https://hackathon-mystery-forum.vercel.app/" 
                    name="Forum" 
                    icon="images/icon1.png" 
                    title="A forum to find interesting articles" 
                    description="The best of the BBC, with the latest news and sport headlines, weather, TV & radio highlights and much more from across the whole of BBC Online." 
                />
                <SearchResult 
                    url="https://hackathon-mystery-forum.vercel.app/" 
                    name="Forum" 
                    icon="images/icon1.png" 
                    title="A forum to find interesting articles" 
                    description="The best of the BBC, with the latest news and sport headlines, weather, TV & radio highlights and much more from across the whole of BBC Online." 
                />
                </div>
            </section>

            <Footer />
        </>
    );
}