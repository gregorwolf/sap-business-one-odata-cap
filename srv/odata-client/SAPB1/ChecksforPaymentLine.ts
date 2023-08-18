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
 * ChecksforPaymentLine
 */
export interface ChecksforPaymentLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Row Number.
   * @nullable
   */
  rowNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Row Details.
   * @nullable
   */
  rowDetails?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Row Total.
   * @nullable
   */
  rowTotal?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Row Currency.
   * @nullable
   */
  rowCurrency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Definition.
   * @nullable
   */
  taxDefinition?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Percent.
   * @nullable
   */
  taxPercent?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Credited Account.
   * @nullable
   */
  creditedAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Line Total.
   * @nullable
   */
  lineTotal?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * ChecksforPaymentLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ChecksforPaymentLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ChecksforPaymentLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ChecksforPaymentLine.rowNumber} property for query construction.
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
   * Representation of the {@link ChecksforPaymentLine.rowDetails} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowDetails: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RowDetails', 'Edm.String', true);
  /**
   * Representation of the {@link ChecksforPaymentLine.rowTotal} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowTotal: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RowTotal', 'Edm.Double', true);
  /**
   * Representation of the {@link ChecksforPaymentLine.rowCurrency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowCurrency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RowCurrency', 'Edm.String', true);
  /**
   * Representation of the {@link ChecksforPaymentLine.taxDefinition} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxDefinition: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxDefinition', 'Edm.String', true);
  /**
   * Representation of the {@link ChecksforPaymentLine.taxPercent} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxPercent: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxPercent', 'Edm.Double', true);
  /**
   * Representation of the {@link ChecksforPaymentLine.creditedAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditedAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CreditedAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ChecksforPaymentLine.lineTotal} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineTotal: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineTotal', 'Edm.Double', true);

  /**
   * Creates an instance of ChecksforPaymentLineField.
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
      ChecksforPaymentLine,
      fieldOptions
    );
  }
}

export namespace ChecksforPaymentLine {
  /**
   * Metadata information on all properties of the `ChecksforPaymentLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ChecksforPaymentLine>[] = [
    {
      originalName: 'RowNumber',
      name: 'rowNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'RowDetails',
      name: 'rowDetails',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'RowTotal',
      name: 'rowTotal',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'RowCurrency',
      name: 'rowCurrency',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxDefinition',
      name: 'taxDefinition',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxPercent',
      name: 'taxPercent',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CreditedAccount',
      name: 'creditedAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LineTotal',
      name: 'lineTotal',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
