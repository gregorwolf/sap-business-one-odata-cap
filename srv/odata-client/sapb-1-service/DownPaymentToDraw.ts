/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { DownPaymentToDrawDetails, DownPaymentToDrawDetailsField } from './DownPaymentToDrawDetails';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DownPaymentToDraw
 */
export interface DownPaymentToDraw {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Posting Date.
   * @nullable
   */
  postingDate?: Moment;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: Moment;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Details.
   * @nullable
   */
  details?: string;
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
   * Doc Number.
   * @nullable
   */
  docNumber?: number;
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
  /**
   * Down Payments To Draw Details.
   * @nullable
   */
  downPaymentsToDrawDetails?: DownPaymentToDrawDetails;
}

/**
 * @deprecated Since v1.6.0. Use [[DownPaymentToDraw.build]] instead.
 */
export function createDownPaymentToDraw(json: any): DownPaymentToDraw {
  return DownPaymentToDraw.build(json);
}

/**
 * DownPaymentToDrawField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DownPaymentToDrawField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DownPaymentToDraw.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[DownPaymentToDraw.postingDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  postingDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('PostingDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[DownPaymentToDraw.dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DueDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[DownPaymentToDraw.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
  /**
   * Representation of the [[DownPaymentToDraw.details]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Details', this, 'Edm.String');
  /**
   * Representation of the [[DownPaymentToDraw.amountToDraw]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountToDraw: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AmountToDraw', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDraw.amountToDrawFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountToDrawFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AmountToDrawFC', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDraw.amountToDrawSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountToDrawSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AmountToDrawSC', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDraw.docInternalId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docInternalId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocInternalID', this, 'Edm.Int32');
  /**
   * Representation of the [[DownPaymentToDraw.rowNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowNum', this, 'Edm.Int32');
  /**
   * Representation of the [[DownPaymentToDraw.docNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[DownPaymentToDraw.tax]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tax: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Tax', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDraw.taxFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxFC', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDraw.taxSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxSC', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDraw.grossAmountToDraw]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossAmountToDraw: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossAmountToDraw', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDraw.grossAmountToDrawFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossAmountToDrawFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossAmountToDrawFC', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDraw.grossAmountToDrawSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossAmountToDrawSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossAmountToDrawSC', this, 'Edm.Double');
  /**
   * Representation of the [[DownPaymentToDraw.downPaymentsToDrawDetails]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  downPaymentsToDrawDetails: DownPaymentToDrawDetailsField<EntityT> = new DownPaymentToDrawDetailsField('DownPaymentsToDrawDetails', this);
}

export namespace DownPaymentToDraw {
  export function build(json: { [keys: string]: FieldType | DownPaymentToDrawDetails }): DownPaymentToDraw {
    return createComplexType(json, {
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') }),
      PostingDate: (postingDate: Moment) => ({ postingDate: edmToTs(postingDate, 'Edm.DateTimeOffset') }),
      DueDate: (dueDate: Moment) => ({ dueDate: edmToTs(dueDate, 'Edm.DateTimeOffset') }),
      Name: (name: string) => ({ name: edmToTs(name, 'Edm.String') }),
      Details: (details: string) => ({ details: edmToTs(details, 'Edm.String') }),
      AmountToDraw: (amountToDraw: number) => ({ amountToDraw: edmToTs(amountToDraw, 'Edm.Double') }),
      AmountToDrawFC: (amountToDrawFc: number) => ({ amountToDrawFc: edmToTs(amountToDrawFc, 'Edm.Double') }),
      AmountToDrawSC: (amountToDrawSc: number) => ({ amountToDrawSc: edmToTs(amountToDrawSc, 'Edm.Double') }),
      DocInternalID: (docInternalId: number) => ({ docInternalId: edmToTs(docInternalId, 'Edm.Int32') }),
      RowNum: (rowNum: number) => ({ rowNum: edmToTs(rowNum, 'Edm.Int32') }),
      DocNumber: (docNumber: number) => ({ docNumber: edmToTs(docNumber, 'Edm.Int32') }),
      Tax: (tax: number) => ({ tax: edmToTs(tax, 'Edm.Double') }),
      TaxFC: (taxFc: number) => ({ taxFc: edmToTs(taxFc, 'Edm.Double') }),
      TaxSC: (taxSc: number) => ({ taxSc: edmToTs(taxSc, 'Edm.Double') }),
      GrossAmountToDraw: (grossAmountToDraw: number) => ({ grossAmountToDraw: edmToTs(grossAmountToDraw, 'Edm.Double') }),
      GrossAmountToDrawFC: (grossAmountToDrawFc: number) => ({ grossAmountToDrawFc: edmToTs(grossAmountToDrawFc, 'Edm.Double') }),
      GrossAmountToDrawSC: (grossAmountToDrawSc: number) => ({ grossAmountToDrawSc: edmToTs(grossAmountToDrawSc, 'Edm.Double') }),
      DownPaymentsToDrawDetails: (downPaymentsToDrawDetails: DownPaymentToDrawDetails) => ({ downPaymentsToDrawDetails: DownPaymentToDrawDetails.build(downPaymentsToDrawDetails) })
    });
  }
}
