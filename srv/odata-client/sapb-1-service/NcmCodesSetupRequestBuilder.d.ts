import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { NcmCodesSetup } from './NcmCodesSetup';
/**
 * Request builder class for operations supported on the [[NcmCodesSetup]] entity.
 */
export declare class NcmCodesSetupRequestBuilder extends RequestBuilder<NcmCodesSetup> {
    /**
     * Returns a request builder for retrieving one `NcmCodesSetup` entity based on its keys.
     * @param absEntry Key property. See [[NcmCodesSetup.absEntry]].
     * @returns A request builder for creating requests to retrieve one `NcmCodesSetup` entity based on its keys.
     */
    getByKey(absEntry: number): GetByKeyRequestBuilderV4<NcmCodesSetup>;
    /**
     * Returns a request builder for querying all `NcmCodesSetup` entities.
     * @returns A request builder for creating requests to retrieve all `NcmCodesSetup` entities.
     */
    getAll(): GetAllRequestBuilderV4<NcmCodesSetup>;
    /**
     * Returns a request builder for creating a `NcmCodesSetup` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `NcmCodesSetup`.
     */
    create(entity: NcmCodesSetup): CreateRequestBuilderV4<NcmCodesSetup>;
    /**
     * Returns a request builder for updating an entity of type `NcmCodesSetup`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `NcmCodesSetup`.
     */
    update(entity: NcmCodesSetup): UpdateRequestBuilderV4<NcmCodesSetup>;
    /**
     * Returns a request builder for deleting an entity of type `NcmCodesSetup`.
     * @param absEntry Key property. See [[NcmCodesSetup.absEntry]].
     * @returns A request builder for creating requests that delete an entity of type `NcmCodesSetup`.
     */
    delete(absEntry: number): DeleteRequestBuilderV4<NcmCodesSetup>;
    /**
     * Returns a request builder for deleting an entity of type `NcmCodesSetup`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `NcmCodesSetup` by taking the entity as a parameter.
     */
    delete(entity: NcmCodesSetup): DeleteRequestBuilderV4<NcmCodesSetup>;
}
//# sourceMappingURL=NcmCodesSetupRequestBuilder.d.ts.map