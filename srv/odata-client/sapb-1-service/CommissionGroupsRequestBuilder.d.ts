import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { CommissionGroups } from './CommissionGroups';
/**
 * Request builder class for operations supported on the [[CommissionGroups]] entity.
 */
export declare class CommissionGroupsRequestBuilder extends RequestBuilder<CommissionGroups> {
    /**
     * Returns a request builder for retrieving one `CommissionGroups` entity based on its keys.
     * @param commissionGroupCode Key property. See [[CommissionGroups.commissionGroupCode]].
     * @returns A request builder for creating requests to retrieve one `CommissionGroups` entity based on its keys.
     */
    getByKey(commissionGroupCode: number): GetByKeyRequestBuilder<CommissionGroups>;
    /**
     * Returns a request builder for querying all `CommissionGroups` entities.
     * @returns A request builder for creating requests to retrieve all `CommissionGroups` entities.
     */
    getAll(): GetAllRequestBuilder<CommissionGroups>;
    /**
     * Returns a request builder for creating a `CommissionGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CommissionGroups`.
     */
    create(entity: CommissionGroups): CreateRequestBuilder<CommissionGroups>;
    /**
     * Returns a request builder for updating an entity of type `CommissionGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CommissionGroups`.
     */
    update(entity: CommissionGroups): UpdateRequestBuilder<CommissionGroups>;
    /**
     * Returns a request builder for deleting an entity of type `CommissionGroups`.
     * @param commissionGroupCode Key property. See [[CommissionGroups.commissionGroupCode]].
     * @returns A request builder for creating requests that delete an entity of type `CommissionGroups`.
     */
    delete(commissionGroupCode: number): DeleteRequestBuilder<CommissionGroups>;
    /**
     * Returns a request builder for deleting an entity of type `CommissionGroups`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `CommissionGroups` by taking the entity as a parameter.
     */
    delete(entity: CommissionGroups): DeleteRequestBuilder<CommissionGroups>;
}
//# sourceMappingURL=CommissionGroupsRequestBuilder.d.ts.map