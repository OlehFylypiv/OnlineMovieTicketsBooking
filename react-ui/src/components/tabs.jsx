import React, { Component } from 'react';
import { Tabs, Tab, Image } from 'react-bootstrap';

require('../css/tabsStyles.css');

class MovieTabs extends Component {
    
    render() {
        return(
            <div className="container">
                <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Captain America: Civil War">
                        <div>
                            <h3>
                                Year: <a href="http://www.imdb.com/list/ls033133511/" target="_blank">2016</a>
                            </h3>
                            <h3>
                                Directors: 
                                    <a href="http://www.imdb.com/name/nm0751577/?ref_=tt_ov_dr" target="_blank">Anthony Russo</a>, 
                                    <a href="http://www.imdb.com/name/nm0751648/?ref_=tt_ov_dr" target="_blank">Joe Russo</a>
                            </h3>
                            <h3 className="tabs-links">
                                Stars:  
                                <a href="http://www.imdb.com/name/nm0262635/?ref_=tt_ov_st_sm" target="_blank">Chris Evans</a>,
                                <a href="http://www.imdb.com/name/nm0000375/?ref_=tt_ov_st_sm" target="_blank">Robert Downey Jr.</a>,
                                <a href="http://www.imdb.com/name/nm0424060/?ref_=tt_ov_st_sm" target="_blank">Scarlett Johansson</a>
                            </h3>
                            <p className="movie-desc">
                                As Steve Rogers struggles to embrace his role in the modern world,<br/>
                                he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow,<br/> 
                                to battle a new threat from history: an assassin known as the Winter Soldier. <br/>
                            </p>
                            <div className="tabs-images">
                                <div>
                                    <Image src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTExOTAxNzI1MzZeQTJeQWpwZ15BbWU4MDk3OTgyNjgx._V1_.jpg" width="230" responsive />
                                </div>
                                <div>
                                    <Image src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwOTE1MDkyM15BMl5BanBnXkFtZTgwNzc5ODI2ODE@._V1_.jpg" width="230" responsive />
                                </div>
                                <div>
                                    <Image src="https://images-na.ssl-images-amazon.com/images/M/MV5BODg3OTc4MTEyMl5BMl5BanBnXkFtZTgwODI0MDkyODE@._V1_SX1777_CR0,0,1777,932_AL_.jpg" width="230" responsive />
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey={2} title="World War Z">
                        <div>
                            <h3>
                                Year: <a href="http://www.imdb.com/list/ls057563436/" target="_blank">2013</a>
                            </h3>
                            <h3>
                                Directors: 
                                    <a href="http://www.imdb.com/name/nm0286975/?ref_=tt_ov_dr" target="_blank">Marc Forster</a> 
                            </h3>
                            <h3 className="tabs-links">
                                Stars:  
                                <a href="http://www.imdb.com/name/nm0000093/?ref_=tt_ov_st_sm" target="_blank">Brad Pitt</a>,
                                <a href="http://www.imdb.com/name/nm0257969/?ref_=tt_ov_st_sm" target="_blank">Mireille Enos</a>,
                                <a href="http://www.imdb.com/name/nm2020146/?ref_=tt_ov_st_sm" target="_blank">Daniella Kertesz</a>
                            </h3>
                            <p className="movie-desc">
                                Former United Nations employee Gerry Lane traverses the world in a race against <br/> 
                                time to stop the Zombie pandemic that is toppling armies and governments,<br/> 
                                and threatening to destroy humanity itself. <br/>
                            </p>
                            <div className="tabs-images">
                                <div>
                                    <Image src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjg2MjkwNDUwOV5BMl5BanBnXkFtZTcwOTUzMTY2OQ@@._V1_SX1500_CR0,0,1500,999_AL_.jpg" width="230" responsive />
                                </div>
                                <div>
                                    <Image src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MzE5OTE3N15BMl5BanBnXkFtZTcwMzgzMTY2OQ@@._V1_SX1500_CR0,0,1500,999_AL_.jpg" width="230" responsive />
                                </div>
                                <div>
                                    <Image src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxODMxMzcyNV5BMl5BanBnXkFtZTcwMTQ3MTY2OQ@@._V1_SY1000_CR0,0,1457,1000_AL_.jpg" width="230" responsive />
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey={3} title="Oblivion">
                        <div>
                            <h3>
                                Year: <a href="http://www.imdb.com/list/ls057563436/" target="_blank">2013</a>
                            </h3>
                            <h3>
                                Directors: 
                                    <a href="http://www.imdb.com/name/nm2676052/?ref_=tt_ov_dr" target="_blank"> Joseph Kosinski</a> 
                            </h3>
                            <h3 className="tabs-links">
                                Stars:  
                                <a href="http://www.imdb.com/name/nm0000129/?ref_=tt_ov_st_sm" target="_blank">Tom Cruise</a>,
                                <a href="http://www.imdb.com/name/nm0000151/?ref_=tt_ov_st_sm" target="_blank">Morgan Freeman</a>,
                                <a href="http://www.imdb.com/name/nm2057859/?ref_=tt_ov_st_sm" target="_blank">Andrea Riseborough</a>
                            </h3>
                            <p className="movie-desc">
                                A veteran assigned to extract Earth's remaining resources <br/> 
                                begins to question what he knows about his mission and himself. <br/>
                            </p>
                            <div className="tabs-images">
                                <div>
                                    <Image src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjIwMzkzNTg4OV5BMl5BanBnXkFtZTcwMTYyNDczOQ@@._V1_SY1000_CR0,0,1515,1000_AL_.jpg" width="230" responsive />
                                </div>
                                <div>
                                    <Image src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxODU2NDkwNl5BMl5BanBnXkFtZTcwODUyNDczOQ@@._V1_SX1500_CR0,0,1500,999_AL_.jpg" width="230" responsive />
                                </div>
                                <div>
                                    <Image src="https://images-na.ssl-images-amazon.com/images/M/MV5BNmUxZWYxZWQtMzQ1ZS00ZTIwLThlNzgtNGMxNmFmZWQwNmZiXkEyXkFqcGdeQXVyNDAxOTExNTM@._V1_.jpg" width="230" responsive />
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>    
        );
    }
}

export default MovieTabs;
