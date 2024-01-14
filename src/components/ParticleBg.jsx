import React from 'react'
import Particles from "react-particles-js"
import ParticleConfig from './Config/ParticleConfig';

export default function ParticleBg() {

    return (
        <div id='Home'>
            <Particles params={ParticleConfig}></Particles>
        </div>
    );
}