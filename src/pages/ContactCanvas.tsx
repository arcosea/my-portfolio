import {Link} from "react-router-dom";
import { useEffect, useState, useRef } from 'react';
import * as THREE from "three";
import {Text} from 'troika-three-text';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export function ContactCanvas(){
    // Welcome page
    useEffect(() => {
        let scene: THREE.Scene;
        let camera: THREE.PerspectiveCamera;
        let renderer: THREE.WebGLRenderer;
        let torus = new THREE.Mesh();

        function init() {
            // Create scene object
            scene = new THREE.Scene();
            scene.background = new THREE.Color("rgb(50, 50, 50)")

            // Setup camera with facing upward
            camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight);
            camera.position.z = 1;

            // Setup renderer
            const canvas = document.getElementById('contactCanvas') as HTMLCanvasElement;
            renderer = new THREE.WebGLRenderer({canvas});
            renderer.setSize(window.innerWidth, window.innerHeight);
            window.addEventListener("resize", (event) => {
                renderer.setSize(window.innerWidth, window.innerHeight);
            })
            
            // Add Shape
            const geometry = new THREE.TorusGeometry( 1, 20, 16, 5);
            const material = new THREE.MeshBasicMaterial( { color: 'rgb(255, 255, 255)', wireframe: true} );
            torus = new THREE.Mesh( geometry, material );
            scene.add( torus );;

            // Animate
            animate();
        }
        // Rendering loop
        function animate() {
            torus.rotateX(0.001);
            torus.rotateY(0.001);
            torus.rotateZ(0.001);
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }

        init();
    }, []);
    
    return (
        <div className="cantact-container">
            <canvas id="contactCanvas"></canvas>
        </div>


    );
}