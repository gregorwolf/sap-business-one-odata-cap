import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * QueryCategoryParams
 */
export interface QueryCategoryParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[QueryCategoryParams.build]] instead.
 */
export declare function createQueryCategoryParams(json: any): QueryCategoryParams;
/**
 * QueryCategoryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class QueryCategoryParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[QueryCategoryParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace QueryCategoryParams {
    function build(json: {
        [keys: string]: FieldType;
    }): QueryCategoryParams;
}
//# sourceMappingURL=QueryCategoryParams.d.ts.map