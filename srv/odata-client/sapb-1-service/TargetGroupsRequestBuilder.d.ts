import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
    getByKey(targetGroupCode: string): GetByKeyRequestBuilderV4<TargetGroups>;
    /**
     * Returns a request builder for querying all `TargetGroups` entities.
     * @returns A request builder for creating requests to retrieve all `TargetGroups` entities.
     */
    getAll(): GetAllRequestBuilderV4<TargetGroups>;
    /**
     * Returns a request builder for creating a `TargetGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TargetGroups`.
     */
    create(entity: TargetGroups): CreateRequestBuilderV4<TargetGroups>;
    /**
     * Returns a request builder for updating an entity of type `TargetGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TargetGroups`.
     */
    update(entity: TargetGroups): UpdateRequestBuilderV4<TargetGroups>;
    /**
     * Returns a request builder for deleting an entity of type `TargetGroups`.
     * @param targetGroupCode Key property. See [[TargetGroups.targetGroupCode]].
     * @returns A request builder for creating requests that delete an entity of type `TargetGroups`.
     */
    delete(targetGroupCode: string): DeleteRequestBuilderV4<TargetGroups>;
    /**
     * Returns a request builder for deleting an entity of type `TargetGroups`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `TargetGroups` by taking the entity as a parameter.
     */
    delete(entity: TargetGroups): DeleteRequestBuilderV4<TargetGroups>;
}
//# sourceMappingURL=TargetGroupsRequestBuilder.d.ts.map