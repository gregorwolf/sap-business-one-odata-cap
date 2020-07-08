import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
    getByKey(docEntry: number): GetByKeyRequestBuilder<BoeDocumentTypes>;
    /**
     * Returns a request builder for querying all `BoeDocumentTypes` entities.
     * @returns A request builder for creating requests to retrieve all `BoeDocumentTypes` entities.
     */
    getAll(): GetAllRequestBuilder<BoeDocumentTypes>;
    /**
     * Returns a request builder for creating a `BoeDocumentTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BoeDocumentTypes`.
     */
    create(entity: BoeDocumentTypes): CreateRequestBuilder<BoeDocumentTypes>;
    /**
     * Returns a request builder for updating an entity of type `BoeDocumentTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BoeDocumentTypes`.
     */
    update(entity: BoeDocumentTypes): UpdateRequestBuilder<BoeDocumentTypes>;
    /**
     * Returns a request builder for deleting an entity of type `BoeDocumentTypes`.
     * @param docEntry Key property. See [[BoeDocumentTypes.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `BoeDocumentTypes`.
     */
    delete(docEntry: number): DeleteRequestBuilder<BoeDocumentTypes>;
    /**
     * Returns a request builder for deleting an entity of type `BoeDocumentTypes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BoeDocumentTypes` by taking the entity as a parameter.
     */
    delete(entity: BoeDocumentTypes): DeleteRequestBuilder<BoeDocumentTypes>;
}
//# sourceMappingURL=BoeDocumentTypesRequestBuilder.d.ts.map