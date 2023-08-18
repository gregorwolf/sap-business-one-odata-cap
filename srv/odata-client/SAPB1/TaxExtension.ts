/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { ImportOrExportTypeEnum } from './ImportOrExportTypeEnum';
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
 * TaxExtension
 */
export interface TaxExtension<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Tax Id 0.
   * @nullable
   */
  taxId0?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Id 1.
   * @nullable
   */
  taxId1?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Id 2.
   * @nullable
   */
  taxId2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Id 3.
   * @nullable
   */
  taxId3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Id 4.
   * @nullable
   */
  taxId4?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Id 5.
   * @nullable
   */
  taxId5?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Id 6.
   * @nullable
   */
  taxId6?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Id 7.
   * @nullable
   */
  taxId7?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Id 8.
   * @nullable
   */
  taxId8?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Id 9.
   * @nullable
   */
  taxId9?: DeserializedType<DeSerializersT, 'Edm.String'>;
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
   * Incoterms.
   * @nullable
   */
  incoterms?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Vehicle.
   * @nullable
   */
  vehicle?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Vehicle State.
   * @nullable
   */
  vehicleState?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Nf Ref.
   * @nullable
   */
  nfRef?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Carrier.
   * @nullable
   */
  carrier?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Pack Quantity.
   * @nullable
   */
  packQuantity?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Pack Description.
   * @nullable
   */
  packDescription?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Brand.
   * @nullable
   */
  brand?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship Unit No.
   * @nullable
   */
  shipUnitNo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Net Weight.
   * @nullable
   */
  netWeight?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Gross Weight.
   * @nullable
   */
  grossWeight?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Street S.
   * @nullable
   */
  streetS?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Block S.
   * @nullable
   */
  blockS?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Building S.
   * @nullable
   */
  buildingS?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * City S.
   * @nullable
   */
  cityS?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Zip Code S.
   * @nullable
   */
  zipCodeS?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * County S.
   * @nullable
   */
  countyS?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * State S.
   * @nullable
   */
  stateS?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Country S.
   * @nullable
   */
  countryS?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Street B.
   * @nullable
   */
  streetB?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Block B.
   * @nullable
   */
  blockB?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Building B.
   * @nullable
   */
  buildingB?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * City B.
   * @nullable
   */
  cityB?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Zip Code B.
   * @nullable
   */
  zipCodeB?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * County B.
   * @nullable
   */
  countyB?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * State B.
   * @nullable
   */
  stateB?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Country B.
   * @nullable
   */
  countryB?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Import Or Export.
   * @nullable
   */
  importOrExport?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Main Usage.
   * @nullable
   */
  mainUsage?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Global Location Number S.
   * @nullable
   */
  globalLocationNumberS?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Global Location Number B.
   * @nullable
   */
  globalLocationNumberB?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Id 12.
   * @nullable
   */
  taxId12?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Id 13.
   * @nullable
   */
  taxId13?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill Of Entry No.
   * @nullable
   */
  billOfEntryNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill Of Entry Date.
   * @nullable
   */
  billOfEntryDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Original Bill Of Entry No.
   * @nullable
   */
  originalBillOfEntryNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Original Bill Of Entry Date.
   * @nullable
   */
  originalBillOfEntryDate?: DeserializedType<
    DeSerializersT,
    'Edm.DateTimeOffset'
  >;
  /**
   * Import Or Export Type.
   * @nullable
   */
  importOrExportType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Port Code.
   * @nullable
   */
  portCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Bo E Value.
   * @nullable
   */
  boEValue?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Claim Refund.
   * @nullable
   */
  claimRefund?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Differential Of Tax Rate.
   * @nullable
   */
  differentialOfTaxRate?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Is Igst Account.
   * @nullable
   */
  isIgstAccount?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Tax Id 14.
   * @nullable
   */
  taxId14?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * TaxExtensionField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxExtensionField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  TaxExtension,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link TaxExtension.taxId0} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId0: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId0', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.taxId1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId1', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.taxId2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId2', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.taxId3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId3', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.taxId4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId4', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.taxId5} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId5: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId5', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.taxId6} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId6: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId6', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.taxId7} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId7: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId7', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.taxId8} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId8: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId8', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.taxId9} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId9: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId9', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.state} property for query construction.
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
   * Representation of the {@link TaxExtension.county} property for query construction.
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
   * Representation of the {@link TaxExtension.incoterms} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  incoterms: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Incoterms', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.vehicle} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vehicle: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Vehicle', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.vehicleState} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vehicleState: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VehicleState', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.nfRef} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nfRef: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NFRef', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.carrier} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  carrier: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Carrier', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.packQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  packQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PackQuantity', 'Edm.Int32', true);
  /**
   * Representation of the {@link TaxExtension.packDescription} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  packDescription: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PackDescription',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link TaxExtension.brand} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  brand: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Brand', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.shipUnitNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipUnitNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ShipUnitNo', 'Edm.Int32', true);
  /**
   * Representation of the {@link TaxExtension.netWeight} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  netWeight: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NetWeight', 'Edm.Double', true);
  /**
   * Representation of the {@link TaxExtension.grossWeight} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossWeight: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GrossWeight', 'Edm.Double', true);
  /**
   * Representation of the {@link TaxExtension.streetS} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  streetS: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StreetS', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.blockS} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blockS: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BlockS', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.buildingS} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  buildingS: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BuildingS', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.cityS} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cityS: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CityS', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.zipCodeS} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  zipCodeS: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ZipCodeS', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.countyS} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countyS: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CountyS', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.stateS} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stateS: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StateS', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.countryS} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countryS: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CountryS', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.streetB} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  streetB: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StreetB', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.blockB} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blockB: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BlockB', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.buildingB} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  buildingB: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BuildingB', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.cityB} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cityB: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CityB', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.zipCodeB} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  zipCodeB: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ZipCodeB', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.countyB} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countyB: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CountyB', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.stateB} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stateB: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StateB', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.countryB} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countryB: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CountryB', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.importOrExport} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  importOrExport: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('ImportOrExport', BoYesNoEnum, true);
  /**
   * Representation of the {@link TaxExtension.mainUsage} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  mainUsage: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MainUsage', 'Edm.Int32', true);
  /**
   * Representation of the {@link TaxExtension.globalLocationNumberS} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  globalLocationNumberS: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GlobalLocationNumberS',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link TaxExtension.globalLocationNumberB} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  globalLocationNumberB: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GlobalLocationNumberB',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link TaxExtension.taxId12} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId12: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId12', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.taxId13} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId13: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId13', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.billOfEntryNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billOfEntryNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BillOfEntryNo', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.billOfEntryDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billOfEntryDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BillOfEntryDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link TaxExtension.originalBillOfEntryNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  originalBillOfEntryNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'OriginalBillOfEntryNo',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link TaxExtension.originalBillOfEntryDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  originalBillOfEntryDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'OriginalBillOfEntryDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link TaxExtension.importOrExportType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  importOrExportType: EnumField<
    EntityT,
    DeSerializersT,
    ImportOrExportTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ImportOrExportType',
    ImportOrExportTypeEnum,
    true
  );
  /**
   * Representation of the {@link TaxExtension.portCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  portCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PortCode', 'Edm.String', true);
  /**
   * Representation of the {@link TaxExtension.docEntry} property for query construction.
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
   * Representation of the {@link TaxExtension.boEValue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  boEValue: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BoEValue', 'Edm.Double', true);
  /**
   * Representation of the {@link TaxExtension.claimRefund} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  claimRefund: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('ClaimRefund', BoYesNoEnum, true);
  /**
   * Representation of the {@link TaxExtension.differentialOfTaxRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  differentialOfTaxRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DifferentialOfTaxRate',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link TaxExtension.isIgstAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isIgstAccount: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('IsIGSTAccount', BoYesNoEnum, true);
  /**
   * Representation of the {@link TaxExtension.taxId14} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId14: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId14', 'Edm.String', true);

  /**
   * Creates an instance of TaxExtensionField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, TaxExtension, fieldOptions);
  }
}

export namespace TaxExtension {
  /**
   * Metadata information on all properties of the `TaxExtension` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaxExtension>[] = [
    {
      originalName: 'TaxId0',
      name: 'taxId0',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxId1',
      name: 'taxId1',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxId2',
      name: 'taxId2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxId3',
      name: 'taxId3',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxId4',
      name: 'taxId4',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxId5',
      name: 'taxId5',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxId6',
      name: 'taxId6',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxId7',
      name: 'taxId7',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxId8',
      name: 'taxId8',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxId9',
      name: 'taxId9',
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
      originalName: 'Incoterms',
      name: 'incoterms',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Vehicle',
      name: 'vehicle',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'VehicleState',
      name: 'vehicleState',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'NFRef',
      name: 'nfRef',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Carrier',
      name: 'carrier',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PackQuantity',
      name: 'packQuantity',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PackDescription',
      name: 'packDescription',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Brand',
      name: 'brand',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ShipUnitNo',
      name: 'shipUnitNo',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'NetWeight',
      name: 'netWeight',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'GrossWeight',
      name: 'grossWeight',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'StreetS',
      name: 'streetS',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BlockS',
      name: 'blockS',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BuildingS',
      name: 'buildingS',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CityS',
      name: 'cityS',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ZipCodeS',
      name: 'zipCodeS',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CountyS',
      name: 'countyS',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'StateS',
      name: 'stateS',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CountryS',
      name: 'countryS',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'StreetB',
      name: 'streetB',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BlockB',
      name: 'blockB',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BuildingB',
      name: 'buildingB',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CityB',
      name: 'cityB',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ZipCodeB',
      name: 'zipCodeB',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CountyB',
      name: 'countyB',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'StateB',
      name: 'stateB',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CountryB',
      name: 'countryB',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ImportOrExport',
      name: 'importOrExport',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'MainUsage',
      name: 'mainUsage',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'GlobalLocationNumberS',
      name: 'globalLocationNumberS',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GlobalLocationNumberB',
      name: 'globalLocationNumberB',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxId12',
      name: 'taxId12',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxId13',
      name: 'taxId13',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BillOfEntryNo',
      name: 'billOfEntryNo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BillOfEntryDate',
      name: 'billOfEntryDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'OriginalBillOfEntryNo',
      name: 'originalBillOfEntryNo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'OriginalBillOfEntryDate',
      name: 'originalBillOfEntryDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ImportOrExportType',
      name: 'importOrExportType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'PortCode',
      name: 'portCode',
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
      originalName: 'BoEValue',
      name: 'boEValue',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ClaimRefund',
      name: 'claimRefund',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DifferentialOfTaxRate',
      name: 'differentialOfTaxRate',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'IsIGSTAccount',
      name: 'isIgstAccount',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'TaxId14',
      name: 'taxId14',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
