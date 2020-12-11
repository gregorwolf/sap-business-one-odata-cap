import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { CostCenterTypes } from './CostCenterTypes';
/**
 * Request builder class for operations supported on the [[CostCenterTypes]] entity.
 */
export declare class CostCenterTypesRequestBuilder extends RequestBuilder<CostCenterTypes> {
    /**
     * Returns a request builder for retrieving one `CostCenterTypes` entity based on its keys.
     * @param costCenterTypeCode Key property. See [[CostCenterTypes.costCenterTypeCode]].
     * @returns A request builder for creating requests to retrieve one `CostCenterTypes` entity based on its keys.
     */
    getByKey(costCenterTypeCode: string): GetByKeyRequestBuilderV4<CostCenterTypes>;
    /**
     * Returns a request builder for querying all `CostCenterTypes` entities.
     * @returns A request builder for creating requests to retrieve all `CostCenterTypes` entities.
     */
    getAll(): GetAllRequestBuilderV4<CostCenterTypes>;
    /**
     * Returns a request builder for creating a `CostCenterTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CostCenterTypes`.
     */
    create(entity: CostCenterTypes): CreateRequestBuilderV4<CostCenterTypes>;
    /**
     * Returns a request builder for updating an entity of type `CostCenterTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CostCenterTypes`.
     */
    update(entity: CostCenterTypes): UpdateRequestBuilderV4<CostCenterTypes>;
    /**
     * Returns a request builder for deleting an entity of type `CostCenterTypes`.
     * @param costCenterTypeCode Key property. See [[CostCenterTypes.costCenterTypeCode]].
     * @returns A request builder for creating requests that delete an entity of type `CostCenterTypes`.
     */
    delete(costCenterTypeCode: string): DeleteRequestBuilderV4<CostCenterTypes>;
    /**
     * Returns a request builder for deleting an entity of type `CostCenterTypes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `CostCenterTypes` by taking the entity as a parameter.
     */
    delete(entity: CostCenterTypes): DeleteRequestBuilderV4<CostCenterTypes>;
}
//# sourceMappingURL=CostCenterTypesRequestBuilder.d.ts.map