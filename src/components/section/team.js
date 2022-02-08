import React from 'react';

export function Team() {
    return (
        
      <div className='container'>
        <p className="bottom-space" />
          <div className='row' style={{display:'flex', flexFlow:'column'}}>
            <div className='mobile-shrink'>
              <div className="flux" style={{textAlign:'center'}}>TEAM </div>
            </div>  
            <p className='bottom-space-sm' />
            <div className="row">
                    <div className='col'>
                      <h3>Our creative worlds clashed in the digital 3D spaces.</h3>
                    </div>
                </div>
            <p className='bottom-space-sm' />
                  <div className='token__container'>
                    <div className='info__container-card'>
                      <div className='info__container-cardInfo'>
                        <h2>AGGIE</h2>
                        <h2 style={{marginTop:'5px'}}>
                            <img src="images/web/empresss.png" width="100px" alt="" style={{margin:'-15px'}} />
                        </h2>
                        <p style={{textAlign:'center'}}>Creative Captain
                        <br />Architect
                        <br />Mother</p>
                          <a href="https://instagram.com/miss_agatron"><h3>Instagram</h3></a>
                      </div>
                    </div>
                    <div className='info__container-card'>
                    <div className='info__container-cardInfo'>
                        <h2>BABY YOGGIES</h2>
                        <h2 style={{marginTop:'5px'}}>
                            <img src="images/web/babyyogi.gif" width="100px" alt="" style={{margin:'-15px'}} />
                        </h2>
                        <p style={{textAlign:'center'}} >Spiritual Tutors
                        <br />Todler & Baby</p>
                        <div className='icon-row'>
                          <div className='col'>
                          ←
                            </div>
                            <div className='col'>
                            ❤️️
                            </div>
                            <div className='col'>
                            →
                            </div>
                          </div>
                      </div>
                    </div>
                    <div className='info__container-card'>
                    <div className='info__container-cardInfo'>
                        <h2>VICTOR</h2>
                        <h2 style={{marginTop:'5px'}}>
                            <img src="images/web/newman.png" width="100px" alt="" style={{margin:'-15px'}} />
                        </h2>
                        <p style={{textAlign:'center'}} >Visionary Chief
                        <br />Dev
                        <br />Father</p>
                        <a href="https://www.twitter.com/onenewmaan"><h3>Twitter</h3></a>
                        
                      </div>
                    </div>
                  </div>
                </div>
        <p className="bottom-space-sm" />
      </div>
    );
}