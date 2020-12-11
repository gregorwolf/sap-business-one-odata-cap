import { Moment } from 'moment';
import { ProgressiveTaxLine } from './ProgressiveTaxLine';
import { WithholdingTaxCodesValueRange_Line } from './WithholdingTaxCodesValueRange_Line';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * WithholdingTaxCodesLine
 */
export interface WithholdingTaxCodesLine {
    /**
     * Effectivefrom.
     * @nullable
     */
    effectivefrom?: Moment;
    /**
     * Rate.
     * @nullable
     */
    rate?: number;
    /**
     * Tds Rate.
     * @nullable
     */
    tdsRate?: number;
    /**
     * Surcharge Rate.
     * @nullable
     */
    surchargeRate?: number;
    /**
     * Cess Rate.
     * @nullable
     */
    cessRate?: number;
    /**
     * Hsc Rate.
     * @nullable
     */
    hscRate?: number;
    /**
     * Igst Rate.
     * @nullable
     */
    igstRate?: number;
    /**
     * Cgst Rate.
     * @nullable
     */
    cgstRate?: number;
    /**
     * Sgst Rate.
     * @nullable
     */
    sgstRate?: number;
    /**
     * Utgst Rate.
     * @nullable
     */
    utgstRate?: number;
    /**
     * Cess Gst Rate.
     * @nullable
     */
    cessGstRate?: number;
    /**
     * Line Num.
     * @nullable
     */
    lineNum?: number;
    /**
     * Progressive Tax Lines.
     * @nullable
     */
    progressiveTaxLines?: ProgressiveTaxLine[];
    /**
     * Withholding Tax Codes Value Range Lines.
     * @nullable
     */
    withholdingTaxCodesValueRangeLines?: WithholdingTaxCodesValueRange_Line[];
}
/**
 * @deprecated Since v1.6.0. Use [[WithholdingTaxCodesLine.build]] instead.
 */
export declare function createWithholdingTaxCodesLine(json: any): WithholdingTaxCodesLine;
/**
 * WithholdingTaxCodesLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WithholdingTaxCodesLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WithholdingTaxCodesLine> {
    /**
     * Representation of the [[WithholdingTaxCodesLine.effectivefrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    effectivefrom: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCodesLine.rate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCodesLine.tdsRate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    tdsRate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCodesLine.surchargeRate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    surchargeRate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCodesLine.cessRate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cessRate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCodesLine.hscRate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    hscRate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCodesLine.igstRate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    igstRate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCodesLine.cgstRate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cgstRate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCodesLine.sgstRate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sgstRate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCodesLine.utgstRate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    utgstRate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCodesLine.cessGstRate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cessGstRate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCodesLine.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCodesLine.progressiveTaxLines]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    progressiveTaxLines: CollectionField<EntityT, ProgressiveTaxLine>;
    /**
     * Representation of the [[WithholdingTaxCodesLine.withholdingTaxCodesValueRangeLines]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    withholdingTaxCodesValueRangeLines: CollectionField<EntityT, WithholdingTaxCodesValueRange_Line>;
    /**
     * Creates an instance of WithholdingTaxCodesLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace WithholdingTaxCodesLine {
    /**
     * Metadata information on all properties of the `WithholdingTaxCodesLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<WithholdingTaxCodesLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | ProgressiveTaxLine | WithholdingTaxCodesValueRange_Line;
    }): WithholdingTaxCodesLine;
}
//# sourceMappingURL=WithholdingTaxCodesLine.d.ts.map