import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { UnitOfMeasurementGroups } from './UnitOfMeasurementGroups';
/**
 * Request builder class for operations supported on the [[UnitOfMeasurementGroups]] entity.
 */
export declare class UnitOfMeasurementGroupsRequestBuilder extends RequestBuilder<UnitOfMeasurementGroups> {
    /**
     * Returns a request builder for retrieving one `UnitOfMeasurementGroups` entity based on its keys.
     * @param absEntry Key property. See [[UnitOfMeasurementGroups.absEntry]].
     * @returns A request builder for creating requests to retrieve one `UnitOfMeasurementGroups` entity based on its keys.
     */
    getByKey(absEntry: number): GetByKeyRequestBuilder<UnitOfMeasurementGroups>;
    /**
     * Returns a request builder for querying all `UnitOfMeasurementGroups` entities.
     * @returns A request builder for creating requests to retrieve all `UnitOfMeasurementGroups` entities.
     */
    getAll(): GetAllRequestBuilder<UnitOfMeasurementGroups>;
    /**
     * Returns a request builder for creating a `UnitOfMeasurementGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `UnitOfMeasurementGroups`.
     */
    create(entity: UnitOfMeasurementGroups): CreateRequestBuilder<UnitOfMeasurementGroups>;
    /**
     * Returns a request builder for updating an entity of type `UnitOfMeasurementGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `UnitOfMeasurementGroups`.
     */
    update(entity: UnitOfMeasurementGroups): UpdateRequestBuilder<UnitOfMeasurementGroups>;
    /**
     * Returns a request builder for deleting an entity of type `UnitOfMeasurementGroups`.
     * @param absEntry Key property. See [[UnitOfMeasurementGroups.absEntry]].
     * @returns A request builder for creating requests that delete an entity of type `UnitOfMeasurementGroups`.
     */
    delete(absEntry: number): DeleteRequestBuilder<UnitOfMeasurementGroups>;
    /**
     * Returns a request builder for deleting an entity of type `UnitOfMeasurementGroups`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `UnitOfMeasurementGroups` by taking the entity as a parameter.
     */
    delete(entity: UnitOfMeasurementGroups): DeleteRequestBuilder<UnitOfMeasurementGroups>;
}
//# sourceMappingURL=UnitOfMeasurementGroupsRequestBuilder.d.ts.map