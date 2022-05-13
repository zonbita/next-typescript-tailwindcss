import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as ReactDOM from 'react-dom/client';

export default function Box3d() {
    return (
        <>
         <mesh rotation={[10, 35, 0]} position={[0, -0, 0]} scale={2}>
             <boxBufferGeometry args={[1, 64, 64]} />
             <meshLambertMaterial attach='material' color='blue'/>
         
         </mesh>
        </>
    )
}

