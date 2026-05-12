'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import { MotionValue, motion, useTransform, useSpring } from 'framer-motion';
import dynamic from 'next/dynamic';
import * as THREE from 'three';

// Dynamically import Globe to prevent SSR hydration errors
const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

interface GlobeProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export const HolographicGlobe = ({ mouseX, mouseY }: GlobeProps) => {
  const globeRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });
  const [hexData, setHexData] = useState<any[]>([]);

  // Fluid, elastic micro-interactions for the background aura
  const smoothMouseX = useSpring(mouseX, { damping: 40, stiffness: 400 });
  const smoothMouseY = useSpring(mouseY, { damping: 40, stiffness: 400 });

  const auraX = useTransform(smoothMouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], ['-20%', '20%']);
  const auraY = useTransform(smoothMouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], ['-20%', '20%']);

  // MeshBasicMaterial ignores all 3D lighting to create the flat, deep-void core
  const globeMaterial = useMemo(() => new THREE.MeshBasicMaterial({
    color: '#020617', // Deep space blue/black
    transparent: true,
    opacity: 0.95
  }), []);

  useEffect(() => {
    // Fetch GeoJSON to generate the crisp dot-matrix map
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(data => setHexData(data.features))
      .catch(err => console.error("Failed to load map data:", err));

    const onResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetWidth, // Lock to perfect square
        });
      }
    };
    window.addEventListener('resize', onResize);
    onResize();

    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Rock-solid auto-rotation loop
  useEffect(() => {
    let animationFrameId: number;

    // Blast it with ambient light so the continent dots render completely flat and bright, avoiding 3D shadowing
    if (globeRef.current) {
      const scene = globeRef.current.scene();
      scene.add(new THREE.AmbientLight(0xffffff, 2.5));
    }

    const animate = () => {
      if (globeRef.current) {
        const controls = globeRef.current.controls();
        if (controls) {
          controls.autoRotate = true;
          controls.autoRotateSpeed = 0.8; // Buttery smooth, continuous self-rotation
          controls.enableZoom = false;
          controls.enablePan = false;
          controls.update();
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [hexData]);

  // Generate surface-hugging fibre optic network
  const { arcsData, pointsData } = useMemo(() => {
    const hubs = [
      { lat: 37.77, lng: -122.41 }, // SF
      { lat: 40.71, lng: -74.00 },  // NY
      { lat: 51.50, lng: -0.12 },   // London
      { lat: 48.85, lng: 2.35 },    // Paris
      { lat: 25.20, lng: 55.27 },   // Dubai
      { lat: 1.35, lng: 103.81 },   // Singapore
      { lat: 35.68, lng: 139.69 },  // Tokyo
      { lat: -33.86, lng: 151.20 }, // Sydney
      { lat: 19.07, lng: 72.87 },   // Mumbai
      { lat: -23.55, lng: -46.63 }, // Sao Paulo
    ];

    const arcs: any[] = [];
    hubs.forEach((start, i) => {
      hubs.forEach((end, j) => {
        if (i !== j && Math.random() > 0.4) {
          arcs.push({
            startLat: start.lat,
            startLng: start.lng,
            endLat: end.lat,
            endLng: end.lng,
            color: ['rgba(34, 211, 238, 0.1)', 'rgba(34, 211, 238, 1)'] // Clean Cyan data flow
          });
        }
      });
    });

    return { arcsData: arcs, pointsData: hubs };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[550px] aspect-square mx-auto flex items-center justify-center group"
    >
      {/* Micro-Interaction: Aura shifts elastically with mouse hover behind the globe */}
      <motion.div
        className="absolute inset-[-10%] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.25)_0%,rgba(34,211,238,0.1)_40%,transparent_65%)] pointer-events-none transform-gpu transition-opacity duration-700 opacity-60 group-hover:opacity-100"
        style={{ x: auraX, y: auraY, willChange: 'transform' }}
      />
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_60%)] animate-[pulse_4s_ease-in-out_infinite] pointer-events-none transform-gpu" />

      {/* The 3D Holographic Globe */}
      <div className="relative z-10 opacity-100 mix-blend-screen drop-shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-transform duration-700 group-hover:scale-[1.02] cursor-grab active:cursor-grabbing">
          <Globe
            ref={globeRef}
            width={dimensions.width}
            height={dimensions.height}
            backgroundColor="rgba(0,0,0,0)"

            showGlobe={true}
            globeMaterial={globeMaterial}
            showAtmosphere={true}
            atmosphereColor="#2563eb" // Matches the rich blue of your reference image
            atmosphereAltitude={0.2}

            // Dot Matrix Map (Clean, Flat, Non-Pixelated)
            hexPolygonsData={hexData}
            hexPolygonResolution={3}
            hexPolygonMargin={0.5} // Distinct, clean dots
            hexPolygonAltitude={0.005} // Flush against the surface
            hexPolygonColor={() => '#1d4ed8'} // Deep royal blue dots

            // Solid Cyan Markers
            pointsData={pointsData}
            pointLat={(d: any) => d.lat}
            pointLng={(d: any) => d.lng}
            pointColor={() => '#22d3ee'}
            pointAltitude={0.015}
            pointRadius={0.4}

            // Surface-hugging Fibre Optics
            arcsData={arcsData}
            arcStartLat={(d: any) => d.startLat}
            arcStartLng={(d: any) => d.startLng}
            arcEndLat={(d: any) => d.endLat}
            arcEndLng={(d: any) => d.endLng}
            arcColor={(d: any) => d.color}
            arcAltitudeAutoScale={0.25} // Tight surface flow
            arcStroke={0.4}
            arcDashLength={0.5}
            arcDashGap={0.3}
            arcDashAnimateTime={2500} // Smooth, premium traffic flow
          />
      </div>
    </div>
  );
};

export default HolographicGlobe;