import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Countries } from './Countries';
/**
 * Request builder class for operations supported on the [[Countries]] entity.
 */
export declare class CountriesRequestBuilder extends RequestBuilder<Countries> {
    /**
     * Returns a request builder for retrieving one `Countries` entity based on its keys.
     * @param code Key property. See [[Countries.code]].
     * @returns A request builder for creating requests to retrieve one `Countries` entity based on its keys.
     */
    getByKey(code: string): GetByKeyRequestBuilderV4<Countries>;
    /**
     * Returns a request builder for querying all `Countries` entities.
     * @returns A request builder for creating requests to retrieve all `Countries` entities.
     */
    getAll(): GetAllRequestBuilderV4<Countries>;
    /**
     * Returns a request builder for creating a `Countries` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Countries`.
     */
    create(entity: Countries): CreateRequestBuilderV4<Countries>;
    /**
     * Returns a request builder for updating an entity of type `Countries`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Countries`.
     */
    update(entity: Countries): UpdateRequestBuilderV4<Countries>;
    /**
     * Returns a request builder for deleting an entity of type `Countries`.
     * @param code Key property. See [[Countries.code]].
     * @returns A request builder for creating requests that delete an entity of type `Countries`.
     */
    delete(code: string): DeleteRequestBuilderV4<Countries>;
    /**
     * Returns a request builder for deleting an entity of type `Countries`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Countries` by taking the entity as a parameter.
     */
    delete(entity: Countries): DeleteRequestBuilderV4<Countries>;
}
//# sourceMappingURL=CountriesRequestBuilder.d.ts.map