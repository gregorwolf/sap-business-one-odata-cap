import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * InventoryCountingParams
 */
export interface InventoryCountingParams {
    /**
     * Document Entry.
     * @nullable
     */
    documentEntry?: number;
    /**
     * Document Number.
     * @nullable
     */
    documentNumber?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[InventoryCountingParams.build]] instead.
 */
export declare function createInventoryCountingParams(json: any): InventoryCountingParams;
/**
 * InventoryCountingParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InventoryCountingParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InventoryCountingParams> {
    /**
     * Representation of the [[InventoryCountingParams.documentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingParams.documentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of InventoryCountingParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace InventoryCountingParams {
    /**
     * Metadata information on all properties of the `InventoryCountingParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<InventoryCountingParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): InventoryCountingParams;
}
//# sourceMappingURL=InventoryCountingParams.d.ts.map