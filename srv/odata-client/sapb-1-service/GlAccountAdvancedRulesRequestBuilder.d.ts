import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
    getByKey(absoluteEntry: number): GetByKeyRequestBuilderV4<GlAccountAdvancedRules>;
    /**
     * Returns a request builder for querying all `GlAccountAdvancedRules` entities.
     * @returns A request builder for creating requests to retrieve all `GlAccountAdvancedRules` entities.
     */
    getAll(): GetAllRequestBuilderV4<GlAccountAdvancedRules>;
    /**
     * Returns a request builder for creating a `GlAccountAdvancedRules` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `GlAccountAdvancedRules`.
     */
    create(entity: GlAccountAdvancedRules): CreateRequestBuilderV4<GlAccountAdvancedRules>;
    /**
     * Returns a request builder for updating an entity of type `GlAccountAdvancedRules`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `GlAccountAdvancedRules`.
     */
    update(entity: GlAccountAdvancedRules): UpdateRequestBuilderV4<GlAccountAdvancedRules>;
    /**
     * Returns a request builder for deleting an entity of type `GlAccountAdvancedRules`.
     * @param absoluteEntry Key property. See [[GlAccountAdvancedRules.absoluteEntry]].
     * @returns A request builder for creating requests that delete an entity of type `GlAccountAdvancedRules`.
     */
    delete(absoluteEntry: number): DeleteRequestBuilderV4<GlAccountAdvancedRules>;
    /**
     * Returns a request builder for deleting an entity of type `GlAccountAdvancedRules`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `GlAccountAdvancedRules` by taking the entity as a parameter.
     */
    delete(entity: GlAccountAdvancedRules): DeleteRequestBuilderV4<GlAccountAdvancedRules>;
}
//# sourceMappingURL=GlAccountAdvancedRulesRequestBuilder.d.ts.map