import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { FinancialYears } from './FinancialYears';
/**
 * Request builder class for operations supported on the [[FinancialYears]] entity.
 */
export declare class FinancialYearsRequestBuilder extends RequestBuilder<FinancialYears> {
    /**
     * Returns a request builder for retrieving one `FinancialYears` entity based on its keys.
     * @param absEntry Key property. See [[FinancialYears.absEntry]].
     * @returns A request builder for creating requests to retrieve one `FinancialYears` entity based on its keys.
     */
    getByKey(absEntry: number): GetByKeyRequestBuilder<FinancialYears>;
    /**
     * Returns a request builder for querying all `FinancialYears` entities.
     * @returns A request builder for creating requests to retrieve all `FinancialYears` entities.
     */
    getAll(): GetAllRequestBuilder<FinancialYears>;
    /**
     * Returns a request builder for creating a `FinancialYears` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FinancialYears`.
     */
    create(entity: FinancialYears): CreateRequestBuilder<FinancialYears>;
    /**
     * Returns a request builder for updating an entity of type `FinancialYears`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FinancialYears`.
     */
    update(entity: FinancialYears): UpdateRequestBuilder<FinancialYears>;
    /**
     * Returns a request builder for deleting an entity of type `FinancialYears`.
     * @param absEntry Key property. See [[FinancialYears.absEntry]].
     * @returns A request builder for creating requests that delete an entity of type `FinancialYears`.
     */
    delete(absEntry: number): DeleteRequestBuilder<FinancialYears>;
    /**
     * Returns a request builder for deleting an entity of type `FinancialYears`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `FinancialYears` by taking the entity as a parameter.
     */
    delete(entity: FinancialYears): DeleteRequestBuilder<FinancialYears>;
}
//# sourceMappingURL=FinancialYearsRequestBuilder.d.ts.map