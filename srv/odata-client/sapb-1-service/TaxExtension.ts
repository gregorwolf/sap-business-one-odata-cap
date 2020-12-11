/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ImportOrExportTypeEnum } from './ImportOrExportTypeEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Import Or Export.
   * @nullable
   */
  importOrExport?: BoYesNoEnum;
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
   * Import Or Export Type.
   * @nullable
   */
  importOrExportType?: ImportOrExportTypeEnum;
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
export class TaxExtensionField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxExtension> {
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
   * Representation of the [[TaxExtension.importOrExport]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  importOrExport: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ImportOrExport', this);
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
   * Representation of the [[TaxExtension.importOrExportType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  importOrExportType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ImportOrExportType', this);
  /**
   * Representation of the [[TaxExtension.portCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  portCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PortCode', this, 'Edm.String');

  /**
   * Creates an instance of TaxExtensionField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TaxExtension);
  }
}

export namespace TaxExtension {
  /**
   * Metadata information on all properties of the `TaxExtension` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaxExtension>[] = [{
    originalName: 'TaxId0',
    name: 'taxId0',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxId1',
    name: 'taxId1',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxId2',
    name: 'taxId2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxId3',
    name: 'taxId3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxId4',
    name: 'taxId4',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxId5',
    name: 'taxId5',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxId6',
    name: 'taxId6',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxId7',
    name: 'taxId7',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxId8',
    name: 'taxId8',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxId9',
    name: 'taxId9',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'State',
    name: 'state',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'County',
    name: 'county',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Incoterms',
    name: 'incoterms',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Vehicle',
    name: 'vehicle',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'VehicleState',
    name: 'vehicleState',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'NFRef',
    name: 'nfRef',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Carrier',
    name: 'carrier',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PackQuantity',
    name: 'packQuantity',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PackDescription',
    name: 'packDescription',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Brand',
    name: 'brand',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ShipUnitNo',
    name: 'shipUnitNo',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'NetWeight',
    name: 'netWeight',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'GrossWeight',
    name: 'grossWeight',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'StreetS',
    name: 'streetS',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BlockS',
    name: 'blockS',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BuildingS',
    name: 'buildingS',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CityS',
    name: 'cityS',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ZipCodeS',
    name: 'zipCodeS',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CountyS',
    name: 'countyS',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'StateS',
    name: 'stateS',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CountryS',
    name: 'countryS',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'StreetB',
    name: 'streetB',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BlockB',
    name: 'blockB',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BuildingB',
    name: 'buildingB',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CityB',
    name: 'cityB',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ZipCodeB',
    name: 'zipCodeB',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CountyB',
    name: 'countyB',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'StateB',
    name: 'stateB',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CountryB',
    name: 'countryB',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ImportOrExport',
    name: 'importOrExport',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'MainUsage',
    name: 'mainUsage',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'GlobalLocationNumberS',
    name: 'globalLocationNumberS',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'GlobalLocationNumberB',
    name: 'globalLocationNumberB',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxId12',
    name: 'taxId12',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxId13',
    name: 'taxId13',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BillOfEntryNo',
    name: 'billOfEntryNo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BillOfEntryDate',
    name: 'billOfEntryDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'OriginalBillOfEntryNo',
    name: 'originalBillOfEntryNo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'OriginalBillOfEntryDate',
    name: 'originalBillOfEntryDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ImportOrExportType',
    name: 'importOrExportType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'PortCode',
    name: 'portCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TaxExtension {
    return deserializeComplexTypeV4(json, TaxExtension);
  }
}
