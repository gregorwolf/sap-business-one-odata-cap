import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { CorrectionPurchaseInvoice } from './CorrectionPurchaseInvoice';
/**
 * Request builder class for operations supported on the [[CorrectionPurchaseInvoice]] entity.
 */
export declare class CorrectionPurchaseInvoiceRequestBuilder extends RequestBuilder<CorrectionPurchaseInvoice> {
    /**
     * Returns a request builder for retrieving one `CorrectionPurchaseInvoice` entity based on its keys.
     * @param docEntry Key property. See [[CorrectionPurchaseInvoice.docEntry]].
     * @returns A request builder for creating requests to retrieve one `CorrectionPurchaseInvoice` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilderV4<CorrectionPurchaseInvoice>;
    /**
     * Returns a request builder for querying all `CorrectionPurchaseInvoice` entities.
     * @returns A request builder for creating requests to retrieve all `CorrectionPurchaseInvoice` entities.
     */
    getAll(): GetAllRequestBuilderV4<CorrectionPurchaseInvoice>;
    /**
     * Returns a request builder for creating a `CorrectionPurchaseInvoice` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CorrectionPurchaseInvoice`.
     */
    create(entity: CorrectionPurchaseInvoice): CreateRequestBuilderV4<CorrectionPurchaseInvoice>;
    /**
     * Returns a request builder for updating an entity of type `CorrectionPurchaseInvoice`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CorrectionPurchaseInvoice`.
     */
    update(entity: CorrectionPurchaseInvoice): UpdateRequestBuilderV4<CorrectionPurchaseInvoice>;
    /**
     * Returns a request builder for deleting an entity of type `CorrectionPurchaseInvoice`.
     * @param docEntry Key property. See [[CorrectionPurchaseInvoice.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `CorrectionPurchaseInvoice`.
     */
    delete(docEntry: number): DeleteRequestBuilderV4<CorrectionPurchaseInvoice>;
    /**
     * Returns a request builder for deleting an entity of type `CorrectionPurchaseInvoice`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `CorrectionPurchaseInvoice` by taking the entity as a parameter.
     */
    delete(entity: CorrectionPurchaseInvoice): DeleteRequestBuilderV4<CorrectionPurchaseInvoice>;
}
//# sourceMappingURL=CorrectionPurchaseInvoiceRequestBuilder.d.ts.map