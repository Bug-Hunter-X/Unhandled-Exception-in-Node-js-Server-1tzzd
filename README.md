# Unhandled Exception in Node.js Server

This repository demonstrates a common issue in Node.js applications: unhandled exceptions that lead to server crashes.  The example shows a basic HTTP server without proper error handling, and a solution is provided to make it more robust.

## Problem

The original `server.js` shows an HTTP server that doesn't handle potential errors. If an error occurs during request processing, the server will crash without any graceful handling.

## Solution

`serverSolution.js` demonstrates how to use `process.on('uncaughtException')` to handle unhandled exceptions. This prevents server crashes and allows for logging or other actions to be taken in case of errors.

## Usage

1. Clone this repository.
2. Run `node server.js` (original, crashing version) and `node serverSolution.js` (corrected version) to see the difference in behavior when an error is simulated. Note how the solution gracefully handles the error and continues operating.