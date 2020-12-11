import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { PackagesTypes } from './PackagesTypes';
/**
 * Request builder class for operations supported on the [[PackagesTypes]] entity.
 */
export declare class PackagesTypesRequestBuilder extends RequestBuilder<PackagesTypes> {
    /**
     * Returns a request builder for retrieving one `PackagesTypes` entity based on its keys.
     * @param code Key property. See [[PackagesTypes.code]].
     * @returns A request builder for creating requests to retrieve one `PackagesTypes` entity based on its keys.
     */
    getByKey(code: number): GetByKeyRequestBuilderV4<PackagesTypes>;
    /**
     * Returns a request builder for querying all `PackagesTypes` entities.
     * @returns A request builder for creating requests to retrieve all `PackagesTypes` entities.
     */
    getAll(): GetAllRequestBuilderV4<PackagesTypes>;
    /**
     * Returns a request builder for creating a `PackagesTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PackagesTypes`.
     */
    create(entity: PackagesTypes): CreateRequestBuilderV4<PackagesTypes>;
    /**
     * Returns a request builder for updating an entity of type `PackagesTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PackagesTypes`.
     */
    update(entity: PackagesTypes): UpdateRequestBuilderV4<PackagesTypes>;
    /**
     * Returns a request builder for deleting an entity of type `PackagesTypes`.
     * @param code Key property. See [[PackagesTypes.code]].
     * @returns A request builder for creating requests that delete an entity of type `PackagesTypes`.
     */
    delete(code: number): DeleteRequestBuilderV4<PackagesTypes>;
    /**
     * Returns a request builder for deleting an entity of type `PackagesTypes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PackagesTypes` by taking the entity as a parameter.
     */
    delete(entity: PackagesTypes): DeleteRequestBuilderV4<PackagesTypes>;
}
//# sourceMappingURL=PackagesTypesRequestBuilder.d.ts.map