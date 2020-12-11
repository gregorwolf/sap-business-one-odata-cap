import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ChooseFromListParams
 */
export interface ChooseFromListParams {
    /**
     * Object Name.
     * @nullable
     */
    objectName?: string;
    /**
     * Field Index.
     * @nullable
     */
    fieldIndex?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ChooseFromListParams.build]] instead.
 */
export declare function createChooseFromListParams(json: any): ChooseFromListParams;
/**
 * ChooseFromListParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ChooseFromListParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ChooseFromListParams> {
    /**
     * Representation of the [[ChooseFromListParams.objectName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    objectName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ChooseFromListParams.fieldIndex]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fieldIndex: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ChooseFromListParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ChooseFromListParams {
    /**
     * Metadata information on all properties of the `ChooseFromListParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ChooseFromListParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ChooseFromListParams;
}
//# sourceMappingURL=ChooseFromListParams.d.ts.map