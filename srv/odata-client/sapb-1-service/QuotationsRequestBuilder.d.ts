import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Quotations } from './Quotations';
/**
 * Request builder class for operations supported on the [[Quotations]] entity.
 */
export declare class QuotationsRequestBuilder extends RequestBuilder<Quotations> {
    /**
     * Returns a request builder for retrieving one `Quotations` entity based on its keys.
     * @param docEntry Key property. See [[Quotations.docEntry]].
     * @returns A request builder for creating requests to retrieve one `Quotations` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilderV4<Quotations>;
    /**
     * Returns a request builder for querying all `Quotations` entities.
     * @returns A request builder for creating requests to retrieve all `Quotations` entities.
     */
    getAll(): GetAllRequestBuilderV4<Quotations>;
    /**
     * Returns a request builder for creating a `Quotations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Quotations`.
     */
    create(entity: Quotations): CreateRequestBuilderV4<Quotations>;
    /**
     * Returns a request builder for updating an entity of type `Quotations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Quotations`.
     */
    update(entity: Quotations): UpdateRequestBuilderV4<Quotations>;
    /**
     * Returns a request builder for deleting an entity of type `Quotations`.
     * @param docEntry Key property. See [[Quotations.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `Quotations`.
     */
    delete(docEntry: number): DeleteRequestBuilderV4<Quotations>;
    /**
     * Returns a request builder for deleting an entity of type `Quotations`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Quotations` by taking the entity as a parameter.
     */
    delete(entity: Quotations): DeleteRequestBuilderV4<Quotations>;
}
//# sourceMappingURL=QuotationsRequestBuilder.d.ts.map