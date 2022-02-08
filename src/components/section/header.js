import React from 'react';
// https://foundation.app/@outerspacesNFT
export function Header() {

  return (
      <nav className='nav'>
        <p className="bottom-space-sm" />
        <div className='row' style={{display:'flex'}}>
                  <div className="flux">OUTER</div>
                  <div className="neon">SPACES</div>
              </div>
          <p className="bottom-space-xsm" />
          <div className='row'>
            <ul>
                <li><a href="https://instagram.com/miss_agatron">Instagram</a></li>
                <li><a href="https://www.twitter.com/onenewmaan">Twitter</a></li>
                <li><a href="https://opensea.io/outerspacesNFT">Opensea</a></li>
                <li><a href="https://foundation.app/@outerspacesNFT">Foundation</a></li>
            </ul>
          </div>
        <p className="bottom-space-sm" />
      </nav>
  );
}