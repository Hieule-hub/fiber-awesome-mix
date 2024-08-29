"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import { Html, ScrollControls, useProgress } from "@react-three/drei";

function Loader() {
    const { progress, active } = useProgress();

    return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Scene() {
    return (
        <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className='relative'>
            <directionalLight position={[-5, -5, 5]} intensity={4} />
            <Suspense fallback={<Loader />}>
                <ScrollControls damping={0.5} pages={3}>
                    <Model />
                </ScrollControls>
            </Suspense>
        </Canvas>
    );
}
