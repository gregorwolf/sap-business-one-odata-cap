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
 * SalesForecastLine
 */
export interface SalesForecastLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Quantity.
   * @nullable
   */
  quantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Forecasted Day.
   * @nullable
   */
  forecastedDay?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Item No.
   * @nullable
   */
  itemNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Warehouse.
   * @nullable
   */
  warehouse?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * SalesForecastLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesForecastLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  SalesForecastLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link SalesForecastLine.quantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Quantity', 'Edm.Double', true);
  /**
   * Representation of the {@link SalesForecastLine.forecastedDay} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  forecastedDay: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ForecastedDay',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link SalesForecastLine.itemNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemNo', 'Edm.String', true);
  /**
   * Representation of the {@link SalesForecastLine.warehouse} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouse: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Warehouse', 'Edm.String', true);

  /**
   * Creates an instance of SalesForecastLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, SalesForecastLine, fieldOptions);
  }
}

export namespace SalesForecastLine {
  /**
   * Metadata information on all properties of the `SalesForecastLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SalesForecastLine>[] = [
    {
      originalName: 'Quantity',
      name: 'quantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ForecastedDay',
      name: 'forecastedDay',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ItemNo',
      name: 'itemNo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Warehouse',
      name: 'warehouse',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
