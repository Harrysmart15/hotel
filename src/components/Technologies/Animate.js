import React from 'react';
import "../../App.css";
import { Player } from '@lottiefiles/react-lottie-player';

export function Animate() {
    return (
        <div>

            <Player
            className="align"
                autoplay
                loop
                src="https://assets7.lottiefiles.com/private_files/lf30_FQVNNa.json"
            >
            </Player>
        </div>
    )
}
