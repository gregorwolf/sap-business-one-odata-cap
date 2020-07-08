import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * TaxReportBusinessPartner
 */
export interface TaxReportBusinessPartner {
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[TaxReportBusinessPartner.build]] instead.
 */
export declare function createTaxReportBusinessPartner(json: any): TaxReportBusinessPartner;
/**
 * TaxReportBusinessPartnerField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxReportBusinessPartnerField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TaxReportBusinessPartner.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace TaxReportBusinessPartner {
    function build(json: {
        [keys: string]: FieldType;
    }): TaxReportBusinessPartner;
}
//# sourceMappingURL=TaxReportBusinessPartner.d.ts.map