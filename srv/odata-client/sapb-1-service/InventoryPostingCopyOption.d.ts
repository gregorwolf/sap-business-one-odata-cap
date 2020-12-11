import { InventoryPostingCopyOptionEnum } from './InventoryPostingCopyOptionEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * InventoryPostingCopyOption
 */
export interface InventoryPostingCopyOption {
    /**
     * Base Entry.
     * @nullable
     */
    baseEntry?: number;
    /**
     * Copy Option.
     * @nullable
     */
    copyOption?: InventoryPostingCopyOptionEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[InventoryPostingCopyOption.build]] instead.
 */
export declare function createInventoryPostingCopyOption(json: any): InventoryPostingCopyOption;
/**
 * InventoryPostingCopyOptionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InventoryPostingCopyOptionField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InventoryPostingCopyOption> {
    /**
     * Representation of the [[InventoryPostingCopyOption.baseEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingCopyOption.copyOption]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    copyOption: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of InventoryPostingCopyOptionField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace InventoryPostingCopyOption {
    /**
     * Metadata information on all properties of the `InventoryPostingCopyOption` complex type.
     */
    const _propertyMetadata: PropertyMetadata<InventoryPostingCopyOption>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): InventoryPostingCopyOption;
}
//# sourceMappingURL=InventoryPostingCopyOption.d.ts.map