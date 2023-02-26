import React from 'react';
import './style.css'

export default function Header(){
    return (
        <header>
            <div class="head">
                <p class="">Gmail</p>
            
                <iconify-icon icon="akar-icons:dot-grid"></iconify-icon>
                <button class="sign">Sign in</button>
            
            </div>
        </header>
    )
}