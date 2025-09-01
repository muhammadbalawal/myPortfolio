'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Text, Preload } from '@react-three/drei';
import { useRef, useEffect, useState, Suspense } from 'react';
import { Group } from 'three';
import { v4 as uuidv4 } from 'uuid';

// Preload the model
useGLTF.preload('/models/LCD_module4.glb');

const ArduinoModel = ({ onModelLoaded }: { onModelLoaded: () => void }) => {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF('/models/LCD_module4.glb');

  const [uniqueUsers, setUniqueUsers] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let userId = localStorage.getItem('userId');
    if (!userId) {
      userId = uuidv4();
      localStorage.setItem('userId', userId);
    }

    async function registerAndFetch() {
      try {
        setIsLoading(true);
        await fetch('/api/unique-views', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId }),
        });

        const res = await fetch('/api/unique-views');
        const data = await res.json();
        if (res.ok) setUniqueUsers(data.uniqueVisitors);
        else console.error('API error:', data.error);
      } catch (error) {
        console.error('Fetch/register error:', error);
      } finally {
        setIsLoading(false);

        setTimeout(onModelLoaded, 100);
      }
    }

    registerAndFetch();
  }, [onModelLoaded]);

  return (
    <group ref={groupRef} position={[0, 0.2, 0]}>
      <primitive object={scene} scale={0.1} rotation={[Math.PI / 2, 0, 0]} />
      <mesh position={[0.59, -0.192, 0.12]} scale={[0.58, 0.14, 0]}>
        <planeGeometry />
        <meshBasicMaterial color="green" />
      </mesh>
      <Text
        font="/fonts/hd44780.ttf"
        position={[0.82, -0.18, 0.125]}
        fontSize={0.045}
        color="black"
        anchorX="right"
        anchorY="bottom"
      >
        Unique Users:
      </Text>
      <Text
        font="/fonts/hd44780.ttf"
        position={[0.59, -0.192, 0.125]}
        fontSize={0.045}
        color="black"
        anchorX="center"
        anchorY="top"
      >
        {isLoading ? '...' : (uniqueUsers !== null ? uniqueUsers.toString() : '0')}
      </Text>
      
        <Text
          font="/fonts/hd44780.ttf"
          position={[0.2, 0.1, 0.125]}

          fontSize={0.04}
          color="black"
          anchorX="right"
          anchorY="top"
        >
          Live 3D Model
        </Text>
      </group>
  );
};

const FullscreenLoader = ({ isVisible }: { isVisible: boolean }) => (
  <div
    className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
  >
    <div className="flex flex-col items-center space-y-6">
      <img src="/skate.gif" alt="Loading..." className="w-32 h-32 md:w-40 md:h-40" />
    </div>
  </div>
);

export default function ArduinoScene() {
  const [fov, setFov] = useState(12.5);
  const [height, setHeight] = useState(200);
  const [isReady, setIsReady] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setFov(11);       // Wider view on mobile
      setHeight(100);   // Smaller vertical height for mobile layout
    }

    // Mark as ready after a short delay to ensure smooth rendering
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleModelLoaded = () => {

    setTimeout(() => {
      setModelLoaded(true);

      setTimeout(() => {
        setShowLoader(false);
      }, 100);

      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('arduino-model-loaded'));
      }

    }, 300);
  };

  return (
    <>
      {/* Fullscreen loader overlay */}
      <FullscreenLoader isVisible={showLoader} />

      {/* 3D Scene - always rendered but initially hidden */}

      <div style={{ height: `${height}px`, width: '100%' }}>
        <Canvas camera={{ position: [0, 0, 3], fov }} shadows={false}>

          <ambientLight intensity={1.5} />
          <directionalLight position={[0, 1, 0]} intensity={1} />
          <directionalLight position={[0, -1, 0]} intensity={1} />
          <directionalLight position={[1, 0, 0]} intensity={1} />
          <directionalLight position={[-1, 0, 0]} intensity={1} />
          <directionalLight position={[0, 0, 1]} intensity={1} />
          <directionalLight position={[0, 0, -1]} intensity={1} />
          <Suspense fallback={null}>
            <ArduinoModel onModelLoaded={handleModelLoaded} />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2 - 0.1}
            maxPolarAngle={Math.PI / 2 + 0.1}
            minAzimuthAngle={-0.1}
            maxAzimuthAngle={0.1}
            enableDamping
            dampingFactor={0.1}
            rotateSpeed={0.3}
          />
          <Preload all />
        </Canvas>
      </div>
    </>
  );
}
