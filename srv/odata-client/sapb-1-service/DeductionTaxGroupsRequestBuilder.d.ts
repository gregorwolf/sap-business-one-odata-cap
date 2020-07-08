import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { DeductionTaxGroups } from './DeductionTaxGroups';
/**
 * Request builder class for operations supported on the [[DeductionTaxGroups]] entity.
 */
export declare class DeductionTaxGroupsRequestBuilder extends RequestBuilder<DeductionTaxGroups> {
    /**
     * Returns a request builder for retrieving one `DeductionTaxGroups` entity based on its keys.
     * @param groupKey Key property. See [[DeductionTaxGroups.groupKey]].
     * @returns A request builder for creating requests to retrieve one `DeductionTaxGroups` entity based on its keys.
     */
    getByKey(groupKey: number): GetByKeyRequestBuilder<DeductionTaxGroups>;
    /**
     * Returns a request builder for querying all `DeductionTaxGroups` entities.
     * @returns A request builder for creating requests to retrieve all `DeductionTaxGroups` entities.
     */
    getAll(): GetAllRequestBuilder<DeductionTaxGroups>;
    /**
     * Returns a request builder for creating a `DeductionTaxGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DeductionTaxGroups`.
     */
    create(entity: DeductionTaxGroups): CreateRequestBuilder<DeductionTaxGroups>;
    /**
     * Returns a request builder for updating an entity of type `DeductionTaxGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DeductionTaxGroups`.
     */
    update(entity: DeductionTaxGroups): UpdateRequestBuilder<DeductionTaxGroups>;
    /**
     * Returns a request builder for deleting an entity of type `DeductionTaxGroups`.
     * @param groupKey Key property. See [[DeductionTaxGroups.groupKey]].
     * @returns A request builder for creating requests that delete an entity of type `DeductionTaxGroups`.
     */
    delete(groupKey: number): DeleteRequestBuilder<DeductionTaxGroups>;
    /**
     * Returns a request builder for deleting an entity of type `DeductionTaxGroups`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `DeductionTaxGroups` by taking the entity as a parameter.
     */
    delete(entity: DeductionTaxGroups): DeleteRequestBuilder<DeductionTaxGroups>;
}
//# sourceMappingURL=DeductionTaxGroupsRequestBuilder.d.ts.map