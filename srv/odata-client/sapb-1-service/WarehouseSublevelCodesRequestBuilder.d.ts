import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { WarehouseSublevelCodes } from './WarehouseSublevelCodes';
/**
 * Request builder class for operations supported on the [[WarehouseSublevelCodes]] entity.
 */
export declare class WarehouseSublevelCodesRequestBuilder extends RequestBuilder<WarehouseSublevelCodes> {
    /**
     * Returns a request builder for retrieving one `WarehouseSublevelCodes` entity based on its keys.
     * @param absEntry Key property. See [[WarehouseSublevelCodes.absEntry]].
     * @returns A request builder for creating requests to retrieve one `WarehouseSublevelCodes` entity based on its keys.
     */
    getByKey(absEntry: number): GetByKeyRequestBuilder<WarehouseSublevelCodes>;
    /**
     * Returns a request builder for querying all `WarehouseSublevelCodes` entities.
     * @returns A request builder for creating requests to retrieve all `WarehouseSublevelCodes` entities.
     */
    getAll(): GetAllRequestBuilder<WarehouseSublevelCodes>;
    /**
     * Returns a request builder for creating a `WarehouseSublevelCodes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WarehouseSublevelCodes`.
     */
    create(entity: WarehouseSublevelCodes): CreateRequestBuilder<WarehouseSublevelCodes>;
    /**
     * Returns a request builder for updating an entity of type `WarehouseSublevelCodes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WarehouseSublevelCodes`.
     */
    update(entity: WarehouseSublevelCodes): UpdateRequestBuilder<WarehouseSublevelCodes>;
    /**
     * Returns a request builder for deleting an entity of type `WarehouseSublevelCodes`.
     * @param absEntry Key property. See [[WarehouseSublevelCodes.absEntry]].
     * @returns A request builder for creating requests that delete an entity of type `WarehouseSublevelCodes`.
     */
    delete(absEntry: number): DeleteRequestBuilder<WarehouseSublevelCodes>;
    /**
     * Returns a request builder for deleting an entity of type `WarehouseSublevelCodes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `WarehouseSublevelCodes` by taking the entity as a parameter.
     */
    delete(entity: WarehouseSublevelCodes): DeleteRequestBuilder<WarehouseSublevelCodes>;
}
//# sourceMappingURL=WarehouseSublevelCodesRequestBuilder.d.ts.map