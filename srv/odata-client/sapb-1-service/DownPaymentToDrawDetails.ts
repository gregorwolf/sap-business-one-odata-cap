/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DownPaymentToDrawDetails
 */
export interface DownPaymentToDrawDetails {
  /**
   * Doc Internal Id.
   * @nullable
   */
  docInternalId?: number;
  /**
   * Row Num.
   * @nullable
   */
  rowNum?: number;
  /**
   * Seq Num.
   * @nullable
   */
  seqNum?: number;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Vat Group Code.
   * @nullable
   */
  vatGroupCode?: string;
  /**
   * Vat Percent.
   * @nullable
   */
  vatPercent?: number;
  /**
   * Amount To Draw.
   * @nullable
   */
  amountToDraw?: number;
  /**
   * Amount To Draw Fc.
   * @nullable
   */
  amountToDrawFc?: number;
  /**
   * Amount To Draw Sc.
   * @nullable
   */
  amountToDrawSc?: number;
  /**
   * Tax.
   * @nullable
   */
  tax?: number;
  /**
   * Tax Fc.
   * @nullable
   */
  taxFc?: number;
  /**
   * Tax Sc.
   * @nullable
   */
  taxSc?: number;
  /**
   * Gross Amount To Draw.
   * @nullable
   */
  grossAmountToDraw?: number;
  /**
   * Gross Amount To Draw Fc.
   * @nullable
   */
  grossAmountToDrawFc?: number;
  /**
   * Gross Amount To Draw Sc.
   * @nullable
   */
  grossAmountToDrawSc?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[DownPaymentToDrawDetails.build]] instead.
 */
export function createDownPaymentToDrawDetails(json: any): DownPaymentToDrawDetails {
  return DownPaymentToDrawDetails.build(json);
}

/**
 * DownPaymentToDrawDetailsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DownPaymentToDrawDetailsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DownPaymentToDrawDetails.docInternalId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docInternalId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocInternalID', this, 'Edm.Int32');
  /**
   * Representation of the [[DownPaymentToDrawDetails.rowNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowNum', this, 'Edm.Int32');
  /**
   * Representation of the [[DownPaymentToDrawDetails.seqNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  seqNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SeqNum', this, 'Edm.Int32');
  /**
   * Representation of the [[DownPaymentToDrawDetails.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[DownPaymentToDrawDetails.vatGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatGroupCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('VatGroupCode', this, 'Edm.String');
  /**
   * Representation of the [[DownPaymentToDrawDetails.vatPercent]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatPercent: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VatPercent', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDrawDetails.amountToDraw]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountToDraw: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AmountToDraw', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDrawDetails.amountToDrawFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountToDrawFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AmountToDrawFC', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDrawDetails.amountToDrawSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountToDrawSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AmountToDrawSC', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDrawDetails.tax]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tax: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Tax', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDrawDetails.taxFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxFC', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDrawDetails.taxSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxSC', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDrawDetails.grossAmountToDraw]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossAmountToDraw: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossAmountToDraw', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDrawDetails.grossAmountToDrawFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossAmountToDrawFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossAmountToDrawFC', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDrawDetails.grossAmountToDrawSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossAmountToDrawSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossAmountToDrawSC', this, 'Edm.Double');
}

export namespace DownPaymentToDrawDetails {
  export function build(json: { [keys: string]: FieldType }): DownPaymentToDrawDetails {
    return createComplexType(json, {
      DocInternalID: (docInternalId: number) => ({ docInternalId: edmToTs(docInternalId, 'Edm.Int32') }),
      RowNum: (rowNum: number) => ({ rowNum: edmToTs(rowNum, 'Edm.Int32') }),
      SeqNum: (seqNum: number) => ({ seqNum: edmToTs(seqNum, 'Edm.Int32') }),
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') }),
      VatGroupCode: (vatGroupCode: string) => ({ vatGroupCode: edmToTs(vatGroupCode, 'Edm.String') }),
      VatPercent: (vatPercent: number) => ({ vatPercent: edmToTs(vatPercent, 'Edm.Double') }),
      AmountToDraw: (amountToDraw: number) => ({ amountToDraw: edmToTs(amountToDraw, 'Edm.Double') }),
      AmountToDrawFC: (amountToDrawFc: number) => ({ amountToDrawFc: edmToTs(amountToDrawFc, 'Edm.Double') }),
      AmountToDrawSC: (amountToDrawSc: number) => ({ amountToDrawSc: edmToTs(amountToDrawSc, 'Edm.Double') }),
      Tax: (tax: number) => ({ tax: edmToTs(tax, 'Edm.Double') }),
      TaxFC: (taxFc: number) => ({ taxFc: edmToTs(taxFc, 'Edm.Double') }),
      TaxSC: (taxSc: number) => ({ taxSc: edmToTs(taxSc, 'Edm.Double') }),
      GrossAmountToDraw: (grossAmountToDraw: number) => ({ grossAmountToDraw: edmToTs(grossAmountToDraw, 'Edm.Double') }),
      GrossAmountToDrawFC: (grossAmountToDrawFc: number) => ({ grossAmountToDrawFc: edmToTs(grossAmountToDrawFc, 'Edm.Double') }),
      GrossAmountToDrawSC: (grossAmountToDrawSc: number) => ({ grossAmountToDrawSc: edmToTs(grossAmountToDrawSc, 'Edm.Double') })
    });
  }
}
