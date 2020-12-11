import { TaxReportFilterDocumentType } from './TaxReportFilterDocumentType';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * TaxReportSeries
 */
export interface TaxReportSeries {
    /**
     * Document Type.
     * @nullable
     */
    documentType?: TaxReportFilterDocumentType;
    /**
     * Series Code.
     * @nullable
     */
    seriesCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[TaxReportSeries.build]] instead.
 */
export declare function createTaxReportSeries(json: any): TaxReportSeries;
/**
 * TaxReportSeriesField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxReportSeriesField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxReportSeries> {
    /**
     * Representation of the [[TaxReportSeries.documentType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[TaxReportSeries.seriesCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    seriesCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of TaxReportSeriesField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TaxReportSeries {
    /**
     * Metadata information on all properties of the `TaxReportSeries` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TaxReportSeries>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TaxReportSeries;
}
//# sourceMappingURL=TaxReportSeries.d.ts.map