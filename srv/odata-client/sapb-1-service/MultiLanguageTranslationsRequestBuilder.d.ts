import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { MultiLanguageTranslations } from './MultiLanguageTranslations';
/**
 * Request builder class for operations supported on the [[MultiLanguageTranslations]] entity.
 */
export declare class MultiLanguageTranslationsRequestBuilder extends RequestBuilder<MultiLanguageTranslations> {
    /**
     * Returns a request builder for retrieving one `MultiLanguageTranslations` entity based on its keys.
     * @param numerator Key property. See [[MultiLanguageTranslations.numerator]].
     * @returns A request builder for creating requests to retrieve one `MultiLanguageTranslations` entity based on its keys.
     */
    getByKey(numerator: number): GetByKeyRequestBuilder<MultiLanguageTranslations>;
    /**
     * Returns a request builder for querying all `MultiLanguageTranslations` entities.
     * @returns A request builder for creating requests to retrieve all `MultiLanguageTranslations` entities.
     */
    getAll(): GetAllRequestBuilder<MultiLanguageTranslations>;
    /**
     * Returns a request builder for creating a `MultiLanguageTranslations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `MultiLanguageTranslations`.
     */
    create(entity: MultiLanguageTranslations): CreateRequestBuilder<MultiLanguageTranslations>;
    /**
     * Returns a request builder for updating an entity of type `MultiLanguageTranslations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `MultiLanguageTranslations`.
     */
    update(entity: MultiLanguageTranslations): UpdateRequestBuilder<MultiLanguageTranslations>;
    /**
     * Returns a request builder for deleting an entity of type `MultiLanguageTranslations`.
     * @param numerator Key property. See [[MultiLanguageTranslations.numerator]].
     * @returns A request builder for creating requests that delete an entity of type `MultiLanguageTranslations`.
     */
    delete(numerator: number): DeleteRequestBuilder<MultiLanguageTranslations>;
    /**
     * Returns a request builder for deleting an entity of type `MultiLanguageTranslations`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `MultiLanguageTranslations` by taking the entity as a parameter.
     */
    delete(entity: MultiLanguageTranslations): DeleteRequestBuilder<MultiLanguageTranslations>;
}
//# sourceMappingURL=MultiLanguageTranslationsRequestBuilder.d.ts.map