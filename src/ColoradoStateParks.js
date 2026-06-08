import React from "react";
import howManyParks from "./parks/howManyParks";
// import { trees, wildlife } from "./parks/RockyMountain";
// import * as RMFunctions from "./parks/RockyMountain";
import {
  trees as parkTrees,
  wildlife as parkWildlife,
} from "./parks/RockyMountain";
import MesaVerde from "./parks/MesaVerde";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  console.log(parkTrees)
  parkWildlife()

  return (
    <div>
      <MesaVerde />
    </div>
  )
}

export default ColoradoStateParks;