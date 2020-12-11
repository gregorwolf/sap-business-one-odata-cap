/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ProgressiveTaxLine } from './ProgressiveTaxLine';
import { WithholdingTaxCodesValueRange_Line } from './WithholdingTaxCodesValueRange_Line';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export function createWithholdingTaxCodesLine(json: any): WithholdingTaxCodesLine {
  return WithholdingTaxCodesLine.build(json);
}

/**
 * WithholdingTaxCodesLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WithholdingTaxCodesLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WithholdingTaxCodesLine> {
  /**
   * Representation of the [[WithholdingTaxCodesLine.effectivefrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectivefrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('Effectivefrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[WithholdingTaxCodesLine.rate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Rate', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxCodesLine.tdsRate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tdsRate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TDSRate', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxCodesLine.surchargeRate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  surchargeRate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SurchargeRate', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxCodesLine.cessRate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cessRate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CessRate', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxCodesLine.hscRate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  hscRate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('HSCRate', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxCodesLine.igstRate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  igstRate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('IGSTRate', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxCodesLine.cgstRate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cgstRate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CGSTRate', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxCodesLine.sgstRate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sgstRate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SGSTRate', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxCodesLine.utgstRate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  utgstRate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UTGSTRate', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxCodesLine.cessGstRate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cessGstRate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CessGSTRate', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxCodesLine.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[WithholdingTaxCodesLine.progressiveTaxLines]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  progressiveTaxLines: CollectionField<EntityT, ProgressiveTaxLine> = new CollectionField('ProgressiveTax_Lines', this, ProgressiveTaxLine);
  /**
   * Representation of the [[WithholdingTaxCodesLine.withholdingTaxCodesValueRangeLines]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withholdingTaxCodesValueRangeLines: CollectionField<EntityT, WithholdingTaxCodesValueRange_Line> = new CollectionField('WithholdingTaxCodes_ValueRange_Lines', this, WithholdingTaxCodesValueRange_Line);

  /**
   * Creates an instance of WithholdingTaxCodesLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, WithholdingTaxCodesLine);
  }
}

export namespace WithholdingTaxCodesLine {
  /**
   * Metadata information on all properties of the `WithholdingTaxCodesLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WithholdingTaxCodesLine>[] = [{
    originalName: 'Effectivefrom',
    name: 'effectivefrom',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Rate',
    name: 'rate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TDSRate',
    name: 'tdsRate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'SurchargeRate',
    name: 'surchargeRate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CessRate',
    name: 'cessRate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'HSCRate',
    name: 'hscRate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'IGSTRate',
    name: 'igstRate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CGSTRate',
    name: 'cgstRate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'SGSTRate',
    name: 'sgstRate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'UTGSTRate',
    name: 'utgstRate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CessGSTRate',
    name: 'cessGstRate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'LineNum',
    name: 'lineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ProgressiveTax_Lines',
    name: 'progressiveTaxLines',
    type: ProgressiveTaxLine,
    isCollection: true
  }, {
    originalName: 'WithholdingTaxCodes_ValueRange_Lines',
    name: 'withholdingTaxCodesValueRangeLines',
    type: WithholdingTaxCodesValueRange_Line,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | ProgressiveTaxLine | WithholdingTaxCodesValueRange_Line }): WithholdingTaxCodesLine {
    return deserializeComplexTypeV4(json, WithholdingTaxCodesLine);
  }
}
