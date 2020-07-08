import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { DeliveryNotes } from './DeliveryNotes';
/**
 * Request builder class for operations supported on the [[DeliveryNotes]] entity.
 */
export declare class DeliveryNotesRequestBuilder extends RequestBuilder<DeliveryNotes> {
    /**
     * Returns a request builder for retrieving one `DeliveryNotes` entity based on its keys.
     * @param docEntry Key property. See [[DeliveryNotes.docEntry]].
     * @returns A request builder for creating requests to retrieve one `DeliveryNotes` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilder<DeliveryNotes>;
    /**
     * Returns a request builder for querying all `DeliveryNotes` entities.
     * @returns A request builder for creating requests to retrieve all `DeliveryNotes` entities.
     */
    getAll(): GetAllRequestBuilder<DeliveryNotes>;
    /**
     * Returns a request builder for creating a `DeliveryNotes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DeliveryNotes`.
     */
    create(entity: DeliveryNotes): CreateRequestBuilder<DeliveryNotes>;
    /**
     * Returns a request builder for updating an entity of type `DeliveryNotes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DeliveryNotes`.
     */
    update(entity: DeliveryNotes): UpdateRequestBuilder<DeliveryNotes>;
    /**
     * Returns a request builder for deleting an entity of type `DeliveryNotes`.
     * @param docEntry Key property. See [[DeliveryNotes.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `DeliveryNotes`.
     */
    delete(docEntry: number): DeleteRequestBuilder<DeliveryNotes>;
    /**
     * Returns a request builder for deleting an entity of type `DeliveryNotes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `DeliveryNotes` by taking the entity as a parameter.
     */
    delete(entity: DeliveryNotes): DeleteRequestBuilder<DeliveryNotes>;
}
//# sourceMappingURL=DeliveryNotesRequestBuilder.d.ts.map