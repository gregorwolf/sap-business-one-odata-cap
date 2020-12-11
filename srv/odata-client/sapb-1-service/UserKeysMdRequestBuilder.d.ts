import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { UserKeysMd } from './UserKeysMd';
/**
 * Request builder class for operations supported on the [[UserKeysMd]] entity.
 */
export declare class UserKeysMdRequestBuilder extends RequestBuilder<UserKeysMd> {
    /**
     * Returns a request builder for retrieving one `UserKeysMd` entity based on its keys.
     * @param tableName Key property. See [[UserKeysMd.tableName]].
     * @param keyIndex Key property. See [[UserKeysMd.keyIndex]].
     * @returns A request builder for creating requests to retrieve one `UserKeysMd` entity based on its keys.
     */
    getByKey(tableName: string, keyIndex: number): GetByKeyRequestBuilderV4<UserKeysMd>;
    /**
     * Returns a request builder for querying all `UserKeysMd` entities.
     * @returns A request builder for creating requests to retrieve all `UserKeysMd` entities.
     */
    getAll(): GetAllRequestBuilderV4<UserKeysMd>;
    /**
     * Returns a request builder for creating a `UserKeysMd` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `UserKeysMd`.
     */
    create(entity: UserKeysMd): CreateRequestBuilderV4<UserKeysMd>;
    /**
     * Returns a request builder for updating an entity of type `UserKeysMd`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `UserKeysMd`.
     */
    update(entity: UserKeysMd): UpdateRequestBuilderV4<UserKeysMd>;
    /**
     * Returns a request builder for deleting an entity of type `UserKeysMd`.
     * @param tableName Key property. See [[UserKeysMd.tableName]].
     * @param keyIndex Key property. See [[UserKeysMd.keyIndex]].
     * @returns A request builder for creating requests that delete an entity of type `UserKeysMd`.
     */
    delete(tableName: string, keyIndex: number): DeleteRequestBuilderV4<UserKeysMd>;
    /**
     * Returns a request builder for deleting an entity of type `UserKeysMd`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `UserKeysMd` by taking the entity as a parameter.
     */
    delete(entity: UserKeysMd): DeleteRequestBuilderV4<UserKeysMd>;
}
//# sourceMappingURL=UserKeysMdRequestBuilder.d.ts.map