import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Activities } from './Activities';
/**
 * Request builder class for operations supported on the [[Activities]] entity.
 */
export declare class ActivitiesRequestBuilder extends RequestBuilder<Activities> {
    /**
     * Returns a request builder for retrieving one `Activities` entity based on its keys.
     * @param activityCode Key property. See [[Activities.activityCode]].
     * @returns A request builder for creating requests to retrieve one `Activities` entity based on its keys.
     */
    getByKey(activityCode: number): GetByKeyRequestBuilder<Activities>;
    /**
     * Returns a request builder for querying all `Activities` entities.
     * @returns A request builder for creating requests to retrieve all `Activities` entities.
     */
    getAll(): GetAllRequestBuilder<Activities>;
    /**
     * Returns a request builder for creating a `Activities` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Activities`.
     */
    create(entity: Activities): CreateRequestBuilder<Activities>;
    /**
     * Returns a request builder for updating an entity of type `Activities`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Activities`.
     */
    update(entity: Activities): UpdateRequestBuilder<Activities>;
    /**
     * Returns a request builder for deleting an entity of type `Activities`.
     * @param activityCode Key property. See [[Activities.activityCode]].
     * @returns A request builder for creating requests that delete an entity of type `Activities`.
     */
    delete(activityCode: number): DeleteRequestBuilder<Activities>;
    /**
     * Returns a request builder for deleting an entity of type `Activities`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Activities` by taking the entity as a parameter.
     */
    delete(entity: Activities): DeleteRequestBuilder<Activities>;
}
//# sourceMappingURL=ActivitiesRequestBuilder.d.ts.map