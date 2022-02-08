import React from 'react';

export function Spaces() {
  return (
      <div className='container'>
          <p className="bottom-space-sm" />
            <div className="row">
                <div className="token__container">
                    <div className='info__container-cardInfo'>
                        
                        <div className='row'>
                            <div className="game-card">
                                <img src="images/VR/render.gif" alt="City" className="game-image" />
                                <div className="game-text">
                                    OWN
                                </div>
                            </div>
                            <div className="game-card">
                                <img src="images/VR/dot_world.gif" alt="City" className="game-image" />
                                <div className="game-text">
                                    EXPLORE
                                </div>
                            </div>
                        </div>
                        
                        <div className='row'>
                            <div className='float-div'>
                                <div className='col'>
                                    <img src="images/web/space_infiltrators.png" width="55px" alt="" style={{margin:'-15px'}} />
                                </div>
                            </div>
                            <div className='col'>
                            <img src="images/web/game.gif" alt=""  />
                            
                            </div>
                            <div className='float-div'>
                                <div className='col'>
                                <img src="images/web/space_infiltrators2.png" width="55px" alt="" style={{margin:'-15px'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <p className="bottom-space-sm" />
      </div>
  );
}