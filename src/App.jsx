import { useState } from "react";

export default function App() {
  const [level, setLevel] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedButtonImage, setSelectedButtonImage] = useState(1); 
  const images = ["รูปภาพ1.jpg", "Screenshot 2024-09-18 024748.png "];
  const buttonImagesOptions = [["โม.jpg"],["รูปภาพ2.jpg"],["รูปภาพ3.jpg"],["images.jpg"],["ดาวน์โหลด.webp"],["ดาวน์โหลด (1).webp"],["ดาวน์โหลด (2).webp"],["images (1).jpg"],["8vjkzt.jpg"],["ดาวน์โหลด.jpg"]]; 

  const increaseLevel = () => {
    const increment = selectedButtonImage * 10; 
    setLevel((prevLevel) => {
      const newLevel = prevLevel + increment;
      if (newLevel >= 101) {
        setImageIndex(1);
      }
      return newLevel;
    });
  };

  const resetLevel = () => {
    setLevel(0);
    setImageIndex(0);
  };

  const imageSize = `${Math.max(level * 7, 45)}px`;

  // Styles
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: 'url("pexels-photo-27806130.jpeg")',
    height: "100vh",
    width: "100vw",
    backgroundColor: "#f0f4f8",
    margin: 0
  };

  const cardStyle = {
    border: "2px solid #3498db",
    borderRadius: "15px",
    padding: "20px",
    width: "670px",
    height: "360px",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white"
  };

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    objectFit: "contain",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    transition: "all 0.5s ease-in-out"
  };

  const buttonImageStyle = {
    width: "150px",
    height: "150px",
    cursor: "pointer",
    margin: "10px",
    borderRadius: "50%",
    transition: "transform 0.2s ease-in-out"
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px"
  };

  const buttonText = {
    fontSize: "16px",
    marginTop: "10px",
    cursor: "pointer",
    color: "#3498db",
    fontWeight: "bold",
    textTransform: "uppercase"
  };

  const handleImageSelection = (e) => {
    setSelectedButtonImage(Number(e.target.value));
  };

  return (
    <div style={containerStyle}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "#2c3e50", fontSize: "36px" }}>Level 99</h1>

        <div style={cardStyle}>
          <img src={images[imageIndex]} alt="animal" style={imageStyle} />
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px" }}>
          <p style={{ fontSize: "23px", color: "black", cursor: "pointer", marginRight: "20px" }}>NOW LEVEL = {level}</p>
          <button onClick={resetLevel} style={{fontSize: "13px", cursor: "pointer", backgroundColor: "#3498db", color: "white"}}>
            Reset</button>
        </div>

        <div style={{ marginTop: "20px" }}>
          <label htmlFor="imageSelector" style={{ color: "black",marginRight: "10px", fontSize: "18px" }}>เลือกอาหาร</label>
          <select id="imageSelector" value={selectedButtonImage} onChange={handleImageSelection}>
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
               เมนูที่ {i + 1}
              </option>
            ))}
          </select>
        </div>

        <div style={buttonContainerStyle}>
          <div style={{ textAlign: "center" }}>
            <img
              src={buttonImagesOptions[selectedButtonImage - 1][0]}
              alt="button"
              style={buttonImageStyle}
              onClick={increaseLevel}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <p onClick={increaseLevel} style={buttonText}>
              อาหารนี้ + {selectedButtonImage * 10}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 