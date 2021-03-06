import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { UnitOfMeasurements } from './UnitOfMeasurements';
/**
 * Request builder class for operations supported on the [[UnitOfMeasurements]] entity.
 */
export declare class UnitOfMeasurementsRequestBuilder extends RequestBuilder<UnitOfMeasurements> {
    /**
     * Returns a request builder for retrieving one `UnitOfMeasurements` entity based on its keys.
     * @param absEntry Key property. See [[UnitOfMeasurements.absEntry]].
     * @returns A request builder for creating requests to retrieve one `UnitOfMeasurements` entity based on its keys.
     */
    getByKey(absEntry: number): GetByKeyRequestBuilderV4<UnitOfMeasurements>;
    /**
     * Returns a request builder for querying all `UnitOfMeasurements` entities.
     * @returns A request builder for creating requests to retrieve all `UnitOfMeasurements` entities.
     */
    getAll(): GetAllRequestBuilderV4<UnitOfMeasurements>;
    /**
     * Returns a request builder for creating a `UnitOfMeasurements` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `UnitOfMeasurements`.
     */
    create(entity: UnitOfMeasurements): CreateRequestBuilderV4<UnitOfMeasurements>;
    /**
     * Returns a request builder for updating an entity of type `UnitOfMeasurements`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `UnitOfMeasurements`.
     */
    update(entity: UnitOfMeasurements): UpdateRequestBuilderV4<UnitOfMeasurements>;
    /**
     * Returns a request builder for deleting an entity of type `UnitOfMeasurements`.
     * @param absEntry Key property. See [[UnitOfMeasurements.absEntry]].
     * @returns A request builder for creating requests that delete an entity of type `UnitOfMeasurements`.
     */
    delete(absEntry: number): DeleteRequestBuilderV4<UnitOfMeasurements>;
    /**
     * Returns a request builder for deleting an entity of type `UnitOfMeasurements`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `UnitOfMeasurements` by taking the entity as a parameter.
     */
    delete(entity: UnitOfMeasurements): DeleteRequestBuilderV4<UnitOfMeasurements>;
}
//# sourceMappingURL=UnitOfMeasurementsRequestBuilder.d.ts.map