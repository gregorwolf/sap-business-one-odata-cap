import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
    getByKey(code: number): GetByKeyRequestBuilder<Branches>;
    /**
     * Returns a request builder for querying all `Branches` entities.
     * @returns A request builder for creating requests to retrieve all `Branches` entities.
     */
    getAll(): GetAllRequestBuilder<Branches>;
    /**
     * Returns a request builder for creating a `Branches` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Branches`.
     */
    create(entity: Branches): CreateRequestBuilder<Branches>;
    /**
     * Returns a request builder for updating an entity of type `Branches`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Branches`.
     */
    update(entity: Branches): UpdateRequestBuilder<Branches>;
    /**
     * Returns a request builder for deleting an entity of type `Branches`.
     * @param code Key property. See [[Branches.code]].
     * @returns A request builder for creating requests that delete an entity of type `Branches`.
     */
    delete(code: number): DeleteRequestBuilder<Branches>;
    /**
     * Returns a request builder for deleting an entity of type `Branches`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Branches` by taking the entity as a parameter.
     */
    delete(entity: Branches): DeleteRequestBuilder<Branches>;
}
//# sourceMappingURL=BranchesRequestBuilder.d.ts.map