import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { ShippingTypes } from './ShippingTypes';
/**
 * Request builder class for operations supported on the [[ShippingTypes]] entity.
 */
export declare class ShippingTypesRequestBuilder extends RequestBuilder<ShippingTypes> {
    /**
     * Returns a request builder for retrieving one `ShippingTypes` entity based on its keys.
     * @param code Key property. See [[ShippingTypes.code]].
     * @returns A request builder for creating requests to retrieve one `ShippingTypes` entity based on its keys.
     */
    getByKey(code: number): GetByKeyRequestBuilder<ShippingTypes>;
    /**
     * Returns a request builder for querying all `ShippingTypes` entities.
     * @returns A request builder for creating requests to retrieve all `ShippingTypes` entities.
     */
    getAll(): GetAllRequestBuilder<ShippingTypes>;
    /**
     * Returns a request builder for creating a `ShippingTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ShippingTypes`.
     */
    create(entity: ShippingTypes): CreateRequestBuilder<ShippingTypes>;
    /**
     * Returns a request builder for updating an entity of type `ShippingTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ShippingTypes`.
     */
    update(entity: ShippingTypes): UpdateRequestBuilder<ShippingTypes>;
    /**
     * Returns a request builder for deleting an entity of type `ShippingTypes`.
     * @param code Key property. See [[ShippingTypes.code]].
     * @returns A request builder for creating requests that delete an entity of type `ShippingTypes`.
     */
    delete(code: number): DeleteRequestBuilder<ShippingTypes>;
    /**
     * Returns a request builder for deleting an entity of type `ShippingTypes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ShippingTypes` by taking the entity as a parameter.
     */
    delete(entity: ShippingTypes): DeleteRequestBuilder<ShippingTypes>;
}
//# sourceMappingURL=ShippingTypesRequestBuilder.d.ts.map