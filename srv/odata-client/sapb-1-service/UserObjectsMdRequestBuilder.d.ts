import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { UserObjectsMd } from './UserObjectsMd';
/**
 * Request builder class for operations supported on the [[UserObjectsMd]] entity.
 */
export declare class UserObjectsMdRequestBuilder extends RequestBuilder<UserObjectsMd> {
    /**
     * Returns a request builder for retrieving one `UserObjectsMd` entity based on its keys.
     * @param code Key property. See [[UserObjectsMd.code]].
     * @returns A request builder for creating requests to retrieve one `UserObjectsMd` entity based on its keys.
     */
    getByKey(code: string): GetByKeyRequestBuilderV4<UserObjectsMd>;
    /**
     * Returns a request builder for querying all `UserObjectsMd` entities.
     * @returns A request builder for creating requests to retrieve all `UserObjectsMd` entities.
     */
    getAll(): GetAllRequestBuilderV4<UserObjectsMd>;
    /**
     * Returns a request builder for creating a `UserObjectsMd` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `UserObjectsMd`.
     */
    create(entity: UserObjectsMd): CreateRequestBuilderV4<UserObjectsMd>;
    /**
     * Returns a request builder for updating an entity of type `UserObjectsMd`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `UserObjectsMd`.
     */
    update(entity: UserObjectsMd): UpdateRequestBuilderV4<UserObjectsMd>;
    /**
     * Returns a request builder for deleting an entity of type `UserObjectsMd`.
     * @param code Key property. See [[UserObjectsMd.code]].
     * @returns A request builder for creating requests that delete an entity of type `UserObjectsMd`.
     */
    delete(code: string): DeleteRequestBuilderV4<UserObjectsMd>;
    /**
     * Returns a request builder for deleting an entity of type `UserObjectsMd`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `UserObjectsMd` by taking the entity as a parameter.
     */
    delete(entity: UserObjectsMd): DeleteRequestBuilderV4<UserObjectsMd>;
}
//# sourceMappingURL=UserObjectsMdRequestBuilder.d.ts.map