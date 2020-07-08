import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { TargetGroups } from './TargetGroups';
/**
 * Request builder class for operations supported on the [[TargetGroups]] entity.
 */
export declare class TargetGroupsRequestBuilder extends RequestBuilder<TargetGroups> {
    /**
     * Returns a request builder for retrieving one `TargetGroups` entity based on its keys.
     * @param targetGroupCode Key property. See [[TargetGroups.targetGroupCode]].
     * @returns A request builder for creating requests to retrieve one `TargetGroups` entity based on its keys.
     */
    getByKey(targetGroupCode: string): GetByKeyRequestBuilder<TargetGroups>;
    /**
     * Returns a request builder for querying all `TargetGroups` entities.
     * @returns A request builder for creating requests to retrieve all `TargetGroups` entities.
     */
    getAll(): GetAllRequestBuilder<TargetGroups>;
    /**
     * Returns a request builder for creating a `TargetGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TargetGroups`.
     */
    create(entity: TargetGroups): CreateRequestBuilder<TargetGroups>;
    /**
     * Returns a request builder for updating an entity of type `TargetGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TargetGroups`.
     */
    update(entity: TargetGroups): UpdateRequestBuilder<TargetGroups>;
    /**
     * Returns a request builder for deleting an entity of type `TargetGroups`.
     * @param targetGroupCode Key property. See [[TargetGroups.targetGroupCode]].
     * @returns A request builder for creating requests that delete an entity of type `TargetGroups`.
     */
    delete(targetGroupCode: string): DeleteRequestBuilder<TargetGroups>;
    /**
     * Returns a request builder for deleting an entity of type `TargetGroups`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `TargetGroups` by taking the entity as a parameter.
     */
    delete(entity: TargetGroups): DeleteRequestBuilder<TargetGroups>;
}
//# sourceMappingURL=TargetGroupsRequestBuilder.d.ts.map