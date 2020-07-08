import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { SalesTaxAuthoritiesTypes } from './SalesTaxAuthoritiesTypes';
/**
 * Request builder class for operations supported on the [[SalesTaxAuthoritiesTypes]] entity.
 */
export declare class SalesTaxAuthoritiesTypesRequestBuilder extends RequestBuilder<SalesTaxAuthoritiesTypes> {
    /**
     * Returns a request builder for retrieving one `SalesTaxAuthoritiesTypes` entity based on its keys.
     * @param numerator Key property. See [[SalesTaxAuthoritiesTypes.numerator]].
     * @returns A request builder for creating requests to retrieve one `SalesTaxAuthoritiesTypes` entity based on its keys.
     */
    getByKey(numerator: number): GetByKeyRequestBuilder<SalesTaxAuthoritiesTypes>;
    /**
     * Returns a request builder for querying all `SalesTaxAuthoritiesTypes` entities.
     * @returns A request builder for creating requests to retrieve all `SalesTaxAuthoritiesTypes` entities.
     */
    getAll(): GetAllRequestBuilder<SalesTaxAuthoritiesTypes>;
    /**
     * Returns a request builder for creating a `SalesTaxAuthoritiesTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesTaxAuthoritiesTypes`.
     */
    create(entity: SalesTaxAuthoritiesTypes): CreateRequestBuilder<SalesTaxAuthoritiesTypes>;
    /**
     * Returns a request builder for updating an entity of type `SalesTaxAuthoritiesTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesTaxAuthoritiesTypes`.
     */
    update(entity: SalesTaxAuthoritiesTypes): UpdateRequestBuilder<SalesTaxAuthoritiesTypes>;
    /**
     * Returns a request builder for deleting an entity of type `SalesTaxAuthoritiesTypes`.
     * @param numerator Key property. See [[SalesTaxAuthoritiesTypes.numerator]].
     * @returns A request builder for creating requests that delete an entity of type `SalesTaxAuthoritiesTypes`.
     */
    delete(numerator: number): DeleteRequestBuilder<SalesTaxAuthoritiesTypes>;
    /**
     * Returns a request builder for deleting an entity of type `SalesTaxAuthoritiesTypes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `SalesTaxAuthoritiesTypes` by taking the entity as a parameter.
     */
    delete(entity: SalesTaxAuthoritiesTypes): DeleteRequestBuilder<SalesTaxAuthoritiesTypes>;
}
//# sourceMappingURL=SalesTaxAuthoritiesTypesRequestBuilder.d.ts.map