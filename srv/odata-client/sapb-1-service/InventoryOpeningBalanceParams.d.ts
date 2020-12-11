import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * InventoryOpeningBalanceParams
 */
export interface InventoryOpeningBalanceParams {
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
 * @deprecated Since v1.6.0. Use [[InventoryOpeningBalanceParams.build]] instead.
 */
export declare function createInventoryOpeningBalanceParams(json: any): InventoryOpeningBalanceParams;
/**
 * InventoryOpeningBalanceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InventoryOpeningBalanceParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InventoryOpeningBalanceParams> {
    /**
     * Representation of the [[InventoryOpeningBalanceParams.documentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceParams.documentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of InventoryOpeningBalanceParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace InventoryOpeningBalanceParams {
    /**
     * Metadata information on all properties of the `InventoryOpeningBalanceParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<InventoryOpeningBalanceParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): InventoryOpeningBalanceParams;
}
//# sourceMappingURL=InventoryOpeningBalanceParams.d.ts.map