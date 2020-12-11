import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * InventoryCyclesParams
 */
export interface InventoryCyclesParams {
    /**
     * Cycle Code.
     * @nullable
     */
    cycleCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[InventoryCyclesParams.build]] instead.
 */
export declare function createInventoryCyclesParams(json: any): InventoryCyclesParams;
/**
 * InventoryCyclesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InventoryCyclesParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InventoryCyclesParams> {
    /**
     * Representation of the [[InventoryCyclesParams.cycleCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cycleCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of InventoryCyclesParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace InventoryCyclesParams {
    /**
     * Metadata information on all properties of the `InventoryCyclesParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<InventoryCyclesParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): InventoryCyclesParams;
}
//# sourceMappingURL=InventoryCyclesParams.d.ts.map