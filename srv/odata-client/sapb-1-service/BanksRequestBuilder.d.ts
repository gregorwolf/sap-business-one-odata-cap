import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Banks } from './Banks';
/**
 * Request builder class for operations supported on the [[Banks]] entity.
 */
export declare class BanksRequestBuilder extends RequestBuilder<Banks> {
    /**
     * Returns a request builder for retrieving one `Banks` entity based on its keys.
     * @param absoluteEntry Key property. See [[Banks.absoluteEntry]].
     * @returns A request builder for creating requests to retrieve one `Banks` entity based on its keys.
     */
    getByKey(absoluteEntry: number): GetByKeyRequestBuilder<Banks>;
    /**
     * Returns a request builder for querying all `Banks` entities.
     * @returns A request builder for creating requests to retrieve all `Banks` entities.
     */
    getAll(): GetAllRequestBuilder<Banks>;
    /**
     * Returns a request builder for creating a `Banks` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Banks`.
     */
    create(entity: Banks): CreateRequestBuilder<Banks>;
    /**
     * Returns a request builder for updating an entity of type `Banks`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Banks`.
     */
    update(entity: Banks): UpdateRequestBuilder<Banks>;
    /**
     * Returns a request builder for deleting an entity of type `Banks`.
     * @param absoluteEntry Key property. See [[Banks.absoluteEntry]].
     * @returns A request builder for creating requests that delete an entity of type `Banks`.
     */
    delete(absoluteEntry: number): DeleteRequestBuilder<Banks>;
    /**
     * Returns a request builder for deleting an entity of type `Banks`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Banks` by taking the entity as a parameter.
     */
    delete(entity: Banks): DeleteRequestBuilder<Banks>;
}
//# sourceMappingURL=BanksRequestBuilder.d.ts.map