import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { SerialNumberDetails } from './SerialNumberDetails';
/**
 * Request builder class for operations supported on the [[SerialNumberDetails]] entity.
 */
export declare class SerialNumberDetailsRequestBuilder extends RequestBuilder<SerialNumberDetails> {
    /**
     * Returns a request builder for retrieving one `SerialNumberDetails` entity based on its keys.
     * @param docEntry Key property. See [[SerialNumberDetails.docEntry]].
     * @returns A request builder for creating requests to retrieve one `SerialNumberDetails` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilderV4<SerialNumberDetails>;
    /**
     * Returns a request builder for querying all `SerialNumberDetails` entities.
     * @returns A request builder for creating requests to retrieve all `SerialNumberDetails` entities.
     */
    getAll(): GetAllRequestBuilderV4<SerialNumberDetails>;
    /**
     * Returns a request builder for creating a `SerialNumberDetails` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SerialNumberDetails`.
     */
    create(entity: SerialNumberDetails): CreateRequestBuilderV4<SerialNumberDetails>;
    /**
     * Returns a request builder for updating an entity of type `SerialNumberDetails`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SerialNumberDetails`.
     */
    update(entity: SerialNumberDetails): UpdateRequestBuilderV4<SerialNumberDetails>;
    /**
     * Returns a request builder for deleting an entity of type `SerialNumberDetails`.
     * @param docEntry Key property. See [[SerialNumberDetails.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `SerialNumberDetails`.
     */
    delete(docEntry: number): DeleteRequestBuilderV4<SerialNumberDetails>;
    /**
     * Returns a request builder for deleting an entity of type `SerialNumberDetails`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `SerialNumberDetails` by taking the entity as a parameter.
     */
    delete(entity: SerialNumberDetails): DeleteRequestBuilderV4<SerialNumberDetails>;
}
//# sourceMappingURL=SerialNumberDetailsRequestBuilder.d.ts.map