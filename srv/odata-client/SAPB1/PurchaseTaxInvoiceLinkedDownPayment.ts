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
 * PurchaseTaxInvoiceLinkedDownPayment
 */
export interface PurchaseTaxInvoiceLinkedDownPayment<
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
   * Doc Currency.
   * @nullable
   */
  docCurrency?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * PurchaseTaxInvoiceLinkedDownPaymentField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PurchaseTaxInvoiceLinkedDownPaymentField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PurchaseTaxInvoiceLinkedDownPayment,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PurchaseTaxInvoiceLinkedDownPayment.docEntry} property for query construction.
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
   * Representation of the {@link PurchaseTaxInvoiceLinkedDownPayment.lineNum} property for query construction.
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
   * Representation of the {@link PurchaseTaxInvoiceLinkedDownPayment.downPaymentType} property for query construction.
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
   * Representation of the {@link PurchaseTaxInvoiceLinkedDownPayment.downPaymentEntry} property for query construction.
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
   * Representation of the {@link PurchaseTaxInvoiceLinkedDownPayment.downPaymentNum} property for query construction.
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
   * Representation of the {@link PurchaseTaxInvoiceLinkedDownPayment.paymentType} property for query construction.
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
   * Representation of the {@link PurchaseTaxInvoiceLinkedDownPayment.paymentEntry} property for query construction.
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
   * Representation of the {@link PurchaseTaxInvoiceLinkedDownPayment.paymentNum} property for query construction.
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
   * Representation of the {@link PurchaseTaxInvoiceLinkedDownPayment.paymentTaxDate} property for query construction.
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
   * Representation of the {@link PurchaseTaxInvoiceLinkedDownPayment.transferDate} property for query construction.
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
   * Representation of the {@link PurchaseTaxInvoiceLinkedDownPayment.transferReference} property for query construction.
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
   * Representation of the {@link PurchaseTaxInvoiceLinkedDownPayment.amountToDraw} property for query construction.
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
   * Representation of the {@link PurchaseTaxInvoiceLinkedDownPayment.amountToDrawFc} property for query construction.
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
   * Representation of the {@link PurchaseTaxInvoiceLinkedDownPayment.amountToDrawSc} property for query construction.
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
   * Representation of the {@link PurchaseTaxInvoiceLinkedDownPayment.docCurrency} property for query construction.
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
   * Creates an instance of PurchaseTaxInvoiceLinkedDownPaymentField.
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
      PurchaseTaxInvoiceLinkedDownPayment,
      fieldOptions
    );
  }
}

export namespace PurchaseTaxInvoiceLinkedDownPayment {
  /**
   * Metadata information on all properties of the `PurchaseTaxInvoiceLinkedDownPayment` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PurchaseTaxInvoiceLinkedDownPayment>[] =
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
        originalName: 'DocCurrency',
        name: 'docCurrency',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
