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
 * BrazilFuelIndexerParams
 */
export interface BrazilFuelIndexerParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Fuel Id.
   * @nullable
   */
  fuelId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Fuel Group Code.
   * @nullable
   */
  fuelGroupCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Fuel Code.
   * @nullable
   */
  fuelCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * BrazilFuelIndexerParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BrazilFuelIndexerParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BrazilFuelIndexerParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BrazilFuelIndexerParams.fuelId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fuelId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FuelID', 'Edm.Int32', true);
  /**
   * Representation of the {@link BrazilFuelIndexerParams.fuelGroupCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fuelGroupCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FuelGroupCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link BrazilFuelIndexerParams.fuelCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fuelCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FuelCode', 'Edm.String', true);
  /**
   * Representation of the {@link BrazilFuelIndexerParams.description} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Description', 'Edm.String', true);

  /**
   * Creates an instance of BrazilFuelIndexerParamsField.
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
      BrazilFuelIndexerParams,
      fieldOptions
    );
  }
}

export namespace BrazilFuelIndexerParams {
  /**
   * Metadata information on all properties of the `BrazilFuelIndexerParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BrazilFuelIndexerParams>[] =
    [
      {
        originalName: 'FuelID',
        name: 'fuelId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'FuelGroupCode',
        name: 'fuelGroupCode',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'FuelCode',
        name: 'fuelCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Description',
        name: 'description',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
