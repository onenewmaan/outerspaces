import React from 'react';


export function Look() {

  return (
    <div className="container">
      <p className="bottom-space" style={{marginBottom:'400px'}} />
      <div className='float-div'>
                                <div className='col'>
                                    <img src="images/web/space_infiltrators6.png" width="55px" alt="" style={{margin:'-15px'}} />
                                </div>
                            </div>

      <h2 style={{fontSize: '8px', fontWeight: '100', textAlign: 'center', fontFamily:'Montserrat', letterSpacing:'6px'}}>
                        MESSAGE FROM THE FAM:
      </h2>
      <p className="bottom-space" style={{marginBottom:'400px'}} />
      <div className='row' style={{flexFlow:'column'}}>
      <h2 style={{fontSize: '15px', fontWeight: '100', textAlign: 'center', fontFamily:'Montserrat', letterSpacing:'8px'}}>
          Your mental health is #1 priority.
          </h2>
        
        <div className='img-zoom'>
          <h2 style={{fontSize: '20px', fontWeight: '100', textAlign: 'center', fontFamily:'Montserrat', letterSpacing:'8px'}}>
          STAY CALM, NEVER FOMO
          </h2>
        </div>
          
          <div className='img-zoom'>
                                <div className='col'>
                                    <img src="images/web/space_infiltrators.png" width="55px" alt="" style={{margin:'-15px'}} />
                                </div>
                            </div>
                    
                    
      </div>
     <p className="bottom-space" style={{marginBottom:'400px'}} />

    </div>
  );
}