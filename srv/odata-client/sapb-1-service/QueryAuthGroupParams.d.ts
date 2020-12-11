import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * QueryAuthGroupParams
 */
export interface QueryAuthGroupParams {
    /**
     * Auth Group Id.
     * @nullable
     */
    authGroupId?: number;
    /**
     * Auth Group Code.
     * @nullable
     */
    authGroupCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[QueryAuthGroupParams.build]] instead.
 */
export declare function createQueryAuthGroupParams(json: any): QueryAuthGroupParams;
/**
 * QueryAuthGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class QueryAuthGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, QueryAuthGroupParams> {
    /**
     * Representation of the [[QueryAuthGroupParams.authGroupId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    authGroupId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[QueryAuthGroupParams.authGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    authGroupCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of QueryAuthGroupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace QueryAuthGroupParams {
    /**
     * Metadata information on all properties of the `QueryAuthGroupParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<QueryAuthGroupParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): QueryAuthGroupParams;
}
//# sourceMappingURL=QueryAuthGroupParams.d.ts.map