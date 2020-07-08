import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { BinLocations } from './BinLocations';
/**
 * Request builder class for operations supported on the [[BinLocations]] entity.
 */
export declare class BinLocationsRequestBuilder extends RequestBuilder<BinLocations> {
    /**
     * Returns a request builder for retrieving one `BinLocations` entity based on its keys.
     * @param absEntry Key property. See [[BinLocations.absEntry]].
     * @returns A request builder for creating requests to retrieve one `BinLocations` entity based on its keys.
     */
    getByKey(absEntry: number): GetByKeyRequestBuilder<BinLocations>;
    /**
     * Returns a request builder for querying all `BinLocations` entities.
     * @returns A request builder for creating requests to retrieve all `BinLocations` entities.
     */
    getAll(): GetAllRequestBuilder<BinLocations>;
    /**
     * Returns a request builder for creating a `BinLocations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BinLocations`.
     */
    create(entity: BinLocations): CreateRequestBuilder<BinLocations>;
    /**
     * Returns a request builder for updating an entity of type `BinLocations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BinLocations`.
     */
    update(entity: BinLocations): UpdateRequestBuilder<BinLocations>;
    /**
     * Returns a request builder for deleting an entity of type `BinLocations`.
     * @param absEntry Key property. See [[BinLocations.absEntry]].
     * @returns A request builder for creating requests that delete an entity of type `BinLocations`.
     */
    delete(absEntry: number): DeleteRequestBuilder<BinLocations>;
    /**
     * Returns a request builder for deleting an entity of type `BinLocations`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BinLocations` by taking the entity as a parameter.
     */
    delete(entity: BinLocations): DeleteRequestBuilder<BinLocations>;
}
//# sourceMappingURL=BinLocationsRequestBuilder.d.ts.map