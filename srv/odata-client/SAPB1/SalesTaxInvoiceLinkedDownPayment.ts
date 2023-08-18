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
 * SalesTaxInvoiceLinkedDownPayment
 */
export interface SalesTaxInvoiceLinkedDownPayment<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Down Payment Type.
   * @nullable
   */
  downPaymentType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Down Payment Entry.
   * @nullable
   */
  downPaymentEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Down Payment Num.
   * @nullable
   */
  downPaymentNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Payment Type.
   * @nullable
   */
  paymentType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Payment Entry.
   * @nullable
   */
  paymentEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Payment Num.
   * @nullable
   */
  paymentNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Payment Tax Date.
   * @nullable
   */
  paymentTaxDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Transfer Date.
   * @nullable
   */
  transferDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Transfer Reference.
   * @nullable
   */
  transferReference?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Amount To Draw.
   * @nullable
   */
  amountToDraw?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Amount To Draw Fc.
   * @nullable
   */
  amountToDrawFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Amount To Draw Sc.
   * @nullable
   */
  amountToDrawSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax.
   * @nullable
   */
  tax?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Fc.
   * @nullable
   */
  taxFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Tax Sc.
   * @nullable
   */
  taxSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Gross Amount To Draw.
   * @nullable
   */
  grossAmountToDraw?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Gross Amount To Draw Fc.
   * @nullable
   */
  grossAmountToDrawFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Gross Amount To Draw Sc.
   * @nullable
   */
  grossAmountToDrawSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Doc Currency.
   * @nullable
   */
  docCurrency?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * SalesTaxInvoiceLinkedDownPaymentField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesTaxInvoiceLinkedDownPaymentField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  SalesTaxInvoiceLinkedDownPayment,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link SalesTaxInvoiceLinkedDownPayment.docEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link SalesTaxInvoiceLinkedDownPayment.lineNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link SalesTaxInvoiceLinkedDownPayment.downPaymentType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  downPaymentType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DownPaymentType',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link SalesTaxInvoiceLinkedDownPayment.downPaymentEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  downPaymentEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DownPaymentEntry',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link SalesTaxInvoiceLinkedDownPayment.downPaymentNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  downPaymentNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DownPaymentNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link SalesTaxInvoiceLinkedDownPayment.paymentType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PaymentType', 'Edm.Int32', true);
  /**
   * Representation of the {@link SalesTaxInvoiceLinkedDownPayment.paymentEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PaymentEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link SalesTaxInvoiceLinkedDownPayment.paymentNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PaymentNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link SalesTaxInvoiceLinkedDownPayment.paymentTaxDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentTaxDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PaymentTaxDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link SalesTaxInvoiceLinkedDownPayment.transferDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transferDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TransferDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link SalesTaxInvoiceLinkedDownPayment.transferReference} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transferReference: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TransferReference',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link SalesTaxInvoiceLinkedDownPayment.amountToDraw} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountToDraw: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AmountToDraw', 'Edm.Double', true);
  /**
   * Representation of the {@link SalesTaxInvoiceLinkedDownPayment.amountToDrawFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountToDrawFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AmountToDrawFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link SalesTaxInvoiceLinkedDownPayment.amountToDrawSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountToDrawSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AmountToDrawSC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link SalesTaxInvoiceLinkedDownPayment.tax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tax: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Tax', 'Edm.Double', true);
  /**
   * Representation of the {@link SalesTaxInvoiceLinkedDownPayment.taxFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxFC', 'Edm.Double', true);
  /**
   * Representation of the {@link SalesTaxInvoiceLinkedDownPayment.taxSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxSC', 'Edm.Double', true);
  /**
   * Representation of the {@link SalesTaxInvoiceLinkedDownPayment.grossAmountToDraw} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossAmountToDraw: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GrossAmountToDraw',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link SalesTaxInvoiceLinkedDownPayment.grossAmountToDrawFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossAmountToDrawFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GrossAmountToDrawFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link SalesTaxInvoiceLinkedDownPayment.grossAmountToDrawSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossAmountToDrawSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GrossAmountToDrawSC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link SalesTaxInvoiceLinkedDownPayment.docCurrency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docCurrency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocCurrency', 'Edm.String', true);

  /**
   * Creates an instance of SalesTaxInvoiceLinkedDownPaymentField.
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
      SalesTaxInvoiceLinkedDownPayment,
      fieldOptions
    );
  }
}

export namespace SalesTaxInvoiceLinkedDownPayment {
  /**
   * Metadata information on all properties of the `SalesTaxInvoiceLinkedDownPayment` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SalesTaxInvoiceLinkedDownPayment>[] =
    [
      {
        originalName: 'DocEntry',
        name: 'docEntry',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'LineNum',
        name: 'lineNum',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'DownPaymentType',
        name: 'downPaymentType',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'DownPaymentEntry',
        name: 'downPaymentEntry',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'DownPaymentNum',
        name: 'downPaymentNum',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'PaymentType',
        name: 'paymentType',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'PaymentEntry',
        name: 'paymentEntry',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'PaymentNum',
        name: 'paymentNum',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'PaymentTaxDate',
        name: 'paymentTaxDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'TransferDate',
        name: 'transferDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'TransferReference',
        name: 'transferReference',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'AmountToDraw',
        name: 'amountToDraw',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'AmountToDrawFC',
        name: 'amountToDrawFc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'AmountToDrawSC',
        name: 'amountToDrawSc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'Tax',
        name: 'tax',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'TaxFC',
        name: 'taxFc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'TaxSC',
        name: 'taxSc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'GrossAmountToDraw',
        name: 'grossAmountToDraw',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'GrossAmountToDrawFC',
        name: 'grossAmountToDrawFc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'GrossAmountToDrawSC',
        name: 'grossAmountToDrawSc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'DocCurrency',
        name: 'docCurrency',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
