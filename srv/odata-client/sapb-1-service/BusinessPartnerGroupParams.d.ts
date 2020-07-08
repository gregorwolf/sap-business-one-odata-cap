import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BusinessPartnerGroupParams
 */
export interface BusinessPartnerGroupParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BusinessPartnerGroupParams.build]] instead.
 */
export declare function createBusinessPartnerGroupParams(json: any): BusinessPartnerGroupParams;
/**
 * BusinessPartnerGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BusinessPartnerGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BusinessPartnerGroupParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace BusinessPartnerGroupParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BusinessPartnerGroupParams;
}
//# sourceMappingURL=BusinessPartnerGroupParams.d.ts.map