import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { UserFieldsMd } from './UserFieldsMd';
/**
 * Request builder class for operations supported on the [[UserFieldsMd]] entity.
 */
export declare class UserFieldsMdRequestBuilder extends RequestBuilder<UserFieldsMd> {
    /**
     * Returns a request builder for retrieving one `UserFieldsMd` entity based on its keys.
     * @param tableName Key property. See [[UserFieldsMd.tableName]].
     * @param fieldId Key property. See [[UserFieldsMd.fieldId]].
     * @returns A request builder for creating requests to retrieve one `UserFieldsMd` entity based on its keys.
     */
    getByKey(tableName: string, fieldId: number): GetByKeyRequestBuilder<UserFieldsMd>;
    /**
     * Returns a request builder for querying all `UserFieldsMd` entities.
     * @returns A request builder for creating requests to retrieve all `UserFieldsMd` entities.
     */
    getAll(): GetAllRequestBuilder<UserFieldsMd>;
    /**
     * Returns a request builder for creating a `UserFieldsMd` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `UserFieldsMd`.
     */
    create(entity: UserFieldsMd): CreateRequestBuilder<UserFieldsMd>;
    /**
     * Returns a request builder for updating an entity of type `UserFieldsMd`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `UserFieldsMd`.
     */
    update(entity: UserFieldsMd): UpdateRequestBuilder<UserFieldsMd>;
    /**
     * Returns a request builder for deleting an entity of type `UserFieldsMd`.
     * @param tableName Key property. See [[UserFieldsMd.tableName]].
     * @param fieldId Key property. See [[UserFieldsMd.fieldId]].
     * @returns A request builder for creating requests that delete an entity of type `UserFieldsMd`.
     */
    delete(tableName: string, fieldId: number): DeleteRequestBuilder<UserFieldsMd>;
    /**
     * Returns a request builder for deleting an entity of type `UserFieldsMd`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `UserFieldsMd` by taking the entity as a parameter.
     */
    delete(entity: UserFieldsMd): DeleteRequestBuilder<UserFieldsMd>;
}
//# sourceMappingURL=UserFieldsMdRequestBuilder.d.ts.map