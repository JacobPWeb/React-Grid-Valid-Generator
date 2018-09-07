// Config
const sizeOfGrid = 9;
let widthOfGrid = 0;

function calculateHorizontalLines(lineStart, rowWidth) {
  const horizontalLines = [];
  lineStart.forEach(item => {
    const endItem = item + (rowWidth - 1);
    const winningLine = [];
    for (let i = item, length = (endItem + 1); i < length; i++) {
      winningLine.push(i);
    }
    const reverse = winningLine.slice().reverse(); // make a copy of the array and reverse it
    horizontalLines.push(winningLine, reverse);
  });
  return horizontalLines;
}

function calculateVerticalLines(rowWidth, columnHeight) {
  const firstRow = [];
  for (let i = 1, length = rowWidth + 1; i < length; i++) {
    firstRow.push(i);
  }
  const verticalLines = [];
  firstRow.forEach(item => {
    const winningLine = [];
    for (let i = item, length = (columnHeight * rowWidth) + 1; i < length; i = i + rowWidth) {
      winningLine.push(i);
    }
    verticalLines.push(winningLine);
  });
  return verticalLines;
}

function calculateLeftToRight(from, to, columnWidth) {
  const numbers = [];
  for (let i = from; i < (to + 1); i = i + (columnWidth + 1)) {
    numbers.push(i);
  }
  return numbers;
}

function calculateRightToLeft(from, to, columnWidth) {
  const numbers = [];
  for (let i = to; i > (from - 1); i = i - (columnWidth - 1)) {
    numbers.push(i);
  }
  return numbers;
}

function calculateDiagonalLines(rowWidth, columnHeight) {
  const topLeft = 1;
  const topRight = rowWidth;
  const bottomLeft = (((rowWidth * columnHeight) - rowWidth) + 1);
  const bottomRight = (rowWidth * columnHeight);

  const leftToRight = calculateLeftToRight(topLeft, bottomRight, rowWidth);
  const leftToRightReverse = leftToRight.slice().reverse();
  const rightToLeft = calculateRightToLeft(topRight, bottomLeft, rowWidth);
  const rightToLeftReverse = rightToLeft.slice().reverse();
  const lines = [
    leftToRight,
    leftToRightReverse,
    rightToLeft,
    rightToLeftReverse
  ];
  return lines;
}

const init = () => {
  for (let i = 2, length = sizeOfGrid; i < length; i++) {
    if (sizeOfGrid % i === 0) {
      widthOfGrid = i;
      break;
    }
  }
  const corners = sizeOfGrid / widthOfGrid;
  const lineStarters = [];
  for (let i = 0, length = (sizeOfGrid / widthOfGrid); i < length; i++) {
    const starter = (i * widthOfGrid) + 1;
    lineStarters.push(starter);
  }

  const possibleNumbers = [
    ...calculateHorizontalLines(lineStarters, widthOfGrid),
    ...calculateVerticalLines(widthOfGrid, widthOfGrid),
    ...calculateDiagonalLines(widthOfGrid, widthOfGrid)
  ];
  console.log(possibleNumbers);
}
init();







function test() {
  const test1 = calculateHorizontalLines([1, 4, 7], 3);
  const test2 = calculateHorizontalLines([1, 5, 9, 13], 4);
  console.log('Test1---------- ', test1);
  console.log('Test2---------- ', test2);
  const test3 = calculateVerticalLines(3, 3);
  const test4 = calculateVerticalLines(4, 4);
  console.log('Test3---------- ', test3);
  console.log('Test4---------- ', test4);
  console.log('Test5---------- ', calculateDiagonalLines(3, 3));
}
