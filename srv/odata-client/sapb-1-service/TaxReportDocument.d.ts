import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * TaxReportDocument
 */
export interface TaxReportDocument {
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
export declare class TaxReportDocumentField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace TaxReportDocument {
    function build(json: {
        [keys: string]: FieldType;
    }): TaxReportDocument;
}
//# sourceMappingURL=TaxReportDocument.d.ts.map