/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoAddressType } from './BoAddressType';
import { BoGstRegnTypeEnum } from './BoGstRegnTypeEnum';
import { BoMyfTypeEnum } from './BoMyfTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
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
 * BpAddress
 */
export interface BpAddress<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Address Name.
   * @nullable
   */
  addressName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Street.
   * @nullable
   */
  street?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Block.
   * @nullable
   */
  block?: DeserializedType<DeSerializersT, 'Edm.String'>;
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
   * County.
   * @nullable
   */
  county?: DeserializedType<DeSerializersT, 'Edm.String'>;
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
   * Federal Tax Id.
   * @nullable
   */
  federalTaxId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Code.
   * @nullable
   */
  taxCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Building Floor Room.
   * @nullable
   */
  buildingFloorRoom?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Address Type.
   * @nullable
   */
  addressType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Address Name 2.
   * @nullable
   */
  addressName2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Address Name 3.
   * @nullable
   */
  addressName3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Type Of Address.
   * @nullable
   */
  typeOfAddress?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Street No.
   * @nullable
   */
  streetNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Row Num.
   * @nullable
   */
  rowNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Global Location Number.
   * @nullable
   */
  globalLocationNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Nationality.
   * @nullable
   */
  nationality?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Office.
   * @nullable
   */
  taxOffice?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Gstin.
   * @nullable
   */
  gstin?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Gst Type.
   * @nullable
   */
  gstType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Create Date.
   * @nullable
   */
  createDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Create Time.
   * @nullable
   */
  createTime?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
  /**
   * Myf Type.
   * @nullable
   */
  myfType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Taas Enabled.
   * @nullable
   */
  taasEnabled?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * BpAddressField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpAddressField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BpAddress,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BpAddress.addressName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AddressName', 'Edm.String', true);
  /**
   * Representation of the {@link BpAddress.street} property for query construction.
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
   * Representation of the {@link BpAddress.block} property for query construction.
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
   * Representation of the {@link BpAddress.zipCode} property for query construction.
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
   * Representation of the {@link BpAddress.city} property for query construction.
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
   * Representation of the {@link BpAddress.county} property for query construction.
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
   * Representation of the {@link BpAddress.country} property for query construction.
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
   * Representation of the {@link BpAddress.state} property for query construction.
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
   * Representation of the {@link BpAddress.federalTaxId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  federalTaxId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FederalTaxID', 'Edm.String', true);
  /**
   * Representation of the {@link BpAddress.taxCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxCode', 'Edm.String', true);
  /**
   * Representation of the {@link BpAddress.buildingFloorRoom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  buildingFloorRoom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BuildingFloorRoom',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BpAddress.addressType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressType: EnumField<EntityT, DeSerializersT, BoAddressType, true, false> =
    this._fieldBuilder.buildEnumField('AddressType', BoAddressType, true);
  /**
   * Representation of the {@link BpAddress.addressName2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressName2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AddressName2', 'Edm.String', true);
  /**
   * Representation of the {@link BpAddress.addressName3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressName3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AddressName3', 'Edm.String', true);
  /**
   * Representation of the {@link BpAddress.typeOfAddress} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  typeOfAddress: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TypeOfAddress', 'Edm.String', true);
  /**
   * Representation of the {@link BpAddress.streetNo} property for query construction.
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
   * Representation of the {@link BpAddress.bpCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPCode', 'Edm.String', true);
  /**
   * Representation of the {@link BpAddress.rowNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RowNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link BpAddress.globalLocationNumber} property for query construction.
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
   * Representation of the {@link BpAddress.nationality} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nationality: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Nationality', 'Edm.String', true);
  /**
   * Representation of the {@link BpAddress.taxOffice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxOffice: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxOffice', 'Edm.String', true);
  /**
   * Representation of the {@link BpAddress.gstin} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  gstin: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GSTIN', 'Edm.String', true);
  /**
   * Representation of the {@link BpAddress.gstType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  gstType: EnumField<EntityT, DeSerializersT, BoGstRegnTypeEnum, true, false> =
    this._fieldBuilder.buildEnumField('GstType', BoGstRegnTypeEnum, true);
  /**
   * Representation of the {@link BpAddress.createDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  createDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CreateDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link BpAddress.createTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  createTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CreateTime', 'Edm.TimeOfDay', true);
  /**
   * Representation of the {@link BpAddress.myfType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  myfType: EnumField<EntityT, DeSerializersT, BoMyfTypeEnum, true, false> =
    this._fieldBuilder.buildEnumField('MYFType', BoMyfTypeEnum, true);
  /**
   * Representation of the {@link BpAddress.taasEnabled} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taasEnabled: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('TaasEnabled', BoYesNoEnum, true);

  /**
   * Creates an instance of BpAddressField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, BpAddress, fieldOptions);
  }
}

export namespace BpAddress {
  /**
   * Metadata information on all properties of the `BpAddress` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BpAddress>[] = [
    {
      originalName: 'AddressName',
      name: 'addressName',
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
      originalName: 'Block',
      name: 'block',
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
      originalName: 'County',
      name: 'county',
      type: 'Edm.String',
      isCollection: false
    },
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
      originalName: 'FederalTaxID',
      name: 'federalTaxId',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxCode',
      name: 'taxCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BuildingFloorRoom',
      name: 'buildingFloorRoom',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AddressType',
      name: 'addressType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AddressName2',
      name: 'addressName2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AddressName3',
      name: 'addressName3',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TypeOfAddress',
      name: 'typeOfAddress',
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
      originalName: 'BPCode',
      name: 'bpCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'RowNum',
      name: 'rowNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'GlobalLocationNumber',
      name: 'globalLocationNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Nationality',
      name: 'nationality',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxOffice',
      name: 'taxOffice',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GSTIN',
      name: 'gstin',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GstType',
      name: 'gstType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CreateDate',
      name: 'createDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'CreateTime',
      name: 'createTime',
      type: 'Edm.TimeOfDay',
      isCollection: false
    },
    {
      originalName: 'MYFType',
      name: 'myfType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'TaasEnabled',
      name: 'taasEnabled',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
