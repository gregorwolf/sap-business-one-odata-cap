import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
    getByKey(code: number): GetByKeyRequestBuilder<ActivityTypes>;
    /**
     * Returns a request builder for querying all `ActivityTypes` entities.
     * @returns A request builder for creating requests to retrieve all `ActivityTypes` entities.
     */
    getAll(): GetAllRequestBuilder<ActivityTypes>;
    /**
     * Returns a request builder for creating a `ActivityTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ActivityTypes`.
     */
    create(entity: ActivityTypes): CreateRequestBuilder<ActivityTypes>;
    /**
     * Returns a request builder for updating an entity of type `ActivityTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ActivityTypes`.
     */
    update(entity: ActivityTypes): UpdateRequestBuilder<ActivityTypes>;
    /**
     * Returns a request builder for deleting an entity of type `ActivityTypes`.
     * @param code Key property. See [[ActivityTypes.code]].
     * @returns A request builder for creating requests that delete an entity of type `ActivityTypes`.
     */
    delete(code: number): DeleteRequestBuilder<ActivityTypes>;
    /**
     * Returns a request builder for deleting an entity of type `ActivityTypes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ActivityTypes` by taking the entity as a parameter.
     */
    delete(entity: ActivityTypes): DeleteRequestBuilder<ActivityTypes>;
}
//# sourceMappingURL=ActivityTypesRequestBuilder.d.ts.map