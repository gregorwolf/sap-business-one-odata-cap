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
 * DocFreightEBooksDetail
 */
export interface DocFreightEBooksDetail<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Income Classification Type.
   * @nullable
   */
  incomeClassificationType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Income Classification Category.
   * @nullable
   */
  incomeClassificationCategory?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Expenses Classification Type.
   * @nullable
   */
  expensesClassificationType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Expenses Classification Category.
   * @nullable
   */
  expensesClassificationCategory?: DeserializedType<
    DeSerializersT,
    'Edm.Int32'
  >;
  /**
   * Net Value Lc.
   * @nullable
   */
  netValueLc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Net Value Fc.
   * @nullable
   */
  netValueFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Net Value Sc.
   * @nullable
   */
  netValueSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Vat Category.
   * @nullable
   */
  vatCategory?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Withheld Percent Category.
   * @nullable
   */
  withheldPercentCategory?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Withheld Amount Lc.
   * @nullable
   */
  withheldAmountLc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Withheld Amount Fc.
   * @nullable
   */
  withheldAmountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Withheld Amount Sc.
   * @nullable
   */
  withheldAmountSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Vat Classification Type.
   * @nullable
   */
  vatClassificationType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Vat Classification Category.
   * @nullable
   */
  vatClassificationCategory?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Vat Exemption Cause.
   * @nullable
   */
  vatExemptionCause?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * DocFreightEBooksDetailField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocFreightEBooksDetailField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DocFreightEBooksDetail,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DocFreightEBooksDetail.incomeClassificationType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  incomeClassificationType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'IncomeClassificationType',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link DocFreightEBooksDetail.incomeClassificationCategory} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  incomeClassificationCategory: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'IncomeClassificationCategory',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link DocFreightEBooksDetail.expensesClassificationType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expensesClassificationType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExpensesClassificationType',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link DocFreightEBooksDetail.expensesClassificationCategory} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expensesClassificationCategory: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExpensesClassificationCategory',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link DocFreightEBooksDetail.netValueLc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  netValueLc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NetValueLC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocFreightEBooksDetail.netValueFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  netValueFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NetValueFC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocFreightEBooksDetail.netValueSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  netValueSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NetValueSC', 'Edm.Double', true);
  /**
   * Representation of the {@link DocFreightEBooksDetail.vatCategory} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatCategory: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VatCategory', 'Edm.Int32', true);
  /**
   * Representation of the {@link DocFreightEBooksDetail.withheldPercentCategory} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withheldPercentCategory: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WithheldPercentCategory',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link DocFreightEBooksDetail.withheldAmountLc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withheldAmountLc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WithheldAmountLC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocFreightEBooksDetail.withheldAmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withheldAmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WithheldAmountFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocFreightEBooksDetail.withheldAmountSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withheldAmountSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WithheldAmountSC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DocFreightEBooksDetail.vatClassificationType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatClassificationType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'VatClassificationType',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link DocFreightEBooksDetail.vatClassificationCategory} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatClassificationCategory: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'VatClassificationCategory',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link DocFreightEBooksDetail.vatExemptionCause} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatExemptionCause: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'VATExemptionCause',
    'Edm.Int32',
    true
  );

  /**
   * Creates an instance of DocFreightEBooksDetailField.
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
      DocFreightEBooksDetail,
      fieldOptions
    );
  }
}

export namespace DocFreightEBooksDetail {
  /**
   * Metadata information on all properties of the `DocFreightEBooksDetail` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocFreightEBooksDetail>[] = [
    {
      originalName: 'IncomeClassificationType',
      name: 'incomeClassificationType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'IncomeClassificationCategory',
      name: 'incomeClassificationCategory',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ExpensesClassificationType',
      name: 'expensesClassificationType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ExpensesClassificationCategory',
      name: 'expensesClassificationCategory',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'NetValueLC',
      name: 'netValueLc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'NetValueFC',
      name: 'netValueFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'NetValueSC',
      name: 'netValueSc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'VatCategory',
      name: 'vatCategory',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'WithheldPercentCategory',
      name: 'withheldPercentCategory',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'WithheldAmountLC',
      name: 'withheldAmountLc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'WithheldAmountFC',
      name: 'withheldAmountFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'WithheldAmountSC',
      name: 'withheldAmountSc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'VatClassificationType',
      name: 'vatClassificationType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'VatClassificationCategory',
      name: 'vatClassificationCategory',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'VATExemptionCause',
      name: 'vatExemptionCause',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
