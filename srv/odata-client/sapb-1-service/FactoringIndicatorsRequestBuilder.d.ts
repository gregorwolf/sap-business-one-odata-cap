import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { FactoringIndicators } from './FactoringIndicators';
/**
 * Request builder class for operations supported on the [[FactoringIndicators]] entity.
 */
export declare class FactoringIndicatorsRequestBuilder extends RequestBuilder<FactoringIndicators> {
    /**
     * Returns a request builder for retrieving one `FactoringIndicators` entity based on its keys.
     * @param indicatorCode Key property. See [[FactoringIndicators.indicatorCode]].
     * @returns A request builder for creating requests to retrieve one `FactoringIndicators` entity based on its keys.
     */
    getByKey(indicatorCode: string): GetByKeyRequestBuilder<FactoringIndicators>;
    /**
     * Returns a request builder for querying all `FactoringIndicators` entities.
     * @returns A request builder for creating requests to retrieve all `FactoringIndicators` entities.
     */
    getAll(): GetAllRequestBuilder<FactoringIndicators>;
    /**
     * Returns a request builder for creating a `FactoringIndicators` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FactoringIndicators`.
     */
    create(entity: FactoringIndicators): CreateRequestBuilder<FactoringIndicators>;
    /**
     * Returns a request builder for updating an entity of type `FactoringIndicators`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FactoringIndicators`.
     */
    update(entity: FactoringIndicators): UpdateRequestBuilder<FactoringIndicators>;
    /**
     * Returns a request builder for deleting an entity of type `FactoringIndicators`.
     * @param indicatorCode Key property. See [[FactoringIndicators.indicatorCode]].
     * @returns A request builder for creating requests that delete an entity of type `FactoringIndicators`.
     */
    delete(indicatorCode: string): DeleteRequestBuilder<FactoringIndicators>;
    /**
     * Returns a request builder for deleting an entity of type `FactoringIndicators`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `FactoringIndicators` by taking the entity as a parameter.
     */
    delete(entity: FactoringIndicators): DeleteRequestBuilder<FactoringIndicators>;
}
//# sourceMappingURL=FactoringIndicatorsRequestBuilder.d.ts.map