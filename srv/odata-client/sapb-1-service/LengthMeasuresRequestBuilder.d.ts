import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { LengthMeasures } from './LengthMeasures';
/**
 * Request builder class for operations supported on the [[LengthMeasures]] entity.
 */
export declare class LengthMeasuresRequestBuilder extends RequestBuilder<LengthMeasures> {
    /**
     * Returns a request builder for retrieving one `LengthMeasures` entity based on its keys.
     * @param unitCode Key property. See [[LengthMeasures.unitCode]].
     * @returns A request builder for creating requests to retrieve one `LengthMeasures` entity based on its keys.
     */
    getByKey(unitCode: number): GetByKeyRequestBuilder<LengthMeasures>;
    /**
     * Returns a request builder for querying all `LengthMeasures` entities.
     * @returns A request builder for creating requests to retrieve all `LengthMeasures` entities.
     */
    getAll(): GetAllRequestBuilder<LengthMeasures>;
    /**
     * Returns a request builder for creating a `LengthMeasures` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `LengthMeasures`.
     */
    create(entity: LengthMeasures): CreateRequestBuilder<LengthMeasures>;
    /**
     * Returns a request builder for updating an entity of type `LengthMeasures`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `LengthMeasures`.
     */
    update(entity: LengthMeasures): UpdateRequestBuilder<LengthMeasures>;
    /**
     * Returns a request builder for deleting an entity of type `LengthMeasures`.
     * @param unitCode Key property. See [[LengthMeasures.unitCode]].
     * @returns A request builder for creating requests that delete an entity of type `LengthMeasures`.
     */
    delete(unitCode: number): DeleteRequestBuilder<LengthMeasures>;
    /**
     * Returns a request builder for deleting an entity of type `LengthMeasures`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `LengthMeasures` by taking the entity as a parameter.
     */
    delete(entity: LengthMeasures): DeleteRequestBuilder<LengthMeasures>;
}
//# sourceMappingURL=LengthMeasuresRequestBuilder.d.ts.map