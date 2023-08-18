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
 * PaymentRunExportLine
 */
export interface PaymentRunExportLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Row Number.
   * @nullable
   */
  rowNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Date Of Payment Run.
   * @nullable
   */
  dateOfPaymentRun?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Payment Wizard Code.
   * @nullable
   */
  paymentWizardCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Vendor Number.
   * @nullable
   */
  vendorNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Customer Number.
   * @nullable
   */
  customerNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Payment Means.
   * @nullable
   */
  paymentMeans?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Payment Doc Num.
   * @nullable
   */
  paymentDocNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Fiscal Year.
   * @nullable
   */
  fiscalYear?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Vendor Ref Num.
   * @nullable
   */
  vendorRefNum?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Document Object Type.
   * @nullable
   */
  documentObjectType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Document Posting Date.
   * @nullable
   */
  documentPostingDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Document Tax Date.
   * @nullable
   */
  documentTaxDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Bp Debit Payable Account.
   * @nullable
   */
  bpDebitPayableAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Document Currency.
   * @nullable
   */
  documentCurrency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Document Rate.
   * @nullable
   */
  documentRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Document Total.
   * @nullable
   */
  documentTotal?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Document Total Fc.
   * @nullable
   */
  documentTotalFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Document Tax Amount.
   * @nullable
   */
  documentTaxAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Document Tax Amount Fc.
   * @nullable
   */
  documentTaxAmountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Document Remarks.
   * @nullable
   */
  documentRemarks?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Document Payment Terms.
   * @nullable
   */
  documentPaymentTerms?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Payment Doc Reference.
   * @nullable
   */
  paymentDocReference?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Document Local Currency.
   * @nullable
   */
  documentLocalCurrency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Payment Terms Period.
   * @nullable
   */
  paymentTermsPeriod?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Document Object Type Ex.
   * @nullable
   */
  documentObjectTypeEx?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Document Number.
   * @nullable
   */
  documentNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Payment Number.
   * @nullable
   */
  paymentNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Payment Order Num.
   * @nullable
   */
  paymentOrderNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Free Text 1.
   * @nullable
   */
  freeText1?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Free Text 2.
   * @nullable
   */
  freeText2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Free Text 3.
   * @nullable
   */
  freeText3?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * PaymentRunExportLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PaymentRunExportLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PaymentRunExportLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PaymentRunExportLine.rowNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RowNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link PaymentRunExportLine.dateOfPaymentRun} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateOfPaymentRun: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DateOfPaymentRun',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link PaymentRunExportLine.paymentWizardCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentWizardCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PaymentWizardCode',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link PaymentRunExportLine.vendorNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vendorNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VendorNumber', 'Edm.String', true);
  /**
   * Representation of the {@link PaymentRunExportLine.customerNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customerNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CustomerNumber',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PaymentRunExportLine.paymentMeans} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentMeans: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PaymentMeans', 'Edm.String', true);
  /**
   * Representation of the {@link PaymentRunExportLine.paymentDocNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentDocNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PaymentDocNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link PaymentRunExportLine.fiscalYear} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fiscalYear: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FiscalYear',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link PaymentRunExportLine.vendorRefNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vendorRefNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VendorRefNum', 'Edm.String', true);
  /**
   * Representation of the {@link PaymentRunExportLine.documentObjectType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentObjectType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DocumentObjectType',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PaymentRunExportLine.documentPostingDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentPostingDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DocumentPostingDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link PaymentRunExportLine.documentTaxDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentTaxDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DocumentTaxDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link PaymentRunExportLine.bpDebitPayableAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpDebitPayableAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BPDebitPayableAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PaymentRunExportLine.documentCurrency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentCurrency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DocumentCurrency',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PaymentRunExportLine.documentRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocumentRate', 'Edm.Double', true);
  /**
   * Representation of the {@link PaymentRunExportLine.documentTotal} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentTotal: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocumentTotal', 'Edm.Double', true);
  /**
   * Representation of the {@link PaymentRunExportLine.documentTotalFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentTotalFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DocumentTotalFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PaymentRunExportLine.documentTaxAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentTaxAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DocumentTaxAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PaymentRunExportLine.documentTaxAmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentTaxAmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DocumentTaxAmountFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PaymentRunExportLine.documentRemarks} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentRemarks: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DocumentRemarks',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PaymentRunExportLine.documentPaymentTerms} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentPaymentTerms: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DocumentPaymentTerms',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link PaymentRunExportLine.paymentDocReference} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentDocReference: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PaymentDocReference',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PaymentRunExportLine.documentLocalCurrency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentLocalCurrency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DocumentLocalCurrency',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PaymentRunExportLine.paymentTermsPeriod} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentTermsPeriod: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PaymentTermsPeriod',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link PaymentRunExportLine.documentObjectTypeEx} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentObjectTypeEx: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DocumentObjectTypeEx',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PaymentRunExportLine.documentNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocumentNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link PaymentRunExportLine.paymentNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PaymentNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link PaymentRunExportLine.paymentOrderNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentOrderNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PaymentOrderNum',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link PaymentRunExportLine.freeText1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freeText1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FreeText1', 'Edm.String', true);
  /**
   * Representation of the {@link PaymentRunExportLine.freeText2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freeText2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FreeText2', 'Edm.String', true);
  /**
   * Representation of the {@link PaymentRunExportLine.freeText3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freeText3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FreeText3', 'Edm.String', true);

  /**
   * Creates an instance of PaymentRunExportLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      PaymentRunExportLine,
      fieldOptions
    );
  }
}

export namespace PaymentRunExportLine {
  /**
   * Metadata information on all properties of the `PaymentRunExportLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PaymentRunExportLine>[] = [
    {
      originalName: 'RowNumber',
      name: 'rowNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DateOfPaymentRun',
      name: 'dateOfPaymentRun',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'PaymentWizardCode',
      name: 'paymentWizardCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'VendorNumber',
      name: 'vendorNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CustomerNumber',
      name: 'customerNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PaymentMeans',
      name: 'paymentMeans',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PaymentDocNum',
      name: 'paymentDocNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'FiscalYear',
      name: 'fiscalYear',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'VendorRefNum',
      name: 'vendorRefNum',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DocumentObjectType',
      name: 'documentObjectType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DocumentPostingDate',
      name: 'documentPostingDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'DocumentTaxDate',
      name: 'documentTaxDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'BPDebitPayableAccount',
      name: 'bpDebitPayableAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DocumentCurrency',
      name: 'documentCurrency',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DocumentRate',
      name: 'documentRate',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'DocumentTotal',
      name: 'documentTotal',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'DocumentTotalFC',
      name: 'documentTotalFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'DocumentTaxAmount',
      name: 'documentTaxAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'DocumentTaxAmountFC',
      name: 'documentTaxAmountFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'DocumentRemarks',
      name: 'documentRemarks',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DocumentPaymentTerms',
      name: 'documentPaymentTerms',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PaymentDocReference',
      name: 'paymentDocReference',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DocumentLocalCurrency',
      name: 'documentLocalCurrency',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PaymentTermsPeriod',
      name: 'paymentTermsPeriod',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DocumentObjectTypeEx',
      name: 'documentObjectTypeEx',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DocumentNumber',
      name: 'documentNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PaymentNumber',
      name: 'paymentNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PaymentOrderNum',
      name: 'paymentOrderNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'FreeText1',
      name: 'freeText1',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FreeText2',
      name: 'freeText2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FreeText3',
      name: 'freeText3',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
