// insert graphic bianary interface (gbi)
// i basicaly stole this... so, sorry to the sm64js devs! 
// but i made easy to read so your welcome
// go to there repo i forked it btw its the exact 

export function gSPVertex(displaylist, vrtx_list, line, num_vertices, dest_index) {
    let vrtx_group = [];

    for (let i = 0; i < num_vertices; i++) {
        let item = vrtx_list[line + i];
        vrtx_group.push(item);
    }

    displaylist.push({
        words: {
            w0: G_VTX,
            w1: { 
                vertices: vrtx_group, 
                dest_index: dest_index 
            }
        }
    });
}



