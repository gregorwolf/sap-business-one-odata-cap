import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ShippingTypeParams
 */
export interface ShippingTypeParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ShippingTypeParams.build]] instead.
 */
export declare function createShippingTypeParams(json: any): ShippingTypeParams;
/**
 * ShippingTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ShippingTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ShippingTypeParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ShippingTypeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ShippingTypeParams;
}
//# sourceMappingURL=ShippingTypeParams.d.ts.map