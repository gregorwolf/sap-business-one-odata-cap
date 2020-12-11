import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ExpenseTypes } from './ExpenseTypes';
/**
 * Request builder class for operations supported on the [[ExpenseTypes]] entity.
 */
export declare class ExpenseTypesRequestBuilder extends RequestBuilder<ExpenseTypes> {
    /**
     * Returns a request builder for retrieving one `ExpenseTypes` entity based on its keys.
     * @param expenseType Key property. See [[ExpenseTypes.expenseType]].
     * @returns A request builder for creating requests to retrieve one `ExpenseTypes` entity based on its keys.
     */
    getByKey(expenseType: string): GetByKeyRequestBuilderV4<ExpenseTypes>;
    /**
     * Returns a request builder for querying all `ExpenseTypes` entities.
     * @returns A request builder for creating requests to retrieve all `ExpenseTypes` entities.
     */
    getAll(): GetAllRequestBuilderV4<ExpenseTypes>;
    /**
     * Returns a request builder for creating a `ExpenseTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExpenseTypes`.
     */
    create(entity: ExpenseTypes): CreateRequestBuilderV4<ExpenseTypes>;
    /**
     * Returns a request builder for updating an entity of type `ExpenseTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ExpenseTypes`.
     */
    update(entity: ExpenseTypes): UpdateRequestBuilderV4<ExpenseTypes>;
    /**
     * Returns a request builder for deleting an entity of type `ExpenseTypes`.
     * @param expenseType Key property. See [[ExpenseTypes.expenseType]].
     * @returns A request builder for creating requests that delete an entity of type `ExpenseTypes`.
     */
    delete(expenseType: string): DeleteRequestBuilderV4<ExpenseTypes>;
    /**
     * Returns a request builder for deleting an entity of type `ExpenseTypes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ExpenseTypes` by taking the entity as a parameter.
     */
    delete(entity: ExpenseTypes): DeleteRequestBuilderV4<ExpenseTypes>;
}
//# sourceMappingURL=ExpenseTypesRequestBuilder.d.ts.map