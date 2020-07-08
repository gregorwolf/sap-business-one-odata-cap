/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class AddressExtensionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace AddressExtension {
  export function build(json: { [keys: string]: FieldType }): AddressExtension {
    return createComplexType(json, {
      ShipToStreet: (shipToStreet: string) => ({ shipToStreet: edmToTs(shipToStreet, 'Edm.String') }),
      ShipToStreetNo: (shipToStreetNo: string) => ({ shipToStreetNo: edmToTs(shipToStreetNo, 'Edm.String') }),
      ShipToBlock: (shipToBlock: string) => ({ shipToBlock: edmToTs(shipToBlock, 'Edm.String') }),
      ShipToBuilding: (shipToBuilding: string) => ({ shipToBuilding: edmToTs(shipToBuilding, 'Edm.String') }),
      ShipToCity: (shipToCity: string) => ({ shipToCity: edmToTs(shipToCity, 'Edm.String') }),
      ShipToZipCode: (shipToZipCode: string) => ({ shipToZipCode: edmToTs(shipToZipCode, 'Edm.String') }),
      ShipToCounty: (shipToCounty: string) => ({ shipToCounty: edmToTs(shipToCounty, 'Edm.String') }),
      ShipToState: (shipToState: string) => ({ shipToState: edmToTs(shipToState, 'Edm.String') }),
      ShipToCountry: (shipToCountry: string) => ({ shipToCountry: edmToTs(shipToCountry, 'Edm.String') }),
      ShipToAddressType: (shipToAddressType: string) => ({ shipToAddressType: edmToTs(shipToAddressType, 'Edm.String') }),
      BillToStreet: (billToStreet: string) => ({ billToStreet: edmToTs(billToStreet, 'Edm.String') }),
      BillToStreetNo: (billToStreetNo: string) => ({ billToStreetNo: edmToTs(billToStreetNo, 'Edm.String') }),
      BillToBlock: (billToBlock: string) => ({ billToBlock: edmToTs(billToBlock, 'Edm.String') }),
      BillToBuilding: (billToBuilding: string) => ({ billToBuilding: edmToTs(billToBuilding, 'Edm.String') }),
      BillToCity: (billToCity: string) => ({ billToCity: edmToTs(billToCity, 'Edm.String') }),
      BillToZipCode: (billToZipCode: string) => ({ billToZipCode: edmToTs(billToZipCode, 'Edm.String') }),
      BillToCounty: (billToCounty: string) => ({ billToCounty: edmToTs(billToCounty, 'Edm.String') }),
      BillToState: (billToState: string) => ({ billToState: edmToTs(billToState, 'Edm.String') }),
      BillToCountry: (billToCountry: string) => ({ billToCountry: edmToTs(billToCountry, 'Edm.String') }),
      BillToAddressType: (billToAddressType: string) => ({ billToAddressType: edmToTs(billToAddressType, 'Edm.String') }),
      ShipToGlobalLocationNumber: (shipToGlobalLocationNumber: string) => ({ shipToGlobalLocationNumber: edmToTs(shipToGlobalLocationNumber, 'Edm.String') }),
      BillToGlobalLocationNumber: (billToGlobalLocationNumber: string) => ({ billToGlobalLocationNumber: edmToTs(billToGlobalLocationNumber, 'Edm.String') }),
      ShipToAddress2: (shipToAddress2: string) => ({ shipToAddress2: edmToTs(shipToAddress2, 'Edm.String') }),
      ShipToAddress3: (shipToAddress3: string) => ({ shipToAddress3: edmToTs(shipToAddress3, 'Edm.String') }),
      BillToAddress2: (billToAddress2: string) => ({ billToAddress2: edmToTs(billToAddress2, 'Edm.String') }),
      BillToAddress3: (billToAddress3: string) => ({ billToAddress3: edmToTs(billToAddress3, 'Edm.String') }),
      PlaceOfSupply: (placeOfSupply: string) => ({ placeOfSupply: edmToTs(placeOfSupply, 'Edm.String') })
    });
  }
}
