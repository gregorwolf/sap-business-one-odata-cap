import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { PurchaseDeliveryNotes } from './PurchaseDeliveryNotes';
/**
 * Request builder class for operations supported on the [[PurchaseDeliveryNotes]] entity.
 */
export declare class PurchaseDeliveryNotesRequestBuilder extends RequestBuilder<PurchaseDeliveryNotes> {
    /**
     * Returns a request builder for retrieving one `PurchaseDeliveryNotes` entity based on its keys.
     * @param docEntry Key property. See [[PurchaseDeliveryNotes.docEntry]].
     * @returns A request builder for creating requests to retrieve one `PurchaseDeliveryNotes` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilder<PurchaseDeliveryNotes>;
    /**
     * Returns a request builder for querying all `PurchaseDeliveryNotes` entities.
     * @returns A request builder for creating requests to retrieve all `PurchaseDeliveryNotes` entities.
     */
    getAll(): GetAllRequestBuilder<PurchaseDeliveryNotes>;
    /**
     * Returns a request builder for creating a `PurchaseDeliveryNotes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PurchaseDeliveryNotes`.
     */
    create(entity: PurchaseDeliveryNotes): CreateRequestBuilder<PurchaseDeliveryNotes>;
    /**
     * Returns a request builder for updating an entity of type `PurchaseDeliveryNotes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PurchaseDeliveryNotes`.
     */
    update(entity: PurchaseDeliveryNotes): UpdateRequestBuilder<PurchaseDeliveryNotes>;
    /**
     * Returns a request builder for deleting an entity of type `PurchaseDeliveryNotes`.
     * @param docEntry Key property. See [[PurchaseDeliveryNotes.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `PurchaseDeliveryNotes`.
     */
    delete(docEntry: number): DeleteRequestBuilder<PurchaseDeliveryNotes>;
    /**
     * Returns a request builder for deleting an entity of type `PurchaseDeliveryNotes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PurchaseDeliveryNotes` by taking the entity as a parameter.
     */
    delete(entity: PurchaseDeliveryNotes): DeleteRequestBuilder<PurchaseDeliveryNotes>;
}
//# sourceMappingURL=PurchaseDeliveryNotesRequestBuilder.d.ts.map