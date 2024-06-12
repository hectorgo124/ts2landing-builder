import { Landing } from "ts2landing";

/**
 * Acción para guardar la Landing en el estado.
 */
export class SaveLanding {
	static readonly type = '[LANDING] Save'; // Tipo de la acción
	constructor(public payload: Landing) {} // Constructor que toma el landing a guardar como argumento
}

/**
 * Acción para eliminar la Landing del estado.
 */
export class RemoveLanding {
	static readonly type = '[LANDING] Remove'; // Tipo de la acción
	constructor() {} // Constructor sin argumentos
}

// /**
//  * Acción para obtener el nombre de landing del estado.
//  */
// export class GetLandingname {
// 	static readonly type = '[LANDING] Get Landingname'; // Tipo de la acción
// 	constructor() {} // Constructor sin argumentos
// }
