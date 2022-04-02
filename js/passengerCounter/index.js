var count = 0;
var incrementButton = () => {
  count = count + 1;
  console.log(count);
  var score=document.getElementById('incrementText')
  score.innerHTML=count
  // incrementText.innerHTML = count;
  return count;
};
var save = () => {
  console.log("Saved as : "+count);
};
