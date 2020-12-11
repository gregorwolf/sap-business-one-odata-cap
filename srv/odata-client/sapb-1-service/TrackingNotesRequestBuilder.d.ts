import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { TrackingNotes } from './TrackingNotes';
/**
 * Request builder class for operations supported on the [[TrackingNotes]] entity.
 */
export declare class TrackingNotesRequestBuilder extends RequestBuilder<TrackingNotes> {
    /**
     * Returns a request builder for retrieving one `TrackingNotes` entity based on its keys.
     * @param trackingNoteNumber Key property. See [[TrackingNotes.trackingNoteNumber]].
     * @returns A request builder for creating requests to retrieve one `TrackingNotes` entity based on its keys.
     */
    getByKey(trackingNoteNumber: number): GetByKeyRequestBuilderV4<TrackingNotes>;
    /**
     * Returns a request builder for querying all `TrackingNotes` entities.
     * @returns A request builder for creating requests to retrieve all `TrackingNotes` entities.
     */
    getAll(): GetAllRequestBuilderV4<TrackingNotes>;
    /**
     * Returns a request builder for creating a `TrackingNotes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TrackingNotes`.
     */
    create(entity: TrackingNotes): CreateRequestBuilderV4<TrackingNotes>;
    /**
     * Returns a request builder for updating an entity of type `TrackingNotes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TrackingNotes`.
     */
    update(entity: TrackingNotes): UpdateRequestBuilderV4<TrackingNotes>;
    /**
     * Returns a request builder for deleting an entity of type `TrackingNotes`.
     * @param trackingNoteNumber Key property. See [[TrackingNotes.trackingNoteNumber]].
     * @returns A request builder for creating requests that delete an entity of type `TrackingNotes`.
     */
    delete(trackingNoteNumber: number): DeleteRequestBuilderV4<TrackingNotes>;
    /**
     * Returns a request builder for deleting an entity of type `TrackingNotes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `TrackingNotes` by taking the entity as a parameter.
     */
    delete(entity: TrackingNotes): DeleteRequestBuilderV4<TrackingNotes>;
}
//# sourceMappingURL=TrackingNotesRequestBuilder.d.ts.map