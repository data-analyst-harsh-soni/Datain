import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeScene({ currentProject = null }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for reduced motion or low power
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = isMobile ? 22 : 18;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    container.appendChild(renderer.domElement);

    // Root container for mouse parallax
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Central Data Core (Translucent Polyhedron + Wireframe)
    const coreGroup = new THREE.Group();
    rootGroup.add(coreGroup);

    const icosaGeometry = new THREE.IcosahedronGeometry(3.6, 2);
    const icosaMaterial = new THREE.MeshBasicMaterial({
      color: 0x7657e8,
      wireframe: true,
      transparent: true,
      opacity: 0.38
    });
    const icosaMesh = new THREE.Mesh(icosaGeometry, icosaMaterial);
    coreGroup.add(icosaMesh);

    // Inner Glowing Core
    const innerGeo = new THREE.SphereGeometry(1.8, 16, 16);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xa76bce,
      wireframe: true,
      transparent: true,
      opacity: 0.48
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Inner Solid Core
    const solidGeo = new THREE.SphereGeometry(0.8, 16, 16);
    const solidMat = new THREE.MeshBasicMaterial({
      color: 0xc7b6f7,
      transparent: true,
      opacity: 0.75
    });
    const solidMesh = new THREE.Mesh(solidGeo, solidMat);
    coreGroup.add(solidMesh);

    // 2. Orbiting Data Nodes
    const nodeLabels = ['SQL', 'PYTHON', 'DBT', 'SNOWFLAKE', 'POWER BI', 'AWS', 'ML'];
    const orbitRadius = 6.2;
    const nodes = [];

    nodeLabels.forEach((label, idx) => {
      const angle = (idx / nodeLabels.length) * Math.PI * 2;
      const nodeGeo = new THREE.SphereGeometry(0.28, 8, 8);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: idx % 2 === 0 ? 0x7657e8 : 0x7bc7a6,
        transparent: true,
        opacity: 0.95
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      
      const nodeData = {
        mesh: nodeMesh,
        angle: angle,
        speed: 0.003 + (idx % 3) * 0.001,
        yOffset: (idx % 2 === 0 ? 1 : -1) * (1.2 + (idx % 3) * 0.4)
      };
      
      coreGroup.add(nodeMesh);
      nodes.push(nodeData);
    });

    // 3. Orbital Rings
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x7657e8,
      wireframe: true,
      transparent: true,
      opacity: 0.32
    });
    const ringGeo1 = new THREE.TorusGeometry(6.2, 0.025, 8, 64);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xa76bce,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const ringGeo2 = new THREE.TorusGeometry(7.5, 0.025, 8, 64);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    coreGroup.add(ring2);

    // 4. Background Analytical Particle Flow
    const particleCount = isMobile ? 140 : 360;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorViolet = new THREE.Color(0x7657e8);
    const colorPlum = new THREE.Color(0xa76bce);
    const colorMint = new THREE.Color(0x7bc7a6);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const radius = 4.5 + Math.random() * 12;
      const y = (Math.random() - 0.5) * 16;

      positions[i * 3] = Math.cos(theta) * radius;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(theta) * radius;

      const mixedColor = i % 3 === 0 ? colorMint : i % 2 === 0 ? colorViolet : colorPlum;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.12 : 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    rootGroup.add(particleSystem);

    // Mouse Tracking for Parallax
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      targetX = ((clientX / innerWidth) - 0.5) * 0.8;
      targetY = ((clientY / innerHeight) - 0.5) * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!prefersReducedMotion) {
        // Smooth lerping mouse parallax
        currentX += (targetX - currentX) * 0.05;
        currentY += (targetY - currentY) * 0.05;
        rootGroup.rotation.y = currentX;
        rootGroup.rotation.x = currentY;

        // Core Rotations
        coreGroup.rotation.y += 0.003;
        coreGroup.rotation.x += 0.001;
        innerMesh.rotation.y -= 0.005;
        solidMesh.scale.setScalar(0.85 + Math.sin(Date.now() * 0.002) * 0.15);

        // Orbiting Nodes
        nodes.forEach((node) => {
          node.angle += node.speed;
          node.mesh.position.x = Math.cos(node.angle) * orbitRadius;
          node.mesh.position.z = Math.sin(node.angle) * orbitRadius;
          node.mesh.position.y = node.yOffset + Math.sin(node.angle * 2) * 0.4;
        });

        // Rings Rotation
        ring1.rotation.z += 0.002;
        ring2.rotation.z -= 0.002;

        // Particle System Slow Drift
        particleSystem.rotation.y += 0.0008;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      // Dispose Geometries and Materials
      icosaGeometry.dispose();
      icosaMaterial.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      solidGeo.dispose();
      solidMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-90"
      aria-hidden="true"
    />
  );
}
