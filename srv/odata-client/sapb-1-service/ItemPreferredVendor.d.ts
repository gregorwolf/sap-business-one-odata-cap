import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ItemPreferredVendor
 */
export interface ItemPreferredVendor {
    /**
     * Bp Code.
     * @nullable
     */
    bpCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ItemPreferredVendor.build]] instead.
 */
export declare function createItemPreferredVendor(json: any): ItemPreferredVendor;
/**
 * ItemPreferredVendorField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ItemPreferredVendorField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ItemPreferredVendor.bpCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ItemPreferredVendor {
    function build(json: {
        [keys: string]: FieldType;
    }): ItemPreferredVendor;
}
//# sourceMappingURL=ItemPreferredVendor.d.ts.map