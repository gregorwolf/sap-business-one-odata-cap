import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Drafts } from './Drafts';
/**
 * Request builder class for operations supported on the [[Drafts]] entity.
 */
export declare class DraftsRequestBuilder extends RequestBuilder<Drafts> {
    /**
     * Returns a request builder for retrieving one `Drafts` entity based on its keys.
     * @param docEntry Key property. See [[Drafts.docEntry]].
     * @returns A request builder for creating requests to retrieve one `Drafts` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilder<Drafts>;
    /**
     * Returns a request builder for querying all `Drafts` entities.
     * @returns A request builder for creating requests to retrieve all `Drafts` entities.
     */
    getAll(): GetAllRequestBuilder<Drafts>;
    /**
     * Returns a request builder for creating a `Drafts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Drafts`.
     */
    create(entity: Drafts): CreateRequestBuilder<Drafts>;
    /**
     * Returns a request builder for updating an entity of type `Drafts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Drafts`.
     */
    update(entity: Drafts): UpdateRequestBuilder<Drafts>;
    /**
     * Returns a request builder for deleting an entity of type `Drafts`.
     * @param docEntry Key property. See [[Drafts.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `Drafts`.
     */
    delete(docEntry: number): DeleteRequestBuilder<Drafts>;
    /**
     * Returns a request builder for deleting an entity of type `Drafts`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Drafts` by taking the entity as a parameter.
     */
    delete(entity: Drafts): DeleteRequestBuilder<Drafts>;
}
//# sourceMappingURL=DraftsRequestBuilder.d.ts.map