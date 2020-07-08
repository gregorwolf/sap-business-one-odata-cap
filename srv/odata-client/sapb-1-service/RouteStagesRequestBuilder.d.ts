import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { RouteStages } from './RouteStages';
/**
 * Request builder class for operations supported on the [[RouteStages]] entity.
 */
export declare class RouteStagesRequestBuilder extends RequestBuilder<RouteStages> {
    /**
     * Returns a request builder for retrieving one `RouteStages` entity based on its keys.
     * @param internalNumber Key property. See [[RouteStages.internalNumber]].
     * @returns A request builder for creating requests to retrieve one `RouteStages` entity based on its keys.
     */
    getByKey(internalNumber: number): GetByKeyRequestBuilder<RouteStages>;
    /**
     * Returns a request builder for querying all `RouteStages` entities.
     * @returns A request builder for creating requests to retrieve all `RouteStages` entities.
     */
    getAll(): GetAllRequestBuilder<RouteStages>;
    /**
     * Returns a request builder for creating a `RouteStages` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `RouteStages`.
     */
    create(entity: RouteStages): CreateRequestBuilder<RouteStages>;
    /**
     * Returns a request builder for updating an entity of type `RouteStages`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `RouteStages`.
     */
    update(entity: RouteStages): UpdateRequestBuilder<RouteStages>;
    /**
     * Returns a request builder for deleting an entity of type `RouteStages`.
     * @param internalNumber Key property. See [[RouteStages.internalNumber]].
     * @returns A request builder for creating requests that delete an entity of type `RouteStages`.
     */
    delete(internalNumber: number): DeleteRequestBuilder<RouteStages>;
    /**
     * Returns a request builder for deleting an entity of type `RouteStages`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `RouteStages` by taking the entity as a parameter.
     */
    delete(entity: RouteStages): DeleteRequestBuilder<RouteStages>;
}
//# sourceMappingURL=RouteStagesRequestBuilder.d.ts.map