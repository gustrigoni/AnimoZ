import React from 'react';

import "video-react/dist/video-react.css";
import { Player, ControlBar, ReplayControl, ForwardControl, LoadingSpinner, Shortcut, BigPlayButton } from 'video-react';
import ReactStars from "react-rating-stars-component";

export default class Watch extends React.Component {

    render() {
        return (

            <div className="screen-watch-main-container">
                <div style={{backgroundImage: "url(https://images.wallpapersden.com/image/download/akatsuki-organization-anime_67572_3840x2160.jpg)"}} className="bg">
                    <div className="bg-linear">
                        <div className="video-container">
                            <Player
                                fluid={false}
                                width={960}
                                height={550}
                                preload
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                autoPlay={true}
                                startTime={0}
                                
                            >
                                <ControlBar autoHide={false}>
                                    <ForwardControl seconds={10} order={3.2} />
                                    <ReplayControl seconds={10} order={2.2} />
                                </ControlBar>
                                <BigPlayButton position="center" />
                                <Shortcut clickable={true} />
                                <LoadingSpinner />
                            </Player>

                        <div className="descricao">
                            <h1>Aaaaa</h1>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}