import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DynamicSystemStringParams
 */
export interface DynamicSystemStringParams {
    /**
     * Form Id.
     * @nullable
     */
    formId?: string;
    /**
     * Item Id.
     * @nullable
     */
    itemId?: string;
    /**
     * Column Id.
     * @nullable
     */
    columnId?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[DynamicSystemStringParams.build]] instead.
 */
export declare function createDynamicSystemStringParams(json: any): DynamicSystemStringParams;
/**
 * DynamicSystemStringParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DynamicSystemStringParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DynamicSystemStringParams> {
    /**
     * Representation of the [[DynamicSystemStringParams.formId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    formId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DynamicSystemStringParams.itemId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DynamicSystemStringParams.columnId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    columnId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of DynamicSystemStringParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DynamicSystemStringParams {
    /**
     * Metadata information on all properties of the `DynamicSystemStringParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DynamicSystemStringParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DynamicSystemStringParams;
}
//# sourceMappingURL=DynamicSystemStringParams.d.ts.map