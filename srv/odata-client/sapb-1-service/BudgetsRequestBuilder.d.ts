import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Budgets } from './Budgets';
/**
 * Request builder class for operations supported on the [[Budgets]] entity.
 */
export declare class BudgetsRequestBuilder extends RequestBuilder<Budgets> {
    /**
     * Returns a request builder for retrieving one `Budgets` entity based on its keys.
     * @param numerator Key property. See [[Budgets.numerator]].
     * @returns A request builder for creating requests to retrieve one `Budgets` entity based on its keys.
     */
    getByKey(numerator: number): GetByKeyRequestBuilderV4<Budgets>;
    /**
     * Returns a request builder for querying all `Budgets` entities.
     * @returns A request builder for creating requests to retrieve all `Budgets` entities.
     */
    getAll(): GetAllRequestBuilderV4<Budgets>;
    /**
     * Returns a request builder for creating a `Budgets` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Budgets`.
     */
    create(entity: Budgets): CreateRequestBuilderV4<Budgets>;
    /**
     * Returns a request builder for updating an entity of type `Budgets`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Budgets`.
     */
    update(entity: Budgets): UpdateRequestBuilderV4<Budgets>;
    /**
     * Returns a request builder for deleting an entity of type `Budgets`.
     * @param numerator Key property. See [[Budgets.numerator]].
     * @returns A request builder for creating requests that delete an entity of type `Budgets`.
     */
    delete(numerator: number): DeleteRequestBuilderV4<Budgets>;
    /**
     * Returns a request builder for deleting an entity of type `Budgets`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Budgets` by taking the entity as a parameter.
     */
    delete(entity: Budgets): DeleteRequestBuilderV4<Budgets>;
}
//# sourceMappingURL=BudgetsRequestBuilder.d.ts.map