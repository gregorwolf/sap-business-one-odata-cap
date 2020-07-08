import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Returns } from './Returns';
/**
 * Request builder class for operations supported on the [[Returns]] entity.
 */
export declare class ReturnsRequestBuilder extends RequestBuilder<Returns> {
    /**
     * Returns a request builder for retrieving one `Returns` entity based on its keys.
     * @param docEntry Key property. See [[Returns.docEntry]].
     * @returns A request builder for creating requests to retrieve one `Returns` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilder<Returns>;
    /**
     * Returns a request builder for querying all `Returns` entities.
     * @returns A request builder for creating requests to retrieve all `Returns` entities.
     */
    getAll(): GetAllRequestBuilder<Returns>;
    /**
     * Returns a request builder for creating a `Returns` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Returns`.
     */
    create(entity: Returns): CreateRequestBuilder<Returns>;
    /**
     * Returns a request builder for updating an entity of type `Returns`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Returns`.
     */
    update(entity: Returns): UpdateRequestBuilder<Returns>;
    /**
     * Returns a request builder for deleting an entity of type `Returns`.
     * @param docEntry Key property. See [[Returns.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `Returns`.
     */
    delete(docEntry: number): DeleteRequestBuilder<Returns>;
    /**
     * Returns a request builder for deleting an entity of type `Returns`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Returns` by taking the entity as a parameter.
     */
    delete(entity: Returns): DeleteRequestBuilder<Returns>;
}
//# sourceMappingURL=ReturnsRequestBuilder.d.ts.map