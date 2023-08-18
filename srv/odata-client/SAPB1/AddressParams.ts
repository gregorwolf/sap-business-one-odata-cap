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
 * AddressParams
 */
export interface AddressParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Country.
   * @nullable
   */
  country?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * State.
   * @nullable
   */
  state?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * County.
   * @nullable
   */
  county?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Zip Code.
   * @nullable
   */
  zipCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * City.
   * @nullable
   */
  city?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Building.
   * @nullable
   */
  building?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Block.
   * @nullable
   */
  block?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Street.
   * @nullable
   */
  street?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Street No.
   * @nullable
   */
  streetNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Address 2.
   * @nullable
   */
  address2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Address 3.
   * @nullable
   */
  address3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Address Type.
   * @nullable
   */
  addressType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Global Location Number.
   * @nullable
   */
  globalLocationNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * AddressParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class AddressParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  AddressParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link AddressParams.country} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  country: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true);
  /**
   * Representation of the {@link AddressParams.state} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  state: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('State', 'Edm.String', true);
  /**
   * Representation of the {@link AddressParams.county} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  county: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('County', 'Edm.String', true);
  /**
   * Representation of the {@link AddressParams.zipCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  zipCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ZipCode', 'Edm.String', true);
  /**
   * Representation of the {@link AddressParams.city} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  city: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('City', 'Edm.String', true);
  /**
   * Representation of the {@link AddressParams.building} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  building: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Building', 'Edm.String', true);
  /**
   * Representation of the {@link AddressParams.block} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  block: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Block', 'Edm.String', true);
  /**
   * Representation of the {@link AddressParams.street} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  street: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Street', 'Edm.String', true);
  /**
   * Representation of the {@link AddressParams.streetNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  streetNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StreetNo', 'Edm.String', true);
  /**
   * Representation of the {@link AddressParams.address2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  address2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Address2', 'Edm.String', true);
  /**
   * Representation of the {@link AddressParams.address3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  address3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Address3', 'Edm.String', true);
  /**
   * Representation of the {@link AddressParams.addressType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AddressType', 'Edm.String', true);
  /**
   * Representation of the {@link AddressParams.globalLocationNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  globalLocationNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GlobalLocationNumber',
    'Edm.String',
    true
  );

  /**
   * Creates an instance of AddressParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, AddressParams, fieldOptions);
  }
}

export namespace AddressParams {
  /**
   * Metadata information on all properties of the `AddressParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AddressParams>[] = [
    {
      originalName: 'Country',
      name: 'country',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'State',
      name: 'state',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'County',
      name: 'county',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ZipCode',
      name: 'zipCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'City',
      name: 'city',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Building',
      name: 'building',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Block',
      name: 'block',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Street',
      name: 'street',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'StreetNo',
      name: 'streetNo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Address2',
      name: 'address2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Address3',
      name: 'address3',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AddressType',
      name: 'addressType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GlobalLocationNumber',
      name: 'globalLocationNumber',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
