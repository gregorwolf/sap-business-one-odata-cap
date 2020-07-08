/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ProgressiveTaxLine, ProgressiveTaxLineField } from './ProgressiveTaxLine';
import { WithholdingTaxCodesValueRange_Line, WithholdingTaxCodesValueRange_LineField } from './WithholdingTaxCodesValueRange_Line';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
  progressiveTaxLines?: ProgressiveTaxLine;
  /**
   * Withholding Tax Codes Value Range Lines.
   * @nullable
   */
  withholdingTaxCodesValueRangeLines?: WithholdingTaxCodesValueRange_Line;
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
export class WithholdingTaxCodesLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
  progressiveTaxLines: ProgressiveTaxLineField<EntityT> = new ProgressiveTaxLineField('ProgressiveTax_Lines', this);
  /**
   * Representation of the [[WithholdingTaxCodesLine.withholdingTaxCodesValueRangeLines]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withholdingTaxCodesValueRangeLines: WithholdingTaxCodesValueRange_LineField<EntityT> = new WithholdingTaxCodesValueRange_LineField('WithholdingTaxCodes_ValueRange_Lines', this);
}

export namespace WithholdingTaxCodesLine {
  export function build(json: { [keys: string]: FieldType | ProgressiveTaxLine | WithholdingTaxCodesValueRange_Line }): WithholdingTaxCodesLine {
    return createComplexType(json, {
      Effectivefrom: (effectivefrom: Moment) => ({ effectivefrom: edmToTs(effectivefrom, 'Edm.DateTimeOffset') }),
      Rate: (rate: number) => ({ rate: edmToTs(rate, 'Edm.Double') }),
      TDSRate: (tdsRate: number) => ({ tdsRate: edmToTs(tdsRate, 'Edm.Double') }),
      SurchargeRate: (surchargeRate: number) => ({ surchargeRate: edmToTs(surchargeRate, 'Edm.Double') }),
      CessRate: (cessRate: number) => ({ cessRate: edmToTs(cessRate, 'Edm.Double') }),
      HSCRate: (hscRate: number) => ({ hscRate: edmToTs(hscRate, 'Edm.Double') }),
      IGSTRate: (igstRate: number) => ({ igstRate: edmToTs(igstRate, 'Edm.Double') }),
      CGSTRate: (cgstRate: number) => ({ cgstRate: edmToTs(cgstRate, 'Edm.Double') }),
      SGSTRate: (sgstRate: number) => ({ sgstRate: edmToTs(sgstRate, 'Edm.Double') }),
      UTGSTRate: (utgstRate: number) => ({ utgstRate: edmToTs(utgstRate, 'Edm.Double') }),
      CessGSTRate: (cessGstRate: number) => ({ cessGstRate: edmToTs(cessGstRate, 'Edm.Double') }),
      LineNum: (lineNum: number) => ({ lineNum: edmToTs(lineNum, 'Edm.Int32') }),
      ProgressiveTax_Lines: (progressiveTaxLines: ProgressiveTaxLine) => ({ progressiveTaxLines: ProgressiveTaxLine.build(progressiveTaxLines) }),
      WithholdingTaxCodes_ValueRange_Lines: (withholdingTaxCodesValueRangeLines: WithholdingTaxCodesValueRange_Line) => ({ withholdingTaxCodesValueRangeLines: WithholdingTaxCodesValueRange_Line.build(withholdingTaxCodesValueRangeLines) })
    });
  }
}
