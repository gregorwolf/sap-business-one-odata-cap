import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * TaxInvoiceReportParams
 */
export interface TaxInvoiceReportParams {
    /**
     * Tax Invoice Report Number.
     * @nullable
     */
    taxInvoiceReportNumber?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[TaxInvoiceReportParams.build]] instead.
 */
export declare function createTaxInvoiceReportParams(json: any): TaxInvoiceReportParams;
/**
 * TaxInvoiceReportParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxInvoiceReportParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxInvoiceReportParams> {
    /**
     * Representation of the [[TaxInvoiceReportParams.taxInvoiceReportNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxInvoiceReportNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of TaxInvoiceReportParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TaxInvoiceReportParams {
    /**
     * Metadata information on all properties of the `TaxInvoiceReportParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TaxInvoiceReportParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TaxInvoiceReportParams;
}
//# sourceMappingURL=TaxInvoiceReportParams.d.ts.map