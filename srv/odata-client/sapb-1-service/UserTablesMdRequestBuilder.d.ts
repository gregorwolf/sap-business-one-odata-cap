import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { UserTablesMd } from './UserTablesMd';
/**
 * Request builder class for operations supported on the [[UserTablesMd]] entity.
 */
export declare class UserTablesMdRequestBuilder extends RequestBuilder<UserTablesMd> {
    /**
     * Returns a request builder for retrieving one `UserTablesMd` entity based on its keys.
     * @param tableName Key property. See [[UserTablesMd.tableName]].
     * @returns A request builder for creating requests to retrieve one `UserTablesMd` entity based on its keys.
     */
    getByKey(tableName: string): GetByKeyRequestBuilderV4<UserTablesMd>;
    /**
     * Returns a request builder for querying all `UserTablesMd` entities.
     * @returns A request builder for creating requests to retrieve all `UserTablesMd` entities.
     */
    getAll(): GetAllRequestBuilderV4<UserTablesMd>;
    /**
     * Returns a request builder for creating a `UserTablesMd` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `UserTablesMd`.
     */
    create(entity: UserTablesMd): CreateRequestBuilderV4<UserTablesMd>;
    /**
     * Returns a request builder for updating an entity of type `UserTablesMd`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `UserTablesMd`.
     */
    update(entity: UserTablesMd): UpdateRequestBuilderV4<UserTablesMd>;
    /**
     * Returns a request builder for deleting an entity of type `UserTablesMd`.
     * @param tableName Key property. See [[UserTablesMd.tableName]].
     * @returns A request builder for creating requests that delete an entity of type `UserTablesMd`.
     */
    delete(tableName: string): DeleteRequestBuilderV4<UserTablesMd>;
    /**
     * Returns a request builder for deleting an entity of type `UserTablesMd`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `UserTablesMd` by taking the entity as a parameter.
     */
    delete(entity: UserTablesMd): DeleteRequestBuilderV4<UserTablesMd>;
}
//# sourceMappingURL=UserTablesMdRequestBuilder.d.ts.map