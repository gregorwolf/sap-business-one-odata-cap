/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoRcptInvTypes } from './BoRcptInvTypes';
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
 * PaymentInvoice
 */
export interface PaymentInvoice<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Doc Num.
   * @nullable
   */
  docNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Sum Applied.
   * @nullable
   */
  sumApplied?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Applied Fc.
   * @nullable
   */
  appliedFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Applied Sys.
   * @nullable
   */
  appliedSys?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Doc Rate.
   * @nullable
   */
  docRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Doc Line.
   * @nullable
   */
  docLine?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Invoice Type.
   * @nullable
   */
  invoiceType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Discount Percent.
   * @nullable
   */
  discountPercent?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Paid Sum.
   * @nullable
   */
  paidSum?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Installment Id.
   * @nullable
   */
  installmentId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Witholding Tax Applied.
   * @nullable
   */
  witholdingTaxApplied?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Witholding Tax Applied Fc.
   * @nullable
   */
  witholdingTaxAppliedFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Witholding Tax Applied Sc.
   * @nullable
   */
  witholdingTaxAppliedSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Link Date.
   * @nullable
   */
  linkDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Distribution Rule.
   * @nullable
   */
  distributionRule?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Rule 2.
   * @nullable
   */
  distributionRule2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Rule 3.
   * @nullable
   */
  distributionRule3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Rule 4.
   * @nullable
   */
  distributionRule4?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Rule 5.
   * @nullable
   */
  distributionRule5?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Total Discount.
   * @nullable
   */
  totalDiscount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Total Discount Fc.
   * @nullable
   */
  totalDiscountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Total Discount Sc.
   * @nullable
   */
  totalDiscountSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * PaymentInvoiceField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PaymentInvoiceField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PaymentInvoice,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PaymentInvoice.lineNum} property for query construction.
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
   * Representation of the {@link PaymentInvoice.docEntry} property for query construction.
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
   * Representation of the {@link PaymentInvoice.docNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link PaymentInvoice.sumApplied} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumApplied: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SumApplied', 'Edm.Double', true);
  /**
   * Representation of the {@link PaymentInvoice.appliedFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  appliedFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AppliedFC', 'Edm.Double', true);
  /**
   * Representation of the {@link PaymentInvoice.appliedSys} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  appliedSys: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AppliedSys', 'Edm.Double', true);
  /**
   * Representation of the {@link PaymentInvoice.docRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocRate', 'Edm.Double', true);
  /**
   * Representation of the {@link PaymentInvoice.docLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docLine: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocLine', 'Edm.Int32', true);
  /**
   * Representation of the {@link PaymentInvoice.invoiceType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  invoiceType: EnumField<EntityT, DeSerializersT, BoRcptInvTypes, true, false> =
    this._fieldBuilder.buildEnumField('InvoiceType', BoRcptInvTypes, true);
  /**
   * Representation of the {@link PaymentInvoice.discountPercent} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discountPercent: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DiscountPercent',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PaymentInvoice.paidSum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paidSum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PaidSum', 'Edm.Double', true);
  /**
   * Representation of the {@link PaymentInvoice.installmentId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  installmentId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('InstallmentId', 'Edm.Int32', true);
  /**
   * Representation of the {@link PaymentInvoice.witholdingTaxApplied} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  witholdingTaxApplied: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WitholdingTaxApplied',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PaymentInvoice.witholdingTaxAppliedFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  witholdingTaxAppliedFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WitholdingTaxAppliedFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PaymentInvoice.witholdingTaxAppliedSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  witholdingTaxAppliedSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WitholdingTaxAppliedSC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PaymentInvoice.linkDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  linkDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'LinkDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link PaymentInvoice.distributionRule} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PaymentInvoice.distributionRule2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule2',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PaymentInvoice.distributionRule3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule3',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PaymentInvoice.distributionRule4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule4',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PaymentInvoice.distributionRule5} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule5: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule5',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PaymentInvoice.totalDiscount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalDiscount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TotalDiscount', 'Edm.Double', true);
  /**
   * Representation of the {@link PaymentInvoice.totalDiscountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalDiscountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TotalDiscountFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PaymentInvoice.totalDiscountSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalDiscountSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TotalDiscountSC',
    'Edm.Double',
    true
  );

  /**
   * Creates an instance of PaymentInvoiceField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, PaymentInvoice, fieldOptions);
  }
}

export namespace PaymentInvoice {
  /**
   * Metadata information on all properties of the `PaymentInvoice` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PaymentInvoice>[] = [
    {
      originalName: 'LineNum',
      name: 'lineNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DocEntry',
      name: 'docEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DocNum',
      name: 'docNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'SumApplied',
      name: 'sumApplied',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AppliedFC',
      name: 'appliedFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AppliedSys',
      name: 'appliedSys',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'DocRate',
      name: 'docRate',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'DocLine',
      name: 'docLine',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'InvoiceType',
      name: 'invoiceType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DiscountPercent',
      name: 'discountPercent',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'PaidSum',
      name: 'paidSum',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'InstallmentId',
      name: 'installmentId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'WitholdingTaxApplied',
      name: 'witholdingTaxApplied',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'WitholdingTaxAppliedFC',
      name: 'witholdingTaxAppliedFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'WitholdingTaxAppliedSC',
      name: 'witholdingTaxAppliedSc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'LinkDate',
      name: 'linkDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'DistributionRule',
      name: 'distributionRule',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DistributionRule2',
      name: 'distributionRule2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DistributionRule3',
      name: 'distributionRule3',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DistributionRule4',
      name: 'distributionRule4',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DistributionRule5',
      name: 'distributionRule5',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TotalDiscount',
      name: 'totalDiscount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TotalDiscountFC',
      name: 'totalDiscountFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TotalDiscountSC',
      name: 'totalDiscountSc',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
