import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * MaterialRevaluationSnbParam
 */
export interface MaterialRevaluationSnbParam {
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[MaterialRevaluationSnbParam.build]] instead.
 */
export declare function createMaterialRevaluationSnbParam(json: any): MaterialRevaluationSnbParam;
/**
 * MaterialRevaluationSnbParamField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class MaterialRevaluationSnbParamField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, MaterialRevaluationSnbParam> {
    /**
     * Representation of the [[MaterialRevaluationSnbParam.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of MaterialRevaluationSnbParamField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace MaterialRevaluationSnbParam {
    /**
     * Metadata information on all properties of the `MaterialRevaluationSnbParam` complex type.
     */
    const _propertyMetadata: PropertyMetadata<MaterialRevaluationSnbParam>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): MaterialRevaluationSnbParam;
}
//# sourceMappingURL=MaterialRevaluationSnbParam.d.ts.map