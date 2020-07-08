import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BusinessPlaceParams
 */
export interface BusinessPlaceParams {
    /**
     * Bplid.
     * @nullable
     */
    bplid?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BusinessPlaceParams.build]] instead.
 */
export declare function createBusinessPlaceParams(json: any): BusinessPlaceParams;
/**
 * BusinessPlaceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BusinessPlaceParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BusinessPlaceParams.bplid]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bplid: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace BusinessPlaceParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BusinessPlaceParams;
}
//# sourceMappingURL=BusinessPlaceParams.d.ts.map