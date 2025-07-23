import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

function Car() {
  const car = useRef();

  useFrame((state, delta) => {
    // The car will be controlled by keyboard input
  });

  return (
    <group ref={car}>
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[2, 1, 4]} />
        <meshStandardMaterial color={'red'} />
      </mesh>
      <mesh position={[-1.2, 0, 1.5]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
        <meshStandardMaterial color={'black'} />
      </mesh>
      <mesh position={[1.2, 0, 1.5]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
        <meshStandardMaterial color={'black'} />
      </mesh>
      <mesh position={[-1.2, 0, -1.5]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
        <meshStandardMaterial color={'black'} />
      </mesh>
      <mesh position={[1.2, 0, -1.5]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
        <meshStandardMaterial color={'black'} />
      </mesh>
    </group>
  );
}

function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color={'#6a1b9a'} />
    </mesh>
  );
}

function InteractiveBox({ position, name, carRef }) {
  const [showText, setShowText] = useState(false);
  const boxRef = useRef();

  useFrame(() => {
    if (carRef.current && boxRef.current) {
      const distance = carRef.current.position.distanceTo(boxRef.current.position);
      setShowText(distance < 5);
    }
  });

  return (
    <group>
      <mesh ref={boxRef} position={position}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={'blue'} />
      </mesh>
      {showText && (
        <Text position={[position[0], position[1] + 2, position[2]]} fontSize={1} color="white">
          {name}
        </Text>
      )}
    </group>
  );
}


function Controls({ target }) {
  const { camera, gl } = useThree();
  const controls = useRef();

  useFrame(() => controls.current.update());

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      const speed = 0.2;
      if (key === 'ArrowUp') target.current.position.z -= speed;
      if (key === 'ArrowDown') target.current.position.z += speed;
      if (key === 'ArrowLeft') target.current.position.x -= speed;
      if (key === 'ArrowRight') target.current.position.x += speed;
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [target]);

  return <OrbitControls ref={controls} args={[camera, gl.domElement]} target={target.current?.position} />;
}


const ThreeScene = () => {
  const carRef = useRef();
  return (
    <Canvas style={{ height: '100vh' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Car ref={carRef} />
      <Floor />
      <InteractiveBox position={[10, 1, 0]} name="About" carRef={carRef} />
      <InteractiveBox position={[-10, 1, 0]} name="Projects" carRef={carRef} />
      <InteractiveBox position={[0, 1, 10]} name="Experience" carRef={carRef} />
      <InteractiveBox position={[0, 1, -10]} name="Contact" carRef={carRef} />
      <Controls target={carRef} />
    </Canvas>
  );
};

export default ThreeScene;
