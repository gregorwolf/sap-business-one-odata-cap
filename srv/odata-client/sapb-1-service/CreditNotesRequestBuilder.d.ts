import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { CreditNotes } from './CreditNotes';
/**
 * Request builder class for operations supported on the [[CreditNotes]] entity.
 */
export declare class CreditNotesRequestBuilder extends RequestBuilder<CreditNotes> {
    /**
     * Returns a request builder for retrieving one `CreditNotes` entity based on its keys.
     * @param docEntry Key property. See [[CreditNotes.docEntry]].
     * @returns A request builder for creating requests to retrieve one `CreditNotes` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilder<CreditNotes>;
    /**
     * Returns a request builder for querying all `CreditNotes` entities.
     * @returns A request builder for creating requests to retrieve all `CreditNotes` entities.
     */
    getAll(): GetAllRequestBuilder<CreditNotes>;
    /**
     * Returns a request builder for creating a `CreditNotes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CreditNotes`.
     */
    create(entity: CreditNotes): CreateRequestBuilder<CreditNotes>;
    /**
     * Returns a request builder for updating an entity of type `CreditNotes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CreditNotes`.
     */
    update(entity: CreditNotes): UpdateRequestBuilder<CreditNotes>;
    /**
     * Returns a request builder for deleting an entity of type `CreditNotes`.
     * @param docEntry Key property. See [[CreditNotes.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `CreditNotes`.
     */
    delete(docEntry: number): DeleteRequestBuilder<CreditNotes>;
    /**
     * Returns a request builder for deleting an entity of type `CreditNotes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `CreditNotes` by taking the entity as a parameter.
     */
    delete(entity: CreditNotes): DeleteRequestBuilder<CreditNotes>;
}
//# sourceMappingURL=CreditNotesRequestBuilder.d.ts.map