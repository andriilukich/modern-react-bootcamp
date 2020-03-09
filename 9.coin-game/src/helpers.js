function getRanItem(arr) {
  let randomItem = Math.floor(Math.random() * arr.length);
  return arr[randomItem];
}

export { getRanItem };