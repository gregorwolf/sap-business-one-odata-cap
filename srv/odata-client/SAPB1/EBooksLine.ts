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
 * EBooksLine
 */
export interface EBooksLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Net Value.
   * @nullable
   */
  netValue?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Vat Category.
   * @nullable
   */
  vatCategory?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Vat Amount.
   * @nullable
   */
  vatAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Withheld Amount.
   * @nullable
   */
  withheldAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Withheld Percent Category.
   * @nullable
   */
  withheldPercentCategory?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Expense Classification Type.
   * @nullable
   */
  expenseClassificationType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Expense Classification Category.
   * @nullable
   */
  expenseClassificationCategory?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
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
}

/**
 * EBooksLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EBooksLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EBooksLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EBooksLine.lineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link EBooksLine.netValue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  netValue: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NetValue', 'Edm.Double', true);
  /**
   * Representation of the {@link EBooksLine.vatCategory} property for query construction.
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
   * Representation of the {@link EBooksLine.vatAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VatAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link EBooksLine.withheldAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withheldAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WithheldAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link EBooksLine.withheldPercentCategory} property for query construction.
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
   * Representation of the {@link EBooksLine.expenseClassificationType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenseClassificationType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExpenseClassificationType',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link EBooksLine.expenseClassificationCategory} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenseClassificationCategory: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExpenseClassificationCategory',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link EBooksLine.vatClassificationType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatClassificationType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'VATClassificationType',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link EBooksLine.vatClassificationCategory} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatClassificationCategory: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'VATClassificationCategory',
    'Edm.Int32',
    true
  );

  /**
   * Creates an instance of EBooksLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, EBooksLine, fieldOptions);
  }
}

export namespace EBooksLine {
  /**
   * Metadata information on all properties of the `EBooksLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EBooksLine>[] = [
    {
      originalName: 'LineNumber',
      name: 'lineNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'NetValue',
      name: 'netValue',
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
      originalName: 'VatAmount',
      name: 'vatAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'WithheldAmount',
      name: 'withheldAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'WithheldPercentCategory',
      name: 'withheldPercentCategory',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ExpenseClassificationType',
      name: 'expenseClassificationType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ExpenseClassificationCategory',
      name: 'expenseClassificationCategory',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'VATClassificationType',
      name: 'vatClassificationType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'VATClassificationCategory',
      name: 'vatClassificationCategory',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
