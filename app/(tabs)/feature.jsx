import React, { useRef } from 'react';
import { Button } from 'react-native';
import { Canvas } from '@benjeau/react-native-draw';
import parseSVG from 'svg-path-parser'

export default () => {
    const canvasRef = useRef(null);

    const handleUndo = () => {
        canvasRef.current?.undo();
    };

    const handleGetPath = () => {
        const handwritingPathData = canvasRef.current?.getPaths();
        console.log(handwritingPathData)

        const parsedPath1 = parseSVG(handwritingPathData[0].path[0].toString());
        const parsedPath2 = parseSVG(handwritingPathData[0].path[1].toString());

        console.log(parsedPath1);
        console.log(parsedPath2);

        const similarityScore = calculateSimilarity(parsedPath1, parsedPath2)
        console.log(similarityScore)
    };

    function calculateSimilarity(parsedPath1, parsedPath2) {
        let totalDistance = 0;
      
        for (let i = 0; i < parsedPath1.length; i++) {
          const point1 = parsedPath1[i];
          const point2 = parsedPath2[i];
      
          if (point1.x1 !== undefined && point1.y !== undefined && point2.x1 !== undefined && point2.y !== undefined) {
            const distance = Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
            totalDistance += distance;
          }
        }
      
        const maxPossibleDistance = Math.sqrt(Math.pow(100, 2) + Math.pow(100, 2)) * parsedPath1.length; // 100 x 100 bounding box
      
        const similarityScore = 1 - (totalDistance / maxPossibleDistance);
      
        return similarityScore;
    }
      
    return (
        <>
            <Button title="Get Path" onPress={handleGetPath} />
            <Canvas
                ref={canvasRef}
            />
            <Button title="Undo" onPress={handleUndo} />
        </>
    )
};