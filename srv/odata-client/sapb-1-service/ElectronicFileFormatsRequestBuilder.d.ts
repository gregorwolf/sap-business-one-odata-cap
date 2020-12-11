import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ElectronicFileFormats } from './ElectronicFileFormats';
/**
 * Request builder class for operations supported on the [[ElectronicFileFormats]] entity.
 */
export declare class ElectronicFileFormatsRequestBuilder extends RequestBuilder<ElectronicFileFormats> {
    /**
     * Returns a request builder for retrieving one `ElectronicFileFormats` entity based on its keys.
     * @param formatId Key property. See [[ElectronicFileFormats.formatId]].
     * @returns A request builder for creating requests to retrieve one `ElectronicFileFormats` entity based on its keys.
     */
    getByKey(formatId: number): GetByKeyRequestBuilderV4<ElectronicFileFormats>;
    /**
     * Returns a request builder for querying all `ElectronicFileFormats` entities.
     * @returns A request builder for creating requests to retrieve all `ElectronicFileFormats` entities.
     */
    getAll(): GetAllRequestBuilderV4<ElectronicFileFormats>;
    /**
     * Returns a request builder for creating a `ElectronicFileFormats` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ElectronicFileFormats`.
     */
    create(entity: ElectronicFileFormats): CreateRequestBuilderV4<ElectronicFileFormats>;
    /**
     * Returns a request builder for updating an entity of type `ElectronicFileFormats`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ElectronicFileFormats`.
     */
    update(entity: ElectronicFileFormats): UpdateRequestBuilderV4<ElectronicFileFormats>;
    /**
     * Returns a request builder for deleting an entity of type `ElectronicFileFormats`.
     * @param formatId Key property. See [[ElectronicFileFormats.formatId]].
     * @returns A request builder for creating requests that delete an entity of type `ElectronicFileFormats`.
     */
    delete(formatId: number): DeleteRequestBuilderV4<ElectronicFileFormats>;
    /**
     * Returns a request builder for deleting an entity of type `ElectronicFileFormats`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ElectronicFileFormats` by taking the entity as a parameter.
     */
    delete(entity: ElectronicFileFormats): DeleteRequestBuilderV4<ElectronicFileFormats>;
}
//# sourceMappingURL=ElectronicFileFormatsRequestBuilder.d.ts.map