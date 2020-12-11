import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { DepreciationAreas } from './DepreciationAreas';
/**
 * Request builder class for operations supported on the [[DepreciationAreas]] entity.
 */
export declare class DepreciationAreasRequestBuilder extends RequestBuilder<DepreciationAreas> {
    /**
     * Returns a request builder for retrieving one `DepreciationAreas` entity based on its keys.
     * @param code Key property. See [[DepreciationAreas.code]].
     * @returns A request builder for creating requests to retrieve one `DepreciationAreas` entity based on its keys.
     */
    getByKey(code: string): GetByKeyRequestBuilderV4<DepreciationAreas>;
    /**
     * Returns a request builder for querying all `DepreciationAreas` entities.
     * @returns A request builder for creating requests to retrieve all `DepreciationAreas` entities.
     */
    getAll(): GetAllRequestBuilderV4<DepreciationAreas>;
    /**
     * Returns a request builder for creating a `DepreciationAreas` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DepreciationAreas`.
     */
    create(entity: DepreciationAreas): CreateRequestBuilderV4<DepreciationAreas>;
    /**
     * Returns a request builder for updating an entity of type `DepreciationAreas`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DepreciationAreas`.
     */
    update(entity: DepreciationAreas): UpdateRequestBuilderV4<DepreciationAreas>;
    /**
     * Returns a request builder for deleting an entity of type `DepreciationAreas`.
     * @param code Key property. See [[DepreciationAreas.code]].
     * @returns A request builder for creating requests that delete an entity of type `DepreciationAreas`.
     */
    delete(code: string): DeleteRequestBuilderV4<DepreciationAreas>;
    /**
     * Returns a request builder for deleting an entity of type `DepreciationAreas`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `DepreciationAreas` by taking the entity as a parameter.
     */
    delete(entity: DepreciationAreas): DeleteRequestBuilderV4<DepreciationAreas>;
}
//# sourceMappingURL=DepreciationAreasRequestBuilder.d.ts.map