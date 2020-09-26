const scene = document.getElementById('scene');
const mouseMoveHandler = event => {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  const x = event.clientX;
  const y = event.clientY;
  const halfX = vw/2;
  const halfY = vh/2;
  const maxDegree = 30;
  const diffX = halfX - x;
  const diffY = halfY - y;

  const degY = -(diffX*maxDegree/halfX).toFixed(3);
  const degX = (diffY*maxDegree/halfY).toFixed(3);

  scene.style.setProperty('--rotation-y', `${degY}deg`);
  scene.style.setProperty('--rotation-x', `${degX}deg`);
}
if (scene !== null) document.addEventListener('mousemove', mouseMoveHandler);