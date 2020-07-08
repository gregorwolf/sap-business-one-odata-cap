import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { DeductionTaxSubGroups } from './DeductionTaxSubGroups';
/**
 * Request builder class for operations supported on the [[DeductionTaxSubGroups]] entity.
 */
export declare class DeductionTaxSubGroupsRequestBuilder extends RequestBuilder<DeductionTaxSubGroups> {
    /**
     * Returns a request builder for retrieving one `DeductionTaxSubGroups` entity based on its keys.
     * @param groupCode Key property. See [[DeductionTaxSubGroups.groupCode]].
     * @returns A request builder for creating requests to retrieve one `DeductionTaxSubGroups` entity based on its keys.
     */
    getByKey(groupCode: string): GetByKeyRequestBuilder<DeductionTaxSubGroups>;
    /**
     * Returns a request builder for querying all `DeductionTaxSubGroups` entities.
     * @returns A request builder for creating requests to retrieve all `DeductionTaxSubGroups` entities.
     */
    getAll(): GetAllRequestBuilder<DeductionTaxSubGroups>;
    /**
     * Returns a request builder for creating a `DeductionTaxSubGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DeductionTaxSubGroups`.
     */
    create(entity: DeductionTaxSubGroups): CreateRequestBuilder<DeductionTaxSubGroups>;
    /**
     * Returns a request builder for updating an entity of type `DeductionTaxSubGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DeductionTaxSubGroups`.
     */
    update(entity: DeductionTaxSubGroups): UpdateRequestBuilder<DeductionTaxSubGroups>;
    /**
     * Returns a request builder for deleting an entity of type `DeductionTaxSubGroups`.
     * @param groupCode Key property. See [[DeductionTaxSubGroups.groupCode]].
     * @returns A request builder for creating requests that delete an entity of type `DeductionTaxSubGroups`.
     */
    delete(groupCode: string): DeleteRequestBuilder<DeductionTaxSubGroups>;
    /**
     * Returns a request builder for deleting an entity of type `DeductionTaxSubGroups`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `DeductionTaxSubGroups` by taking the entity as a parameter.
     */
    delete(entity: DeductionTaxSubGroups): DeleteRequestBuilder<DeductionTaxSubGroups>;
}
//# sourceMappingURL=DeductionTaxSubGroupsRequestBuilder.d.ts.map