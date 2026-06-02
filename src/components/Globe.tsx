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



  // MeshBasicMaterial ignores all 3D lighting to create the flat, deep-void core
  const globeMaterial = useMemo(() => new THREE.MeshBasicMaterial({
    color: '#020617', // Deep space blue/black
    transparent: true,
    opacity: 0.95
  }), []);

  useEffect(() => {
    // Fetch GeoJSON to generate the crisp dot-matrix map
    fetch('/data/countries.geojson')
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
    let ambientLight: THREE.AmbientLight | null = null;

    // Blast it with ambient light so the continent dots render completely flat and bright, avoiding 3D shadowing
    if (globeRef.current) {
      const scene = globeRef.current.scene();
      ambientLight = new THREE.AmbientLight(0xffffff, 2.5);
      scene.add(ambientLight);
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
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (globeRef.current && ambientLight) {
        const scene = globeRef.current.scene();
        scene.remove(ambientLight);
      }
    };
  }, [hexData]);

  // Generate surface-hugging fibre optic network
  const { arcsData, pointsData } = useMemo(() => {
    const hubs = [
      { lat: 37.7749, lng: -122.4194, name: 'San Francisco' },
      { lat: 40.7128, lng: -74.0060, name: 'New York' },
      { lat: 51.5074, lng: -0.1278, name: 'London' },
      { lat: 48.8566, lng: 2.3522, name: 'Paris' },
      { lat: 35.6762, lng: 139.6503, name: 'Tokyo' },
      { lat: 25.2048, lng: 55.2708, name: 'Dubai' },
      { lat: 1.3521, lng: 103.8198, name: 'Singapore' },
      { lat: -33.8688, lng: 151.2093, name: 'Sydney' },
      { lat: 19.0760, lng: 72.8777, name: 'Mumbai' },
      { lat: -23.5505, lng: -46.6333, name: 'São Paulo' },
      { lat: 50.1109, lng: 8.6821, name: 'Frankfurt' },
      { lat: 22.3193, lng: 114.1694, name: 'Hong Kong' },
      { lat: 37.5665, lng: 126.9780, name: 'Seoul' },
      { lat: -33.9249, lng: 18.4241, name: 'Cape Town' },
      { lat: -34.6037, lng: -58.3816, name: 'Buenos Aires' },
      { lat: 47.6062, lng: -122.3321, name: 'Seattle' },
      { lat: 43.6532, lng: -79.3832, name: 'Toronto' },
      { lat: 41.8781, lng: -87.6298, name: 'Chicago' },
      { lat: 59.3293, lng: 18.0686, name: 'Stockholm' },
      { lat: 47.3769, lng: 8.5417, name: 'Zurich' },
      { lat: 45.4642, lng: 9.1900, name: 'Milan' },
      { lat: 40.4168, lng: -3.7038, name: 'Madrid' },
      { lat: 6.5244, lng: 3.3792, name: 'Lagos' },
      { lat: -37.8136, lng: 144.9631, name: 'Melbourne' },
      { lat: 31.2304, lng: 121.4737, name: 'Shanghai' },
      { lat: 30.0444, lng: 31.2357, name: 'Cairo' },
    ];

    const arcs: any[] = [];
    hubs.forEach((start, i) => {
      // Connect each city to 2-3 random other cities for a rich mesh appearance
      const connectionCount = Math.floor(Math.random() * 2) + 2; 
      const connectedIndices = new Set<number>();
      
      while (connectedIndices.size < connectionCount) {
        const j = Math.floor(Math.random() * hubs.length);
        if (i !== j) {
          connectedIndices.add(j);
        }
      }

      connectedIndices.forEach(j => {
        const end = hubs[j];
        const altitude = Math.random() * 0.20 + 0.05; // Sleek multi-layered holographic shell
        
        // 1. Static base cable (ultra-fine, delicate violet/cyan thread)
        arcs.push({
          startLat: start.lat,
          startLng: start.lng,
          endLat: end.lat,
          endLng: end.lng,
          altitude: altitude,
          stroke: 0.04,                             // Extremely fine thread
          dashLength: 0,                            // Continuous line
          dashGap: 0,
          animateTime: 0,
          color: 'rgba(139, 92, 246, 0.08)'         // Faint violet base cable
        });

        // 2. Active data flow (longer, slower glowing streaks for a premium, continuous look)
        // Only apply animated flow to 30% of connections to keep visuals clean and low-overhead
        if (Math.random() < 0.3) {
          arcs.push({
            startLat: start.lat,
            startLng: start.lng,
            endLat: end.lat,
            endLng: end.lng,
            altitude: altitude,
            stroke: 0.06,                             // Delicate, razor-thin glowing lines
            dashLength: 0.35,                         // Single elegant sweeping light trail
            dashGap: 2.5,                             // Large gap so only one trail travels on a line at any time
            animateTime: 7000 + Math.random() * 5000, // Majestic, slower speed for orbital grace (7-12s)
            color: ['rgba(139, 92, 246, 0.02)', 'rgba(34, 211, 238, 0.7)'] // Refined violet-to-cyan trail
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
            atmosphereColor="#1e40af" // Deep premium indigo glow
            atmosphereAltitude={0.25} // Softer, wider atmosphere

            // Dot Matrix Map (Clean, Flat, Non-Pixelated)
            hexPolygonsData={hexData}
            hexPolygonResolution={3}
            hexPolygonMargin={0.5} // Distinct, clean dots
            hexPolygonAltitude={0.005} // Flush against the surface
            hexPolygonColor={() => '#3730a3'} // Indigo glowing dots

            // Solid Cyan Markers (Disabled for cleaner look)
            pointsData={[]}
            pointLat={(d: any) => d.lat}
            pointLng={(d: any) => d.lng}
            pointColor={() => '#22d3ee'}
            pointAltitude={0.015}
            pointRadius={0.4}

            // Layered Holographic Fibre Optics
            arcsData={arcsData}
            arcStartLat={(d: any) => d.startLat}
            arcStartLng={(d: any) => d.startLng}
            arcEndLat={(d: any) => d.endLat}
            arcEndLng={(d: any) => d.endLng}
            arcColor={(d: any) => d.color}
            arcAltitude={(d: any) => d.altitude}
            arcStroke={(d: any) => d.stroke}
            arcDashLength={(d: any) => d.dashLength}
            arcDashGap={(d: any) => d.dashGap}
            arcDashAnimateTime={(d: any) => d.animateTime}
          />
      </div>
    </div>
  );
};

export default HolographicGlobe;