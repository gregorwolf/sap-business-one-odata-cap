import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { BlanketAgreements } from './BlanketAgreements';
/**
 * Request builder class for operations supported on the [[BlanketAgreements]] entity.
 */
export declare class BlanketAgreementsRequestBuilder extends RequestBuilder<BlanketAgreements> {
    /**
     * Returns a request builder for retrieving one `BlanketAgreements` entity based on its keys.
     * @param agreementNo Key property. See [[BlanketAgreements.agreementNo]].
     * @returns A request builder for creating requests to retrieve one `BlanketAgreements` entity based on its keys.
     */
    getByKey(agreementNo: number): GetByKeyRequestBuilder<BlanketAgreements>;
    /**
     * Returns a request builder for querying all `BlanketAgreements` entities.
     * @returns A request builder for creating requests to retrieve all `BlanketAgreements` entities.
     */
    getAll(): GetAllRequestBuilder<BlanketAgreements>;
    /**
     * Returns a request builder for creating a `BlanketAgreements` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BlanketAgreements`.
     */
    create(entity: BlanketAgreements): CreateRequestBuilder<BlanketAgreements>;
    /**
     * Returns a request builder for updating an entity of type `BlanketAgreements`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BlanketAgreements`.
     */
    update(entity: BlanketAgreements): UpdateRequestBuilder<BlanketAgreements>;
    /**
     * Returns a request builder for deleting an entity of type `BlanketAgreements`.
     * @param agreementNo Key property. See [[BlanketAgreements.agreementNo]].
     * @returns A request builder for creating requests that delete an entity of type `BlanketAgreements`.
     */
    delete(agreementNo: number): DeleteRequestBuilder<BlanketAgreements>;
    /**
     * Returns a request builder for deleting an entity of type `BlanketAgreements`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BlanketAgreements` by taking the entity as a parameter.
     */
    delete(entity: BlanketAgreements): DeleteRequestBuilder<BlanketAgreements>;
}
//# sourceMappingURL=BlanketAgreementsRequestBuilder.d.ts.map