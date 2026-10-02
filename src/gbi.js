// insert graphic bianary interface (gbi)
// i basicaly stole this... so, sorry to the sm64js devs! 
// but i made easy to read so your welcome
// go to there repo i forked it btw its the exact 
function define_light = (ar, ag, ab, r1, g1, b1, x1, y1, z1) => {
  return {
    ambient : {colour : [ar, ag, ab] },
    light : [
      {
        colour : [r1, g1, b1],
        direction : [x1, y1, z1]
      }
    ]
  }
}

export const gSP1Triangle = (verticeslist, vrtx0, vrtx1, vrtx2, flag) => {
    verticeslist.push({
        words: {
            word0: G_TRI1,
            word1: { vrtx0, vrtx1, vrtx2, flag }
        }
    })
}

export const gSPVertex = (verticeslist, vertices, num_vertices, dest_index) => {
    vertices = vertices.slice(0, num_vertices)
    verticeslist.push({
        words: {
            w0: G_VTX,
            w1: { vertices, dest_index }
        }
    })
}
