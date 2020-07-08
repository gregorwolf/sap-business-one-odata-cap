/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ServiceCallBpAddressComponent
 */
export interface ServiceCallBpAddressComponent {
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
   * Ship To State.
   * @nullable
   */
  shipToState?: string;
  /**
   * Ship To County.
   * @nullable
   */
  shipToCounty?: string;
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
   * Ship To Global Location Number.
   * @nullable
   */
  shipToGlobalLocationNumber?: string;
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
   * Bill To State.
   * @nullable
   */
  billToState?: string;
  /**
   * Bill To County.
   * @nullable
   */
  billToCounty?: string;
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
   * Bill To Global Location Number.
   * @nullable
   */
  billToGlobalLocationNumber?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ServiceCallBpAddressComponent.build]] instead.
 */
export function createServiceCallBpAddressComponent(json: any): ServiceCallBpAddressComponent {
  return ServiceCallBpAddressComponent.build(json);
}

/**
 * ServiceCallBpAddressComponentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceCallBpAddressComponentField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ServiceCallBpAddressComponent.shipToStreet]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToStreet: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToStreet', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallBpAddressComponent.shipToStreetNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToStreetNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToStreetNo', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallBpAddressComponent.shipToBlock]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToBlock: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToBlock', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallBpAddressComponent.shipToBuilding]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToBuilding: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToBuilding', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallBpAddressComponent.shipToCity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToCity: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToCity', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallBpAddressComponent.shipToZipCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToZipCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToZipCode', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallBpAddressComponent.shipToState]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToState: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToState', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallBpAddressComponent.shipToCounty]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToCounty: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToCounty', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallBpAddressComponent.shipToCountry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToCountry: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToCountry', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallBpAddressComponent.shipToAddressType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToAddressType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToAddressType', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallBpAddressComponent.shipToAddress2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToAddress2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToAddress2', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallBpAddressComponent.shipToAddress3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToAddress3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToAddress3', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallBpAddressComponent.shipToGlobalLocationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToGlobalLocationNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShipToGlobalLocationNumber', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallBpAddressComponent.billToStreet]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToStreet: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillToStreet', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallBpAddressComponent.billToStreetNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToStreetNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillToStreetNo', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallBpAddressComponent.billToBlock]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToBlock: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillToBlock', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallBpAddressComponent.billToBuilding]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToBuilding: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillToBuilding', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallBpAddressComponent.billToCity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToCity: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillToCity', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallBpAddressComponent.billToZipCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToZipCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillToZipCode', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallBpAddressComponent.billToState]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToState: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillToState', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallBpAddressComponent.billToCounty]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToCounty: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillToCounty', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallBpAddressComponent.billToCountry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToCountry: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillToCountry', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallBpAddressComponent.billToAddressType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToAddressType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillToAddressType', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallBpAddressComponent.billToAddress2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToAddress2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillToAddress2', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallBpAddressComponent.billToAddress3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToAddress3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillToAddress3', this, 'Edm.String');
  /**
   * Representation of the [[ServiceCallBpAddressComponent.billToGlobalLocationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToGlobalLocationNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillToGlobalLocationNumber', this, 'Edm.String');
}

export namespace ServiceCallBpAddressComponent {
  export function build(json: { [keys: string]: FieldType }): ServiceCallBpAddressComponent {
    return createComplexType(json, {
      ShipToStreet: (shipToStreet: string) => ({ shipToStreet: edmToTs(shipToStreet, 'Edm.String') }),
      ShipToStreetNo: (shipToStreetNo: string) => ({ shipToStreetNo: edmToTs(shipToStreetNo, 'Edm.String') }),
      ShipToBlock: (shipToBlock: string) => ({ shipToBlock: edmToTs(shipToBlock, 'Edm.String') }),
      ShipToBuilding: (shipToBuilding: string) => ({ shipToBuilding: edmToTs(shipToBuilding, 'Edm.String') }),
      ShipToCity: (shipToCity: string) => ({ shipToCity: edmToTs(shipToCity, 'Edm.String') }),
      ShipToZipCode: (shipToZipCode: string) => ({ shipToZipCode: edmToTs(shipToZipCode, 'Edm.String') }),
      ShipToState: (shipToState: string) => ({ shipToState: edmToTs(shipToState, 'Edm.String') }),
      ShipToCounty: (shipToCounty: string) => ({ shipToCounty: edmToTs(shipToCounty, 'Edm.String') }),
      ShipToCountry: (shipToCountry: string) => ({ shipToCountry: edmToTs(shipToCountry, 'Edm.String') }),
      ShipToAddressType: (shipToAddressType: string) => ({ shipToAddressType: edmToTs(shipToAddressType, 'Edm.String') }),
      ShipToAddress2: (shipToAddress2: string) => ({ shipToAddress2: edmToTs(shipToAddress2, 'Edm.String') }),
      ShipToAddress3: (shipToAddress3: string) => ({ shipToAddress3: edmToTs(shipToAddress3, 'Edm.String') }),
      ShipToGlobalLocationNumber: (shipToGlobalLocationNumber: string) => ({ shipToGlobalLocationNumber: edmToTs(shipToGlobalLocationNumber, 'Edm.String') }),
      BillToStreet: (billToStreet: string) => ({ billToStreet: edmToTs(billToStreet, 'Edm.String') }),
      BillToStreetNo: (billToStreetNo: string) => ({ billToStreetNo: edmToTs(billToStreetNo, 'Edm.String') }),
      BillToBlock: (billToBlock: string) => ({ billToBlock: edmToTs(billToBlock, 'Edm.String') }),
      BillToBuilding: (billToBuilding: string) => ({ billToBuilding: edmToTs(billToBuilding, 'Edm.String') }),
      BillToCity: (billToCity: string) => ({ billToCity: edmToTs(billToCity, 'Edm.String') }),
      BillToZipCode: (billToZipCode: string) => ({ billToZipCode: edmToTs(billToZipCode, 'Edm.String') }),
      BillToState: (billToState: string) => ({ billToState: edmToTs(billToState, 'Edm.String') }),
      BillToCounty: (billToCounty: string) => ({ billToCounty: edmToTs(billToCounty, 'Edm.String') }),
      BillToCountry: (billToCountry: string) => ({ billToCountry: edmToTs(billToCountry, 'Edm.String') }),
      BillToAddressType: (billToAddressType: string) => ({ billToAddressType: edmToTs(billToAddressType, 'Edm.String') }),
      BillToAddress2: (billToAddress2: string) => ({ billToAddress2: edmToTs(billToAddress2, 'Edm.String') }),
      BillToAddress3: (billToAddress3: string) => ({ billToAddress3: edmToTs(billToAddress3, 'Edm.String') }),
      BillToGlobalLocationNumber: (billToGlobalLocationNumber: string) => ({ billToGlobalLocationNumber: edmToTs(billToGlobalLocationNumber, 'Edm.String') })
    });
  }
}
