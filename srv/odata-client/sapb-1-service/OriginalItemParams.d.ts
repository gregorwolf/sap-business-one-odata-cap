import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * OriginalItemParams
 */
export interface OriginalItemParams {
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Item Name.
     * @nullable
     */
    itemName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[OriginalItemParams.build]] instead.
 */
export declare function createOriginalItemParams(json: any): OriginalItemParams;
/**
 * OriginalItemParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class OriginalItemParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[OriginalItemParams.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[OriginalItemParams.itemName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace OriginalItemParams {
    function build(json: {
        [keys: string]: FieldType;
    }): OriginalItemParams;
}
//# sourceMappingURL=OriginalItemParams.d.ts.map