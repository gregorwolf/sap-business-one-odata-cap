import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { IndiaSacCode } from './IndiaSacCode';
/**
 * Request builder class for operations supported on the [[IndiaSacCode]] entity.
 */
export declare class IndiaSacCodeRequestBuilder extends RequestBuilder<IndiaSacCode> {
    /**
     * Returns a request builder for retrieving one `IndiaSacCode` entity based on its keys.
     * @param absEntry Key property. See [[IndiaSacCode.absEntry]].
     * @returns A request builder for creating requests to retrieve one `IndiaSacCode` entity based on its keys.
     */
    getByKey(absEntry: number): GetByKeyRequestBuilder<IndiaSacCode>;
    /**
     * Returns a request builder for querying all `IndiaSacCode` entities.
     * @returns A request builder for creating requests to retrieve all `IndiaSacCode` entities.
     */
    getAll(): GetAllRequestBuilder<IndiaSacCode>;
    /**
     * Returns a request builder for creating a `IndiaSacCode` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `IndiaSacCode`.
     */
    create(entity: IndiaSacCode): CreateRequestBuilder<IndiaSacCode>;
    /**
     * Returns a request builder for updating an entity of type `IndiaSacCode`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `IndiaSacCode`.
     */
    update(entity: IndiaSacCode): UpdateRequestBuilder<IndiaSacCode>;
    /**
     * Returns a request builder for deleting an entity of type `IndiaSacCode`.
     * @param absEntry Key property. See [[IndiaSacCode.absEntry]].
     * @returns A request builder for creating requests that delete an entity of type `IndiaSacCode`.
     */
    delete(absEntry: number): DeleteRequestBuilder<IndiaSacCode>;
    /**
     * Returns a request builder for deleting an entity of type `IndiaSacCode`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `IndiaSacCode` by taking the entity as a parameter.
     */
    delete(entity: IndiaSacCode): DeleteRequestBuilder<IndiaSacCode>;
}
//# sourceMappingURL=IndiaSacCodeRequestBuilder.d.ts.map