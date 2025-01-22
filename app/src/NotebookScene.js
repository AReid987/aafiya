import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function NotebookScene() {
    const gltf = useLoader(GLTFLoader, '/vintage-leather-book.glb');

    return (
        <primitive object={gltf.scene} />
    )
}

export default NotebookScene
