import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Industries } from './Industries';
/**
 * Request builder class for operations supported on the [[Industries]] entity.
 */
export declare class IndustriesRequestBuilder extends RequestBuilder<Industries> {
    /**
     * Returns a request builder for retrieving one `Industries` entity based on its keys.
     * @param industryCode Key property. See [[Industries.industryCode]].
     * @returns A request builder for creating requests to retrieve one `Industries` entity based on its keys.
     */
    getByKey(industryCode: number): GetByKeyRequestBuilderV4<Industries>;
    /**
     * Returns a request builder for querying all `Industries` entities.
     * @returns A request builder for creating requests to retrieve all `Industries` entities.
     */
    getAll(): GetAllRequestBuilderV4<Industries>;
    /**
     * Returns a request builder for creating a `Industries` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Industries`.
     */
    create(entity: Industries): CreateRequestBuilderV4<Industries>;
    /**
     * Returns a request builder for updating an entity of type `Industries`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Industries`.
     */
    update(entity: Industries): UpdateRequestBuilderV4<Industries>;
    /**
     * Returns a request builder for deleting an entity of type `Industries`.
     * @param industryCode Key property. See [[Industries.industryCode]].
     * @returns A request builder for creating requests that delete an entity of type `Industries`.
     */
    delete(industryCode: number): DeleteRequestBuilderV4<Industries>;
    /**
     * Returns a request builder for deleting an entity of type `Industries`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Industries` by taking the entity as a parameter.
     */
    delete(entity: Industries): DeleteRequestBuilderV4<Industries>;
}
//# sourceMappingURL=IndustriesRequestBuilder.d.ts.map