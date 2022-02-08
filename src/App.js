import './App.scss';
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
// import { Html, Stars } from '@react-three/drei';
import { Header } from './components/section/header';
import { Landing } from './components/section/landing';
import { Collections } from './components/section/collections';
import { Store } from './components/section/store';
import { Starmap } from './components/section/starmap';
import { Team } from './components/section/team';
import { Spaces } from './components/section/spaces';
import { Look } from './components/section/look';
import { Footer } from './components/section/footer';
import { Galaxy } from './components/universe/galaxy';
import { Wormhole } from './components/universe/wormhole';
import { Universe } from './components/universe/universe';

const Loading = () => {
  return(
        <div>
          <div className='loader'>
            <h3>Loading</h3>
            <div className="planet"></div>
          </div>
      </div>
  );
};


function App() {
  return (
    <div className="screen">
      <div className='main'>
          <Header />
          <Landing />
          <Collections />
          <Starmap />
          <Spaces />
          <Team />
          <Look />
          <Store />
          <Footer />

      </div>
      <div className='canvas darkBg'>
      <Canvas colorManagement camera={{position:[0,30,50], fov: 100}} >
            <Suspense fallback={null}>
                <Universe />
                <Galaxy />
                <Wormhole />
            </Suspense>
          </Canvas>
      </div>
    </div>
  );
}

export default App;
