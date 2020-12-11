import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { BoeDocumentTypes } from './BoeDocumentTypes';
/**
 * Request builder class for operations supported on the [[BoeDocumentTypes]] entity.
 */
export declare class BoeDocumentTypesRequestBuilder extends RequestBuilder<BoeDocumentTypes> {
    /**
     * Returns a request builder for retrieving one `BoeDocumentTypes` entity based on its keys.
     * @param docEntry Key property. See [[BoeDocumentTypes.docEntry]].
     * @returns A request builder for creating requests to retrieve one `BoeDocumentTypes` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilderV4<BoeDocumentTypes>;
    /**
     * Returns a request builder for querying all `BoeDocumentTypes` entities.
     * @returns A request builder for creating requests to retrieve all `BoeDocumentTypes` entities.
     */
    getAll(): GetAllRequestBuilderV4<BoeDocumentTypes>;
    /**
     * Returns a request builder for creating a `BoeDocumentTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BoeDocumentTypes`.
     */
    create(entity: BoeDocumentTypes): CreateRequestBuilderV4<BoeDocumentTypes>;
    /**
     * Returns a request builder for updating an entity of type `BoeDocumentTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BoeDocumentTypes`.
     */
    update(entity: BoeDocumentTypes): UpdateRequestBuilderV4<BoeDocumentTypes>;
    /**
     * Returns a request builder for deleting an entity of type `BoeDocumentTypes`.
     * @param docEntry Key property. See [[BoeDocumentTypes.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `BoeDocumentTypes`.
     */
    delete(docEntry: number): DeleteRequestBuilderV4<BoeDocumentTypes>;
    /**
     * Returns a request builder for deleting an entity of type `BoeDocumentTypes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BoeDocumentTypes` by taking the entity as a parameter.
     */
    delete(entity: BoeDocumentTypes): DeleteRequestBuilderV4<BoeDocumentTypes>;
}
//# sourceMappingURL=BoeDocumentTypesRequestBuilder.d.ts.map