import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const MorphingAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let currentShapeIndex = 0;
    const shapeNames = ['aircraft', 'simulator', 'computer'];
    let animationStartTime = Date.now();
    let isMorphing = true;
    const morphDuration = 2000;
    const holdDuration = 2500;

    // Initialize Three.js
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    // Camera positioned to view the models clearly
    camera.position.z = 330; 
    camera.position.y = 0;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // --- Shape Generators ---

    // 1. Commercial Airliner (Airbus A320 style)
    function generateAircraft() {
      const points: {x: number, y: number, z: number}[] = [];
      const scale = 0.85; 

      // --- Fuselage ---
      const noseZ = 85;
      const tailZ = -85;
      const radius = 11;

      for (let z = tailZ; z <= noseZ; z += 2.5) {
          let r = radius;
          
          // Nose shaping (ogive)
          if (z > 55) {
             const ratio = (z - 55) / 30; 
             r = radius * Math.sqrt(Math.max(0, 1 - ratio * ratio));
          }
          // Tail shaping (conical taper)
          else if (z < -35) {
             const ratio = (-35 - z) / 50; 
             r = radius * Math.max(0.2, (1 - ratio * 0.9)); 
          }

          if (r > 0.5) {
            const steps = Math.max(12, Math.floor(2 * Math.PI * r / 1.5));
            for (let i = 0; i < steps; i++) {
                const a = (i / steps) * Math.PI * 2;
                points.push({
                    x: Math.cos(a) * r * scale,
                    y: Math.sin(a) * r * scale,
                    z: z * scale
                });
            }
          }
      }

      // --- Main Wings ---
      // Swept back wings (approx 25 deg), low wing config
      const wingSpan = 95;
      const wingRootZ = 20; 
      const wingRootWidth = 35; // Root chord
      const wingTipWidth = 9;   // Tip chord
      const sweepOffset = 40;   // Sweep back distance

      for (let x = 0; x <= wingSpan; x += 2) {
          if (x < 9) continue; // Inside fuselage

          const t = (x - 9) / (wingSpan - 9); 
          const chord = wingRootWidth * (1 - t) + wingTipWidth * t;
          
          // Leading edge Z position (Sweep back)
          const zLeading = wingRootZ - (t * sweepOffset);
          const zTrailing = zLeading - chord;

          // Dihedral (Y up) and Thickness
          const yOffset = -5 + (x * 0.08); 
          const thickness = (chord * 0.14) * Math.sin(Math.PI * 0.5); 

          // Fill chord
          for (let z = zTrailing; z <= zLeading; z += 1.5) {
              const chordPos = (z - zTrailing) / chord; // 0 to 1
              // Airfoil profile
              const airfoilH = thickness * 1.8 * Math.sqrt(chordPos) * (1 - chordPos); 

              // Upper & Lower surfaces
              points.push({ x: x * scale, y: (yOffset + airfoilH) * scale, z: z * scale });
              points.push({ x: x * scale, y: (yOffset - airfoilH * 0.4) * scale, z: z * scale });
              
              // Mirrored wing
              points.push({ x: -x * scale, y: (yOffset + airfoilH) * scale, z: z * scale });
              points.push({ x: -x * scale, y: (yOffset - airfoilH * 0.4) * scale, z: z * scale });
          }
          
          // Sharklets (Winglets)
          if (x > wingSpan - 3) {
             for(let h = 0; h < 10; h+=1.5) {
                 const wz = zLeading - chord * 0.6;
                 points.push({ x: x * scale, y: (yOffset + h) * scale, z: wz * scale });
                 points.push({ x: -x * scale, y: (yOffset + h) * scale, z: wz * scale });
             }
          }
      }

      // --- Vertical Stabilizer (Tail) ---
      // Classic A320 tail shape
      const tailRootZ = -45;
      const tailHeight = 45;
      
      for (let y = 0; y <= tailHeight; y += 2) {
          const t = y / tailHeight;
          const rootChord = 28;
          const tipChord = 12;
          const currentChord = rootChord * (1 - t) + tipChord * t;

          const zLeading = tailRootZ - (y * 0.9); // Sweep
          const zTrailing = zLeading - currentChord;
          const thickness = currentChord * 0.12;

          for (let z = zTrailing; z <= zLeading; z += 2) {
             const chordPos = (z - zTrailing) / currentChord;
             const w = thickness * Math.sqrt(chordPos) * (1 - chordPos) * 3;
             
             points.push({ x: w * scale, y: (radius*0.8 + y) * scale, z: z * scale });
             if(w > 0.5) points.push({ x: -w * scale, y: (radius*0.8 + y) * scale, z: z * scale });
          }
      }

      // --- Horizontal Stabilizer ---
      const hStabZ = -70;
      const hStabSpan = 32;
      const hStabSweep = 15;

      for (let x = 0; x <= hStabSpan; x += 1.5) {
          if (x < 3) continue;
          
          const t = x / hStabSpan;
          const chord = 18 * (1 - t) + 6 * t;
          
          const zLeading = hStabZ - (t * hStabSweep);
          const zTrailing = zLeading - chord;
          const yOffset = 2 + (x * 0.15); // Dihedral

          for (let z = zTrailing; z <= zLeading; z += 1.5) {
               points.push({ x: x * scale, y: yOffset * scale, z: z * scale });
               points.push({ x: -x * scale, y: yOffset * scale, z: z * scale });
          }
      }

      // --- Engines ---
      // CFM56 / LEAP style nacelles under wing
      const engineX = 28;
      const engineZ = 18;
      const engineY = -14;
      const engineRadius = 7;
      const engineLength = 18;

      [-1, 1].forEach(dir => {
          const cx = engineX * dir;
          // Nacelle
          for (let z = -engineLength/2; z <= engineLength/2; z += 1.5) {
             let r = engineRadius;
             // Slight inlet curve and exhaust taper
             if (z > 5) r = engineRadius * 0.95;
             if (z < -5) r = engineRadius * 0.85;
             
             const steps = 14;
             for (let i = 0; i < steps; i++) {
                 const a = (i/steps) * Math.PI * 2;
                 points.push({
                     x: (cx + Math.cos(a)*r) * scale,
                     y: (engineY + Math.sin(a)*r) * scale,
                     z: (engineZ + z) * scale
                 });
             }
          }
          // Fan face
          for (let r = 0; r < engineRadius-1; r += 1.5) {
              for (let a = 0; a < Math.PI * 2; a += 0.8) {
                   points.push({
                       x: (cx + Math.cos(a)*r) * scale,
                       y: (engineY + Math.sin(a)*r) * scale,
                       z: (engineZ + engineLength/2) * scale
                   });
              }
          }
          // Pylon
          for (let y = engineY + engineRadius; y <= -6; y += 1.5) {
              for (let z = engineZ - 4; z <= engineZ + 6; z += 3) {
                   points.push({ x: cx * scale, y: y * scale, z: z * scale });
              }
          }
      });

      return points;
    }

    // 2. Full Flight Simulator (Hexapod Motion System + Cabin)
    function generateSimulator() {
      const points: {x: number, y: number, z: number}[] = [];
      const scale = 1.0;

      // Base Plate (Triangle/Hex layout on floor)
      const baseR = 50;
      for(let a=0; a<Math.PI*2; a+=0.15) {
           points.push({x: Math.cos(a)*baseR*scale, y: -60*scale, z: Math.sin(a)*baseR*scale});
           // Inner fill for base
           points.push({x: Math.cos(a)*(baseR-5)*scale, y: -60*scale, z: Math.sin(a)*(baseR-5)*scale});
      }
      
      // Motion Platform (Top Plate under cabin)
      const topR = 35;
      for(let a=0; a<Math.PI*2; a+=0.15) {
           points.push({x: Math.cos(a)*topR*scale, y: -20*scale, z: Math.sin(a)*topR*scale});
      }

      // Stewart Platform Legs (6 Actuators)
      for(let i=0; i<6; i++) {
           const angleBase = i * (Math.PI/3) + (i%2 === 0 ? -0.1 : 0.1); 
           const angleTop = i * (Math.PI/3) + (i%2 === 0 ? 0.4 : -0.4); 
           
           const x1 = Math.cos(angleBase) * baseR;
           const z1 = Math.sin(angleBase) * baseR;
           const y1 = -60;

           const x2 = Math.cos(angleTop) * topR;
           const z2 = Math.sin(angleTop) * topR;
           const y2 = -20;
           
           const steps = 15;
           for(let j=0; j<=steps; j++) {
               const t = j/steps;
               const lx = x1 + (x2-x1)*t;
               const ly = y1 + (y2-y1)*t;
               const lz = z1 + (z2-z1)*t;
               
               points.push({x: lx*scale, y: ly*scale, z: lz*scale});
               points.push({x: (lx+1)*scale, y: ly*scale, z: (lz+1)*scale});
               points.push({x: (lx-1)*scale, y: ly*scale, z: (lz-1)*scale});
           }
      }

      // Cabin Box
      for(let x=-30; x<=30; x+=3) {
          for(let y=-20; y<=25; y+=3) {
              for(let z=-40; z<=35; z+=3) {
                  if(Math.abs(x)>27 || Math.abs(y-2)>20 || Math.abs(z+5)>30) {
                      points.push({x: x*scale, y: y*scale, z: z*scale});
                  }
              }
          }
      }
      
      // Visual System (Curved Front Projection)
      for(let y=-15; y<=25; y+=2.5) {
           for(let a=-0.7; a<=0.7; a+=0.08) {
               const r = 55;
               const zOffset = -15;
               const x = Math.sin(a)*r;
               const z = zOffset + Math.cos(a)*r; 
               
               if(z > 35) { 
                 points.push({x: x*scale, y: y*scale, z: z*scale});
               }
           }
      }

      return points;
    }

    // 3. Developer Workstation
    function generateComputer() {
      const points: {x: number, y: number, z: number}[] = [];
      const scale = 1.0;

      // Monitor
      const mw = 70;
      const mh = 40;
      const my = 10;
      
      for(let x = -mw/2; x <= mw/2; x+=2) {
          for(let y = -mh/2; y <= mh/2; y+=2) {
              points.push({x: x*scale, y: (my+y)*scale, z: 0});
          }
      }
      
      // Monitor Stand
      for(let y = -25; y < my-mh/2; y+=1.5) {
          points.push({x: 0, y: y*scale, z: -5*scale});
          points.push({x: -2*scale, y: y*scale, z: -5*scale});
          points.push({x: 2*scale, y: y*scale, z: -5*scale});
      }
      // Stand Base
      for(let x=-15; x<=15; x+=2) {
          for(let z=-10; z<=10; z+=2) {
              points.push({x: x*scale, y: -25*scale, z: z*scale});
          }
      }

      // Mechanical Keyboard
      for(let x = -30; x <= 30; x+=2) {
          for(let z = 20; z <= 40; z+=2) {
               const y = -25 + (z-20)*0.2;
               points.push({x: x*scale, y: y*scale, z: z*scale});
          }
      }

      // Laptop
      const lx = 60; 
      const ly = -25;
      const lz = 10;
      for(let x=0; x<=25; x+=2) {
          for(let z=0; z<=20; z+=2) {
              points.push({x: (lx+x)*scale, y: ly*scale, z: (lz+z)*scale});
          }
      }
      for(let x=0; x<=25; x+=2) {
          for(let h=0; h<=18; h+=2) {
               const y = ly + Math.sin(1.9)*h;
               const z = lz + Math.cos(1.9)*h;
               points.push({x: (lx+x)*scale, y: y*scale, z: z*scale});
          }
      }

      // "Code" particles
      for(let i=0; i<30; i++) {
        const x = (Math.random()-0.5) * 120;
        const y = (Math.random()) * 60;
        const z = (Math.random()-0.5) * 50;
        points.push({x: x*scale, y: y*scale, z: z*scale});
      }

      return points;
    }

    const shapes = {
      aircraft: generateAircraft(),
      simulator: generateSimulator(),
      computer: generateComputer()
    };

    const maxParticles = Math.max(
      shapes.aircraft.length,
      shapes.simulator.length,
      shapes.computer.length
    );

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(maxParticles * 3);
    const targets = new Float32Array(maxParticles * 3);
    const starts = new Float32Array(maxParticles * 3);

    for (let i = 0; i < maxParticles * 3; i++) {
      positions[i] = 0;
      targets[i] = 0;
      starts[i] = 0;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('target', new THREE.BufferAttribute(targets, 3));
    geometry.setAttribute('start', new THREE.BufferAttribute(starts, 3));

    // Material using the accent color #D4D4D8
    const material = new THREE.PointsMaterial({
      color: 0xD4D4D8, 
      size: 2.5,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.9,
    });

    const particles = new THREE.Points(geometry, material);
    particles.userData.shapes = shapes;
    scene.add(particles);
    particlesRef.current = particles;

    function setTargets() {
      const shape = particles.userData.shapes[shapeNames[currentShapeIndex]];
      const positions = particles.geometry.attributes.position.array;
      const targets = particles.geometry.attributes.target.array;
      const starts = particles.geometry.attributes.start.array;

      for (let i = 0; i < positions.length / 3; i++) {
        starts[i * 3] = positions[i * 3];
        starts[i * 3 + 1] = positions[i * 3 + 1];
        starts[i * 3 + 2] = positions[i * 3 + 2];

        if (i < shape.length) {
          targets[i * 3] = shape[i].x;
          targets[i * 3 + 1] = shape[i].y;
          targets[i * 3 + 2] = shape[i].z;
        } else {
          // Send unused particles to center
          targets[i * 3] = 0;
          targets[i * 3 + 1] = 0;
          targets[i * 3 + 2] = 0;
        }
      }

      particles.geometry.attributes.start.needsUpdate = true;
      particles.geometry.attributes.target.needsUpdate = true;
    }

    function easeInOutQuint(t: number) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;
    }

    function animate() {
      const currentTime = Date.now();
      const elapsed = currentTime - animationStartTime;

      if (isMorphing) {
        const progress = Math.min(elapsed / morphDuration, 1);
        const easedProgress = easeInOutQuint(progress);

        const positions = particles.geometry.attributes.position.array;
        const targets = particles.geometry.attributes.target.array;
        const starts = particles.geometry.attributes.start.array;

        for (let i = 0; i < positions.length / 3; i++) {
          positions[i * 3] = starts[i * 3] + (targets[i * 3] - starts[i * 3]) * easedProgress;
          positions[i * 3 + 1] = starts[i * 3 + 1] + (targets[i * 3 + 1] - starts[i * 3 + 1]) * easedProgress;
          positions[i * 3 + 2] = starts[i * 3 + 2] + (targets[i * 3 + 2] - starts[i * 3 + 2]) * easedProgress;
        }

        particles.geometry.attributes.position.needsUpdate = true;

        if (progress >= 1) {
          isMorphing = false;
          animationStartTime = currentTime;
        }
      } else {
        if (elapsed >= holdDuration) {
          currentShapeIndex = (currentShapeIndex + 1) % shapeNames.length;
          setTargets();
          isMorphing = true;
          animationStartTime = currentTime;
        }
      }

      // Gentle rotation
      particles.rotation.y += 0.002;
      particles.rotation.x = Math.sin(currentTime * 0.0005) * 0.05;

      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    setTargets();
    animate();

    const handleResize = () => {
      if (!containerRef.current || !camera || !renderer) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      rendererRef.current?.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full"
      style={{ minHeight: '400px' }}
    />
  );
};

export default MorphingAnimation;
