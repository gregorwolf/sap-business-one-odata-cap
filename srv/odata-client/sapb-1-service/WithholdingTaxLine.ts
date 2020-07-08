/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * WithholdingTaxLine
 */
export interface WithholdingTaxLine {
  /**
   * Wt Code.
   * @nullable
   */
  wtCode?: string;
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
   * Rounding Type.
   * @nullable
   */
  roundingType?: string;
  /**
   * Rate.
   * @nullable
   */
  rate?: number;
  /**
   * Criteria.
   * @nullable
   */
  criteria?: string;
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
  baseDocType?: number;
  /**
   * Base Document Reference.
   * @nullable
   */
  baseDocumentReference?: number;
  /**
   * Target Abs Entry.
   * @nullable
   */
  targetAbsEntry?: number;
  /**
   * Target Document Type.
   * @nullable
   */
  targetDocumentType?: number;
  /**
   * Cst Code Incoming.
   * @nullable
   */
  cstCodeIncoming?: string;
  /**
   * Cst Code Outgoing.
   * @nullable
   */
  cstCodeOutgoing?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[WithholdingTaxLine.build]] instead.
 */
export function createWithholdingTaxLine(json: any): WithholdingTaxLine {
  return WithholdingTaxLine.build(json);
}

/**
 * WithholdingTaxLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WithholdingTaxLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[WithholdingTaxLine.wtCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WTCode', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxLine.wtAmountSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtAmountSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WTAmountSys', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxLine.wtAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WTAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxLine.wtAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WTAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxLine.withholdingType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withholdingType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WithholdingType', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxLine.taxableAmountinSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxableAmountinSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxableAmountinSys', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxLine.taxableAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxableAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxableAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxLine.taxableAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxableAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxableAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxLine.roundingType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  roundingType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('RoundingType', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxLine.rate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Rate', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxLine.criteria]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  criteria: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Criteria', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxLine.category]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  category: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Category', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxLine.baseType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BaseType', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxLine.appliedWtAmountSys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  appliedWtAmountSys: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AppliedWTAmountSys', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxLine.appliedWtAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  appliedWtAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AppliedWTAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxLine.appliedWtAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  appliedWtAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AppliedWTAmount', this, 'Edm.Double');
  /**
   * Representation of the [[WithholdingTaxLine.glAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  glAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GLAccount', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxLine.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[WithholdingTaxLine.baseDocEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseDocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[WithholdingTaxLine.baseDocLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseDocLine', this, 'Edm.Int32');
  /**
   * Representation of the [[WithholdingTaxLine.baseDocType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseDocType', this, 'Edm.Int32');
  /**
   * Representation of the [[WithholdingTaxLine.baseDocumentReference]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocumentReference: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseDocumentReference', this, 'Edm.Int32');
  /**
   * Representation of the [[WithholdingTaxLine.targetAbsEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetAbsEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TargetAbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[WithholdingTaxLine.targetDocumentType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetDocumentType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TargetDocumentType', this, 'Edm.Int32');
  /**
   * Representation of the [[WithholdingTaxLine.cstCodeIncoming]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cstCodeIncoming: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CSTCodeIncoming', this, 'Edm.String');
  /**
   * Representation of the [[WithholdingTaxLine.cstCodeOutgoing]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cstCodeOutgoing: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CSTCodeOutgoing', this, 'Edm.String');
}

export namespace WithholdingTaxLine {
  export function build(json: { [keys: string]: FieldType }): WithholdingTaxLine {
    return createComplexType(json, {
      WTCode: (wtCode: string) => ({ wtCode: edmToTs(wtCode, 'Edm.String') }),
      WTAmountSys: (wtAmountSys: number) => ({ wtAmountSys: edmToTs(wtAmountSys, 'Edm.Double') }),
      WTAmountFC: (wtAmountFc: number) => ({ wtAmountFc: edmToTs(wtAmountFc, 'Edm.Double') }),
      WTAmount: (wtAmount: number) => ({ wtAmount: edmToTs(wtAmount, 'Edm.Double') }),
      WithholdingType: (withholdingType: string) => ({ withholdingType: edmToTs(withholdingType, 'Edm.String') }),
      TaxableAmountinSys: (taxableAmountinSys: number) => ({ taxableAmountinSys: edmToTs(taxableAmountinSys, 'Edm.Double') }),
      TaxableAmountFC: (taxableAmountFc: number) => ({ taxableAmountFc: edmToTs(taxableAmountFc, 'Edm.Double') }),
      TaxableAmount: (taxableAmount: number) => ({ taxableAmount: edmToTs(taxableAmount, 'Edm.Double') }),
      RoundingType: (roundingType: string) => ({ roundingType: edmToTs(roundingType, 'Edm.String') }),
      Rate: (rate: number) => ({ rate: edmToTs(rate, 'Edm.Double') }),
      Criteria: (criteria: string) => ({ criteria: edmToTs(criteria, 'Edm.String') }),
      Category: (category: string) => ({ category: edmToTs(category, 'Edm.String') }),
      BaseType: (baseType: string) => ({ baseType: edmToTs(baseType, 'Edm.String') }),
      AppliedWTAmountSys: (appliedWtAmountSys: number) => ({ appliedWtAmountSys: edmToTs(appliedWtAmountSys, 'Edm.Double') }),
      AppliedWTAmountFC: (appliedWtAmountFc: number) => ({ appliedWtAmountFc: edmToTs(appliedWtAmountFc, 'Edm.Double') }),
      AppliedWTAmount: (appliedWtAmount: number) => ({ appliedWtAmount: edmToTs(appliedWtAmount, 'Edm.Double') }),
      GLAccount: (glAccount: string) => ({ glAccount: edmToTs(glAccount, 'Edm.String') }),
      LineNum: (lineNum: number) => ({ lineNum: edmToTs(lineNum, 'Edm.Int32') }),
      BaseDocEntry: (baseDocEntry: number) => ({ baseDocEntry: edmToTs(baseDocEntry, 'Edm.Int32') }),
      BaseDocLine: (baseDocLine: number) => ({ baseDocLine: edmToTs(baseDocLine, 'Edm.Int32') }),
      BaseDocType: (baseDocType: number) => ({ baseDocType: edmToTs(baseDocType, 'Edm.Int32') }),
      BaseDocumentReference: (baseDocumentReference: number) => ({ baseDocumentReference: edmToTs(baseDocumentReference, 'Edm.Int32') }),
      TargetAbsEntry: (targetAbsEntry: number) => ({ targetAbsEntry: edmToTs(targetAbsEntry, 'Edm.Int32') }),
      TargetDocumentType: (targetDocumentType: number) => ({ targetDocumentType: edmToTs(targetDocumentType, 'Edm.Int32') }),
      CSTCodeIncoming: (cstCodeIncoming: string) => ({ cstCodeIncoming: edmToTs(cstCodeIncoming, 'Edm.String') }),
      CSTCodeOutgoing: (cstCodeOutgoing: string) => ({ cstCodeOutgoing: edmToTs(cstCodeOutgoing, 'Edm.String') })
    });
  }
}
