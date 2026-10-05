// insert graphic bianary interface (gbi)
// i basicaly stole this... so, sorry to the sm64js devs! 
// but i made easy to read so your welcome
// go to there repo i forked it btw its the exact 

function gsp_vertices(vrtx_list, line) {
  let vrtx_group = [];

  for (let i = 0; i < 3; i++) {
    // Grab the vertex data from the list using the offset (line)
    let item = vrtx_list[line + i];
    // Push it into our collection array
    vrtx_group.push(item);
  }

  return vrtx_group;
}
