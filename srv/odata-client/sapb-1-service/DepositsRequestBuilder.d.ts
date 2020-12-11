import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
    getByKey(absEntry: number): GetByKeyRequestBuilderV4<Deposits>;
    /**
     * Returns a request builder for querying all `Deposits` entities.
     * @returns A request builder for creating requests to retrieve all `Deposits` entities.
     */
    getAll(): GetAllRequestBuilderV4<Deposits>;
    /**
     * Returns a request builder for creating a `Deposits` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Deposits`.
     */
    create(entity: Deposits): CreateRequestBuilderV4<Deposits>;
    /**
     * Returns a request builder for updating an entity of type `Deposits`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Deposits`.
     */
    update(entity: Deposits): UpdateRequestBuilderV4<Deposits>;
    /**
     * Returns a request builder for deleting an entity of type `Deposits`.
     * @param absEntry Key property. See [[Deposits.absEntry]].
     * @returns A request builder for creating requests that delete an entity of type `Deposits`.
     */
    delete(absEntry: number): DeleteRequestBuilderV4<Deposits>;
    /**
     * Returns a request builder for deleting an entity of type `Deposits`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Deposits` by taking the entity as a parameter.
     */
    delete(entity: Deposits): DeleteRequestBuilderV4<Deposits>;
}
//# sourceMappingURL=DepositsRequestBuilder.d.ts.map