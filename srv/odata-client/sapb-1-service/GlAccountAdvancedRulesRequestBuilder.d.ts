import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { GlAccountAdvancedRules } from './GlAccountAdvancedRules';
/**
 * Request builder class for operations supported on the [[GlAccountAdvancedRules]] entity.
 */
export declare class GlAccountAdvancedRulesRequestBuilder extends RequestBuilder<GlAccountAdvancedRules> {
    /**
     * Returns a request builder for retrieving one `GlAccountAdvancedRules` entity based on its keys.
     * @param absoluteEntry Key property. See [[GlAccountAdvancedRules.absoluteEntry]].
     * @returns A request builder for creating requests to retrieve one `GlAccountAdvancedRules` entity based on its keys.
     */
    getByKey(absoluteEntry: number): GetByKeyRequestBuilder<GlAccountAdvancedRules>;
    /**
     * Returns a request builder for querying all `GlAccountAdvancedRules` entities.
     * @returns A request builder for creating requests to retrieve all `GlAccountAdvancedRules` entities.
     */
    getAll(): GetAllRequestBuilder<GlAccountAdvancedRules>;
    /**
     * Returns a request builder for creating a `GlAccountAdvancedRules` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `GlAccountAdvancedRules`.
     */
    create(entity: GlAccountAdvancedRules): CreateRequestBuilder<GlAccountAdvancedRules>;
    /**
     * Returns a request builder for updating an entity of type `GlAccountAdvancedRules`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `GlAccountAdvancedRules`.
     */
    update(entity: GlAccountAdvancedRules): UpdateRequestBuilder<GlAccountAdvancedRules>;
    /**
     * Returns a request builder for deleting an entity of type `GlAccountAdvancedRules`.
     * @param absoluteEntry Key property. See [[GlAccountAdvancedRules.absoluteEntry]].
     * @returns A request builder for creating requests that delete an entity of type `GlAccountAdvancedRules`.
     */
    delete(absoluteEntry: number): DeleteRequestBuilder<GlAccountAdvancedRules>;
    /**
     * Returns a request builder for deleting an entity of type `GlAccountAdvancedRules`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `GlAccountAdvancedRules` by taking the entity as a parameter.
     */
    delete(entity: GlAccountAdvancedRules): DeleteRequestBuilder<GlAccountAdvancedRules>;
}
//# sourceMappingURL=GlAccountAdvancedRulesRequestBuilder.d.ts.map