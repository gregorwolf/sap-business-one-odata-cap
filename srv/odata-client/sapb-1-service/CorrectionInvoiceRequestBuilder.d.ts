import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { CorrectionInvoice } from './CorrectionInvoice';
/**
 * Request builder class for operations supported on the [[CorrectionInvoice]] entity.
 */
export declare class CorrectionInvoiceRequestBuilder extends RequestBuilder<CorrectionInvoice> {
    /**
     * Returns a request builder for retrieving one `CorrectionInvoice` entity based on its keys.
     * @param docEntry Key property. See [[CorrectionInvoice.docEntry]].
     * @returns A request builder for creating requests to retrieve one `CorrectionInvoice` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilder<CorrectionInvoice>;
    /**
     * Returns a request builder for querying all `CorrectionInvoice` entities.
     * @returns A request builder for creating requests to retrieve all `CorrectionInvoice` entities.
     */
    getAll(): GetAllRequestBuilder<CorrectionInvoice>;
    /**
     * Returns a request builder for creating a `CorrectionInvoice` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CorrectionInvoice`.
     */
    create(entity: CorrectionInvoice): CreateRequestBuilder<CorrectionInvoice>;
    /**
     * Returns a request builder for updating an entity of type `CorrectionInvoice`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CorrectionInvoice`.
     */
    update(entity: CorrectionInvoice): UpdateRequestBuilder<CorrectionInvoice>;
    /**
     * Returns a request builder for deleting an entity of type `CorrectionInvoice`.
     * @param docEntry Key property. See [[CorrectionInvoice.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `CorrectionInvoice`.
     */
    delete(docEntry: number): DeleteRequestBuilder<CorrectionInvoice>;
    /**
     * Returns a request builder for deleting an entity of type `CorrectionInvoice`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `CorrectionInvoice` by taking the entity as a parameter.
     */
    delete(entity: CorrectionInvoice): DeleteRequestBuilder<CorrectionInvoice>;
}
//# sourceMappingURL=CorrectionInvoiceRequestBuilder.d.ts.map