import { Html, useProgress } from "@react-three/drei"

const CanvasLoader = () => {
  const progress = useProgress();

  return (
    <Html>
      <span className="canvas-load"></span>
      <p className="color-[#f1f1f1] mt-10 font-extrabold text-sm">
        {progress.progress.toFixed(0)}%
      </p>
    </Html>
  )
}

export default CanvasLoader