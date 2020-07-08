import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { PurchaseInvoices } from './PurchaseInvoices';
/**
 * Request builder class for operations supported on the [[PurchaseInvoices]] entity.
 */
export declare class PurchaseInvoicesRequestBuilder extends RequestBuilder<PurchaseInvoices> {
    /**
     * Returns a request builder for retrieving one `PurchaseInvoices` entity based on its keys.
     * @param docEntry Key property. See [[PurchaseInvoices.docEntry]].
     * @returns A request builder for creating requests to retrieve one `PurchaseInvoices` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilder<PurchaseInvoices>;
    /**
     * Returns a request builder for querying all `PurchaseInvoices` entities.
     * @returns A request builder for creating requests to retrieve all `PurchaseInvoices` entities.
     */
    getAll(): GetAllRequestBuilder<PurchaseInvoices>;
    /**
     * Returns a request builder for creating a `PurchaseInvoices` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PurchaseInvoices`.
     */
    create(entity: PurchaseInvoices): CreateRequestBuilder<PurchaseInvoices>;
    /**
     * Returns a request builder for updating an entity of type `PurchaseInvoices`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PurchaseInvoices`.
     */
    update(entity: PurchaseInvoices): UpdateRequestBuilder<PurchaseInvoices>;
    /**
     * Returns a request builder for deleting an entity of type `PurchaseInvoices`.
     * @param docEntry Key property. See [[PurchaseInvoices.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `PurchaseInvoices`.
     */
    delete(docEntry: number): DeleteRequestBuilder<PurchaseInvoices>;
    /**
     * Returns a request builder for deleting an entity of type `PurchaseInvoices`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PurchaseInvoices` by taking the entity as a parameter.
     */
    delete(entity: PurchaseInvoices): DeleteRequestBuilder<PurchaseInvoices>;
}
//# sourceMappingURL=PurchaseInvoicesRequestBuilder.d.ts.map