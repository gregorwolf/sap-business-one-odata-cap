import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { DeductionTaxHierarchies } from './DeductionTaxHierarchies';
/**
 * Request builder class for operations supported on the [[DeductionTaxHierarchies]] entity.
 */
export declare class DeductionTaxHierarchiesRequestBuilder extends RequestBuilder<DeductionTaxHierarchies> {
    /**
     * Returns a request builder for retrieving one `DeductionTaxHierarchies` entity based on its keys.
     * @param absEntry Key property. See [[DeductionTaxHierarchies.absEntry]].
     * @returns A request builder for creating requests to retrieve one `DeductionTaxHierarchies` entity based on its keys.
     */
    getByKey(absEntry: number): GetByKeyRequestBuilder<DeductionTaxHierarchies>;
    /**
     * Returns a request builder for querying all `DeductionTaxHierarchies` entities.
     * @returns A request builder for creating requests to retrieve all `DeductionTaxHierarchies` entities.
     */
    getAll(): GetAllRequestBuilder<DeductionTaxHierarchies>;
    /**
     * Returns a request builder for creating a `DeductionTaxHierarchies` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DeductionTaxHierarchies`.
     */
    create(entity: DeductionTaxHierarchies): CreateRequestBuilder<DeductionTaxHierarchies>;
    /**
     * Returns a request builder for updating an entity of type `DeductionTaxHierarchies`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DeductionTaxHierarchies`.
     */
    update(entity: DeductionTaxHierarchies): UpdateRequestBuilder<DeductionTaxHierarchies>;
    /**
     * Returns a request builder for deleting an entity of type `DeductionTaxHierarchies`.
     * @param absEntry Key property. See [[DeductionTaxHierarchies.absEntry]].
     * @returns A request builder for creating requests that delete an entity of type `DeductionTaxHierarchies`.
     */
    delete(absEntry: number): DeleteRequestBuilder<DeductionTaxHierarchies>;
    /**
     * Returns a request builder for deleting an entity of type `DeductionTaxHierarchies`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `DeductionTaxHierarchies` by taking the entity as a parameter.
     */
    delete(entity: DeductionTaxHierarchies): DeleteRequestBuilder<DeductionTaxHierarchies>;
}
//# sourceMappingURL=DeductionTaxHierarchiesRequestBuilder.d.ts.map