import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { DynamicSystemStrings } from './DynamicSystemStrings';
/**
 * Request builder class for operations supported on the [[DynamicSystemStrings]] entity.
 */
export declare class DynamicSystemStringsRequestBuilder extends RequestBuilder<DynamicSystemStrings> {
    /**
     * Returns a request builder for retrieving one `DynamicSystemStrings` entity based on its keys.
     * @param formId Key property. See [[DynamicSystemStrings.formId]].
     * @param itemId Key property. See [[DynamicSystemStrings.itemId]].
     * @param columnId Key property. See [[DynamicSystemStrings.columnId]].
     * @returns A request builder for creating requests to retrieve one `DynamicSystemStrings` entity based on its keys.
     */
    getByKey(formId: string, itemId: string, columnId: string): GetByKeyRequestBuilder<DynamicSystemStrings>;
    /**
     * Returns a request builder for querying all `DynamicSystemStrings` entities.
     * @returns A request builder for creating requests to retrieve all `DynamicSystemStrings` entities.
     */
    getAll(): GetAllRequestBuilder<DynamicSystemStrings>;
    /**
     * Returns a request builder for creating a `DynamicSystemStrings` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DynamicSystemStrings`.
     */
    create(entity: DynamicSystemStrings): CreateRequestBuilder<DynamicSystemStrings>;
    /**
     * Returns a request builder for updating an entity of type `DynamicSystemStrings`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DynamicSystemStrings`.
     */
    update(entity: DynamicSystemStrings): UpdateRequestBuilder<DynamicSystemStrings>;
    /**
     * Returns a request builder for deleting an entity of type `DynamicSystemStrings`.
     * @param formId Key property. See [[DynamicSystemStrings.formId]].
     * @param itemId Key property. See [[DynamicSystemStrings.itemId]].
     * @param columnId Key property. See [[DynamicSystemStrings.columnId]].
     * @returns A request builder for creating requests that delete an entity of type `DynamicSystemStrings`.
     */
    delete(formId: string, itemId: string, columnId: string): DeleteRequestBuilder<DynamicSystemStrings>;
    /**
     * Returns a request builder for deleting an entity of type `DynamicSystemStrings`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `DynamicSystemStrings` by taking the entity as a parameter.
     */
    delete(entity: DynamicSystemStrings): DeleteRequestBuilder<DynamicSystemStrings>;
}
//# sourceMappingURL=DynamicSystemStringsRequestBuilder.d.ts.map