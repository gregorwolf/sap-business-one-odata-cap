import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { UserLanguages } from './UserLanguages';
/**
 * Request builder class for operations supported on the [[UserLanguages]] entity.
 */
export declare class UserLanguagesRequestBuilder extends RequestBuilder<UserLanguages> {
    /**
     * Returns a request builder for retrieving one `UserLanguages` entity based on its keys.
     * @param code Key property. See [[UserLanguages.code]].
     * @returns A request builder for creating requests to retrieve one `UserLanguages` entity based on its keys.
     */
    getByKey(code: number): GetByKeyRequestBuilder<UserLanguages>;
    /**
     * Returns a request builder for querying all `UserLanguages` entities.
     * @returns A request builder for creating requests to retrieve all `UserLanguages` entities.
     */
    getAll(): GetAllRequestBuilder<UserLanguages>;
    /**
     * Returns a request builder for creating a `UserLanguages` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `UserLanguages`.
     */
    create(entity: UserLanguages): CreateRequestBuilder<UserLanguages>;
    /**
     * Returns a request builder for updating an entity of type `UserLanguages`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `UserLanguages`.
     */
    update(entity: UserLanguages): UpdateRequestBuilder<UserLanguages>;
    /**
     * Returns a request builder for deleting an entity of type `UserLanguages`.
     * @param code Key property. See [[UserLanguages.code]].
     * @returns A request builder for creating requests that delete an entity of type `UserLanguages`.
     */
    delete(code: number): DeleteRequestBuilder<UserLanguages>;
    /**
     * Returns a request builder for deleting an entity of type `UserLanguages`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `UserLanguages` by taking the entity as a parameter.
     */
    delete(entity: UserLanguages): DeleteRequestBuilder<UserLanguages>;
}
//# sourceMappingURL=UserLanguagesRequestBuilder.d.ts.map