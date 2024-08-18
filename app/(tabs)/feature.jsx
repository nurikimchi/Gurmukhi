import React, { useRef } from 'react';
import { Button, Text, View } from 'react-native';
import { Canvas } from '@benjeau/react-native-draw';
import { ਕ } from '../../constants/data/ਕ.js'
import Svg_ਕ from '../../constants/data/Svg_ਕ.tsx'

console.log(ਕ)

import 'react-native-gesture-handler';

// nuri was here 2

export default function Feature() {
    const canvasRef = useRef(null);

    const handleUndo = () => {
        canvasRef.current?.undo();
    };

    const parseSvgPath = require('svg-path-parser');

    const { sqrt, pow } = Math;

    function euclideanDistance(p1, p2) {
        return sqrt(pow(p1.x - p2.x, 2) + pow(p1.y - p2.y, 2));
    }

    function getPathPoints(commands) {
        const points = [];
        let currentPoint = { x: 0, y: 0 };
        commands.forEach(cmd => {
            if (cmd.code === 'M' || cmd.code === 'L' || cmd.code === 'T') {
                currentPoint = { x: cmd.x, y: cmd.y };
                points.push(currentPoint);
            } else if (cmd.code === 'C') {
                currentPoint = { x: cmd.x, y: cmd.y };
                points.push(currentPoint);
            }

        });
        return points;
    }

    function compareSvgPaths(path1, path2) {
        const commands1 = parseSvgPath(path1);
        const commands2 = parseSvgPath(path2);

        const points1 = getPathPoints(commands1);
        const points2 = getPathPoints(commands2);

        const minLength = Math.min(points1.length, points2.length);
        const maxLength = Math.max(points1.length, points2.length);
        const step1 = Math.floor(points1.length / minLength);
        const step2 = Math.floor(points2.length / minLength);

        let totalDistance = 0;
        for (let i = 0; i < minLength; i++) {
            const p1 = points1[i * step1];
            const p2 = points2[i * step2];
            totalDistance += euclideanDistance(p1, p2);
        }

        const maxDistance = Math.sqrt(Math.pow(100, 2) + Math.pow(100, 2)); // 100x100 bounding box

        const averageDistance = totalDistance / minLength;

        const similarityScore = 1 - (averageDistance / maxDistance);

        const normalizedSimilarityScore = Math.max(0, Math.min(1, similarityScore));

        return normalizedSimilarityScore;

    }

    const [globalCounter, setGlobalCounter] = React.useState(0);

    const [status, setStatus] = React.useState('');

    const handleGetPath = () => {
        const handwritingPathData = canvasRef.current?.getPaths();
        console.log("AQUI! ", handwritingPathData)

        const handwriting_parsedPath = handwritingPathData[globalCounter]?.path[0];
        const currentStencil_parsedPath = ਕ[globalCounter];

        const similarity = compareSvgPaths(handwriting_parsedPath, currentStencil_parsedPath)
    
        console.log('Similarity:', similarity);

        if (similarity > .74) {
            // setStatus('correct')
            handwritingPathData[globalCounter].color = 'green';
            setGlobalCounter(globalCounter + 1);
        } else {
            // setStatus('incorrect')
            handwritingPathData[globalCounter].color = 'red';
            handwritingPathData.splice(1, globalCounter)
        }

        canvasRef.current.clear();
        handwritingPathData.forEach((path) => {
            canvasRef.current.addPath(path);
        });
    }

    // nuri was here

    return (
        <>
            <View style={{ position: 'relative', height: 100, width: 100 }}>
                {/* onTouchEnd={handleGetPath} */}
                <View style={{marginTop: 50, marginLeft: 50}}>
                    <View style={{ zIndex: 1, marginTop: 0, position: 'absolute', top: 0, left: 0 }}>
                        <Svg_ਕ />
                    </View>
                    <Canvas
                        ref={canvasRef}
                        height={100}
                        width={100}
                        style={{ backgroundColor: 'transparent', position: 'relative', top: 0, left: 0, zIndex: 100 }}
                    />
                    {globalCounter >= ਕ.length ? <></> : <Button title="Get Path" onPress={handleGetPath} />}
                </View>            
                {/* <Text>
                    {status}
                </Text> */}
            </View>
        </>
    )
};