import { State, Action, StateContext, Selector } from '@ngxs/store';
import { LandingStateModel } from './landing.model';
import { RemoveLanding, SaveLanding } from './landing.actions';

/**
 * Estado de Landing para gestionar la información del Landing.
 */
@State({
  name: 'landing', // Nombre del estado
  defaults: {
    landing: {
      id: 'landing',
      intro: {
        title: {
          align: 'start',
          text: 'TS2LANDING. Transforming an object to a Landing Page',
        },
        subtitle: {
          align: 'start',
          text: 'Created by Hector Granell :)',
        },
        display: 'basic-left',
        animation: 'TitleReveal',
        linkButton: {
          link: 'https://www.npmjs.com/package/ts2landing',
          text: {
            align: 'center',
            text: 'NPM',
          },
        },
        logoSize: 'xl',
        logoUrl: 'https://avatars.githubusercontent.com/u/100232264?v=4',
        padding: 'md',
      },
      content: [],
    }, // Estado inicial del Landing
  },
})
export class LandingState {
  /**
   * Selector para obtener el Landing del estado.
   * @param state El estado actual.
   * @returns El Landing almacenado en el estado.
   */
  @Selector()
  static getLanding(state: LandingStateModel) {
    return state.landing;
  }

  // /**
  //  * Selector para obtener el username del estado.
  //  * @param state El estado actual.
  //  * @returns El username del Landing almacenado en el estado.
  //  */
  // @Selector()
  // static getLandingname(state: LandingStateModel) {
  // 	return state.user.userName;
  // }

  /**
   * Acción para guardar un Landing en el estado.
   * @param ctx Contexto del estado.
   * @param payload Datos del Landing a guardar.
   */
  @Action(SaveLanding)
  save(
    { getState, patchState }: StateContext<LandingStateModel>,
    { payload }: SaveLanding
  ) {
    patchState({
      landing: payload, // Actualiza el estado con el nuevo Landing
    });
  }

  /**
   * Acción para eliminar un Landing del estado.
   * @param ctx Contexto del estado.
   */
  @Action(RemoveLanding)
  remove(
    { getState, patchState }: StateContext<LandingStateModel>,
    {}: RemoveLanding
  ) {
    patchState({
      landing: undefined, // Elimina el Landing del estado
    });
  }
}
