import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { BankStatements } from './BankStatements';
/**
 * Request builder class for operations supported on the [[BankStatements]] entity.
 */
export declare class BankStatementsRequestBuilder extends RequestBuilder<BankStatements> {
    /**
     * Returns a request builder for retrieving one `BankStatements` entity based on its keys.
     * @param internalNumber Key property. See [[BankStatements.internalNumber]].
     * @returns A request builder for creating requests to retrieve one `BankStatements` entity based on its keys.
     */
    getByKey(internalNumber: number): GetByKeyRequestBuilderV4<BankStatements>;
    /**
     * Returns a request builder for querying all `BankStatements` entities.
     * @returns A request builder for creating requests to retrieve all `BankStatements` entities.
     */
    getAll(): GetAllRequestBuilderV4<BankStatements>;
    /**
     * Returns a request builder for creating a `BankStatements` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BankStatements`.
     */
    create(entity: BankStatements): CreateRequestBuilderV4<BankStatements>;
    /**
     * Returns a request builder for updating an entity of type `BankStatements`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BankStatements`.
     */
    update(entity: BankStatements): UpdateRequestBuilderV4<BankStatements>;
    /**
     * Returns a request builder for deleting an entity of type `BankStatements`.
     * @param internalNumber Key property. See [[BankStatements.internalNumber]].
     * @returns A request builder for creating requests that delete an entity of type `BankStatements`.
     */
    delete(internalNumber: number): DeleteRequestBuilderV4<BankStatements>;
    /**
     * Returns a request builder for deleting an entity of type `BankStatements`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BankStatements` by taking the entity as a parameter.
     */
    delete(entity: BankStatements): DeleteRequestBuilderV4<BankStatements>;
}
//# sourceMappingURL=BankStatementsRequestBuilder.d.ts.map