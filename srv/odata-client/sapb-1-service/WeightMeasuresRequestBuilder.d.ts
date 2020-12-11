import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { WeightMeasures } from './WeightMeasures';
/**
 * Request builder class for operations supported on the [[WeightMeasures]] entity.
 */
export declare class WeightMeasuresRequestBuilder extends RequestBuilder<WeightMeasures> {
    /**
     * Returns a request builder for retrieving one `WeightMeasures` entity based on its keys.
     * @param unitCode Key property. See [[WeightMeasures.unitCode]].
     * @returns A request builder for creating requests to retrieve one `WeightMeasures` entity based on its keys.
     */
    getByKey(unitCode: number): GetByKeyRequestBuilderV4<WeightMeasures>;
    /**
     * Returns a request builder for querying all `WeightMeasures` entities.
     * @returns A request builder for creating requests to retrieve all `WeightMeasures` entities.
     */
    getAll(): GetAllRequestBuilderV4<WeightMeasures>;
    /**
     * Returns a request builder for creating a `WeightMeasures` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WeightMeasures`.
     */
    create(entity: WeightMeasures): CreateRequestBuilderV4<WeightMeasures>;
    /**
     * Returns a request builder for updating an entity of type `WeightMeasures`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WeightMeasures`.
     */
    update(entity: WeightMeasures): UpdateRequestBuilderV4<WeightMeasures>;
    /**
     * Returns a request builder for deleting an entity of type `WeightMeasures`.
     * @param unitCode Key property. See [[WeightMeasures.unitCode]].
     * @returns A request builder for creating requests that delete an entity of type `WeightMeasures`.
     */
    delete(unitCode: number): DeleteRequestBuilderV4<WeightMeasures>;
    /**
     * Returns a request builder for deleting an entity of type `WeightMeasures`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `WeightMeasures` by taking the entity as a parameter.
     */
    delete(entity: WeightMeasures): DeleteRequestBuilderV4<WeightMeasures>;
}
//# sourceMappingURL=WeightMeasuresRequestBuilder.d.ts.map