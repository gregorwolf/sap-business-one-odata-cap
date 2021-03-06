import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ReportTypes } from './ReportTypes';
/**
 * Request builder class for operations supported on the [[ReportTypes]] entity.
 */
export declare class ReportTypesRequestBuilder extends RequestBuilder<ReportTypes> {
    /**
     * Returns a request builder for retrieving one `ReportTypes` entity based on its keys.
     * @param typeCode Key property. See [[ReportTypes.typeCode]].
     * @returns A request builder for creating requests to retrieve one `ReportTypes` entity based on its keys.
     */
    getByKey(typeCode: string): GetByKeyRequestBuilderV4<ReportTypes>;
    /**
     * Returns a request builder for querying all `ReportTypes` entities.
     * @returns A request builder for creating requests to retrieve all `ReportTypes` entities.
     */
    getAll(): GetAllRequestBuilderV4<ReportTypes>;
    /**
     * Returns a request builder for creating a `ReportTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ReportTypes`.
     */
    create(entity: ReportTypes): CreateRequestBuilderV4<ReportTypes>;
    /**
     * Returns a request builder for updating an entity of type `ReportTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ReportTypes`.
     */
    update(entity: ReportTypes): UpdateRequestBuilderV4<ReportTypes>;
    /**
     * Returns a request builder for deleting an entity of type `ReportTypes`.
     * @param typeCode Key property. See [[ReportTypes.typeCode]].
     * @returns A request builder for creating requests that delete an entity of type `ReportTypes`.
     */
    delete(typeCode: string): DeleteRequestBuilderV4<ReportTypes>;
    /**
     * Returns a request builder for deleting an entity of type `ReportTypes`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ReportTypes` by taking the entity as a parameter.
     */
    delete(entity: ReportTypes): DeleteRequestBuilderV4<ReportTypes>;
}
//# sourceMappingURL=ReportTypesRequestBuilder.d.ts.map