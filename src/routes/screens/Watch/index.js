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
                        <div className="container">
                            <div className="video-container">
                                <div className="video">
                                    <Player
                                        fluid={false}
                                        width={960}
                                        height={550}
                                        preload={true}
                                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                        autoPlay={false}
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
                                </div>
                                <div className="sobre">
                                    <div className="serie">
                                        <div className="titulo">
                                            <h2>Dragon Ball Super</h2>
                                            <ReactStars
                                                count={5}
                                                onChange={(nota) => console.log(nota)}
                                                size={24}
                                                isHalf={true}
                                                emptyIcon={<i className="far fa-star"></i>}
                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                fullIcon={<i className="fa fa-star"></i>}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <a>Próximo episódio</a>
                                    </div>
                                    <div className="comentarios">
                                        <span>Comentários</span>
                                        <div className="lista">
                                            <div className="comentario-container">
                                                <div className="avatar">
                                                    <img src="https://media3.giphy.com/media/4ilFRqgbzbx4c/giphy.gif" alt="" />
                                                </div>
                                                <div className="comentario">
                                                    <span name="usuario">iRaily</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}