import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ActivityLocations } from './ActivityLocations';
/**
 * Request builder class for operations supported on the [[ActivityLocations]] entity.
 */
export declare class ActivityLocationsRequestBuilder extends RequestBuilder<ActivityLocations> {
    /**
     * Returns a request builder for retrieving one `ActivityLocations` entity based on its keys.
     * @param code Key property. See [[ActivityLocations.code]].
     * @returns A request builder for creating requests to retrieve one `ActivityLocations` entity based on its keys.
     */
    getByKey(code: number): GetByKeyRequestBuilderV4<ActivityLocations>;
    /**
     * Returns a request builder for querying all `ActivityLocations` entities.
     * @returns A request builder for creating requests to retrieve all `ActivityLocations` entities.
     */
    getAll(): GetAllRequestBuilderV4<ActivityLocations>;
    /**
     * Returns a request builder for creating a `ActivityLocations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ActivityLocations`.
     */
    create(entity: ActivityLocations): CreateRequestBuilderV4<ActivityLocations>;
    /**
     * Returns a request builder for updating an entity of type `ActivityLocations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ActivityLocations`.
     */
    update(entity: ActivityLocations): UpdateRequestBuilderV4<ActivityLocations>;
    /**
     * Returns a request builder for deleting an entity of type `ActivityLocations`.
     * @param code Key property. See [[ActivityLocations.code]].
     * @returns A request builder for creating requests that delete an entity of type `ActivityLocations`.
     */
    delete(code: number): DeleteRequestBuilderV4<ActivityLocations>;
    /**
     * Returns a request builder for deleting an entity of type `ActivityLocations`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ActivityLocations` by taking the entity as a parameter.
     */
    delete(entity: ActivityLocations): DeleteRequestBuilderV4<ActivityLocations>;
}
//# sourceMappingURL=ActivityLocationsRequestBuilder.d.ts.map