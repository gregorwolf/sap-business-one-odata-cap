import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { LegalData } from './LegalData';
/**
 * Request builder class for operations supported on the [[LegalData]] entity.
 */
export declare class LegalDataRequestBuilder extends RequestBuilder<LegalData> {
    /**
     * Returns a request builder for retrieving one `LegalData` entity based on its keys.
     * @param docEntry Key property. See [[LegalData.docEntry]].
     * @returns A request builder for creating requests to retrieve one `LegalData` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilderV4<LegalData>;
    /**
     * Returns a request builder for querying all `LegalData` entities.
     * @returns A request builder for creating requests to retrieve all `LegalData` entities.
     */
    getAll(): GetAllRequestBuilderV4<LegalData>;
    /**
     * Returns a request builder for creating a `LegalData` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `LegalData`.
     */
    create(entity: LegalData): CreateRequestBuilderV4<LegalData>;
    /**
     * Returns a request builder for updating an entity of type `LegalData`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `LegalData`.
     */
    update(entity: LegalData): UpdateRequestBuilderV4<LegalData>;
    /**
     * Returns a request builder for deleting an entity of type `LegalData`.
     * @param docEntry Key property. See [[LegalData.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `LegalData`.
     */
    delete(docEntry: number): DeleteRequestBuilderV4<LegalData>;
    /**
     * Returns a request builder for deleting an entity of type `LegalData`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `LegalData` by taking the entity as a parameter.
     */
    delete(entity: LegalData): DeleteRequestBuilderV4<LegalData>;
}
//# sourceMappingURL=LegalDataRequestBuilder.d.ts.map