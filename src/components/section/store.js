import React from 'react';

export function Store() {
    return (
        
        <div className='container'>
        <p className="bottom-space-sm" />
          <div className='token__section'>
            <div className='token__wrapper'>
              <div className="token__container-card">
                <div className="token__container-cardInfo" style={{height:'200px'}}>
                    <div className='row' style={{display:'flex', flexFlow:'column'}}>
                        <div className='mobile-shrink'>
                            <div className="flux" style={{textAlign:'center'}}>doge </div>
                            <div className="neon" style={{textAlign:'center'}}>store </div>
                        </div>
                    </div>
                    <p className='bottom-space-sm' />
                    <div className='row' style={{display:'flex', flexFlow:'column', alignItems:'center'}}>
                    </div>
                  </div>
                    <div className='row' style={{flexFlow:'column'}}>
                      <h2 style={{fontSize: '25px', fontWeight: '500', textAlign: 'center'}}>
                            <b>d</b>o <b>o</b>nly <b>g</b>ood <b>e</b>veryday ✌️
                        </h2>
                        <div className="token__container">
                    <div className='token__container-section'>
                      <h2 style={{display: 'flex',fontSize: '14px', textAlign: 'center'}}>
                      You know what would be cool? If we could use our $doge to buy cool stuff. Yes we are pro doge and we would like to 
                      be a part of the global $dogecoin adoption, so come check out our first product line. 
                        <br />
                        </h2>
                    </div>
                  </div>
                        <div className='row' style={{alignItems: 'center', flexFlow:'column'}}>
                          <div className='flip'>
                            <h2 style={{fontSize: '12px', fontWeight: '100', textAlign: 'center', marginTop:'5px'}}>
                            <img src="images/web/doge_dance.gif" width="50px" alt="" style={{marginTop:'-5px'}} />
                            
                            </h2>
                          </div>
                        </div>

                        <h2 style={{fontSize: '12px', fontWeight: '100', textAlign: 'center', marginTop:'5px'}}>
                        ↡
                        <br /> coming soon!
                        </h2>
                    </div>
                    
                  <p className='bottom-space-sm' />
              </div>
            </div>
          </div>
        </div>
    );
}