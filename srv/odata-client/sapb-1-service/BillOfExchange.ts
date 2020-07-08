/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BillOfExchange
 */
export interface BillOfExchange {
  /**
   * Bill Of Exchange No.
   * @nullable
   */
  billOfExchangeNo?: number;
  /**
   * Bill Of Exchange Due Date.
   * @nullable
   */
  billOfExchangeDueDate?: Moment;
  /**
   * Details.
   * @nullable
   */
  details?: string;
  /**
   * Reference No.
   * @nullable
   */
  referenceNo?: string;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Payment Method Code.
   * @nullable
   */
  paymentMethodCode?: string;
  /**
   * Bp Bank Code.
   * @nullable
   */
  bpBankCode?: string;
  /**
   * Bp Bank Act.
   * @nullable
   */
  bpBankAct?: string;
  /**
   * Bp Bank Country.
   * @nullable
   */
  bpBankCountry?: string;
  /**
   * Control Key.
   * @nullable
   */
  controlKey?: string;
  /**
   * Payment Engine Status 1.
   * @nullable
   */
  paymentEngineStatus1?: string;
  /**
   * Payment Engine Status 2.
   * @nullable
   */
  paymentEngineStatus2?: string;
  /**
   * Payment Engine Status 3.
   * @nullable
   */
  paymentEngineStatus3?: string;
  /**
   * Stamp Tax Code.
   * @nullable
   */
  stampTaxCode?: string;
  /**
   * Stamp Tax Amount.
   * @nullable
   */
  stampTaxAmount?: number;
  /**
   * Folio Number.
   * @nullable
   */
  folioNumber?: number;
  /**
   * Folio Prefix String.
   * @nullable
   */
  folioPrefixString?: string;
  /**
   * Interest Amount.
   * @nullable
   */
  interestAmount?: number;
  /**
   * Discount Amount.
   * @nullable
   */
  discountAmount?: number;
  /**
   * Fine Amount.
   * @nullable
   */
  fineAmount?: number;
  /**
   * Interest Date.
   * @nullable
   */
  interestDate?: Moment;
  /**
   * Discount Date.
   * @nullable
   */
  discountDate?: Moment;
  /**
   * Fine Date.
   * @nullable
   */
  fineDate?: Moment;
  /**
   * Iof Amount.
   * @nullable
   */
  iofAmount?: number;
  /**
   * Service Fee Amount.
   * @nullable
   */
  serviceFeeAmount?: number;
  /**
   * Other Expenses Amount.
   * @nullable
   */
  otherExpensesAmount?: number;
  /**
   * Other Incomes Amount.
   * @nullable
   */
  otherIncomesAmount?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BillOfExchange.build]] instead.
 */
export function createBillOfExchange(json: any): BillOfExchange {
  return BillOfExchange.build(json);
}

/**
 * BillOfExchangeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BillOfExchangeField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BillOfExchange.billOfExchangeNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billOfExchangeNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BillOfExchangeNo', this, 'Edm.Int32');
  /**
   * Representation of the [[BillOfExchange.billOfExchangeDueDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billOfExchangeDueDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('BillOfExchangeDueDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BillOfExchange.details]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Details', this, 'Edm.String');
  /**
   * Representation of the [[BillOfExchange.referenceNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  referenceNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ReferenceNo', this, 'Edm.String');
  /**
   * Representation of the [[BillOfExchange.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');
  /**
   * Representation of the [[BillOfExchange.paymentMethodCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentMethodCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PaymentMethodCode', this, 'Edm.String');
  /**
   * Representation of the [[BillOfExchange.bpBankCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpBankCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPBankCode', this, 'Edm.String');
  /**
   * Representation of the [[BillOfExchange.bpBankAct]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpBankAct: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPBankAct', this, 'Edm.String');
  /**
   * Representation of the [[BillOfExchange.bpBankCountry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpBankCountry: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPBankCountry', this, 'Edm.String');
  /**
   * Representation of the [[BillOfExchange.controlKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  controlKey: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ControlKey', this, 'Edm.String');
  /**
   * Representation of the [[BillOfExchange.paymentEngineStatus1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentEngineStatus1: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PaymentEngineStatus1', this, 'Edm.String');
  /**
   * Representation of the [[BillOfExchange.paymentEngineStatus2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentEngineStatus2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PaymentEngineStatus2', this, 'Edm.String');
  /**
   * Representation of the [[BillOfExchange.paymentEngineStatus3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentEngineStatus3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PaymentEngineStatus3', this, 'Edm.String');
  /**
   * Representation of the [[BillOfExchange.stampTaxCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stampTaxCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('StampTaxCode', this, 'Edm.String');
  /**
   * Representation of the [[BillOfExchange.stampTaxAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stampTaxAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StampTaxAmount', this, 'Edm.Double');
  /**
   * Representation of the [[BillOfExchange.folioNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  folioNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FolioNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[BillOfExchange.folioPrefixString]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  folioPrefixString: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FolioPrefixString', this, 'Edm.String');
  /**
   * Representation of the [[BillOfExchange.interestAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  interestAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InterestAmount', this, 'Edm.Double');
  /**
   * Representation of the [[BillOfExchange.discountAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discountAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DiscountAmount', this, 'Edm.Double');
  /**
   * Representation of the [[BillOfExchange.fineAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fineAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FineAmount', this, 'Edm.Double');
  /**
   * Representation of the [[BillOfExchange.interestDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  interestDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('InterestDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BillOfExchange.discountDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discountDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DiscountDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BillOfExchange.fineDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fineDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('FineDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BillOfExchange.iofAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  iofAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('IOFAmount', this, 'Edm.Double');
  /**
   * Representation of the [[BillOfExchange.serviceFeeAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serviceFeeAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ServiceFeeAmount', this, 'Edm.Double');
  /**
   * Representation of the [[BillOfExchange.otherExpensesAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  otherExpensesAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OtherExpensesAmount', this, 'Edm.Double');
  /**
   * Representation of the [[BillOfExchange.otherIncomesAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  otherIncomesAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OtherIncomesAmount', this, 'Edm.Double');
}

export namespace BillOfExchange {
  export function build(json: { [keys: string]: FieldType }): BillOfExchange {
    return createComplexType(json, {
      BillOfExchangeNo: (billOfExchangeNo: number) => ({ billOfExchangeNo: edmToTs(billOfExchangeNo, 'Edm.Int32') }),
      BillOfExchangeDueDate: (billOfExchangeDueDate: Moment) => ({ billOfExchangeDueDate: edmToTs(billOfExchangeDueDate, 'Edm.DateTimeOffset') }),
      Details: (details: string) => ({ details: edmToTs(details, 'Edm.String') }),
      ReferenceNo: (referenceNo: string) => ({ referenceNo: edmToTs(referenceNo, 'Edm.String') }),
      Remarks: (remarks: string) => ({ remarks: edmToTs(remarks, 'Edm.String') }),
      PaymentMethodCode: (paymentMethodCode: string) => ({ paymentMethodCode: edmToTs(paymentMethodCode, 'Edm.String') }),
      BPBankCode: (bpBankCode: string) => ({ bpBankCode: edmToTs(bpBankCode, 'Edm.String') }),
      BPBankAct: (bpBankAct: string) => ({ bpBankAct: edmToTs(bpBankAct, 'Edm.String') }),
      BPBankCountry: (bpBankCountry: string) => ({ bpBankCountry: edmToTs(bpBankCountry, 'Edm.String') }),
      ControlKey: (controlKey: string) => ({ controlKey: edmToTs(controlKey, 'Edm.String') }),
      PaymentEngineStatus1: (paymentEngineStatus1: string) => ({ paymentEngineStatus1: edmToTs(paymentEngineStatus1, 'Edm.String') }),
      PaymentEngineStatus2: (paymentEngineStatus2: string) => ({ paymentEngineStatus2: edmToTs(paymentEngineStatus2, 'Edm.String') }),
      PaymentEngineStatus3: (paymentEngineStatus3: string) => ({ paymentEngineStatus3: edmToTs(paymentEngineStatus3, 'Edm.String') }),
      StampTaxCode: (stampTaxCode: string) => ({ stampTaxCode: edmToTs(stampTaxCode, 'Edm.String') }),
      StampTaxAmount: (stampTaxAmount: number) => ({ stampTaxAmount: edmToTs(stampTaxAmount, 'Edm.Double') }),
      FolioNumber: (folioNumber: number) => ({ folioNumber: edmToTs(folioNumber, 'Edm.Int32') }),
      FolioPrefixString: (folioPrefixString: string) => ({ folioPrefixString: edmToTs(folioPrefixString, 'Edm.String') }),
      InterestAmount: (interestAmount: number) => ({ interestAmount: edmToTs(interestAmount, 'Edm.Double') }),
      DiscountAmount: (discountAmount: number) => ({ discountAmount: edmToTs(discountAmount, 'Edm.Double') }),
      FineAmount: (fineAmount: number) => ({ fineAmount: edmToTs(fineAmount, 'Edm.Double') }),
      InterestDate: (interestDate: Moment) => ({ interestDate: edmToTs(interestDate, 'Edm.DateTimeOffset') }),
      DiscountDate: (discountDate: Moment) => ({ discountDate: edmToTs(discountDate, 'Edm.DateTimeOffset') }),
      FineDate: (fineDate: Moment) => ({ fineDate: edmToTs(fineDate, 'Edm.DateTimeOffset') }),
      IOFAmount: (iofAmount: number) => ({ iofAmount: edmToTs(iofAmount, 'Edm.Double') }),
      ServiceFeeAmount: (serviceFeeAmount: number) => ({ serviceFeeAmount: edmToTs(serviceFeeAmount, 'Edm.Double') }),
      OtherExpensesAmount: (otherExpensesAmount: number) => ({ otherExpensesAmount: edmToTs(otherExpensesAmount, 'Edm.Double') }),
      OtherIncomesAmount: (otherIncomesAmount: number) => ({ otherIncomesAmount: edmToTs(otherIncomesAmount, 'Edm.Double') })
    });
  }
}
