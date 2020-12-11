import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { BrazilMultiIndexers } from './BrazilMultiIndexers';
/**
 * Request builder class for operations supported on the [[BrazilMultiIndexers]] entity.
 */
export declare class BrazilMultiIndexersRequestBuilder extends RequestBuilder<BrazilMultiIndexers> {
    /**
     * Returns a request builder for retrieving one `BrazilMultiIndexers` entity based on its keys.
     * @param id Key property. See [[BrazilMultiIndexers.id]].
     * @returns A request builder for creating requests to retrieve one `BrazilMultiIndexers` entity based on its keys.
     */
    getByKey(id: number): GetByKeyRequestBuilderV4<BrazilMultiIndexers>;
    /**
     * Returns a request builder for querying all `BrazilMultiIndexers` entities.
     * @returns A request builder for creating requests to retrieve all `BrazilMultiIndexers` entities.
     */
    getAll(): GetAllRequestBuilderV4<BrazilMultiIndexers>;
    /**
     * Returns a request builder for creating a `BrazilMultiIndexers` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BrazilMultiIndexers`.
     */
    create(entity: BrazilMultiIndexers): CreateRequestBuilderV4<BrazilMultiIndexers>;
    /**
     * Returns a request builder for updating an entity of type `BrazilMultiIndexers`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BrazilMultiIndexers`.
     */
    update(entity: BrazilMultiIndexers): UpdateRequestBuilderV4<BrazilMultiIndexers>;
    /**
     * Returns a request builder for deleting an entity of type `BrazilMultiIndexers`.
     * @param id Key property. See [[BrazilMultiIndexers.id]].
     * @returns A request builder for creating requests that delete an entity of type `BrazilMultiIndexers`.
     */
    delete(id: number): DeleteRequestBuilderV4<BrazilMultiIndexers>;
    /**
     * Returns a request builder for deleting an entity of type `BrazilMultiIndexers`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BrazilMultiIndexers` by taking the entity as a parameter.
     */
    delete(entity: BrazilMultiIndexers): DeleteRequestBuilderV4<BrazilMultiIndexers>;
}
//# sourceMappingURL=BrazilMultiIndexersRequestBuilder.d.ts.map