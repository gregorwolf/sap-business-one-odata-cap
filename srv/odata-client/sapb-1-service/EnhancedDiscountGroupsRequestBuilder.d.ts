import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { EnhancedDiscountGroups } from './EnhancedDiscountGroups';
/**
 * Request builder class for operations supported on the [[EnhancedDiscountGroups]] entity.
 */
export declare class EnhancedDiscountGroupsRequestBuilder extends RequestBuilder<EnhancedDiscountGroups> {
    /**
     * Returns a request builder for retrieving one `EnhancedDiscountGroups` entity based on its keys.
     * @param absEntry Key property. See [[EnhancedDiscountGroups.absEntry]].
     * @returns A request builder for creating requests to retrieve one `EnhancedDiscountGroups` entity based on its keys.
     */
    getByKey(absEntry: number): GetByKeyRequestBuilder<EnhancedDiscountGroups>;
    /**
     * Returns a request builder for querying all `EnhancedDiscountGroups` entities.
     * @returns A request builder for creating requests to retrieve all `EnhancedDiscountGroups` entities.
     */
    getAll(): GetAllRequestBuilder<EnhancedDiscountGroups>;
    /**
     * Returns a request builder for creating a `EnhancedDiscountGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EnhancedDiscountGroups`.
     */
    create(entity: EnhancedDiscountGroups): CreateRequestBuilder<EnhancedDiscountGroups>;
    /**
     * Returns a request builder for updating an entity of type `EnhancedDiscountGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EnhancedDiscountGroups`.
     */
    update(entity: EnhancedDiscountGroups): UpdateRequestBuilder<EnhancedDiscountGroups>;
    /**
     * Returns a request builder for deleting an entity of type `EnhancedDiscountGroups`.
     * @param absEntry Key property. See [[EnhancedDiscountGroups.absEntry]].
     * @returns A request builder for creating requests that delete an entity of type `EnhancedDiscountGroups`.
     */
    delete(absEntry: number): DeleteRequestBuilder<EnhancedDiscountGroups>;
    /**
     * Returns a request builder for deleting an entity of type `EnhancedDiscountGroups`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `EnhancedDiscountGroups` by taking the entity as a parameter.
     */
    delete(entity: EnhancedDiscountGroups): DeleteRequestBuilder<EnhancedDiscountGroups>;
}
//# sourceMappingURL=EnhancedDiscountGroupsRequestBuilder.d.ts.map