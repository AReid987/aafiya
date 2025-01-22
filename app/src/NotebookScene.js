import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

function NotebookScene() {
    const gltf = useLoader(GLTFLoader, '/vintage-leather-book.glb');

    return (
        <>
            <primitive object={gltf.scene} />
            <mesh>
                <boxGeometry />
                <meshBasicMaterial color="red" />
            </mesh>
        </>
    );
}

export default NotebookScene
