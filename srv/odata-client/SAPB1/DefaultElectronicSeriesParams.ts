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
 * DefaultElectronicSeriesParams
 */
export interface DefaultElectronicSeriesParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Series.
   * @nullable
   */
  series?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Electronic Series.
   * @nullable
   */
  electronicSeries?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * DefaultElectronicSeriesParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DefaultElectronicSeriesParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DefaultElectronicSeriesParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DefaultElectronicSeriesParams.series} property for query construction.
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
   * Representation of the {@link DefaultElectronicSeriesParams.electronicSeries} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  electronicSeries: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ElectronicSeries',
    'Edm.Int32',
    true
  );

  /**
   * Creates an instance of DefaultElectronicSeriesParamsField.
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
      DefaultElectronicSeriesParams,
      fieldOptions
    );
  }
}

export namespace DefaultElectronicSeriesParams {
  /**
   * Metadata information on all properties of the `DefaultElectronicSeriesParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DefaultElectronicSeriesParams>[] =
    [
      {
        originalName: 'Series',
        name: 'series',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'ElectronicSeries',
        name: 'electronicSeries',
        type: 'Edm.Int32',
        isCollection: false
      }
    ];
}