import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Branches } from './Branches';
/**
 * Request builder class for operations supported on the [[Branches]] entity.
 */
export declare class BranchesRequestBuilder extends RequestBuilder<Branches> {
    /**
     * Returns a request builder for retrieving one `Branches` entity based on its keys.
     * @param code Key property. See [[Branches.code]].
     * @returns A request builder for creating requests to retrieve one `Branches` entity based on its keys.
     */
    getByKey(code: number): GetByKeyRequestBuilderV4<Branches>;
    /**
     * Returns a request builder for querying all `Branches` entities.
     * @returns A request builder for creating requests to retrieve all `Branches` entities.
     */
    getAll(): GetAllRequestBuilderV4<Branches>;
    /**
     * Returns a request builder for creating a `Branches` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Branches`.
     */
    create(entity: Branches): CreateRequestBuilderV4<Branches>;
    /**
     * Returns a request builder for updating an entity of type `Branches`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Branches`.
     */
    update(entity: Branches): UpdateRequestBuilderV4<Branches>;
    /**
     * Returns a request builder for deleting an entity of type `Branches`.
     * @param code Key property. See [[Branches.code]].
     * @returns A request builder for creating requests that delete an entity of type `Branches`.
     */
    delete(code: number): DeleteRequestBuilderV4<Branches>;
    /**
     * Returns a request builder for deleting an entity of type `Branches`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Branches` by taking the entity as a parameter.
     */
    delete(entity: Branches): DeleteRequestBuilderV4<Branches>;
}
//# sourceMappingURL=BranchesRequestBuilder.d.ts.map