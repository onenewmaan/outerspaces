import React from 'react';


export function Landing() {

  return (
    <div className="container">
      <div className='row'>
        <div className='img-zoom'> <img src="/images/web/space_infiltrators3.png" alt='' width="45px" />
          
        </div>

      </div>
      
      <p className="bottom-space" style={{marginBottom:'300px'}} />
          <div className='row' style={{flexFlow:'column'}}>
            <h2 style={{fontSize: '30px', fontWeight: '100', textAlign: 'center', fontFamily:'Montserrat', letterSpacing:'10px'}}>
                            WHEN YOU <i>REALLY </i><b>WANT</b> SOMETHING
                        </h2>
                        <h2 style={{fontSize: '20px', fontWeight: '100', textAlign: 'center', fontFamily:'Montserrat', letterSpacing:'8px'}}>
                            ALL THE <b>UNIVERSE</b> COLLABORATES
                        </h2>
                        <h2 style={{fontSize: '13px', fontWeight: '100', textAlign: 'center', fontFamily:'Montserrat', letterSpacing:'6px'}}>
                            IN HELPING YOU <b><i>COLLECTING</i></b> IT . . .
                        </h2>
                        <h2 style={{fontSize: '8px', fontWeight: '100', textAlign: 'center', fontFamily:'Montserrat', letterSpacing:'6px'}}>
                        TRUST THE PROCESS
                        </h2>
                    </div>
        <p className="bottom-space-md" />
            <div className='col'>
              <div className='float-div'>
              <h3>︾</h3>
              </div>
            </div>
        <p className="bottom-space" />
    </div>
  );
}