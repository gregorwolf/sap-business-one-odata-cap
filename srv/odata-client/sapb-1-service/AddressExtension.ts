/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * AddressExtension
 */
export interface AddressExtension {
  /**
   * Ship To Street.
   * @nullable
   */
  shipToStreet?: string;
  /**
   * Ship To Street No.
   * @nullable
   */
  shipToStreetNo?: string;
  /**
   * Ship To Block.
   * @nullable
   */
  shipToBlock?: string;
  /**
   * Ship To Building.
   * @nullable
   */
  shipToBuilding?: string;
  /**
   * Ship To City.
   * @nullable
   */
  shipToCity?: string;
  /**
   * Ship To Zip Code.
   * @nullable
   */
  shipToZipCode?: string;
  /**
   * Ship To County.
   * @nullable
   */
  shipToCounty?: string;
  /**
   * Ship To State.
   * @nullable
   */
  shipToState?: string;
  /**
   * Ship To Country.
   * @nullable
   */
  shipToCountry?: string;
  /**
   * Ship To Address Type.
   * @nullable
   */
  shipToAddressType?: string;
  /**
   * Bill To Street.
   * @nullable
   */
  billToStreet?: string;
  /**
   * Bill To Street No.
   * @nullable
   */
  billToStreetNo?: string;
  /**
   * Bill To Block.
   * @nullable
   */
  billToBlock?: string;
  /**
   * Bill To Building.
   * @nullable
   */
  billToBuilding?: string;
  /**
   * Bill To City.
   * @nullable
   */
  billToCity?: string;
  /**
   * Bill To Zip Code.
   * @nullable
   */
  billToZipCode?: string;
  /**
   * Bill To County.
   * @nullable
   */
  billToCounty?: string;
  /**
   * Bill To State.
   * @nullable
   */
  billToState?: string;
  /**
   * Bill To Country.
   * @nullable
   */
  billToCountry?: string;
  /**
   * Bill To Address Type.
   * @nullable
   */
  billToAddressType?: string;
  /**
   * Ship To Global Location Number.
   * @nullable
   */
  shipToGlobalLocationNumber?: string;
  /**
   * Bill To Global Location Number.
   * @nullable
   */
  billToGlobalLocationNumber?: string;
  /**
   * Ship To Address 2.
   * @nullable
   */
  shipToAddress2?: string;
  /**
   * Ship To Address 3.
   * @nullable
   */
  shipToAddress3?: string;
  /**
   * Bill To Address 2.
   * @nullable
   */
  billToAddress2?: string;
  /**
   * Bill To Address 3.
   * @nullable
   */
  billToAddress3?: string;
  /**
   * Place Of Supply.
   * @nullable
   */
  placeOfSupply?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[AddressExtension.build]] instead.
 */
export function createAddressExtension(json: any): AddressExtension {
  return AddressExtension.build(json);
}

/**
 * AddressExtensionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class AddressExtensionField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AddressExtension> {
  /**
   * Representation of the [[AddressExtension.shipToStreet]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToStreet: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToStreet', this, 'Edm.String');
  /**
   * Representation of the [[AddressExtension.shipToStreetNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToStreetNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToStreetNo', this, 'Edm.String');
  /**
   * Representation of the [[AddressExtension.shipToBlock]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToBlock: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToBlock', this, 'Edm.String');
  /**
   * Representation of the [[AddressExtension.shipToBuilding]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToBuilding: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToBuilding', this, 'Edm.String');
  /**
   * Representation of the [[AddressExtension.shipToCity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToCity: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToCity', this, 'Edm.String');
  /**
   * Representation of the [[AddressExtension.shipToZipCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToZipCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToZipCode', this, 'Edm.String');
  /**
   * Representation of the [[AddressExtension.shipToCounty]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToCounty: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToCounty', this, 'Edm.String');
  /**
   * Representation of the [[AddressExtension.shipToState]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToState: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToState', this, 'Edm.String');
  /**
   * Representation of the [[AddressExtension.shipToCountry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToCountry: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToCountry', this, 'Edm.String');
  /**
   * Representation of the [[AddressExtension.shipToAddressType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToAddressType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToAddressType', this, 'Edm.String');
  /**
   * Representation of the [[AddressExtension.billToStreet]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToStreet: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillToStreet', this, 'Edm.String');
  /**
   * Representation of the [[AddressExtension.billToStreetNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToStreetNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillToStreetNo', this, 'Edm.String');
  /**
   * Representation of the [[AddressExtension.billToBlock]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToBlock: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillToBlock', this, 'Edm.String');
  /**
   * Representation of the [[AddressExtension.billToBuilding]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToBuilding: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillToBuilding', this, 'Edm.String');
  /**
   * Representation of the [[AddressExtension.billToCity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToCity: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillToCity', this, 'Edm.String');
  /**
   * Representation of the [[AddressExtension.billToZipCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToZipCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillToZipCode', this, 'Edm.String');
  /**
   * Representation of the [[AddressExtension.billToCounty]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToCounty: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillToCounty', this, 'Edm.String');
  /**
   * Representation of the [[AddressExtension.billToState]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToState: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillToState', this, 'Edm.String');
  /**
   * Representation of the [[AddressExtension.billToCountry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToCountry: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillToCountry', this, 'Edm.String');
  /**
   * Representation of the [[AddressExtension.billToAddressType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToAddressType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillToAddressType', this, 'Edm.String');
  /**
   * Representation of the [[AddressExtension.shipToGlobalLocationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToGlobalLocationNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToGlobalLocationNumber', this, 'Edm.String');
  /**
   * Representation of the [[AddressExtension.billToGlobalLocationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToGlobalLocationNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillToGlobalLocationNumber', this, 'Edm.String');
  /**
   * Representation of the [[AddressExtension.shipToAddress2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToAddress2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToAddress2', this, 'Edm.String');
  /**
   * Representation of the [[AddressExtension.shipToAddress3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToAddress3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToAddress3', this, 'Edm.String');
  /**
   * Representation of the [[AddressExtension.billToAddress2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToAddress2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillToAddress2', this, 'Edm.String');
  /**
   * Representation of the [[AddressExtension.billToAddress3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToAddress3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillToAddress3', this, 'Edm.String');
  /**
   * Representation of the [[AddressExtension.placeOfSupply]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  placeOfSupply: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PlaceOfSupply', this, 'Edm.String');

  /**
   * Creates an instance of AddressExtensionField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, AddressExtension);
  }
}

export namespace AddressExtension {
  /**
   * Metadata information on all properties of the `AddressExtension` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AddressExtension>[] = [{
    originalName: 'ShipToStreet',
    name: 'shipToStreet',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ShipToStreetNo',
    name: 'shipToStreetNo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ShipToBlock',
    name: 'shipToBlock',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ShipToBuilding',
    name: 'shipToBuilding',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ShipToCity',
    name: 'shipToCity',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ShipToZipCode',
    name: 'shipToZipCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ShipToCounty',
    name: 'shipToCounty',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ShipToState',
    name: 'shipToState',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ShipToCountry',
    name: 'shipToCountry',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ShipToAddressType',
    name: 'shipToAddressType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BillToStreet',
    name: 'billToStreet',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BillToStreetNo',
    name: 'billToStreetNo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BillToBlock',
    name: 'billToBlock',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BillToBuilding',
    name: 'billToBuilding',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BillToCity',
    name: 'billToCity',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BillToZipCode',
    name: 'billToZipCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BillToCounty',
    name: 'billToCounty',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BillToState',
    name: 'billToState',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BillToCountry',
    name: 'billToCountry',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BillToAddressType',
    name: 'billToAddressType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ShipToGlobalLocationNumber',
    name: 'shipToGlobalLocationNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BillToGlobalLocationNumber',
    name: 'billToGlobalLocationNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ShipToAddress2',
    name: 'shipToAddress2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ShipToAddress3',
    name: 'shipToAddress3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BillToAddress2',
    name: 'billToAddress2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BillToAddress3',
    name: 'billToAddress3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PlaceOfSupply',
    name: 'placeOfSupply',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): AddressExtension {
    return deserializeComplexTypeV4(json, AddressExtension);
  }
}
