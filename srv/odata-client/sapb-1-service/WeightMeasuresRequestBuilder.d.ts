import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
    getByKey(unitCode: number): GetByKeyRequestBuilder<WeightMeasures>;
    /**
     * Returns a request builder for querying all `WeightMeasures` entities.
     * @returns A request builder for creating requests to retrieve all `WeightMeasures` entities.
     */
    getAll(): GetAllRequestBuilder<WeightMeasures>;
    /**
     * Returns a request builder for creating a `WeightMeasures` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WeightMeasures`.
     */
    create(entity: WeightMeasures): CreateRequestBuilder<WeightMeasures>;
    /**
     * Returns a request builder for updating an entity of type `WeightMeasures`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WeightMeasures`.
     */
    update(entity: WeightMeasures): UpdateRequestBuilder<WeightMeasures>;
    /**
     * Returns a request builder for deleting an entity of type `WeightMeasures`.
     * @param unitCode Key property. See [[WeightMeasures.unitCode]].
     * @returns A request builder for creating requests that delete an entity of type `WeightMeasures`.
     */
    delete(unitCode: number): DeleteRequestBuilder<WeightMeasures>;
    /**
     * Returns a request builder for deleting an entity of type `WeightMeasures`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `WeightMeasures` by taking the entity as a parameter.
     */
    delete(entity: WeightMeasures): DeleteRequestBuilder<WeightMeasures>;
}
//# sourceMappingURL=WeightMeasuresRequestBuilder.d.ts.map