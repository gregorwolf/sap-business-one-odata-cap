import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ActivityTypes } from './ActivityTypes';
/**
 * Request builder class for operations supported on the [[ActivityTypes]] entity.
 */
export declare class ActivityTypesRequestBuilder extends RequestBuilder<ActivityTypes> {
    /**
     * Returns a request builder for retrieving one `ActivityTypes` entity based on its keys.
     * @param code Key property. See [[ActivityTypes.code]].
     * @returns A request builder for creating requests to retrieve one `ActivityTypes` entity based on its keys.
     */
    getByKey(code: number): GetByKeyRequestBuilderV4<ActivityTypes>;
    /**
     * Returns a request builder for querying all `ActivityTypes` entities.
     * @returns A request builder for creating requests to retrieve all `ActivityTypes` entities.
     */
    getAll(): GetAllRequestBuilderV4<ActivityTypes>;
    /**
     * Returns a request builder for creating a `ActivityTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ActivityTypes`.
     */
    create(entity: ActivityTypes): CreateRequestBuilderV4<ActivityTypes>;
    /**
     * Returns a request builder for updating an entity of type `ActivityTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ActivityTypes`.
     */
    update(entity: ActivityTypes): UpdateRequestBuilderV4<ActivityTypes>;
    /**
     * Returns a request builder for deleting an entity of type `ActivityTypes`.
     * @param code Key property. See [[ActivityTypes.code]].
     * @returns A request builder for creating requests that delete an entity of type `ActivityTypes`.
     */
    delete(code: number): DeleteRequestBuilderV4<ActivityTypes>;
    /**
     * Returns a request builder for deleting an entity of type `ActivityTypes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ActivityTypes` by taking the entity as a parameter.
     */
    delete(entity: ActivityTypes): DeleteRequestBuilderV4<ActivityTypes>;
}
//# sourceMappingURL=ActivityTypesRequestBuilder.d.ts.map