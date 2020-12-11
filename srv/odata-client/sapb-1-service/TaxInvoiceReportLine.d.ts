import { Moment } from 'moment';
import { TaxInvoiceReportLineTypeEnum } from './TaxInvoiceReportLineTypeEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * TaxInvoiceReportLine
 */
export interface TaxInvoiceReportLine {
    /**
     * Document Type.
     * @nullable
     */
    documentType?: number;
    /**
     * Document Entry.
     * @nullable
     */
    documentEntry?: number;
    /**
     * Line Type.
     * @nullable
     */
    lineType?: TaxInvoiceReportLineTypeEnum;
    /**
     * Base Amount.
     * @nullable
     */
    baseAmount?: number;
    /**
     * Tax Amount.
     * @nullable
     */
    taxAmount?: number;
    /**
     * Item Quantity.
     * @nullable
     */
    itemQuantity?: number;
    /**
     * Item No.
     * @nullable
     */
    itemNo?: string;
    /**
     * Item Description.
     * @nullable
     */
    itemDescription?: string;
    /**
     * Tax Code.
     * @nullable
     */
    taxCode?: string;
    /**
     * Document Date.
     * @nullable
     */
    documentDate?: Moment;
    /**
     * Item Price.
     * @nullable
     */
    itemPrice?: number;
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: number;
    /**
     * Currency.
     * @nullable
     */
    currency?: string;
    /**
     * Business Place.
     * @nullable
     */
    businessPlace?: number;
    /**
     * Tax Invoice Report Number.
     * @nullable
     */
    taxInvoiceReportNumber?: string;
    /**
     * Bp Code.
     * @nullable
     */
    bpCode?: string;
    /**
     * Bp Name.
     * @nullable
     */
    bpName?: string;
    /**
     * Legacy.
     * @nullable
     */
    legacy?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[TaxInvoiceReportLine.build]] instead.
 */
export declare function createTaxInvoiceReportLine(json: any): TaxInvoiceReportLine;
/**
 * TaxInvoiceReportLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxInvoiceReportLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxInvoiceReportLine> {
    /**
     * Representation of the [[TaxInvoiceReportLine.documentType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentType: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxInvoiceReportLine.documentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxInvoiceReportLine.lineType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[TaxInvoiceReportLine.baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxInvoiceReportLine.taxAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxInvoiceReportLine.itemQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxInvoiceReportLine.itemNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxInvoiceReportLine.itemDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemDescription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxInvoiceReportLine.taxCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxInvoiceReportLine.documentDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[TaxInvoiceReportLine.itemPrice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemPrice: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxInvoiceReportLine.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxInvoiceReportLine.currency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    currency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxInvoiceReportLine.businessPlace]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    businessPlace: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxInvoiceReportLine.taxInvoiceReportNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxInvoiceReportNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxInvoiceReportLine.bpCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxInvoiceReportLine.bpName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxInvoiceReportLine.legacy]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    legacy: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of TaxInvoiceReportLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TaxInvoiceReportLine {
    /**
     * Metadata information on all properties of the `TaxInvoiceReportLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TaxInvoiceReportLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TaxInvoiceReportLine;
}
//# sourceMappingURL=TaxInvoiceReportLine.d.ts.map