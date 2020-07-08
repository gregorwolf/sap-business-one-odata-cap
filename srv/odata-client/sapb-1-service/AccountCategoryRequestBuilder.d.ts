import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { AccountCategory } from './AccountCategory';
/**
 * Request builder class for operations supported on the [[AccountCategory]] entity.
 */
export declare class AccountCategoryRequestBuilder extends RequestBuilder<AccountCategory> {
    /**
     * Returns a request builder for retrieving one `AccountCategory` entity based on its keys.
     * @param categoryCode Key property. See [[AccountCategory.categoryCode]].
     * @returns A request builder for creating requests to retrieve one `AccountCategory` entity based on its keys.
     */
    getByKey(categoryCode: number): GetByKeyRequestBuilder<AccountCategory>;
    /**
     * Returns a request builder for querying all `AccountCategory` entities.
     * @returns A request builder for creating requests to retrieve all `AccountCategory` entities.
     */
    getAll(): GetAllRequestBuilder<AccountCategory>;
    /**
     * Returns a request builder for creating a `AccountCategory` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AccountCategory`.
     */
    create(entity: AccountCategory): CreateRequestBuilder<AccountCategory>;
    /**
     * Returns a request builder for updating an entity of type `AccountCategory`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AccountCategory`.
     */
    update(entity: AccountCategory): UpdateRequestBuilder<AccountCategory>;
    /**
     * Returns a request builder for deleting an entity of type `AccountCategory`.
     * @param categoryCode Key property. See [[AccountCategory.categoryCode]].
     * @returns A request builder for creating requests that delete an entity of type `AccountCategory`.
     */
    delete(categoryCode: number): DeleteRequestBuilder<AccountCategory>;
    /**
     * Returns a request builder for deleting an entity of type `AccountCategory`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `AccountCategory` by taking the entity as a parameter.
     */
    delete(entity: AccountCategory): DeleteRequestBuilder<AccountCategory>;
}
//# sourceMappingURL=AccountCategoryRequestBuilder.d.ts.map