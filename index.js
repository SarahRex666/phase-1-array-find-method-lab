function superbowlWin(array) {
  array.find(findWin);
}

function findWin(element) {
  return element === "W";
}
