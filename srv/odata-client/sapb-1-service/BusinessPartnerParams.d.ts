import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BusinessPartnerParams
 */
export interface BusinessPartnerParams {
    /**
     * Card Code.
     * @nullable
     */
    cardCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BusinessPartnerParams.build]] instead.
 */
export declare function createBusinessPartnerParams(json: any): BusinessPartnerParams;
/**
 * BusinessPartnerParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BusinessPartnerParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BusinessPartnerParams.cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cardCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace BusinessPartnerParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BusinessPartnerParams;
}
//# sourceMappingURL=BusinessPartnerParams.d.ts.map