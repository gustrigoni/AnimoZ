import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactStars from "react-rating-stars-component";

export default class Home extends React.Component {

    render() {
        return (

            <div className="screen-home-main-container">
                <div className="bg">
                    <div className="bg-linear">
                        <img className="logo" src={require('../../../assets/images/big-logo-branco.png')} alt=""/>
                    </div>
                </div>
                <div className="search-container">
                    <input placeholder="O que vamos assistir hoje?"></input>
                </div>
                <div className="top-videos">
                    <div className="thumb-list-container">
                        <h2>Lançamentos</h2>
                        <div className="thumb-list">
                            <div className="thumb-container">
                                <img src="https://cdn.flickeringmyth.com/wp-content/uploads/2020/05/Rick-and-Morty-Season-4-Episode-7--600x327.png" />
                                <div className="description">
                                    <ReactStars
                                        count={5}
                                        size={30}
                                        onChange={(newRating) => console.log(newRating)}
                                        isHalf={true}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                    />
                                    <h2>Teste</h2>
                                    <span>aaaaa</span>
                                </div>
                            </div>
                            <div className="thumb-container">
                                <img src="https://cdn.flickeringmyth.com/wp-content/uploads/2020/05/Rick-and-Morty-Season-4-Episode-7--600x327.png" />
                                <div class="description">
                                    <h2>Teste</h2>
                                    <span>aaaaa</span>
                                </div>
                            </div> 
                            <div className="thumb-container">
                                <img src="https://cdn.flickeringmyth.com/wp-content/uploads/2020/05/Rick-and-Morty-Season-4-Episode-7--600x327.png" />
                                <div class="description">
                                    <h2>Teste</h2>
                                    <span>aaaaa</span>
                                </div>
                            </div>
                            <div className="thumb-container">
                                <img src="https://cdn.flickeringmyth.com/wp-content/uploads/2020/05/Rick-and-Morty-Season-4-Episode-7--600x327.png" />
                                <div class="description">
                                    <h2>Teste</h2>
                                    <span>aaaaa</span>
                                </div>
                            </div> 
                            <div className="thumb-container">
                                <img src="https://cdn.flickeringmyth.com/wp-content/uploads/2020/05/Rick-and-Morty-Season-4-Episode-7--600x327.png" />
                                <div class="description">
                                    <h2>Teste</h2>
                                    <span>aaaaa</span>
                                </div>
                            </div> 
                            <div className="thumb-container">
                                <img src="https://cdn.flickeringmyth.com/wp-content/uploads/2020/05/Rick-and-Morty-Season-4-Episode-7--600x327.png" />
                                <div class="description">
                                    <h2>Teste</h2>
                                    <span>aaaaa</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="thumb-list-container">
                        <h2>Mais curtidos</h2>
                        <div className="thumb-list">
                            <div className="thumb-container">
                                <img src="https://cdn.flickeringmyth.com/wp-content/uploads/2020/05/Rick-and-Morty-Season-4-Episode-7--600x327.png" />
                                <div class="description">
                                    <h2>Teste</h2>
                                    <span>aaaaa</span>
                                </div>
                            </div>
                            <div className="thumb-container">
                                <img src="https://cdn.flickeringmyth.com/wp-content/uploads/2020/05/Rick-and-Morty-Season-4-Episode-7--600x327.png" />
                                <div class="description">
                                    <h2>Teste</h2>
                                    <span>aaaaa</span>
                                </div>
                            </div> 
                            <div className="thumb-container">
                                <img src="https://cdn.flickeringmyth.com/wp-content/uploads/2020/05/Rick-and-Morty-Season-4-Episode-7--600x327.png" />
                                <div class="description">
                                    <h2>Teste</h2>
                                    <span>aaaaa</span>
                                </div>
                            </div>
                            <div className="thumb-container">
                                <img src="https://cdn.flickeringmyth.com/wp-content/uploads/2020/05/Rick-and-Morty-Season-4-Episode-7--600x327.png" />
                                <div class="description">
                                    <h2>Teste</h2>
                                    <span>aaaaa</span>
                                </div>
                            </div> 
                            <div className="thumb-container">
                                <img src="https://cdn.flickeringmyth.com/wp-content/uploads/2020/05/Rick-and-Morty-Season-4-Episode-7--600x327.png" />
                                <div class="description">
                                    <h2>Teste</h2>
                                    <span>aaaaa</span>
                                </div>
                            </div> 
                            <div className="thumb-container">
                                <img src="https://cdn.flickeringmyth.com/wp-content/uploads/2020/05/Rick-and-Morty-Season-4-Episode-7--600x327.png" />
                                <div class="description">
                                    <h2>Teste</h2>
                                    <span>aaaaa</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="thumb-list-container">
                        <h2>Em alta</h2>
                        <div className="thumb-list">
                            <div className="thumb-container">
                                <img src="https://cdn.flickeringmyth.com/wp-content/uploads/2020/05/Rick-and-Morty-Season-4-Episode-7--600x327.png" />
                                <div class="description">
                                    <h2>Teste</h2>
                                    <span>aaaaa</span>
                                </div>
                            </div>
                            <div className="thumb-container">
                                <img src="https://cdn.flickeringmyth.com/wp-content/uploads/2020/05/Rick-and-Morty-Season-4-Episode-7--600x327.png" />
                                <div class="description">
                                    <h2>Teste</h2>
                                    <span>aaaaa</span>
                                </div>
                            </div> 
                            <div className="thumb-container">
                                <img src="https://cdn.flickeringmyth.com/wp-content/uploads/2020/05/Rick-and-Morty-Season-4-Episode-7--600x327.png" />
                                <div class="description">
                                    <h2>Teste</h2>
                                    <span>aaaaa</span>
                                </div>
                            </div>
                            <div className="thumb-container">
                                <img src="https://cdn.flickeringmyth.com/wp-content/uploads/2020/05/Rick-and-Morty-Season-4-Episode-7--600x327.png" />
                                <div class="description">
                                    <h2>Teste</h2>
                                    <span>aaaaa</span>
                                </div>
                            </div> 
                            <div className="thumb-container">
                                <img src="https://cdn.flickeringmyth.com/wp-content/uploads/2020/05/Rick-and-Morty-Season-4-Episode-7--600x327.png" />
                                <div class="description">
                                    <h2>Teste</h2>
                                    <span>aaaaa</span>
                                </div>
                            </div> 
                            <div className="thumb-container">
                                <img src="https://cdn.flickeringmyth.com/wp-content/uploads/2020/05/Rick-and-Morty-Season-4-Episode-7--600x327.png" />
                                <div class="description">
                                    <h2>Teste</h2>
                                    <span>aaaaa</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="thumb-list-container">
                        <h2>Populares</h2>
                        <div className="thumb-list">
                            <div className="thumb-container">
                                <img src="https://cdn.flickeringmyth.com/wp-content/uploads/2020/05/Rick-and-Morty-Season-4-Episode-7--600x327.png" />
                                <div class="description">
                                    <h2>Teste</h2>
                                    <span>aaaaa</span>
                                </div>
                            </div>
                            <div className="thumb-container">
                                <img src="https://cdn.flickeringmyth.com/wp-content/uploads/2020/05/Rick-and-Morty-Season-4-Episode-7--600x327.png" />
                                <div class="description">
                                    <h2>Teste</h2>
                                    <span>aaaaa</span>
                                </div>
                            </div> 
                            <div className="thumb-container">
                                <img src="https://cdn.flickeringmyth.com/wp-content/uploads/2020/05/Rick-and-Morty-Season-4-Episode-7--600x327.png" />
                                <div class="description">
                                    <h2>Teste</h2>
                                    <span>aaaaa</span>
                                </div>
                            </div>
                            <div className="thumb-container">
                                <img src="https://cdn.flickeringmyth.com/wp-content/uploads/2020/05/Rick-and-Morty-Season-4-Episode-7--600x327.png" />
                                <div class="description">
                                    <h2>Teste</h2>
                                    <span>aaaaa</span>
                                </div>
                            </div> 
                            <div className="thumb-container">
                                <img src="https://cdn.flickeringmyth.com/wp-content/uploads/2020/05/Rick-and-Morty-Season-4-Episode-7--600x327.png" />
                                <div class="description">
                                    <h2>Teste</h2>
                                    <span>aaaaa</span>
                                </div>
                            </div> 
                            <div className="thumb-container">
                                <img src="https://cdn.flickeringmyth.com/wp-content/uploads/2020/05/Rick-and-Morty-Season-4-Episode-7--600x327.png" />
                                <div class="description">
                                    <h2>Teste</h2>
                                    <span>aaaaa</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
        
    }

}