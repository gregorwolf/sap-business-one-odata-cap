import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ReportFilter } from './ReportFilter';
/**
 * Request builder class for operations supported on the [[ReportFilter]] entity.
 */
export declare class ReportFilterRequestBuilder extends RequestBuilder<ReportFilter> {
    /**
     * Returns a request builder for retrieving one `ReportFilter` entity based on its keys.
     * @param code Key property. See [[ReportFilter.code]].
     * @returns A request builder for creating requests to retrieve one `ReportFilter` entity based on its keys.
     */
    getByKey(code: number): GetByKeyRequestBuilderV4<ReportFilter>;
    /**
     * Returns a request builder for querying all `ReportFilter` entities.
     * @returns A request builder for creating requests to retrieve all `ReportFilter` entities.
     */
    getAll(): GetAllRequestBuilderV4<ReportFilter>;
    /**
     * Returns a request builder for creating a `ReportFilter` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ReportFilter`.
     */
    create(entity: ReportFilter): CreateRequestBuilderV4<ReportFilter>;
    /**
     * Returns a request builder for updating an entity of type `ReportFilter`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ReportFilter`.
     */
    update(entity: ReportFilter): UpdateRequestBuilderV4<ReportFilter>;
    /**
     * Returns a request builder for deleting an entity of type `ReportFilter`.
     * @param code Key property. See [[ReportFilter.code]].
     * @returns A request builder for creating requests that delete an entity of type `ReportFilter`.
     */
    delete(code: number): DeleteRequestBuilderV4<ReportFilter>;
    /**
     * Returns a request builder for deleting an entity of type `ReportFilter`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ReportFilter` by taking the entity as a parameter.
     */
    delete(entity: ReportFilter): DeleteRequestBuilderV4<ReportFilter>;
}
//# sourceMappingURL=ReportFilterRequestBuilder.d.ts.map