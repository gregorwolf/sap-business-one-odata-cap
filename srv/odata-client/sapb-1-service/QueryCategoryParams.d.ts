import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class QueryCategoryParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, QueryCategoryParams> {
    /**
     * Representation of the [[QueryCategoryParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of QueryCategoryParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace QueryCategoryParams {
    /**
     * Metadata information on all properties of the `QueryCategoryParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<QueryCategoryParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): QueryCategoryParams;
}
//# sourceMappingURL=QueryCategoryParams.d.ts.map