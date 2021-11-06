import React from 'react';

import "video-react/dist/video-react.css";
import { Player, ControlBar, ReplayControl, ForwardControl, LoadingSpinner, Shortcut, BigPlayButton } from 'video-react';
import ReactStars from "react-rating-stars-component";

export default class Watch extends React.Component {

    render() {
        return (

            <div className="screen-watch-main-container">
                <div style={{ backgroundImage: `url(${require('../../../assets/images/naruto_bg.jpg')})` }} className="bg">
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
                                        <span name="comentarios">Comentários</span>
                                        <div className="lista">
                                            <div className="comentario-container">
                                                <div className="avatar">
                                                    <img src="https://media3.giphy.com/media/4ilFRqgbzbx4c/giphy.gif" alt="" />
                                                </div>
                                                <div className="comentario">
                                                    <span name="usuario">iRaily</span>
                                                    <span name="data">Agora mesmo</span>
                                                    <span name="descricao">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                                                </div>
                                            </div>
                                            <div className="comentario-container">
                                                <div className="avatar">
                                                    <img src="https://media3.giphy.com/media/4ilFRqgbzbx4c/giphy.gif" alt="" />
                                                </div>
                                                <div className="comentario">
                                                    <span name="usuario">iRaily</span>
                                                    <span name="data">Há uma hora</span>
                                                    <span name="descricao">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                                                </div>
                                            </div>
                                            <div className="comentario-container">
                                                <div className="avatar">
                                                    <img src="https://media3.giphy.com/media/4ilFRqgbzbx4c/giphy.gif" alt="" />
                                                </div>
                                                <div className="comentario">
                                                    <span name="usuario">iRaily</span>
                                                    <span name="data">Hoje</span>
                                                    <span name="descricao">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                                                </div>
                                            </div>
                                            <div className="comentario-container">
                                                <div className="avatar">
                                                    <img src="https://media3.giphy.com/media/4ilFRqgbzbx4c/giphy.gif" alt="" />
                                                </div>
                                                <div className="comentario">
                                                    <span name="usuario">iRaily</span>
                                                    <span name="data">23 de Janeiro de 2020</span>
                                                    <span name="descricao">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
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