// import { createAction } from "@ngrx/store";

// export const initGroceries = createAction('[Grocery] Load Groce')

// export const  completedGroceries = createAction('[Grocery] Load Groceries Success' )


import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Grocery } from '../../../models/grocery.model';

export const groceryAction = createActionGroup({
  source: 'Grocery API',
  events: {
    // defining an event without payload using the `emptyProps` function
    'Load Groceries': emptyProps(),

    // defining an event with payload using the `props` function
    'Load Groceries Success': props<{ payload:Grocery[] }>(),

    // defining an event with payload using the props factory
    'Load Groceries Failure': emptyProps,
  },
});
