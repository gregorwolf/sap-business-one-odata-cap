import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { PredefinedTexts } from './PredefinedTexts';
/**
 * Request builder class for operations supported on the [[PredefinedTexts]] entity.
 */
export declare class PredefinedTextsRequestBuilder extends RequestBuilder<PredefinedTexts> {
    /**
     * Returns a request builder for retrieving one `PredefinedTexts` entity based on its keys.
     * @param numerator Key property. See [[PredefinedTexts.numerator]].
     * @returns A request builder for creating requests to retrieve one `PredefinedTexts` entity based on its keys.
     */
    getByKey(numerator: number): GetByKeyRequestBuilderV4<PredefinedTexts>;
    /**
     * Returns a request builder for querying all `PredefinedTexts` entities.
     * @returns A request builder for creating requests to retrieve all `PredefinedTexts` entities.
     */
    getAll(): GetAllRequestBuilderV4<PredefinedTexts>;
    /**
     * Returns a request builder for creating a `PredefinedTexts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PredefinedTexts`.
     */
    create(entity: PredefinedTexts): CreateRequestBuilderV4<PredefinedTexts>;
    /**
     * Returns a request builder for updating an entity of type `PredefinedTexts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PredefinedTexts`.
     */
    update(entity: PredefinedTexts): UpdateRequestBuilderV4<PredefinedTexts>;
    /**
     * Returns a request builder for deleting an entity of type `PredefinedTexts`.
     * @param numerator Key property. See [[PredefinedTexts.numerator]].
     * @returns A request builder for creating requests that delete an entity of type `PredefinedTexts`.
     */
    delete(numerator: number): DeleteRequestBuilderV4<PredefinedTexts>;
    /**
     * Returns a request builder for deleting an entity of type `PredefinedTexts`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PredefinedTexts` by taking the entity as a parameter.
     */
    delete(entity: PredefinedTexts): DeleteRequestBuilderV4<PredefinedTexts>;
}
//# sourceMappingURL=PredefinedTextsRequestBuilder.d.ts.map