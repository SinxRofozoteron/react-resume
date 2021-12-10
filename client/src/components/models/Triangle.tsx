import triangleDarkPng from "../../assets/triangle-dark.png";
import triangleLightPng from "../../assets/triangle-light.png";

const TrianglePng: React.FC<{ color: "light" | "dark" }> = ({ color }) => {
    return <img
        src={color === "light" ? triangleLightPng : triangleDarkPng}
        alt=""
    />
}

export default TrianglePng;