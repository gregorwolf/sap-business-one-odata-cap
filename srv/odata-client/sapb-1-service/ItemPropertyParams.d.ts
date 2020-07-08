import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ItemPropertyParams
 */
export interface ItemPropertyParams {
    /**
     * Number.
     * @nullable
     */
    number?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ItemPropertyParams.build]] instead.
 */
export declare function createItemPropertyParams(json: any): ItemPropertyParams;
/**
 * ItemPropertyParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ItemPropertyParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ItemPropertyParams.number]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    number: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ItemPropertyParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ItemPropertyParams;
}
//# sourceMappingURL=ItemPropertyParams.d.ts.map