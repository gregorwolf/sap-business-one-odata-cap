import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { ActivityRecipientLists } from './ActivityRecipientLists';
/**
 * Request builder class for operations supported on the [[ActivityRecipientLists]] entity.
 */
export declare class ActivityRecipientListsRequestBuilder extends RequestBuilder<ActivityRecipientLists> {
    /**
     * Returns a request builder for retrieving one `ActivityRecipientLists` entity based on its keys.
     * @param code Key property. See [[ActivityRecipientLists.code]].
     * @returns A request builder for creating requests to retrieve one `ActivityRecipientLists` entity based on its keys.
     */
    getByKey(code: number): GetByKeyRequestBuilder<ActivityRecipientLists>;
    /**
     * Returns a request builder for querying all `ActivityRecipientLists` entities.
     * @returns A request builder for creating requests to retrieve all `ActivityRecipientLists` entities.
     */
    getAll(): GetAllRequestBuilder<ActivityRecipientLists>;
    /**
     * Returns a request builder for creating a `ActivityRecipientLists` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ActivityRecipientLists`.
     */
    create(entity: ActivityRecipientLists): CreateRequestBuilder<ActivityRecipientLists>;
    /**
     * Returns a request builder for updating an entity of type `ActivityRecipientLists`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ActivityRecipientLists`.
     */
    update(entity: ActivityRecipientLists): UpdateRequestBuilder<ActivityRecipientLists>;
    /**
     * Returns a request builder for deleting an entity of type `ActivityRecipientLists`.
     * @param code Key property. See [[ActivityRecipientLists.code]].
     * @returns A request builder for creating requests that delete an entity of type `ActivityRecipientLists`.
     */
    delete(code: number): DeleteRequestBuilder<ActivityRecipientLists>;
    /**
     * Returns a request builder for deleting an entity of type `ActivityRecipientLists`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ActivityRecipientLists` by taking the entity as a parameter.
     */
    delete(entity: ActivityRecipientLists): DeleteRequestBuilder<ActivityRecipientLists>;
}
//# sourceMappingURL=ActivityRecipientListsRequestBuilder.d.ts.map