import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { WitholdingTaxDefinition } from './WitholdingTaxDefinition';
/**
 * Request builder class for operations supported on the [[WitholdingTaxDefinition]] entity.
 */
export declare class WitholdingTaxDefinitionRequestBuilder extends RequestBuilder<WitholdingTaxDefinition> {
    /**
     * Returns a request builder for retrieving one `WitholdingTaxDefinition` entity based on its keys.
     * @param absEntry Key property. See [[WitholdingTaxDefinition.absEntry]].
     * @returns A request builder for creating requests to retrieve one `WitholdingTaxDefinition` entity based on its keys.
     */
    getByKey(absEntry: number): GetByKeyRequestBuilderV4<WitholdingTaxDefinition>;
    /**
     * Returns a request builder for querying all `WitholdingTaxDefinition` entities.
     * @returns A request builder for creating requests to retrieve all `WitholdingTaxDefinition` entities.
     */
    getAll(): GetAllRequestBuilderV4<WitholdingTaxDefinition>;
    /**
     * Returns a request builder for creating a `WitholdingTaxDefinition` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WitholdingTaxDefinition`.
     */
    create(entity: WitholdingTaxDefinition): CreateRequestBuilderV4<WitholdingTaxDefinition>;
    /**
     * Returns a request builder for updating an entity of type `WitholdingTaxDefinition`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WitholdingTaxDefinition`.
     */
    update(entity: WitholdingTaxDefinition): UpdateRequestBuilderV4<WitholdingTaxDefinition>;
    /**
     * Returns a request builder for deleting an entity of type `WitholdingTaxDefinition`.
     * @param absEntry Key property. See [[WitholdingTaxDefinition.absEntry]].
     * @returns A request builder for creating requests that delete an entity of type `WitholdingTaxDefinition`.
     */
    delete(absEntry: number): DeleteRequestBuilderV4<WitholdingTaxDefinition>;
    /**
     * Returns a request builder for deleting an entity of type `WitholdingTaxDefinition`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `WitholdingTaxDefinition` by taking the entity as a parameter.
     */
    delete(entity: WitholdingTaxDefinition): DeleteRequestBuilderV4<WitholdingTaxDefinition>;
}
//# sourceMappingURL=WitholdingTaxDefinitionRequestBuilder.d.ts.map