import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * MaterialGroupParams
 */
export interface MaterialGroupParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Material Group Code.
     * @nullable
     */
    materialGroupCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[MaterialGroupParams.build]] instead.
 */
export declare function createMaterialGroupParams(json: any): MaterialGroupParams;
/**
 * MaterialGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class MaterialGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, MaterialGroupParams> {
    /**
     * Representation of the [[MaterialGroupParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialGroupParams.materialGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    materialGroupCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of MaterialGroupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace MaterialGroupParams {
    /**
     * Metadata information on all properties of the `MaterialGroupParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<MaterialGroupParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): MaterialGroupParams;
}
//# sourceMappingURL=MaterialGroupParams.d.ts.map