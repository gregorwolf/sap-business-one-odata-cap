import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { DnfCodeSetup } from './DnfCodeSetup';
/**
 * Request builder class for operations supported on the [[DnfCodeSetup]] entity.
 */
export declare class DnfCodeSetupRequestBuilder extends RequestBuilder<DnfCodeSetup> {
    /**
     * Returns a request builder for retrieving one `DnfCodeSetup` entity based on its keys.
     * @param absEntry Key property. See [[DnfCodeSetup.absEntry]].
     * @returns A request builder for creating requests to retrieve one `DnfCodeSetup` entity based on its keys.
     */
    getByKey(absEntry: number): GetByKeyRequestBuilder<DnfCodeSetup>;
    /**
     * Returns a request builder for querying all `DnfCodeSetup` entities.
     * @returns A request builder for creating requests to retrieve all `DnfCodeSetup` entities.
     */
    getAll(): GetAllRequestBuilder<DnfCodeSetup>;
    /**
     * Returns a request builder for creating a `DnfCodeSetup` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DnfCodeSetup`.
     */
    create(entity: DnfCodeSetup): CreateRequestBuilder<DnfCodeSetup>;
    /**
     * Returns a request builder for updating an entity of type `DnfCodeSetup`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DnfCodeSetup`.
     */
    update(entity: DnfCodeSetup): UpdateRequestBuilder<DnfCodeSetup>;
    /**
     * Returns a request builder for deleting an entity of type `DnfCodeSetup`.
     * @param absEntry Key property. See [[DnfCodeSetup.absEntry]].
     * @returns A request builder for creating requests that delete an entity of type `DnfCodeSetup`.
     */
    delete(absEntry: number): DeleteRequestBuilder<DnfCodeSetup>;
    /**
     * Returns a request builder for deleting an entity of type `DnfCodeSetup`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `DnfCodeSetup` by taking the entity as a parameter.
     */
    delete(entity: DnfCodeSetup): DeleteRequestBuilder<DnfCodeSetup>;
}
//# sourceMappingURL=DnfCodeSetupRequestBuilder.d.ts.map