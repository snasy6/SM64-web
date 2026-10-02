// insert graphic bianary interface (gbi)
// i basicaly stole this... so, sorry to the sm64js devs but
// i made easy to read so your welcome
export const gdSPDefLights1 = (ar, ag, ab, r1, g1, b1, x1, y1, z1) => {
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
  
