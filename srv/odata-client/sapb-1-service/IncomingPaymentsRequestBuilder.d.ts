import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { IncomingPayments } from './IncomingPayments';
/**
 * Request builder class for operations supported on the [[IncomingPayments]] entity.
 */
export declare class IncomingPaymentsRequestBuilder extends RequestBuilder<IncomingPayments> {
    /**
     * Returns a request builder for retrieving one `IncomingPayments` entity based on its keys.
     * @param docEntry Key property. See [[IncomingPayments.docEntry]].
     * @returns A request builder for creating requests to retrieve one `IncomingPayments` entity based on its keys.
     */
    getByKey(docEntry: number): GetByKeyRequestBuilderV4<IncomingPayments>;
    /**
     * Returns a request builder for querying all `IncomingPayments` entities.
     * @returns A request builder for creating requests to retrieve all `IncomingPayments` entities.
     */
    getAll(): GetAllRequestBuilderV4<IncomingPayments>;
    /**
     * Returns a request builder for creating a `IncomingPayments` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `IncomingPayments`.
     */
    create(entity: IncomingPayments): CreateRequestBuilderV4<IncomingPayments>;
    /**
     * Returns a request builder for updating an entity of type `IncomingPayments`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `IncomingPayments`.
     */
    update(entity: IncomingPayments): UpdateRequestBuilderV4<IncomingPayments>;
    /**
     * Returns a request builder for deleting an entity of type `IncomingPayments`.
     * @param docEntry Key property. See [[IncomingPayments.docEntry]].
     * @returns A request builder for creating requests that delete an entity of type `IncomingPayments`.
     */
    delete(docEntry: number): DeleteRequestBuilderV4<IncomingPayments>;
    /**
     * Returns a request builder for deleting an entity of type `IncomingPayments`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `IncomingPayments` by taking the entity as a parameter.
     */
    delete(entity: IncomingPayments): DeleteRequestBuilderV4<IncomingPayments>;
}
//# sourceMappingURL=IncomingPaymentsRequestBuilder.d.ts.map