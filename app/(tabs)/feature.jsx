import React, { useRef } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native';
import { Canvas } from '@benjeau/react-native-draw';
import parseSVG from 'svg-path-parser'
import { ਕ } from '../../constants/data/ਕ.js'
import { ਕ_svg } from '../../constants/data/ਕ.tsx/'

console.log(ਕ)

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
        if (typeof path1 !== 'string' || typeof path2 !== 'string') {
            throw new Error('Both paths must be strings.');
        }

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

    const handleGetPath = () => {
        const handwritingPathData = canvasRef.current?.getPaths();
        console.log(typeof handwritingPathData[0].path[0].toString())

        const tempSVGUNO = ਕ[0];
        const tempSVG = 'M50.6392 48C50.6392 49.5766 50.9615 51.0407 50.9615 52.6171C50.9615 54.2144 51 56.5 50.8004 58.2081C50.6494 59.5 50.1904 62.2041 49.9768 63.9254C49.7588 65.6815 49.0028 67.518 48.4549 69.1737C47.2648 72.7699 46 76.5 44.0324 79.977C43 81.5 42.5077 83.6413 41.293 85.0089C40.2126 86.2252 38.7879 87.852 37.909 89.2292C33.0138 96.8995 22.1643 100.591 13.5585 100.591C9.1907 100.591 5.2809 101 1.9741 97.6698C-0.7961 94.8793 -3.5905 92.4727 -4.4716 88.5826C-5.155 85.5651 -5.197 83.0791 -4.4716 79.977C-4.4716 77.3259 -0.9679 74.7377 0.4343 72.6004C7.1378 67.2828 14.9047 66.4444 22.4214 67.821C24.2873 68.1628 26 69.5 27.9002 71.0494C29 71.9461 30.2039 72.8084 31.3021 73.394C33.0409 74.3213 34.2908 75.7014 35.8141 76.965C36.6202 77.6337 37.4545 79.118 38.2313 79.8327C39.5 81 39.5 81.5 40.7916 83.0791C42.1066 86.1068 43.3892 89.1025 45 92C46 94.5 47.3742 98 48 100.591C48.7124 103.542 50 106.5 50.8004 109.519C51.1901 110.697 51.5 111.5 52 113'

        const handwriting_parsedPath = handwritingPathData[0].path[0].toString();
        const currentStencil_parsedPath = tempSVGUNO;
    
        const similarity = compareSvgPaths(handwriting_parsedPath, currentStencil_parsedPath);
        console.log('Similarity:', similarity);
    }

    return (
        <>
            <Button title="Get Path" onPress={handleGetPath} />
            {/* <View style={{position: 'absolute', display: 'block'}}> */}
                <View style={{zIndex: 100, marginTop: 50}}>
                    < ਕ_svg />
                </View>
                <Canvas
                    ref={canvasRef}
                    height={100}
                    width={100}
                />
            {/* </View> */}
            {/* <Button title="Undo" onPress={handleUndo} /> */}
        </>
    )
};