
import React  from 'react';

export function Footer() {

  return (
<div className='footer'>
    <p className='bottom-space' />
    <div className='row'>
        <div className='col'>
            <h2 style={{fontSize: '20px', fontWeight: '600', textAlign: 'center', margin:'-10px'}}>CONNECT WITH US</h2>
        </div>
    </div>
    <div className='row'>
        <div className='col'>
        <ul>
                <li><a href="https://instagram.com/miss_agatron">Instagram</a></li>
                <li><a href="https://www.twitter.com/onenewmaan">Twitter</a></li>
                <li><a href="https://opensea.io/outerspacesNFT">Opensea</a></li>
                <li>
                    <div className='col'>
                        <img src="images/web/space_infiltrators5.png" width="45px" alt="" style={{margin:'-15px'}} />
                </div>
                </li>
            </ul>
        </div>
    </div>
    <div className='row'>
        <div className='col'>
            <p style={{display: 'flex',fontSize: '14px', textAlign: 'center'}}> © outerspaces.io -  All Rights Reserved.</p>
        </div>
    </div>
  </div>
  );
}