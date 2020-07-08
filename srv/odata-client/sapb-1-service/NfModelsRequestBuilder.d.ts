import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { NfModels } from './NfModels';
/**
 * Request builder class for operations supported on the [[NfModels]] entity.
 */
export declare class NfModelsRequestBuilder extends RequestBuilder<NfModels> {
    /**
     * Returns a request builder for retrieving one `NfModels` entity based on its keys.
     * @param absEntry Key property. See [[NfModels.absEntry]].
     * @returns A request builder for creating requests to retrieve one `NfModels` entity based on its keys.
     */
    getByKey(absEntry: string): GetByKeyRequestBuilder<NfModels>;
    /**
     * Returns a request builder for querying all `NfModels` entities.
     * @returns A request builder for creating requests to retrieve all `NfModels` entities.
     */
    getAll(): GetAllRequestBuilder<NfModels>;
    /**
     * Returns a request builder for creating a `NfModels` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `NfModels`.
     */
    create(entity: NfModels): CreateRequestBuilder<NfModels>;
    /**
     * Returns a request builder for updating an entity of type `NfModels`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `NfModels`.
     */
    update(entity: NfModels): UpdateRequestBuilder<NfModels>;
    /**
     * Returns a request builder for deleting an entity of type `NfModels`.
     * @param absEntry Key property. See [[NfModels.absEntry]].
     * @returns A request builder for creating requests that delete an entity of type `NfModels`.
     */
    delete(absEntry: string): DeleteRequestBuilder<NfModels>;
    /**
     * Returns a request builder for deleting an entity of type `NfModels`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `NfModels` by taking the entity as a parameter.
     */
    delete(entity: NfModels): DeleteRequestBuilder<NfModels>;
}
//# sourceMappingURL=NfModelsRequestBuilder.d.ts.map