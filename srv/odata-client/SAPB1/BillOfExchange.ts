/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * BillOfExchange
 */
export interface BillOfExchange<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Bill Of Exchange No.
   * @nullable
   */
  billOfExchangeNo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Bill Of Exchange Due Date.
   * @nullable
   */
  billOfExchangeDueDate?: DeserializedType<
    DeSerializersT,
    'Edm.DateTimeOffset'
  >;
  /**
   * Details.
   * @nullable
   */
  details?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Reference No.
   * @nullable
   */
  referenceNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Payment Method Code.
   * @nullable
   */
  paymentMethodCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bp Bank Code.
   * @nullable
   */
  bpBankCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bp Bank Act.
   * @nullable
   */
  bpBankAct?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bp Bank Country.
   * @nullable
   */
  bpBankCountry?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Control Key.
   * @nullable
   */
  controlKey?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Payment Engine Status 1.
   * @nullable
   */
  paymentEngineStatus1?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Payment Engine Status 2.
   * @nullable
   */
  paymentEngineStatus2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Payment Engine Status 3.
   * @nullable
   */
  paymentEngineStatus3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Stamp Tax Code.
   * @nullable
   */
  stampTaxCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Stamp Tax Amount.
   * @nullable
   */
  stampTaxAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Folio Number.
   * @nullable
   */
  folioNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Folio Prefix String.
   * @nullable
   */
  folioPrefixString?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Interest Amount.
   * @nullable
   */
  interestAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Discount Amount.
   * @nullable
   */
  discountAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Fine Amount.
   * @nullable
   */
  fineAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Interest Date.
   * @nullable
   */
  interestDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Discount Date.
   * @nullable
   */
  discountDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Fine Date.
   * @nullable
   */
  fineDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Iof Amount.
   * @nullable
   */
  iofAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Service Fee Amount.
   * @nullable
   */
  serviceFeeAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Other Expenses Amount.
   * @nullable
   */
  otherExpensesAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Other Incomes Amount.
   * @nullable
   */
  otherIncomesAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Last Page Folio Number.
   * @nullable
   */
  lastPageFolioNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * BillOfExchangeField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BillOfExchangeField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BillOfExchange,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BillOfExchange.billOfExchangeNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billOfExchangeNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BillOfExchangeNo',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link BillOfExchange.billOfExchangeDueDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billOfExchangeDueDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BillOfExchangeDueDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link BillOfExchange.details} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Details', 'Edm.String', true);
  /**
   * Representation of the {@link BillOfExchange.referenceNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  referenceNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ReferenceNo', 'Edm.String', true);
  /**
   * Representation of the {@link BillOfExchange.remarks} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true);
  /**
   * Representation of the {@link BillOfExchange.paymentMethodCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentMethodCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PaymentMethodCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BillOfExchange.bpBankCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpBankCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPBankCode', 'Edm.String', true);
  /**
   * Representation of the {@link BillOfExchange.bpBankAct} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpBankAct: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPBankAct', 'Edm.String', true);
  /**
   * Representation of the {@link BillOfExchange.bpBankCountry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpBankCountry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPBankCountry', 'Edm.String', true);
  /**
   * Representation of the {@link BillOfExchange.controlKey} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  controlKey: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ControlKey', 'Edm.String', true);
  /**
   * Representation of the {@link BillOfExchange.paymentEngineStatus1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentEngineStatus1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PaymentEngineStatus1',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BillOfExchange.paymentEngineStatus2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentEngineStatus2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PaymentEngineStatus2',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BillOfExchange.paymentEngineStatus3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentEngineStatus3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PaymentEngineStatus3',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BillOfExchange.stampTaxCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stampTaxCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StampTaxCode', 'Edm.String', true);
  /**
   * Representation of the {@link BillOfExchange.stampTaxAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stampTaxAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StampTaxAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BillOfExchange.folioNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  folioNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FolioNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link BillOfExchange.folioPrefixString} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  folioPrefixString: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FolioPrefixString',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BillOfExchange.interestAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  interestAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InterestAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BillOfExchange.discountAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discountAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DiscountAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BillOfExchange.fineAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fineAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FineAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link BillOfExchange.interestDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  interestDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InterestDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link BillOfExchange.discountDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discountDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DiscountDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link BillOfExchange.fineDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fineDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FineDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link BillOfExchange.iofAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  iofAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('IOFAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link BillOfExchange.serviceFeeAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serviceFeeAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ServiceFeeAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BillOfExchange.otherExpensesAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  otherExpensesAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'OtherExpensesAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BillOfExchange.otherIncomesAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  otherIncomesAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'OtherIncomesAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BillOfExchange.lastPageFolioNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastPageFolioNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'LastPageFolioNumber',
    'Edm.Int32',
    true
  );

  /**
   * Creates an instance of BillOfExchangeField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, BillOfExchange, fieldOptions);
  }
}

export namespace BillOfExchange {
  /**
   * Metadata information on all properties of the `BillOfExchange` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BillOfExchange>[] = [
    {
      originalName: 'BillOfExchangeNo',
      name: 'billOfExchangeNo',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BillOfExchangeDueDate',
      name: 'billOfExchangeDueDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'Details',
      name: 'details',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ReferenceNo',
      name: 'referenceNo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Remarks',
      name: 'remarks',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PaymentMethodCode',
      name: 'paymentMethodCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BPBankCode',
      name: 'bpBankCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BPBankAct',
      name: 'bpBankAct',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BPBankCountry',
      name: 'bpBankCountry',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ControlKey',
      name: 'controlKey',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PaymentEngineStatus1',
      name: 'paymentEngineStatus1',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PaymentEngineStatus2',
      name: 'paymentEngineStatus2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PaymentEngineStatus3',
      name: 'paymentEngineStatus3',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'StampTaxCode',
      name: 'stampTaxCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'StampTaxAmount',
      name: 'stampTaxAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'FolioNumber',
      name: 'folioNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'FolioPrefixString',
      name: 'folioPrefixString',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'InterestAmount',
      name: 'interestAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'DiscountAmount',
      name: 'discountAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'FineAmount',
      name: 'fineAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'InterestDate',
      name: 'interestDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'DiscountDate',
      name: 'discountDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'FineDate',
      name: 'fineDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'IOFAmount',
      name: 'iofAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ServiceFeeAmount',
      name: 'serviceFeeAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'OtherExpensesAmount',
      name: 'otherExpensesAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'OtherIncomesAmount',
      name: 'otherIncomesAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'LastPageFolioNumber',
      name: 'lastPageFolioNumber',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
