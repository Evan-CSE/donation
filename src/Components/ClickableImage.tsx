// import React, { useState } from "react";

// interface Cell {
//   rowIndex: number;
//   cellIndex: number;
// }

// type GridClickHandler = (cellIndex: number) => void;

// const ClickableImageGrid: React.FC<{ src: string; alt: string; gridSize?: number; onClick?: GridClickHandler }> = ({
//   src,
//   alt,
//   gridSize = 10,
//   onClick,
// }) => {
//   const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

//   const handleClick = (cellIndex: number) => {
//     // Ensure cellIndex is within grid bounds before updating selectedCell
//     if (cellIndex >= 0 && cellIndex < gridSize * gridSize) {
//       setSelectedCell({ rowIndex: Math.floor(cellIndex / gridSize), cellIndex });
//     }
//     if (onClick) {
//       onClick(cellIndex);
//     }
//   };

//   const renderCell: React.FC<Cell> = (cell) => {
//     const isSelected = cell.rowIndex * gridSize + cell.cellIndex === (selectedCell?.rowIndex || 1 * gridSize + (selectedCell?.cellIndex || -1));
//     const cellStyle: React.CSSProperties = {
//       backgroundColor: isSelected ? "blue" : "transparent",
//       width: `${100 / gridSize}%`,
//       height: `${100 / gridSize}%`,
//       border: "1px solid black", // Optional border
//     };

//     // Use optional chaining (?.) to safely access properties when selectedCell might be null
//     return cellStyle ? (
//         // Return the JSX element wrapped in a React.Fragment
//         <React.Fragment key={`${cell.rowIndex}-${cell.cellIndex}`} />
//       ) : null;
//   };

//   const rows: React.ReactElement[][] = [];
//   for (let rowIndex = 0; rowIndex < gridSize; rowIndex++) {
//     const row: React.ReactElement[] = [];
//     for (let cellIndex = 0; cellIndex < gridSize; cellIndex++) {
//       row.push(renderCell({ rowIndex, cellIndex }));
//     }
//     rows.push(row);
//   }

//   return (
//     <div>
//       <img src={src} alt={alt} style={{ width: "100%" }} />
//       <div style={{ display: "grid", gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}>
//         {rows.map((row, rowIndex) => (
//           <div key={rowIndex} style={{ display: "flex" }}>
//             {row}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ClickableImageGrid;
