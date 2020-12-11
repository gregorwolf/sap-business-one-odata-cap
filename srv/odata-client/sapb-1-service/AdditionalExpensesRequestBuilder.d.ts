import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { AdditionalExpenses } from './AdditionalExpenses';
/**
 * Request builder class for operations supported on the [[AdditionalExpenses]] entity.
 */
export declare class AdditionalExpensesRequestBuilder extends RequestBuilder<AdditionalExpenses> {
    /**
     * Returns a request builder for retrieving one `AdditionalExpenses` entity based on its keys.
     * @param expensCode Key property. See [[AdditionalExpenses.expensCode]].
     * @returns A request builder for creating requests to retrieve one `AdditionalExpenses` entity based on its keys.
     */
    getByKey(expensCode: number): GetByKeyRequestBuilderV4<AdditionalExpenses>;
    /**
     * Returns a request builder for querying all `AdditionalExpenses` entities.
     * @returns A request builder for creating requests to retrieve all `AdditionalExpenses` entities.
     */
    getAll(): GetAllRequestBuilderV4<AdditionalExpenses>;
    /**
     * Returns a request builder for creating a `AdditionalExpenses` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AdditionalExpenses`.
     */
    create(entity: AdditionalExpenses): CreateRequestBuilderV4<AdditionalExpenses>;
    /**
     * Returns a request builder for updating an entity of type `AdditionalExpenses`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AdditionalExpenses`.
     */
    update(entity: AdditionalExpenses): UpdateRequestBuilderV4<AdditionalExpenses>;
    /**
     * Returns a request builder for deleting an entity of type `AdditionalExpenses`.
     * @param expensCode Key property. See [[AdditionalExpenses.expensCode]].
     * @returns A request builder for creating requests that delete an entity of type `AdditionalExpenses`.
     */
    delete(expensCode: number): DeleteRequestBuilderV4<AdditionalExpenses>;
    /**
     * Returns a request builder for deleting an entity of type `AdditionalExpenses`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `AdditionalExpenses` by taking the entity as a parameter.
     */
    delete(entity: AdditionalExpenses): DeleteRequestBuilderV4<AdditionalExpenses>;
}
//# sourceMappingURL=AdditionalExpensesRequestBuilder.d.ts.map