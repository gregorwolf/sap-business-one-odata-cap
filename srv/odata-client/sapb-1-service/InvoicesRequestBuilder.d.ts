import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Invoices } from './Invoices';
/**
 * Request builder class for operations supported on the [[Invoices]] entity.
 */
export declare class InvoicesRequestBuilder extends RequestBuilder<Invoices> {
    /**
     * Returns a request builder for retrieving one `Invoices` entity based on its keys.
     * @param docEntry Key property. See [[Invoices.docEntry]].
     * @returns A request builder for creating requests to retrieve one `Invoices` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilderV4<Invoices>;
    /**
     * Returns a request builder for querying all `Invoices` entities.
     * @returns A request builder for creating requests to retrieve all `Invoices` entities.
     */
    getAll(): GetAllRequestBuilderV4<Invoices>;
    /**
     * Returns a request builder for creating a `Invoices` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Invoices`.
     */
    create(entity: Invoices): CreateRequestBuilderV4<Invoices>;
    /**
     * Returns a request builder for updating an entity of type `Invoices`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Invoices`.
     */
    update(entity: Invoices): UpdateRequestBuilderV4<Invoices>;
    /**
     * Returns a request builder for deleting an entity of type `Invoices`.
     * @param docEntry Key property. See [[Invoices.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `Invoices`.
     */
    delete(docEntry: number): DeleteRequestBuilderV4<Invoices>;
    /**
     * Returns a request builder for deleting an entity of type `Invoices`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Invoices` by taking the entity as a parameter.
     */
    delete(entity: Invoices): DeleteRequestBuilderV4<Invoices>;
}
//# sourceMappingURL=InvoicesRequestBuilder.d.ts.map