import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { DistributionRules } from './DistributionRules';
/**
 * Request builder class for operations supported on the [[DistributionRules]] entity.
 */
export declare class DistributionRulesRequestBuilder extends RequestBuilder<DistributionRules> {
    /**
     * Returns a request builder for retrieving one `DistributionRules` entity based on its keys.
     * @param factorCode Key property. See [[DistributionRules.factorCode]].
     * @returns A request builder for creating requests to retrieve one `DistributionRules` entity based on its keys.
     */
    getByKey(factorCode: string): GetByKeyRequestBuilder<DistributionRules>;
    /**
     * Returns a request builder for querying all `DistributionRules` entities.
     * @returns A request builder for creating requests to retrieve all `DistributionRules` entities.
     */
    getAll(): GetAllRequestBuilder<DistributionRules>;
    /**
     * Returns a request builder for creating a `DistributionRules` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DistributionRules`.
     */
    create(entity: DistributionRules): CreateRequestBuilder<DistributionRules>;
    /**
     * Returns a request builder for updating an entity of type `DistributionRules`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DistributionRules`.
     */
    update(entity: DistributionRules): UpdateRequestBuilder<DistributionRules>;
    /**
     * Returns a request builder for deleting an entity of type `DistributionRules`.
     * @param factorCode Key property. See [[DistributionRules.factorCode]].
     * @returns A request builder for creating requests that delete an entity of type `DistributionRules`.
     */
    delete(factorCode: string): DeleteRequestBuilder<DistributionRules>;
    /**
     * Returns a request builder for deleting an entity of type `DistributionRules`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `DistributionRules` by taking the entity as a parameter.
     */
    delete(entity: DistributionRules): DeleteRequestBuilder<DistributionRules>;
}
//# sourceMappingURL=DistributionRulesRequestBuilder.d.ts.map