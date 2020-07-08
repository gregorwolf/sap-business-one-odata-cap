import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { BrazilNumericIndexers } from './BrazilNumericIndexers';
/**
 * Request builder class for operations supported on the [[BrazilNumericIndexers]] entity.
 */
export declare class BrazilNumericIndexersRequestBuilder extends RequestBuilder<BrazilNumericIndexers> {
    /**
     * Returns a request builder for retrieving one `BrazilNumericIndexers` entity based on its keys.
     * @param id Key property. See [[BrazilNumericIndexers.id]].
     * @returns A request builder for creating requests to retrieve one `BrazilNumericIndexers` entity based on its keys.
     */
    getByKey(id: number): GetByKeyRequestBuilder<BrazilNumericIndexers>;
    /**
     * Returns a request builder for querying all `BrazilNumericIndexers` entities.
     * @returns A request builder for creating requests to retrieve all `BrazilNumericIndexers` entities.
     */
    getAll(): GetAllRequestBuilder<BrazilNumericIndexers>;
    /**
     * Returns a request builder for creating a `BrazilNumericIndexers` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BrazilNumericIndexers`.
     */
    create(entity: BrazilNumericIndexers): CreateRequestBuilder<BrazilNumericIndexers>;
    /**
     * Returns a request builder for updating an entity of type `BrazilNumericIndexers`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BrazilNumericIndexers`.
     */
    update(entity: BrazilNumericIndexers): UpdateRequestBuilder<BrazilNumericIndexers>;
    /**
     * Returns a request builder for deleting an entity of type `BrazilNumericIndexers`.
     * @param id Key property. See [[BrazilNumericIndexers.id]].
     * @returns A request builder for creating requests that delete an entity of type `BrazilNumericIndexers`.
     */
    delete(id: number): DeleteRequestBuilder<BrazilNumericIndexers>;
    /**
     * Returns a request builder for deleting an entity of type `BrazilNumericIndexers`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BrazilNumericIndexers` by taking the entity as a parameter.
     */
    delete(entity: BrazilNumericIndexers): DeleteRequestBuilder<BrazilNumericIndexers>;
}
//# sourceMappingURL=BrazilNumericIndexersRequestBuilder.d.ts.map