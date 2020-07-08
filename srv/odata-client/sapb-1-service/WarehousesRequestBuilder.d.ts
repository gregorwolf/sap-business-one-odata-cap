import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Warehouses } from './Warehouses';
/**
 * Request builder class for operations supported on the [[Warehouses]] entity.
 */
export declare class WarehousesRequestBuilder extends RequestBuilder<Warehouses> {
    /**
     * Returns a request builder for retrieving one `Warehouses` entity based on its keys.
     * @param warehouseCode Key property. See [[Warehouses.warehouseCode]].
     * @returns A request builder for creating requests to retrieve one `Warehouses` entity based on its keys.
     */
    getByKey(warehouseCode: string): GetByKeyRequestBuilder<Warehouses>;
    /**
     * Returns a request builder for querying all `Warehouses` entities.
     * @returns A request builder for creating requests to retrieve all `Warehouses` entities.
     */
    getAll(): GetAllRequestBuilder<Warehouses>;
    /**
     * Returns a request builder for creating a `Warehouses` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Warehouses`.
     */
    create(entity: Warehouses): CreateRequestBuilder<Warehouses>;
    /**
     * Returns a request builder for updating an entity of type `Warehouses`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Warehouses`.
     */
    update(entity: Warehouses): UpdateRequestBuilder<Warehouses>;
    /**
     * Returns a request builder for deleting an entity of type `Warehouses`.
     * @param warehouseCode Key property. See [[Warehouses.warehouseCode]].
     * @returns A request builder for creating requests that delete an entity of type `Warehouses`.
     */
    delete(warehouseCode: string): DeleteRequestBuilder<Warehouses>;
    /**
     * Returns a request builder for deleting an entity of type `Warehouses`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Warehouses` by taking the entity as a parameter.
     */
    delete(entity: Warehouses): DeleteRequestBuilder<Warehouses>;
}
//# sourceMappingURL=WarehousesRequestBuilder.d.ts.map