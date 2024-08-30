import React, { useRef } from 'react';
import { Button, Text, View } from 'react-native';
import { Canvas } from '@benjeau/react-native-draw';
import { ਕ } from '../../constants/data/ਕ.js'
import Svg_ਕ from '../../constants/data/Svg_ਕ.tsx'
import Design_ੳ_1 from '../../constants/data/Design_ੳ_1.tsx'
import {coord_ੳ_1} from '../../constants/data/coord_ੳ_1.js' 
import Design_ਅ_2 from '../../constants/data/Design_ਅ_2'
import {coord_ਅ_2} from '../../constants/data/coord_ਅ_2'
import Design_ਸ_4 from '../../constants/data/Design_ਸ_4'
import {coord_ਸ_4} from '../../constants/data/coord_ਸ_4'
import Design_ੲ_3 from '../../constants/data/Design_ੲ_3'
import {coord_ੲ_3} from '../../constants/data/coord_ੲ_3'
import Design_ਹ_5 from '../../constants/data/Design_ਹ_5'
import {coord_ਹ_5} from '../../constants/data/coord_ਹ_5'
import Design_ਖ_7 from '../../constants/data/Design_ਖ_7'
import {coord_ਖ_7} from '../../constants/data/coord_ਖ_7'
import Design_ਕ_6 from '../../constants/data/Design_ਕ_6'
import {coord__ਕ_6} from '../../constants/data/coord_ਕ_6'
import Design_ਗ_8 from '../../constants/data/Design_ਗ_8'
import {coord_ਗ_8} from '../../constants/data/coord_ਗ_8'
import Design_ਘ_9 from '../../constants/data/Design_ਘ_9'
import {coord_ਘ_9} from '../../constants/data/coord_ਘ_9'
import Design_ਙ_10 from '../../constants/data/Design_ਙ_10'
import {coord_ਙ_10} from '../../constants/data/coord_ਙ_10'
import Design_ਚ_11 from '../../constants/data/Design_ਚ_11'
import {coord_ਚ_11} from '../../constants/data/coord_ਚ_11'
import Design_ਛ_12 from '../../constants/data/Design_ਛ_12'
import {coord_ਛ_12} from '../../constants/data/coord_ਛ_12'
import Design_ਜ_13 from '../../constants/data/Design_ਜ_13'
import {coord_ਜ_13} from '../../constants/data/coord_ਜ_13'
import Design_ਝ_14 from '../../constants/data/Design_ਝ_14'
import {coord_ਝ_14} from '../../constants/data/coord_ਝ_14'
import Design_ਞ_15 from '../../constants/data/Design_ਞ_15'
import {coord_ਞ_15} from '../../constants/data/coord_ਞ_15'
import Design_ਟ_16 from '../../constants/data/Design_ਟ_16'
import {coord_ਟ_16} from '../../constants/data/coord_ਟ_16'
import Design_ਠ_17 from '../../constants/data/Design_ਠ_17'
import {coord_ਠ_17} from '../../constants/data/coord_ਠ_17'
import Design_ਡ_18 from '../../constants/data/Design_ਡ_18'
import {coord_ਡ_18} from '../../constants/data/coord_ਡ_18'
import Design_ਢ_19 from '../../constants/data/Design_ਢ_19'
import {coord_ਢ_19} from '../../constants/data/coord_ਢ_19'
import Design_ਣ_20 from '../../constants/data/Design_ਣ_20'
import {coord_ਣ_20} from '../../constants/data/coord_ਣ_20'
import Design_ਤ_21 from '../../constants/data/Design_ਤ_21'
import {coord_ਤ_21} from '../../constants/data/coord_ਤ_21'
import Design_ਥ_22 from '../../constants/data/Design_ਥ_22'
import {coord_ਥ_22} from '../../constants/data/coord_ਥ_22'
import {coord_ਦ_23} from '../../constants/data/coord_ਦ_23'
import Design_ਦ_23 from '../../constants/data/Design_ਦ_23'
import {coord_ਧ_24} from '../../constants/data/coord_ਧ_24'
import Design_ਧ_24 from '../../constants/data/Design_ਧ_24'
import {coord_ਨ_25} from '../../constants/data/coord_ਨ_25'
import Design_ਨ_25 from '../../constants/data/Design_ਨ_25'
import {coord_ਪ_26} from '../../constants/data/coord_ਪ_26'
import Design_ਪ_26 from '../../constants/data/Design_ਪ_26'
import {coord_ਫ_27} from '../../constants/data/coord_ਫ_27'
import Design_ਫ_27 from '../../constants/data/Design_ਫ_27'
import {coord_ਬ_28} from '../../constants/data/coord_ਬ_28'
import Design_ਬ_28 from '../../constants/data/Design_ਬ_28'
import {coord_ਭ_29} from '../../constants/data/coord_ਭ_29'
import Design_ਭ_29 from '../../constants/data/Design_ਭ_29'
import {coord_ਮ_30} from '../../constants/data/coord_ਮ_30'
import Design_ਮ_30 from '../../constants/data/Design_ਮ_30'
import {coord_ਯ_31} from '../../constants/data/coord_ਯ_31'
import Design_ਯ_31 from '../../constants/data/Design_ਯ_31'
import {coord_ਰ_32} from '../../constants/data/coord_ਰ_32'
import Design_ਰ_32 from '../../constants/data/Design_ਰ_32'
import {coord_ਲ_33} from '../../constants/data/coord_ਲ_33'
import Design_ਲ_33 from '../../constants/data/Design_ਲ_33'
import {coord_ਵ_34} from '../../constants/data/coord_ਵ_34'
import Design_ਵ_34 from '../../constants/data/Design_ਵ_34'
import {coord_ੜ_35} from '../../constants/data/coord_ੜ_35'
import Design_ੜ_35 from '../../constants/data/Design_ੜ_35'

/* completedLevels: [
{'ੳ': true}
{'ਅ': false}
{'ੲ': false}
{'ਸ': false}
{'ਹ': false}
{'ਕ': false}
{'ਖ': false}
{'ਗ': false}
{'ਘ': false}
{'ਙ': false}
{'ਚ': false}
{'ਛ': false}
{'ਜ': false}
{'ਝ': false}
{'ਞ': false}
{'ਟ': false}
{'ਠ': false}
{'ਡ': false}
{'ਢ': false}
{'ਣ': false}
{'ਤ': false}
{'ਥ': false}
{'ਦ': false}
{'ਧ': false}
{'ਨ': false}
{'ਪ': false}
{'ਫ': false}
{'ਬ': false}
{'ਭ': false}
{'ਮ': false}
{'ਯ': false}
{'ਰ': false}
{'ਲ': false}
{'ਵ': false}
{'ੜ': false}

]
*/ 


console.log(ਕ)

import 'react-native-gesture-handler';

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
        const currentStencil_parsedPath = coord_ਖ_7[globalCounter];

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

    return (
        <>
            <View style={{ position: 'relative', height: 100, width: 100 }}>
                {/* onTouchEnd={handleGetPath} */}
                <View style={{marginTop: 50, marginLeft: 50}}>
                    <View style={{ zIndex: 1, marginTop: 0, position: 'absolute', top: 0, left: 0 }}>
                        <Design_ੜ_35  />
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