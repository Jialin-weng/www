const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/gameboard', (req, res) => {
    const gameBoardData = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ];
    res.json(gameBoardData)
});

app.get('/move', (req, res) => {
  res.send("move");
});

app.post('/play', (req, res) => {
    const { row, col, player } = req.body;
    if (isValidMove(row, col) && gameBoardData[row][col] === 0) {
        gameBoardData[row][col] = player;
        res.json({ success: true });
    } else {
        res.json({ success: false, message: 'Invalid move' });
    }
});

function isValidMove(row, col) {
    return (
        row >= 0 &&
        row < gameBoardData.length &&
        col >= 0 &&
        col < gameBoardData[0].length &&
        gameBoardData[0][col] === 0
    );
}
app.get('/data', (req, res) => {
  const stringdata = "Jurrasic 5";
  const arraydata = ["Run Dmc", "LL cool j"];
  const dataContainer = {
    "stringData": stringdata,
    "arrayData": arraydata
  };
  const jsonData = JSON.stringify(dataContainer);
  res.send(jsonData);
});

app.listen(port, "127.0.0.1", () => {
  console.log("Server is running on port " + port);
});
