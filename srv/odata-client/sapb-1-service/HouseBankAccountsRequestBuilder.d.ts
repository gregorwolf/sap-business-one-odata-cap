import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { HouseBankAccounts } from './HouseBankAccounts';
/**
 * Request builder class for operations supported on the [[HouseBankAccounts]] entity.
 */
export declare class HouseBankAccountsRequestBuilder extends RequestBuilder<HouseBankAccounts> {
    /**
     * Returns a request builder for retrieving one `HouseBankAccounts` entity based on its keys.
     * @param absoluteEntry Key property. See [[HouseBankAccounts.absoluteEntry]].
     * @returns A request builder for creating requests to retrieve one `HouseBankAccounts` entity based on its keys.
     */
    getByKey(absoluteEntry: number): GetByKeyRequestBuilder<HouseBankAccounts>;
    /**
     * Returns a request builder for querying all `HouseBankAccounts` entities.
     * @returns A request builder for creating requests to retrieve all `HouseBankAccounts` entities.
     */
    getAll(): GetAllRequestBuilder<HouseBankAccounts>;
    /**
     * Returns a request builder for creating a `HouseBankAccounts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `HouseBankAccounts`.
     */
    create(entity: HouseBankAccounts): CreateRequestBuilder<HouseBankAccounts>;
    /**
     * Returns a request builder for updating an entity of type `HouseBankAccounts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `HouseBankAccounts`.
     */
    update(entity: HouseBankAccounts): UpdateRequestBuilder<HouseBankAccounts>;
    /**
     * Returns a request builder for deleting an entity of type `HouseBankAccounts`.
     * @param absoluteEntry Key property. See [[HouseBankAccounts.absoluteEntry]].
     * @returns A request builder for creating requests that delete an entity of type `HouseBankAccounts`.
     */
    delete(absoluteEntry: number): DeleteRequestBuilder<HouseBankAccounts>;
    /**
     * Returns a request builder for deleting an entity of type `HouseBankAccounts`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `HouseBankAccounts` by taking the entity as a parameter.
     */
    delete(entity: HouseBankAccounts): DeleteRequestBuilder<HouseBankAccounts>;
}
//# sourceMappingURL=HouseBankAccountsRequestBuilder.d.ts.map