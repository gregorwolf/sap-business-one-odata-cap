/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * TaxExtension
 */
export interface TaxExtension {
  /**
   * Tax Id 0.
   * @nullable
   */
  taxId0?: string;
  /**
   * Tax Id 1.
   * @nullable
   */
  taxId1?: string;
  /**
   * Tax Id 2.
   * @nullable
   */
  taxId2?: string;
  /**
   * Tax Id 3.
   * @nullable
   */
  taxId3?: string;
  /**
   * Tax Id 4.
   * @nullable
   */
  taxId4?: string;
  /**
   * Tax Id 5.
   * @nullable
   */
  taxId5?: string;
  /**
   * Tax Id 6.
   * @nullable
   */
  taxId6?: string;
  /**
   * Tax Id 7.
   * @nullable
   */
  taxId7?: string;
  /**
   * Tax Id 8.
   * @nullable
   */
  taxId8?: string;
  /**
   * Tax Id 9.
   * @nullable
   */
  taxId9?: string;
  /**
   * State.
   * @nullable
   */
  state?: string;
  /**
   * County.
   * @nullable
   */
  county?: string;
  /**
   * Incoterms.
   * @nullable
   */
  incoterms?: string;
  /**
   * Vehicle.
   * @nullable
   */
  vehicle?: string;
  /**
   * Vehicle State.
   * @nullable
   */
  vehicleState?: string;
  /**
   * Nf Ref.
   * @nullable
   */
  nfRef?: string;
  /**
   * Carrier.
   * @nullable
   */
  carrier?: string;
  /**
   * Pack Quantity.
   * @nullable
   */
  packQuantity?: number;
  /**
   * Pack Description.
   * @nullable
   */
  packDescription?: string;
  /**
   * Brand.
   * @nullable
   */
  brand?: string;
  /**
   * Ship Unit No.
   * @nullable
   */
  shipUnitNo?: number;
  /**
   * Net Weight.
   * @nullable
   */
  netWeight?: number;
  /**
   * Gross Weight.
   * @nullable
   */
  grossWeight?: number;
  /**
   * Street S.
   * @nullable
   */
  streetS?: string;
  /**
   * Block S.
   * @nullable
   */
  blockS?: string;
  /**
   * Building S.
   * @nullable
   */
  buildingS?: string;
  /**
   * City S.
   * @nullable
   */
  cityS?: string;
  /**
   * Zip Code S.
   * @nullable
   */
  zipCodeS?: string;
  /**
   * County S.
   * @nullable
   */
  countyS?: string;
  /**
   * State S.
   * @nullable
   */
  stateS?: string;
  /**
   * Country S.
   * @nullable
   */
  countryS?: string;
  /**
   * Street B.
   * @nullable
   */
  streetB?: string;
  /**
   * Block B.
   * @nullable
   */
  blockB?: string;
  /**
   * Building B.
   * @nullable
   */
  buildingB?: string;
  /**
   * City B.
   * @nullable
   */
  cityB?: string;
  /**
   * Zip Code B.
   * @nullable
   */
  zipCodeB?: string;
  /**
   * County B.
   * @nullable
   */
  countyB?: string;
  /**
   * State B.
   * @nullable
   */
  stateB?: string;
  /**
   * Country B.
   * @nullable
   */
  countryB?: string;
  /**
   * Main Usage.
   * @nullable
   */
  mainUsage?: number;
  /**
   * Global Location Number S.
   * @nullable
   */
  globalLocationNumberS?: string;
  /**
   * Global Location Number B.
   * @nullable
   */
  globalLocationNumberB?: string;
  /**
   * Tax Id 12.
   * @nullable
   */
  taxId12?: string;
  /**
   * Tax Id 13.
   * @nullable
   */
  taxId13?: string;
  /**
   * Bill Of Entry No.
   * @nullable
   */
  billOfEntryNo?: string;
  /**
   * Bill Of Entry Date.
   * @nullable
   */
  billOfEntryDate?: Moment;
  /**
   * Original Bill Of Entry No.
   * @nullable
   */
  originalBillOfEntryNo?: string;
  /**
   * Original Bill Of Entry Date.
   * @nullable
   */
  originalBillOfEntryDate?: Moment;
  /**
   * Port Code.
   * @nullable
   */
  portCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[TaxExtension.build]] instead.
 */
export function createTaxExtension(json: any): TaxExtension {
  return TaxExtension.build(json);
}

/**
 * TaxExtensionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxExtensionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[TaxExtension.taxId0]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId0: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId0', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.taxId1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId1: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId1', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.taxId2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId2', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.taxId3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId3', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.taxId4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId4', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.taxId5]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId5: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId5', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.taxId6]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId6: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId6', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.taxId7]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId7: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId7', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.taxId8]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId8: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId8', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.taxId9]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId9: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId9', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.state]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  state: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('State', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.county]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  county: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('County', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.incoterms]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  incoterms: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Incoterms', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.vehicle]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vehicle: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Vehicle', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.vehicleState]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vehicleState: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('VehicleState', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.nfRef]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nfRef: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('NFRef', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.carrier]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  carrier: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Carrier', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.packQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  packQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PackQuantity', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxExtension.packDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  packDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PackDescription', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.brand]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  brand: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Brand', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.shipUnitNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipUnitNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ShipUnitNo', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxExtension.netWeight]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  netWeight: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('NetWeight', this, 'Edm.Double');
  /**
   * Representation of the [[TaxExtension.grossWeight]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossWeight: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GrossWeight', this, 'Edm.Double');
  /**
   * Representation of the [[TaxExtension.streetS]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  streetS: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('StreetS', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.blockS]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blockS: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BlockS', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.buildingS]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  buildingS: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BuildingS', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.cityS]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cityS: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CityS', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.zipCodeS]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  zipCodeS: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ZipCodeS', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.countyS]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countyS: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CountyS', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.stateS]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stateS: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('StateS', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.countryS]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countryS: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CountryS', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.streetB]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  streetB: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('StreetB', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.blockB]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blockB: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BlockB', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.buildingB]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  buildingB: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BuildingB', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.cityB]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cityB: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CityB', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.zipCodeB]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  zipCodeB: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ZipCodeB', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.countyB]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countyB: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CountyB', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.stateB]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stateB: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('StateB', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.countryB]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countryB: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CountryB', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.mainUsage]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  mainUsage: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MainUsage', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxExtension.globalLocationNumberS]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  globalLocationNumberS: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GlobalLocationNumberS', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.globalLocationNumberB]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  globalLocationNumberB: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GlobalLocationNumberB', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.taxId12]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId12: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId12', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.taxId13]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId13: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxId13', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.billOfEntryNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billOfEntryNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillOfEntryNo', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.billOfEntryDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billOfEntryDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('BillOfEntryDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[TaxExtension.originalBillOfEntryNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  originalBillOfEntryNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('OriginalBillOfEntryNo', this, 'Edm.String');
  /**
   * Representation of the [[TaxExtension.originalBillOfEntryDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  originalBillOfEntryDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('OriginalBillOfEntryDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[TaxExtension.portCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  portCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PortCode', this, 'Edm.String');
}

export namespace TaxExtension {
  export function build(json: { [keys: string]: FieldType }): TaxExtension {
    return createComplexType(json, {
      TaxId0: (taxId0: string) => ({ taxId0: edmToTs(taxId0, 'Edm.String') }),
      TaxId1: (taxId1: string) => ({ taxId1: edmToTs(taxId1, 'Edm.String') }),
      TaxId2: (taxId2: string) => ({ taxId2: edmToTs(taxId2, 'Edm.String') }),
      TaxId3: (taxId3: string) => ({ taxId3: edmToTs(taxId3, 'Edm.String') }),
      TaxId4: (taxId4: string) => ({ taxId4: edmToTs(taxId4, 'Edm.String') }),
      TaxId5: (taxId5: string) => ({ taxId5: edmToTs(taxId5, 'Edm.String') }),
      TaxId6: (taxId6: string) => ({ taxId6: edmToTs(taxId6, 'Edm.String') }),
      TaxId7: (taxId7: string) => ({ taxId7: edmToTs(taxId7, 'Edm.String') }),
      TaxId8: (taxId8: string) => ({ taxId8: edmToTs(taxId8, 'Edm.String') }),
      TaxId9: (taxId9: string) => ({ taxId9: edmToTs(taxId9, 'Edm.String') }),
      State: (state: string) => ({ state: edmToTs(state, 'Edm.String') }),
      County: (county: string) => ({ county: edmToTs(county, 'Edm.String') }),
      Incoterms: (incoterms: string) => ({ incoterms: edmToTs(incoterms, 'Edm.String') }),
      Vehicle: (vehicle: string) => ({ vehicle: edmToTs(vehicle, 'Edm.String') }),
      VehicleState: (vehicleState: string) => ({ vehicleState: edmToTs(vehicleState, 'Edm.String') }),
      NFRef: (nfRef: string) => ({ nfRef: edmToTs(nfRef, 'Edm.String') }),
      Carrier: (carrier: string) => ({ carrier: edmToTs(carrier, 'Edm.String') }),
      PackQuantity: (packQuantity: number) => ({ packQuantity: edmToTs(packQuantity, 'Edm.Int32') }),
      PackDescription: (packDescription: string) => ({ packDescription: edmToTs(packDescription, 'Edm.String') }),
      Brand: (brand: string) => ({ brand: edmToTs(brand, 'Edm.String') }),
      ShipUnitNo: (shipUnitNo: number) => ({ shipUnitNo: edmToTs(shipUnitNo, 'Edm.Int32') }),
      NetWeight: (netWeight: number) => ({ netWeight: edmToTs(netWeight, 'Edm.Double') }),
      GrossWeight: (grossWeight: number) => ({ grossWeight: edmToTs(grossWeight, 'Edm.Double') }),
      StreetS: (streetS: string) => ({ streetS: edmToTs(streetS, 'Edm.String') }),
      BlockS: (blockS: string) => ({ blockS: edmToTs(blockS, 'Edm.String') }),
      BuildingS: (buildingS: string) => ({ buildingS: edmToTs(buildingS, 'Edm.String') }),
      CityS: (cityS: string) => ({ cityS: edmToTs(cityS, 'Edm.String') }),
      ZipCodeS: (zipCodeS: string) => ({ zipCodeS: edmToTs(zipCodeS, 'Edm.String') }),
      CountyS: (countyS: string) => ({ countyS: edmToTs(countyS, 'Edm.String') }),
      StateS: (stateS: string) => ({ stateS: edmToTs(stateS, 'Edm.String') }),
      CountryS: (countryS: string) => ({ countryS: edmToTs(countryS, 'Edm.String') }),
      StreetB: (streetB: string) => ({ streetB: edmToTs(streetB, 'Edm.String') }),
      BlockB: (blockB: string) => ({ blockB: edmToTs(blockB, 'Edm.String') }),
      BuildingB: (buildingB: string) => ({ buildingB: edmToTs(buildingB, 'Edm.String') }),
      CityB: (cityB: string) => ({ cityB: edmToTs(cityB, 'Edm.String') }),
      ZipCodeB: (zipCodeB: string) => ({ zipCodeB: edmToTs(zipCodeB, 'Edm.String') }),
      CountyB: (countyB: string) => ({ countyB: edmToTs(countyB, 'Edm.String') }),
      StateB: (stateB: string) => ({ stateB: edmToTs(stateB, 'Edm.String') }),
      CountryB: (countryB: string) => ({ countryB: edmToTs(countryB, 'Edm.String') }),
      MainUsage: (mainUsage: number) => ({ mainUsage: edmToTs(mainUsage, 'Edm.Int32') }),
      GlobalLocationNumberS: (globalLocationNumberS: string) => ({ globalLocationNumberS: edmToTs(globalLocationNumberS, 'Edm.String') }),
      GlobalLocationNumberB: (globalLocationNumberB: string) => ({ globalLocationNumberB: edmToTs(globalLocationNumberB, 'Edm.String') }),
      TaxId12: (taxId12: string) => ({ taxId12: edmToTs(taxId12, 'Edm.String') }),
      TaxId13: (taxId13: string) => ({ taxId13: edmToTs(taxId13, 'Edm.String') }),
      BillOfEntryNo: (billOfEntryNo: string) => ({ billOfEntryNo: edmToTs(billOfEntryNo, 'Edm.String') }),
      BillOfEntryDate: (billOfEntryDate: Moment) => ({ billOfEntryDate: edmToTs(billOfEntryDate, 'Edm.DateTimeOffset') }),
      OriginalBillOfEntryNo: (originalBillOfEntryNo: string) => ({ originalBillOfEntryNo: edmToTs(originalBillOfEntryNo, 'Edm.String') }),
      OriginalBillOfEntryDate: (originalBillOfEntryDate: Moment) => ({ originalBillOfEntryDate: edmToTs(originalBillOfEntryDate, 'Edm.DateTimeOffset') }),
      PortCode: (portCode: string) => ({ portCode: edmToTs(portCode, 'Edm.String') })
    });
  }
}
