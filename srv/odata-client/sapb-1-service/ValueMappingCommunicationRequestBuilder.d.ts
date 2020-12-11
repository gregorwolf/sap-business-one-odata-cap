import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ValueMappingCommunication } from './ValueMappingCommunication';
/**
 * Request builder class for operations supported on the [[ValueMappingCommunication]] entity.
 */
export declare class ValueMappingCommunicationRequestBuilder extends RequestBuilder<ValueMappingCommunication> {
    /**
     * Returns a request builder for retrieving one `ValueMappingCommunication` entity based on its keys.
     * @param absEntry Key property. See [[ValueMappingCommunication.absEntry]].
     * @returns A request builder for creating requests to retrieve one `ValueMappingCommunication` entity based on its keys.
     */
    getByKey(absEntry: number): GetByKeyRequestBuilderV4<ValueMappingCommunication>;
    /**
     * Returns a request builder for querying all `ValueMappingCommunication` entities.
     * @returns A request builder for creating requests to retrieve all `ValueMappingCommunication` entities.
     */
    getAll(): GetAllRequestBuilderV4<ValueMappingCommunication>;
    /**
     * Returns a request builder for creating a `ValueMappingCommunication` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ValueMappingCommunication`.
     */
    create(entity: ValueMappingCommunication): CreateRequestBuilderV4<ValueMappingCommunication>;
    /**
     * Returns a request builder for updating an entity of type `ValueMappingCommunication`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ValueMappingCommunication`.
     */
    update(entity: ValueMappingCommunication): UpdateRequestBuilderV4<ValueMappingCommunication>;
    /**
     * Returns a request builder for deleting an entity of type `ValueMappingCommunication`.
     * @param absEntry Key property. See [[ValueMappingCommunication.absEntry]].
     * @returns A request builder for creating requests that delete an entity of type `ValueMappingCommunication`.
     */
    delete(absEntry: number): DeleteRequestBuilderV4<ValueMappingCommunication>;
    /**
     * Returns a request builder for deleting an entity of type `ValueMappingCommunication`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ValueMappingCommunication` by taking the entity as a parameter.
     */
    delete(entity: ValueMappingCommunication): DeleteRequestBuilderV4<ValueMappingCommunication>;
}
//# sourceMappingURL=ValueMappingCommunicationRequestBuilder.d.ts.map