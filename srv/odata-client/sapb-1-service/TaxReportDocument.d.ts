import { TaxReportFilterDocumentType } from './TaxReportFilterDocumentType';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * TaxReportDocument
 */
export interface TaxReportDocument {
    /**
     * Document Type.
     * @nullable
     */
    documentType?: TaxReportFilterDocumentType;
    /**
     * From Number.
     * @nullable
     */
    fromNumber?: number;
    /**
     * To Number.
     * @nullable
     */
    toNumber?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[TaxReportDocument.build]] instead.
 */
export declare function createTaxReportDocument(json: any): TaxReportDocument;
/**
 * TaxReportDocumentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxReportDocumentField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxReportDocument> {
    /**
     * Representation of the [[TaxReportDocument.documentType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[TaxReportDocument.fromNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fromNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxReportDocument.toNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    toNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of TaxReportDocumentField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TaxReportDocument {
    /**
     * Metadata information on all properties of the `TaxReportDocument` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TaxReportDocument>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TaxReportDocument;
}
//# sourceMappingURL=TaxReportDocument.d.ts.map