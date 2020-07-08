import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { ValueMapping } from './ValueMapping';
/**
 * Request builder class for operations supported on the [[ValueMapping]] entity.
 */
export declare class ValueMappingRequestBuilder extends RequestBuilder<ValueMapping> {
    /**
     * Returns a request builder for retrieving one `ValueMapping` entity based on its keys.
     * @param absEntry Key property. See [[ValueMapping.absEntry]].
     * @returns A request builder for creating requests to retrieve one `ValueMapping` entity based on its keys.
     */
    getByKey(absEntry: number): GetByKeyRequestBuilder<ValueMapping>;
    /**
     * Returns a request builder for querying all `ValueMapping` entities.
     * @returns A request builder for creating requests to retrieve all `ValueMapping` entities.
     */
    getAll(): GetAllRequestBuilder<ValueMapping>;
    /**
     * Returns a request builder for creating a `ValueMapping` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ValueMapping`.
     */
    create(entity: ValueMapping): CreateRequestBuilder<ValueMapping>;
    /**
     * Returns a request builder for updating an entity of type `ValueMapping`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ValueMapping`.
     */
    update(entity: ValueMapping): UpdateRequestBuilder<ValueMapping>;
    /**
     * Returns a request builder for deleting an entity of type `ValueMapping`.
     * @param absEntry Key property. See [[ValueMapping.absEntry]].
     * @returns A request builder for creating requests that delete an entity of type `ValueMapping`.
     */
    delete(absEntry: number): DeleteRequestBuilder<ValueMapping>;
    /**
     * Returns a request builder for deleting an entity of type `ValueMapping`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ValueMapping` by taking the entity as a parameter.
     */
    delete(entity: ValueMapping): DeleteRequestBuilder<ValueMapping>;
}
//# sourceMappingURL=ValueMappingRequestBuilder.d.ts.map