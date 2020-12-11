import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { BankPages } from './BankPages';
/**
 * Request builder class for operations supported on the [[BankPages]] entity.
 */
export declare class BankPagesRequestBuilder extends RequestBuilder<BankPages> {
    /**
     * Returns a request builder for retrieving one `BankPages` entity based on its keys.
     * @param accountCode Key property. See [[BankPages.accountCode]].
     * @param sequence Key property. See [[BankPages.sequence]].
     * @returns A request builder for creating requests to retrieve one `BankPages` entity based on its keys.
     */
    getByKey(accountCode: string, sequence: number): GetByKeyRequestBuilderV4<BankPages>;
    /**
     * Returns a request builder for querying all `BankPages` entities.
     * @returns A request builder for creating requests to retrieve all `BankPages` entities.
     */
    getAll(): GetAllRequestBuilderV4<BankPages>;
    /**
     * Returns a request builder for creating a `BankPages` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BankPages`.
     */
    create(entity: BankPages): CreateRequestBuilderV4<BankPages>;
    /**
     * Returns a request builder for updating an entity of type `BankPages`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BankPages`.
     */
    update(entity: BankPages): UpdateRequestBuilderV4<BankPages>;
    /**
     * Returns a request builder for deleting an entity of type `BankPages`.
     * @param accountCode Key property. See [[BankPages.accountCode]].
     * @param sequence Key property. See [[BankPages.sequence]].
     * @returns A request builder for creating requests that delete an entity of type `BankPages`.
     */
    delete(accountCode: string, sequence: number): DeleteRequestBuilderV4<BankPages>;
    /**
     * Returns a request builder for deleting an entity of type `BankPages`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BankPages` by taking the entity as a parameter.
     */
    delete(entity: BankPages): DeleteRequestBuilderV4<BankPages>;
}
//# sourceMappingURL=BankPagesRequestBuilder.d.ts.map