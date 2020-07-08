import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { PickLists } from './PickLists';
/**
 * Request builder class for operations supported on the [[PickLists]] entity.
 */
export declare class PickListsRequestBuilder extends RequestBuilder<PickLists> {
    /**
     * Returns a request builder for retrieving one `PickLists` entity based on its keys.
     * @param absoluteentry Key property. See [[PickLists.absoluteentry]].
     * @returns A request builder for creating requests to retrieve one `PickLists` entity based on its keys.
     */
    getByKey(absoluteentry: number): GetByKeyRequestBuilder<PickLists>;
    /**
     * Returns a request builder for querying all `PickLists` entities.
     * @returns A request builder for creating requests to retrieve all `PickLists` entities.
     */
    getAll(): GetAllRequestBuilder<PickLists>;
    /**
     * Returns a request builder for creating a `PickLists` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PickLists`.
     */
    create(entity: PickLists): CreateRequestBuilder<PickLists>;
    /**
     * Returns a request builder for updating an entity of type `PickLists`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PickLists`.
     */
    update(entity: PickLists): UpdateRequestBuilder<PickLists>;
    /**
     * Returns a request builder for deleting an entity of type `PickLists`.
     * @param absoluteentry Key property. See [[PickLists.absoluteentry]].
     * @returns A request builder for creating requests that delete an entity of type `PickLists`.
     */
    delete(absoluteentry: number): DeleteRequestBuilder<PickLists>;
    /**
     * Returns a request builder for deleting an entity of type `PickLists`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PickLists` by taking the entity as a parameter.
     */
    delete(entity: PickLists): DeleteRequestBuilder<PickLists>;
}
//# sourceMappingURL=PickListsRequestBuilder.d.ts.map