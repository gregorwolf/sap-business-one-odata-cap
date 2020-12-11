/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class BillOfExchangeField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BillOfExchange> {
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

  /**
   * Creates an instance of BillOfExchangeField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BillOfExchange);
  }
}

export namespace BillOfExchange {
  /**
   * Metadata information on all properties of the `BillOfExchange` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BillOfExchange>[] = [{
    originalName: 'BillOfExchangeNo',
    name: 'billOfExchangeNo',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BillOfExchangeDueDate',
    name: 'billOfExchangeDueDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Details',
    name: 'details',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ReferenceNo',
    name: 'referenceNo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Remarks',
    name: 'remarks',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PaymentMethodCode',
    name: 'paymentMethodCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BPBankCode',
    name: 'bpBankCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BPBankAct',
    name: 'bpBankAct',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BPBankCountry',
    name: 'bpBankCountry',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ControlKey',
    name: 'controlKey',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PaymentEngineStatus1',
    name: 'paymentEngineStatus1',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PaymentEngineStatus2',
    name: 'paymentEngineStatus2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PaymentEngineStatus3',
    name: 'paymentEngineStatus3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'StampTaxCode',
    name: 'stampTaxCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'StampTaxAmount',
    name: 'stampTaxAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'FolioNumber',
    name: 'folioNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'FolioPrefixString',
    name: 'folioPrefixString',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'InterestAmount',
    name: 'interestAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DiscountAmount',
    name: 'discountAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'FineAmount',
    name: 'fineAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'InterestDate',
    name: 'interestDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'DiscountDate',
    name: 'discountDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'FineDate',
    name: 'fineDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'IOFAmount',
    name: 'iofAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ServiceFeeAmount',
    name: 'serviceFeeAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'OtherExpensesAmount',
    name: 'otherExpensesAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'OtherIncomesAmount',
    name: 'otherIncomesAmount',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BillOfExchange {
    return deserializeComplexTypeV4(json, BillOfExchange);
  }
}
