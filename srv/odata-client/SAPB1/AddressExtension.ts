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
 * AddressExtension
 */
export interface AddressExtension<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Ship To Street.
   * @nullable
   */
  shipToStreet?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To Street No.
   * @nullable
   */
  shipToStreetNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To Block.
   * @nullable
   */
  shipToBlock?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To Building.
   * @nullable
   */
  shipToBuilding?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To City.
   * @nullable
   */
  shipToCity?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To Zip Code.
   * @nullable
   */
  shipToZipCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To County.
   * @nullable
   */
  shipToCounty?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To State.
   * @nullable
   */
  shipToState?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To Country.
   * @nullable
   */
  shipToCountry?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To Address Type.
   * @nullable
   */
  shipToAddressType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To Street.
   * @nullable
   */
  billToStreet?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To Street No.
   * @nullable
   */
  billToStreetNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To Block.
   * @nullable
   */
  billToBlock?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To Building.
   * @nullable
   */
  billToBuilding?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To City.
   * @nullable
   */
  billToCity?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To Zip Code.
   * @nullable
   */
  billToZipCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To County.
   * @nullable
   */
  billToCounty?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To State.
   * @nullable
   */
  billToState?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To Country.
   * @nullable
   */
  billToCountry?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To Address Type.
   * @nullable
   */
  billToAddressType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To Global Location Number.
   * @nullable
   */
  shipToGlobalLocationNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To Global Location Number.
   * @nullable
   */
  billToGlobalLocationNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To Address 2.
   * @nullable
   */
  shipToAddress2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To Address 3.
   * @nullable
   */
  shipToAddress3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To Address 2.
   * @nullable
   */
  billToAddress2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To Address 3.
   * @nullable
   */
  billToAddress3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Place Of Supply.
   * @nullable
   */
  placeOfSupply?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Purchase Place Of Supply.
   * @nullable
   */
  purchasePlaceOfSupply?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Goods Issue Place Bp.
   * @nullable
   */
  goodsIssuePlaceBp?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Goods Issue Place Cnpj.
   * @nullable
   */
  goodsIssuePlaceCnpj?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Goods Issue Place Cpf.
   * @nullable
   */
  goodsIssuePlaceCpf?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Goods Issue Place Street.
   * @nullable
   */
  goodsIssuePlaceStreet?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Goods Issue Place Street No.
   * @nullable
   */
  goodsIssuePlaceStreetNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Goods Issue Place Building.
   * @nullable
   */
  goodsIssuePlaceBuilding?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Goods Issue Place Zip.
   * @nullable
   */
  goodsIssuePlaceZip?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Goods Issue Place Block.
   * @nullable
   */
  goodsIssuePlaceBlock?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Goods Issue Place City.
   * @nullable
   */
  goodsIssuePlaceCity?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Goods Issue Place County.
   * @nullable
   */
  goodsIssuePlaceCounty?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Goods Issue Place State.
   * @nullable
   */
  goodsIssuePlaceState?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Goods Issue Place Country.
   * @nullable
   */
  goodsIssuePlaceCountry?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Goods Issue Place Phone.
   * @nullable
   */
  goodsIssuePlacePhone?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Goods Issue Place E Mail.
   * @nullable
   */
  goodsIssuePlaceEMail?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Goods Issue Place Departure Date.
   * @nullable
   */
  goodsIssuePlaceDepartureDate?: DeserializedType<
    DeSerializersT,
    'Edm.DateTimeOffset'
  >;
  /**
   * Delivery Place Bp.
   * @nullable
   */
  deliveryPlaceBp?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Delivery Place Cnpj.
   * @nullable
   */
  deliveryPlaceCnpj?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Delivery Place Cpf.
   * @nullable
   */
  deliveryPlaceCpf?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Delivery Place Street.
   * @nullable
   */
  deliveryPlaceStreet?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Delivery Place Street No.
   * @nullable
   */
  deliveryPlaceStreetNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Delivery Place Building.
   * @nullable
   */
  deliveryPlaceBuilding?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Delivery Place Zip.
   * @nullable
   */
  deliveryPlaceZip?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Delivery Place Block.
   * @nullable
   */
  deliveryPlaceBlock?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Delivery Place City.
   * @nullable
   */
  deliveryPlaceCity?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Delivery Place County.
   * @nullable
   */
  deliveryPlaceCounty?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Delivery Place State.
   * @nullable
   */
  deliveryPlaceState?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Delivery Place Country.
   * @nullable
   */
  deliveryPlaceCountry?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Delivery Place Phone.
   * @nullable
   */
  deliveryPlacePhone?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Delivery Place E Mail.
   * @nullable
   */
  deliveryPlaceEMail?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Delivery Place Departure Date.
   * @nullable
   */
  deliveryPlaceDepartureDate?: DeserializedType<
    DeSerializersT,
    'Edm.DateTimeOffset'
  >;
}

/**
 * AddressExtensionField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class AddressExtensionField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  AddressExtension,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link AddressExtension.shipToStreet} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToStreet: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ShipToStreet', 'Edm.String', true);
  /**
   * Representation of the {@link AddressExtension.shipToStreetNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToStreetNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ShipToStreetNo',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.shipToBlock} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToBlock: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ShipToBlock', 'Edm.String', true);
  /**
   * Representation of the {@link AddressExtension.shipToBuilding} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToBuilding: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ShipToBuilding',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.shipToCity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToCity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ShipToCity', 'Edm.String', true);
  /**
   * Representation of the {@link AddressExtension.shipToZipCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToZipCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ShipToZipCode', 'Edm.String', true);
  /**
   * Representation of the {@link AddressExtension.shipToCounty} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToCounty: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ShipToCounty', 'Edm.String', true);
  /**
   * Representation of the {@link AddressExtension.shipToState} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToState: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ShipToState', 'Edm.String', true);
  /**
   * Representation of the {@link AddressExtension.shipToCountry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToCountry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ShipToCountry', 'Edm.String', true);
  /**
   * Representation of the {@link AddressExtension.shipToAddressType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToAddressType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ShipToAddressType',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.billToStreet} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToStreet: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BillToStreet', 'Edm.String', true);
  /**
   * Representation of the {@link AddressExtension.billToStreetNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToStreetNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BillToStreetNo',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.billToBlock} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToBlock: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BillToBlock', 'Edm.String', true);
  /**
   * Representation of the {@link AddressExtension.billToBuilding} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToBuilding: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BillToBuilding',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.billToCity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToCity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BillToCity', 'Edm.String', true);
  /**
   * Representation of the {@link AddressExtension.billToZipCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToZipCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BillToZipCode', 'Edm.String', true);
  /**
   * Representation of the {@link AddressExtension.billToCounty} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToCounty: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BillToCounty', 'Edm.String', true);
  /**
   * Representation of the {@link AddressExtension.billToState} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToState: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BillToState', 'Edm.String', true);
  /**
   * Representation of the {@link AddressExtension.billToCountry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToCountry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BillToCountry', 'Edm.String', true);
  /**
   * Representation of the {@link AddressExtension.billToAddressType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToAddressType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BillToAddressType',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.shipToGlobalLocationNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToGlobalLocationNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ShipToGlobalLocationNumber',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.billToGlobalLocationNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToGlobalLocationNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BillToGlobalLocationNumber',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.shipToAddress2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToAddress2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ShipToAddress2',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.shipToAddress3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToAddress3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ShipToAddress3',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.billToAddress2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToAddress2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BillToAddress2',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.billToAddress3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToAddress3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BillToAddress3',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.placeOfSupply} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  placeOfSupply: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PlaceOfSupply', 'Edm.String', true);
  /**
   * Representation of the {@link AddressExtension.purchasePlaceOfSupply} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchasePlaceOfSupply: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PurchasePlaceOfSupply',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.docEntry} property for query construction.
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
   * Representation of the {@link AddressExtension.goodsIssuePlaceBp} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  goodsIssuePlaceBp: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GoodsIssuePlaceBP',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.goodsIssuePlaceCnpj} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  goodsIssuePlaceCnpj: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GoodsIssuePlaceCNPJ',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.goodsIssuePlaceCpf} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  goodsIssuePlaceCpf: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GoodsIssuePlaceCPF',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.goodsIssuePlaceStreet} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  goodsIssuePlaceStreet: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GoodsIssuePlaceStreet',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.goodsIssuePlaceStreetNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  goodsIssuePlaceStreetNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GoodsIssuePlaceStreetNo',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.goodsIssuePlaceBuilding} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  goodsIssuePlaceBuilding: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GoodsIssuePlaceBuilding',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.goodsIssuePlaceZip} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  goodsIssuePlaceZip: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GoodsIssuePlaceZip',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.goodsIssuePlaceBlock} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  goodsIssuePlaceBlock: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GoodsIssuePlaceBlock',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.goodsIssuePlaceCity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  goodsIssuePlaceCity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GoodsIssuePlaceCity',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.goodsIssuePlaceCounty} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  goodsIssuePlaceCounty: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GoodsIssuePlaceCounty',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.goodsIssuePlaceState} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  goodsIssuePlaceState: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GoodsIssuePlaceState',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.goodsIssuePlaceCountry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  goodsIssuePlaceCountry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GoodsIssuePlaceCountry',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.goodsIssuePlacePhone} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  goodsIssuePlacePhone: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GoodsIssuePlacePhone',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.goodsIssuePlaceEMail} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  goodsIssuePlaceEMail: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GoodsIssuePlaceEMail',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.goodsIssuePlaceDepartureDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  goodsIssuePlaceDepartureDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GoodsIssuePlaceDepartureDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link AddressExtension.deliveryPlaceBp} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deliveryPlaceBp: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DeliveryPlaceBP',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.deliveryPlaceCnpj} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deliveryPlaceCnpj: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DeliveryPlaceCNPJ',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.deliveryPlaceCpf} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deliveryPlaceCpf: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DeliveryPlaceCPF',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.deliveryPlaceStreet} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deliveryPlaceStreet: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DeliveryPlaceStreet',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.deliveryPlaceStreetNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deliveryPlaceStreetNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DeliveryPlaceStreetNo',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.deliveryPlaceBuilding} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deliveryPlaceBuilding: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DeliveryPlaceBuilding',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.deliveryPlaceZip} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deliveryPlaceZip: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DeliveryPlaceZip',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.deliveryPlaceBlock} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deliveryPlaceBlock: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DeliveryPlaceBlock',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.deliveryPlaceCity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deliveryPlaceCity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DeliveryPlaceCity',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.deliveryPlaceCounty} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deliveryPlaceCounty: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DeliveryPlaceCounty',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.deliveryPlaceState} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deliveryPlaceState: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DeliveryPlaceState',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.deliveryPlaceCountry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deliveryPlaceCountry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DeliveryPlaceCountry',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.deliveryPlacePhone} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deliveryPlacePhone: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DeliveryPlacePhone',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.deliveryPlaceEMail} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deliveryPlaceEMail: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DeliveryPlaceEMail',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AddressExtension.deliveryPlaceDepartureDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deliveryPlaceDepartureDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DeliveryPlaceDepartureDate',
    'Edm.DateTimeOffset',
    true
  );

  /**
   * Creates an instance of AddressExtensionField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, AddressExtension, fieldOptions);
  }
}

export namespace AddressExtension {
  /**
   * Metadata information on all properties of the `AddressExtension` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AddressExtension>[] = [
    {
      originalName: 'ShipToStreet',
      name: 'shipToStreet',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ShipToStreetNo',
      name: 'shipToStreetNo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ShipToBlock',
      name: 'shipToBlock',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ShipToBuilding',
      name: 'shipToBuilding',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ShipToCity',
      name: 'shipToCity',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ShipToZipCode',
      name: 'shipToZipCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ShipToCounty',
      name: 'shipToCounty',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ShipToState',
      name: 'shipToState',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ShipToCountry',
      name: 'shipToCountry',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ShipToAddressType',
      name: 'shipToAddressType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BillToStreet',
      name: 'billToStreet',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BillToStreetNo',
      name: 'billToStreetNo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BillToBlock',
      name: 'billToBlock',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BillToBuilding',
      name: 'billToBuilding',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BillToCity',
      name: 'billToCity',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BillToZipCode',
      name: 'billToZipCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BillToCounty',
      name: 'billToCounty',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BillToState',
      name: 'billToState',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BillToCountry',
      name: 'billToCountry',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BillToAddressType',
      name: 'billToAddressType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ShipToGlobalLocationNumber',
      name: 'shipToGlobalLocationNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BillToGlobalLocationNumber',
      name: 'billToGlobalLocationNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ShipToAddress2',
      name: 'shipToAddress2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ShipToAddress3',
      name: 'shipToAddress3',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BillToAddress2',
      name: 'billToAddress2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BillToAddress3',
      name: 'billToAddress3',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PlaceOfSupply',
      name: 'placeOfSupply',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PurchasePlaceOfSupply',
      name: 'purchasePlaceOfSupply',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DocEntry',
      name: 'docEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'GoodsIssuePlaceBP',
      name: 'goodsIssuePlaceBp',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GoodsIssuePlaceCNPJ',
      name: 'goodsIssuePlaceCnpj',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GoodsIssuePlaceCPF',
      name: 'goodsIssuePlaceCpf',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GoodsIssuePlaceStreet',
      name: 'goodsIssuePlaceStreet',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GoodsIssuePlaceStreetNo',
      name: 'goodsIssuePlaceStreetNo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GoodsIssuePlaceBuilding',
      name: 'goodsIssuePlaceBuilding',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GoodsIssuePlaceZip',
      name: 'goodsIssuePlaceZip',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GoodsIssuePlaceBlock',
      name: 'goodsIssuePlaceBlock',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GoodsIssuePlaceCity',
      name: 'goodsIssuePlaceCity',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GoodsIssuePlaceCounty',
      name: 'goodsIssuePlaceCounty',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GoodsIssuePlaceState',
      name: 'goodsIssuePlaceState',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GoodsIssuePlaceCountry',
      name: 'goodsIssuePlaceCountry',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GoodsIssuePlacePhone',
      name: 'goodsIssuePlacePhone',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GoodsIssuePlaceEMail',
      name: 'goodsIssuePlaceEMail',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GoodsIssuePlaceDepartureDate',
      name: 'goodsIssuePlaceDepartureDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'DeliveryPlaceBP',
      name: 'deliveryPlaceBp',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DeliveryPlaceCNPJ',
      name: 'deliveryPlaceCnpj',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DeliveryPlaceCPF',
      name: 'deliveryPlaceCpf',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DeliveryPlaceStreet',
      name: 'deliveryPlaceStreet',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DeliveryPlaceStreetNo',
      name: 'deliveryPlaceStreetNo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DeliveryPlaceBuilding',
      name: 'deliveryPlaceBuilding',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DeliveryPlaceZip',
      name: 'deliveryPlaceZip',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DeliveryPlaceBlock',
      name: 'deliveryPlaceBlock',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DeliveryPlaceCity',
      name: 'deliveryPlaceCity',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DeliveryPlaceCounty',
      name: 'deliveryPlaceCounty',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DeliveryPlaceState',
      name: 'deliveryPlaceState',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DeliveryPlaceCountry',
      name: 'deliveryPlaceCountry',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DeliveryPlacePhone',
      name: 'deliveryPlacePhone',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DeliveryPlaceEMail',
      name: 'deliveryPlaceEMail',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DeliveryPlaceDepartureDate',
      name: 'deliveryPlaceDepartureDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    }
  ];
}
