import { createAction, props } from "@ngrx/store";
import { Bucket } from "../../../models/bucket.model";


export const addToBucket = createAction(
    '[BUCKET] Add',
    props<{payload:Bucket}>()
)

export const removeFromBucket = createAction(
    '[BUKET] Remove',
    props<{payload:Partial<Bucket>}>()
)