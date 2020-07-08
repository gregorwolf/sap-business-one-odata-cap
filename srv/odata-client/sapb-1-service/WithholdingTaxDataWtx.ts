/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * WithholdingTaxDataWtx
 */
export interface WithholdingTaxDataWtx {
  /**
   * Wt Amount Sys.
   * @nullable
   */
  wtAmountSys?: number;
  /**
   * Wt Amount Fc.
   * @nullable
   */
  wtAmountFc?: number;
  /**
   * Wt Amount.
   * @nullable
   */
  wtAmount?: number;
  /**
   * Withholding Type.
   * @nullable
   */
  withholdingType?: string;
  /**
   * Taxable Amountin Sys.
   * @nullable
   */
  taxableAmountinSys?: number;
  /**
   * Taxable Amount Fc.
   * @nullable
   */
  taxableAmountFc?: number;
  /**
   * Taxable Amount.
   * @nullable
   */
  taxableAmount?: number;
  /**
   * Rate.
   * @nullable
   */
  rate?: number;
  /**
   * Category.
   * @nullable
   */
  category?: string;
  /**
   * Base Type.
   * @nullable
   */
  baseType?: string;
  /**
   * Applied Wt Amount Sys.
   * @nullable
   */
  appliedWtAmountSys?: number;
  /**
   * Applied Wt Amount Fc.
   * @nullable
   */
  appliedWtAmountFc?: number;
  /**
   * Applied Wt Amount.
   * @nullable
   */
  appliedWtAmount?: number;
  /**
   * Gl Account.
   * @nullable
   */
  glAccount?: string;
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: number;
  /**
   * Base Doc Entry.
   * @nullable
   */
  baseDocEntry?: number;
  /**
   * Base Doc Line.
   * @nullable
   */
  baseDocLine?: number;
  /**
   * Base Doc Type.
   * @nullable
   */
  baseDocType?: string;
  /**
   * Wt Abs Id.
   * @nullable
   */
  wtAbsId?: string;
  /**
   * Exempt Rate.
   * @nullable
   */
  exemptRate?: number;
  /**
   * Base Net Amount Sys.
   * @nullable
   */
  baseNetAmountSys?: number;
  /**
   * Base Net Amount Fc.
   * @nullable
   */
  baseNetAmountFc?: number;
  /**
   * Base Net Amount.
   * @nullable
   */
  baseNetAmount?: number;
  /**
   * Base Vatmount Sys.
   * @nullable
   */
  baseVatmountSys?: number;
  /**
   * Base Vatmount Fc.
   * @nullable
   */
  baseVatmountFc?: number;
  /**
   * Base Vatmount.
   * @nullable
   */
  baseVatmount?: number;
  /**
   * Accum Base Amount Sys.
   * @nullable
   */
  accumBaseAmountSys?: number;
  /**
   * Accum Base Amount Fc.
   * @nullable
   */
  accumBaseAmountFc?: number;
  /**
   * Accum Base Amount.
   * @nullable
   */
  accumBaseAmount?: number;
  /**
   * Accum W Tax Amount Sys.
   * @nullable
   */
  accumWTaxAmountSys?: number;
  /**
   * Accum W Tax Amount Fc.
   * @nullable
   */
  accumWTaxAmountFc?: number;
  /**
   * Accum W Tax Amount.
   * @nullable
   */
  accumWTaxAmount?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[WithholdingTaxDataWtx.build]] instead.
 */
export function createWithholdingTaxDataWtx(json: any): WithholdingTaxDataWtx {
  return WithholdingTaxDataWtx.build(json);
}

/**
 * WithholdingTaxDataWtxField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WithholdingTaxDataWtxField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[WithholdingTaxDataWtx.wtAmountSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtAmountSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WTAmountSys', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.wtAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WTAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.wtAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WTAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.withholdingType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withholdingType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WithholdingType', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxDataWtx.taxableAmountinSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxableAmountinSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxableAmountinSys', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.taxableAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxableAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxableAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.taxableAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxableAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxableAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.rate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Rate', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.category]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  category: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Category', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxDataWtx.baseType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BaseType', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxDataWtx.appliedWtAmountSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  appliedWtAmountSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AppliedWTAmountSys', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.appliedWtAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  appliedWtAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AppliedWTAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.appliedWtAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  appliedWtAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AppliedWTAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.glAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  glAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GLAccount', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxDataWtx.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[WithholdingTaxDataWtx.baseDocEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseDocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[WithholdingTaxDataWtx.baseDocLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseDocLine', this, 'Edm.Int32');
  /**
   * Representation of the [[WithholdingTaxDataWtx.baseDocType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BaseDocType', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxDataWtx.wtAbsId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtAbsId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WTAbsId', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxDataWtx.exemptRate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exemptRate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ExemptRate', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.baseNetAmountSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseNetAmountSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseNetAmountSys', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.baseNetAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseNetAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseNetAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.baseNetAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseNetAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseNetAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.baseVatmountSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseVatmountSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseVatmountSys', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.baseVatmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseVatmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseVatmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.baseVatmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseVatmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseVatmount', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.accumBaseAmountSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumBaseAmountSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumBaseAmountSys', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.accumBaseAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumBaseAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumBaseAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.accumBaseAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumBaseAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumBaseAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.accumWTaxAmountSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumWTaxAmountSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumWTaxAmountSys', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.accumWTaxAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumWTaxAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumWTaxAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxDataWtx.accumWTaxAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumWTaxAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumWTaxAmount', this, 'Edm.Double');
}

export namespace WithholdingTaxDataWtx {
  export function build(json: { [keys: string]: FieldType }): WithholdingTaxDataWtx {
    return createComplexType(json, {
      WTAmountSys: (wtAmountSys: number) => ({ wtAmountSys: edmToTs(wtAmountSys, 'Edm.Double') }),
      WTAmountFC: (wtAmountFc: number) => ({ wtAmountFc: edmToTs(wtAmountFc, 'Edm.Double') }),
      WTAmount: (wtAmount: number) => ({ wtAmount: edmToTs(wtAmount, 'Edm.Double') }),
      WithholdingType: (withholdingType: string) => ({ withholdingType: edmToTs(withholdingType, 'Edm.String') }),
      TaxableAmountinSys: (taxableAmountinSys: number) => ({ taxableAmountinSys: edmToTs(taxableAmountinSys, 'Edm.Double') }),
      TaxableAmountFC: (taxableAmountFc: number) => ({ taxableAmountFc: edmToTs(taxableAmountFc, 'Edm.Double') }),
      TaxableAmount: (taxableAmount: number) => ({ taxableAmount: edmToTs(taxableAmount, 'Edm.Double') }),
      Rate: (rate: number) => ({ rate: edmToTs(rate, 'Edm.Double') }),
      Category: (category: string) => ({ category: edmToTs(category, 'Edm.String') }),
      BaseType: (baseType: string) => ({ baseType: edmToTs(baseType, 'Edm.String') }),
      AppliedWTAmountSys: (appliedWtAmountSys: number) => ({ appliedWtAmountSys: edmToTs(appliedWtAmountSys, 'Edm.Double') }),
      AppliedWTAmountFC: (appliedWtAmountFc: number) => ({ appliedWtAmountFc: edmToTs(appliedWtAmountFc, 'Edm.Double') }),
      AppliedWTAmount: (appliedWtAmount: number) => ({ appliedWtAmount: edmToTs(appliedWtAmount, 'Edm.Double') }),
      GLAccount: (glAccount: string) => ({ glAccount: edmToTs(glAccount, 'Edm.String') }),
      LineNum: (lineNum: number) => ({ lineNum: edmToTs(lineNum, 'Edm.Int32') }),
      BaseDocEntry: (baseDocEntry: number) => ({ baseDocEntry: edmToTs(baseDocEntry, 'Edm.Int32') }),
      BaseDocLine: (baseDocLine: number) => ({ baseDocLine: edmToTs(baseDocLine, 'Edm.Int32') }),
      BaseDocType: (baseDocType: string) => ({ baseDocType: edmToTs(baseDocType, 'Edm.String') }),
      WTAbsId: (wtAbsId: string) => ({ wtAbsId: edmToTs(wtAbsId, 'Edm.String') }),
      ExemptRate: (exemptRate: number) => ({ exemptRate: edmToTs(exemptRate, 'Edm.Double') }),
      BaseNetAmountSys: (baseNetAmountSys: number) => ({ baseNetAmountSys: edmToTs(baseNetAmountSys, 'Edm.Double') }),
      BaseNetAmountFC: (baseNetAmountFc: number) => ({ baseNetAmountFc: edmToTs(baseNetAmountFc, 'Edm.Double') }),
      BaseNetAmount: (baseNetAmount: number) => ({ baseNetAmount: edmToTs(baseNetAmount, 'Edm.Double') }),
      BaseVatmountSys: (baseVatmountSys: number) => ({ baseVatmountSys: edmToTs(baseVatmountSys, 'Edm.Double') }),
      BaseVatmountFC: (baseVatmountFc: number) => ({ baseVatmountFc: edmToTs(baseVatmountFc, 'Edm.Double') }),
      BaseVatmount: (baseVatmount: number) => ({ baseVatmount: edmToTs(baseVatmount, 'Edm.Double') }),
      AccumBaseAmountSys: (accumBaseAmountSys: number) => ({ accumBaseAmountSys: edmToTs(accumBaseAmountSys, 'Edm.Double') }),
      AccumBaseAmountFC: (accumBaseAmountFc: number) => ({ accumBaseAmountFc: edmToTs(accumBaseAmountFc, 'Edm.Double') }),
      AccumBaseAmount: (accumBaseAmount: number) => ({ accumBaseAmount: edmToTs(accumBaseAmount, 'Edm.Double') }),
      AccumWTaxAmountSys: (accumWTaxAmountSys: number) => ({ accumWTaxAmountSys: edmToTs(accumWTaxAmountSys, 'Edm.Double') }),
      AccumWTaxAmountFC: (accumWTaxAmountFc: number) => ({ accumWTaxAmountFc: edmToTs(accumWTaxAmountFc, 'Edm.Double') }),
      AccumWTaxAmount: (accumWTaxAmount: number) => ({ accumWTaxAmount: edmToTs(accumWTaxAmount, 'Edm.Double') })
    });
  }
}
