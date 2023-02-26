import { Link } from 'react-router-dom'
import './style.css'

export default function SearchResult({url, name, icon, title, description}){
    return (
        <div className="search-res-container">
                <Link style={{width: "100%"}} to={url}>
                    <div className='top-section'>
                        <img src={icon} />
                        <div className='url-info'>
                            <div className='url-info-name'>{name}</div>
                            <div className='url-info-url'>{url}</div>
                        </div>
                    </div>
                </Link>
                <div className='body-section'>
                    <Link style={{width: "100%"}} to={url}>
                        <div className='body-section-title'>{title}</div>
                    </Link>
                    <div className='body-section-desc'>{description}</div>
                </div>
            </div>
    )
}