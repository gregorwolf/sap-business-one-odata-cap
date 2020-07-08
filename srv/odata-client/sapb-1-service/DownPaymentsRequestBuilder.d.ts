import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { DownPayments } from './DownPayments';
/**
 * Request builder class for operations supported on the [[DownPayments]] entity.
 */
export declare class DownPaymentsRequestBuilder extends RequestBuilder<DownPayments> {
    /**
     * Returns a request builder for retrieving one `DownPayments` entity based on its keys.
     * @param docEntry Key property. See [[DownPayments.docEntry]].
     * @returns A request builder for creating requests to retrieve one `DownPayments` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilder<DownPayments>;
    /**
     * Returns a request builder for querying all `DownPayments` entities.
     * @returns A request builder for creating requests to retrieve all `DownPayments` entities.
     */
    getAll(): GetAllRequestBuilder<DownPayments>;
    /**
     * Returns a request builder for creating a `DownPayments` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DownPayments`.
     */
    create(entity: DownPayments): CreateRequestBuilder<DownPayments>;
    /**
     * Returns a request builder for updating an entity of type `DownPayments`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DownPayments`.
     */
    update(entity: DownPayments): UpdateRequestBuilder<DownPayments>;
    /**
     * Returns a request builder for deleting an entity of type `DownPayments`.
     * @param docEntry Key property. See [[DownPayments.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `DownPayments`.
     */
    delete(docEntry: number): DeleteRequestBuilder<DownPayments>;
    /**
     * Returns a request builder for deleting an entity of type `DownPayments`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `DownPayments` by taking the entity as a parameter.
     */
    delete(entity: DownPayments): DeleteRequestBuilder<DownPayments>;
}
//# sourceMappingURL=DownPaymentsRequestBuilder.d.ts.map