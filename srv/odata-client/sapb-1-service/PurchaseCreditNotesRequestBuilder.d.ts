import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { PurchaseCreditNotes } from './PurchaseCreditNotes';
/**
 * Request builder class for operations supported on the [[PurchaseCreditNotes]] entity.
 */
export declare class PurchaseCreditNotesRequestBuilder extends RequestBuilder<PurchaseCreditNotes> {
    /**
     * Returns a request builder for retrieving one `PurchaseCreditNotes` entity based on its keys.
     * @param docEntry Key property. See [[PurchaseCreditNotes.docEntry]].
     * @returns A request builder for creating requests to retrieve one `PurchaseCreditNotes` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilder<PurchaseCreditNotes>;
    /**
     * Returns a request builder for querying all `PurchaseCreditNotes` entities.
     * @returns A request builder for creating requests to retrieve all `PurchaseCreditNotes` entities.
     */
    getAll(): GetAllRequestBuilder<PurchaseCreditNotes>;
    /**
     * Returns a request builder for creating a `PurchaseCreditNotes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PurchaseCreditNotes`.
     */
    create(entity: PurchaseCreditNotes): CreateRequestBuilder<PurchaseCreditNotes>;
    /**
     * Returns a request builder for updating an entity of type `PurchaseCreditNotes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PurchaseCreditNotes`.
     */
    update(entity: PurchaseCreditNotes): UpdateRequestBuilder<PurchaseCreditNotes>;
    /**
     * Returns a request builder for deleting an entity of type `PurchaseCreditNotes`.
     * @param docEntry Key property. See [[PurchaseCreditNotes.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `PurchaseCreditNotes`.
     */
    delete(docEntry: number): DeleteRequestBuilder<PurchaseCreditNotes>;
    /**
     * Returns a request builder for deleting an entity of type `PurchaseCreditNotes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PurchaseCreditNotes` by taking the entity as a parameter.
     */
    delete(entity: PurchaseCreditNotes): DeleteRequestBuilder<PurchaseCreditNotes>;
}
//# sourceMappingURL=PurchaseCreditNotesRequestBuilder.d.ts.map