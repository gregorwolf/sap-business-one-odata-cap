import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Deposits } from './Deposits';
/**
 * Request builder class for operations supported on the [[Deposits]] entity.
 */
export declare class DepositsRequestBuilder extends RequestBuilder<Deposits> {
    /**
     * Returns a request builder for retrieving one `Deposits` entity based on its keys.
     * @param absEntry Key property. See [[Deposits.absEntry]].
     * @returns A request builder for creating requests to retrieve one `Deposits` entity based on its keys.
     */
    getByKey(absEntry: number): GetByKeyRequestBuilder<Deposits>;
    /**
     * Returns a request builder for querying all `Deposits` entities.
     * @returns A request builder for creating requests to retrieve all `Deposits` entities.
     */
    getAll(): GetAllRequestBuilder<Deposits>;
    /**
     * Returns a request builder for creating a `Deposits` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Deposits`.
     */
    create(entity: Deposits): CreateRequestBuilder<Deposits>;
    /**
     * Returns a request builder for updating an entity of type `Deposits`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Deposits`.
     */
    update(entity: Deposits): UpdateRequestBuilder<Deposits>;
    /**
     * Returns a request builder for deleting an entity of type `Deposits`.
     * @param absEntry Key property. See [[Deposits.absEntry]].
     * @returns A request builder for creating requests that delete an entity of type `Deposits`.
     */
    delete(absEntry: number): DeleteRequestBuilder<Deposits>;
    /**
     * Returns a request builder for deleting an entity of type `Deposits`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Deposits` by taking the entity as a parameter.
     */
    delete(entity: Deposits): DeleteRequestBuilder<Deposits>;
}
//# sourceMappingURL=DepositsRequestBuilder.d.ts.map