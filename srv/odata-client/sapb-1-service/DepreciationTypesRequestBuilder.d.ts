import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { DepreciationTypes } from './DepreciationTypes';
/**
 * Request builder class for operations supported on the [[DepreciationTypes]] entity.
 */
export declare class DepreciationTypesRequestBuilder extends RequestBuilder<DepreciationTypes> {
    /**
     * Returns a request builder for retrieving one `DepreciationTypes` entity based on its keys.
     * @param code Key property. See [[DepreciationTypes.code]].
     * @returns A request builder for creating requests to retrieve one `DepreciationTypes` entity based on its keys.
     */
    getByKey(code: string): GetByKeyRequestBuilder<DepreciationTypes>;
    /**
     * Returns a request builder for querying all `DepreciationTypes` entities.
     * @returns A request builder for creating requests to retrieve all `DepreciationTypes` entities.
     */
    getAll(): GetAllRequestBuilder<DepreciationTypes>;
    /**
     * Returns a request builder for creating a `DepreciationTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DepreciationTypes`.
     */
    create(entity: DepreciationTypes): CreateRequestBuilder<DepreciationTypes>;
    /**
     * Returns a request builder for updating an entity of type `DepreciationTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DepreciationTypes`.
     */
    update(entity: DepreciationTypes): UpdateRequestBuilder<DepreciationTypes>;
    /**
     * Returns a request builder for deleting an entity of type `DepreciationTypes`.
     * @param code Key property. See [[DepreciationTypes.code]].
     * @returns A request builder for creating requests that delete an entity of type `DepreciationTypes`.
     */
    delete(code: string): DeleteRequestBuilder<DepreciationTypes>;
    /**
     * Returns a request builder for deleting an entity of type `DepreciationTypes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `DepreciationTypes` by taking the entity as a parameter.
     */
    delete(entity: DepreciationTypes): DeleteRequestBuilder<DepreciationTypes>;
}
//# sourceMappingURL=DepreciationTypesRequestBuilder.d.ts.map