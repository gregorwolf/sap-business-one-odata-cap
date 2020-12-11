import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { WarehouseLocations } from './WarehouseLocations';
/**
 * Request builder class for operations supported on the [[WarehouseLocations]] entity.
 */
export declare class WarehouseLocationsRequestBuilder extends RequestBuilder<WarehouseLocations> {
    /**
     * Returns a request builder for retrieving one `WarehouseLocations` entity based on its keys.
     * @param code Key property. See [[WarehouseLocations.code]].
     * @returns A request builder for creating requests to retrieve one `WarehouseLocations` entity based on its keys.
     */
    getByKey(code: number): GetByKeyRequestBuilderV4<WarehouseLocations>;
    /**
     * Returns a request builder for querying all `WarehouseLocations` entities.
     * @returns A request builder for creating requests to retrieve all `WarehouseLocations` entities.
     */
    getAll(): GetAllRequestBuilderV4<WarehouseLocations>;
    /**
     * Returns a request builder for creating a `WarehouseLocations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WarehouseLocations`.
     */
    create(entity: WarehouseLocations): CreateRequestBuilderV4<WarehouseLocations>;
    /**
     * Returns a request builder for updating an entity of type `WarehouseLocations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WarehouseLocations`.
     */
    update(entity: WarehouseLocations): UpdateRequestBuilderV4<WarehouseLocations>;
    /**
     * Returns a request builder for deleting an entity of type `WarehouseLocations`.
     * @param code Key property. See [[WarehouseLocations.code]].
     * @returns A request builder for creating requests that delete an entity of type `WarehouseLocations`.
     */
    delete(code: number): DeleteRequestBuilderV4<WarehouseLocations>;
    /**
     * Returns a request builder for deleting an entity of type `WarehouseLocations`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `WarehouseLocations` by taking the entity as a parameter.
     */
    delete(entity: WarehouseLocations): DeleteRequestBuilderV4<WarehouseLocations>;
}
//# sourceMappingURL=WarehouseLocationsRequestBuilder.d.ts.map