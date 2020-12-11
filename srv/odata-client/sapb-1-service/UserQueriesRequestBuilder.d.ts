import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { UserQueries } from './UserQueries';
/**
 * Request builder class for operations supported on the [[UserQueries]] entity.
 */
export declare class UserQueriesRequestBuilder extends RequestBuilder<UserQueries> {
    /**
     * Returns a request builder for retrieving one `UserQueries` entity based on its keys.
     * @param internalKey Key property. See [[UserQueries.internalKey]].
     * @param queryCategory Key property. See [[UserQueries.queryCategory]].
     * @returns A request builder for creating requests to retrieve one `UserQueries` entity based on its keys.
     */
    getByKey(internalKey: number, queryCategory: number): GetByKeyRequestBuilderV4<UserQueries>;
    /**
     * Returns a request builder for querying all `UserQueries` entities.
     * @returns A request builder for creating requests to retrieve all `UserQueries` entities.
     */
    getAll(): GetAllRequestBuilderV4<UserQueries>;
    /**
     * Returns a request builder for creating a `UserQueries` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `UserQueries`.
     */
    create(entity: UserQueries): CreateRequestBuilderV4<UserQueries>;
    /**
     * Returns a request builder for updating an entity of type `UserQueries`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `UserQueries`.
     */
    update(entity: UserQueries): UpdateRequestBuilderV4<UserQueries>;
    /**
     * Returns a request builder for deleting an entity of type `UserQueries`.
     * @param internalKey Key property. See [[UserQueries.internalKey]].
     * @param queryCategory Key property. See [[UserQueries.queryCategory]].
     * @returns A request builder for creating requests that delete an entity of type `UserQueries`.
     */
    delete(internalKey: number, queryCategory: number): DeleteRequestBuilderV4<UserQueries>;
    /**
     * Returns a request builder for deleting an entity of type `UserQueries`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `UserQueries` by taking the entity as a parameter.
     */
    delete(entity: UserQueries): DeleteRequestBuilderV4<UserQueries>;
}
//# sourceMappingURL=UserQueriesRequestBuilder.d.ts.map