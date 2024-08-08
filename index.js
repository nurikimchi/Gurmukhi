import { shapeSimilarity } from 'curve-matcher';

//  [[{x: 10, y: 10}, {x: 11, y: 10}, {x: 11, y: 10}, {x: 12, y: 10}, {x: 14, y: 11}]] * from top left corner to bottom right corner


const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
let isDrawing = false;
let coordinates = []; // To store x, y coordinates of the handwriting


// Initialize canvas settings
ctx.lineWidth = 1;
ctx.lineCap = "round";
ctx.strokeStyle = "#000000";

// Handle mouse events
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

// Handle touch events
canvas.addEventListener("touchstart", startDrawing);
canvas.addEventListener("touchmove", draw);
canvas.addEventListener("touchend", stopDrawing);

function startDrawing(event) {
	isDrawing = true;
	coordinates.push([]); // Start a new line in coordinates array
	draw(event);
}

function draw(event) {
	if (!isDrawing) return;

	// Get the current mouse or touch position
	const x = event.clientX || event.touches[0].clientX;
	const y = event.clientY || event.touches[0].clientY;

	// Convert to canvas coordinates
	const rect = canvas.getBoundingClientRect();
	const canvasX = x - rect.left;
	const canvasY = y - rect.top;

	// Record the coordinates
	coordinates[coordinates.length - 1].push({ x: canvasX, y: canvasY });

	// Draw the line
	ctx.lineTo(canvasX, canvasY);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(canvasX, canvasY);
}

function stopDrawing() {
    
	isDrawing = false;
	ctx.beginPath(); // Reset the drawing state
	console.log(coordinates); // Log the coordinates for testing

    const similiarity = shapeSimilarity(coordinates, [{x: 10, y: 10}, {x: 11, y: 10}, {x: 11, y: 10}, {x: 12, y: 10}, {x: 14, y: 11}])
    console.log("This is the similarity: " + similiarity)
}