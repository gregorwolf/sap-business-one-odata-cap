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
 * SeriesLine
 */
export interface SeriesLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Series.
   * @nullable
   */
  series?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Prefix.
   * @nullable
   */
  prefix?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * First Num.
   * @nullable
   */
  firstNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Next Num.
   * @nullable
   */
  nextNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Last Num.
   * @nullable
   */
  lastNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * SeriesLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class SeriesLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  SeriesLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link SeriesLine.series} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  series: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Series', 'Edm.Int32', true);
  /**
   * Representation of the {@link SeriesLine.prefix} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  prefix: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Prefix', 'Edm.String', true);
  /**
   * Representation of the {@link SeriesLine.firstNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  firstNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FirstNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link SeriesLine.nextNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nextNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NextNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link SeriesLine.lastNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LastNum', 'Edm.Int32', true);

  /**
   * Creates an instance of SeriesLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, SeriesLine, fieldOptions);
  }
}

export namespace SeriesLine {
  /**
   * Metadata information on all properties of the `SeriesLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SeriesLine>[] = [
    {
      originalName: 'Series',
      name: 'series',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Prefix',
      name: 'prefix',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FirstNum',
      name: 'firstNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'NextNum',
      name: 'nextNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LastNum',
      name: 'lastNum',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
