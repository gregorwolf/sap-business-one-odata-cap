/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LandedCostBaseDocumentTypeEnum } from './LandedCostBaseDocumentTypeEnum';
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
 * LandedCostItemLine
 */
export interface LandedCostItemLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Base Document Type.
   * @nullable
   */
  baseDocumentType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Base Entry.
   * @nullable
   */
  baseEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Number.
   * @nullable
   */
  number?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item Description.
   * @nullable
   */
  itemDescription?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Base Document Price.
   * @nullable
   */
  baseDocumentPrice?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Rate.
   * @nullable
   */
  rate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Projected Customs.
   * @nullable
   */
  projectedCustoms?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Projected Customs Fc.
   * @nullable
   */
  projectedCustomsFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Expenditure.
   * @nullable
   */
  expenditure?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Expenditure Fc.
   * @nullable
   */
  expenditureFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Warehouse Price.
   * @nullable
   */
  warehousePrice?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Warehouse Price Fc.
   * @nullable
   */
  warehousePriceFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Line Total.
   * @nullable
   */
  lineTotal?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Line Total Fc.
   * @nullable
   */
  lineTotalFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Volume.
   * @nullable
   */
  volume?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Volume Uo M.
   * @nullable
   */
  volumeUoM?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Weight 1.
   * @nullable
   */
  weight1?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Weight 1 Unit Code.
   * @nullable
   */
  weight1UnitCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Weight 2.
   * @nullable
   */
  weight2?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Weight 2 Unit Code.
   * @nullable
   */
  weight2UnitCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Vendor Code.
   * @nullable
   */
  vendorCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Reference.
   * @nullable
   */
  reference?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Factor Without Customs.
   * @nullable
   */
  factorWithoutCustoms?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Factor With Customs.
   * @nullable
   */
  factorWithCustoms?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Inventory Uo M.
   * @nullable
   */
  inventoryUoM?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Block Number.
   * @nullable
   */
  blockNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Import Log.
   * @nullable
   */
  importLog?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Original Warehouse.
   * @nullable
   */
  originalWarehouse?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Warehouse.
   * @nullable
   */
  warehouse?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Release Number.
   * @nullable
   */
  releaseNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Variant Costs.
   * @nullable
   */
  variantCosts?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Fix Costs.
   * @nullable
   */
  fixCosts?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Variant Costs Fc.
   * @nullable
   */
  variantCostsFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Fix Costs Fc.
   * @nullable
   */
  fixCostsFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Customs.
   * @nullable
   */
  customs?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Customs Fc.
   * @nullable
   */
  customsFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Base Document Value Line Total.
   * @nullable
   */
  baseDocumentValueLineTotal?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Base Document Value Line Total Fc.
   * @nullable
   */
  baseDocumentValueLineTotalFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Allocated Unit Costs Line Total.
   * @nullable
   */
  allocatedUnitCostsLineTotal?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Allocated Unit Costs Line Total Fc.
   * @nullable
   */
  allocatedUnitCostsLineTotalFc?: DeserializedType<
    DeSerializersT,
    'Edm.Double'
  >;
  /**
   * Customs Value.
   * @nullable
   */
  customsValue?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Customs Value Fc.
   * @nullable
   */
  customsValueFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Total Costs.
   * @nullable
   */
  totalCosts?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Total Costs Fc.
   * @nullable
   */
  totalCostsFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Total Volume.
   * @nullable
   */
  totalVolume?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Base Line.
   * @nullable
   */
  baseLine?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Total Line Projected Customs.
   * @nullable
   */
  totalLineProjectedCustoms?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Allocated Costs Line Total.
   * @nullable
   */
  allocatedCostsLineTotal?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Fo Band Included Costs.
   * @nullable
   */
  foBandIncludedCosts?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Fo Band Included Costs Fc.
   * @nullable
   */
  foBandIncludedCostsFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Project.
   * @nullable
   */
  project?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Rule.
   * @nullable
   */
  distributionRule?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Rule 2.
   * @nullable
   */
  distributionRule2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Rule 3.
   * @nullable
   */
  distributionRule3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Rule 4.
   * @nullable
   */
  distributionRule4?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Rule 5.
   * @nullable
   */
  distributionRule5?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Price List.
   * @nullable
   */
  priceList?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Automatic Expenditure.
   * @nullable
   */
  automaticExpenditure?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Inventory Valuation.
   * @nullable
   */
  inventoryValuation?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Origin Line.
   * @nullable
   */
  originLine?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Currency.
   * @nullable
   */
  currency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Customs Group Rate.
   * @nullable
   */
  customsGroupRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Vat Group.
   * @nullable
   */
  vatGroup?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Vat Percent.
   * @nullable
   */
  vatPercent?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Excise Sum.
   * @nullable
   */
  exciseSum?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Excise Sum Fc.
   * @nullable
   */
  exciseSumFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Excise Affect Stock.
   * @nullable
   */
  exciseAffectStock?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Customs Cost.
   * @nullable
   */
  customsCost?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Customs Cost Fc.
   * @nullable
   */
  customsCostFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Customs Affect Stock.
   * @nullable
   */
  customsAffectStock?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Customs Vat.
   * @nullable
   */
  customsVat?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Customs Vat Fc.
   * @nullable
   */
  customsVatFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Customs Vat Affect Stock.
   * @nullable
   */
  customsVatAffectStock?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Ccd Number.
   * @nullable
   */
  ccdNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Corrected Base Document Value.
   * @nullable
   */
  correctedBaseDocumentValue?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Corrected Base Document Value Fc.
   * @nullable
   */
  correctedBaseDocumentValueFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * LandedCostItemLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class LandedCostItemLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  LandedCostItemLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link LandedCostItemLine.docEntry} property for query construction.
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
   * Representation of the {@link LandedCostItemLine.lineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link LandedCostItemLine.baseDocumentType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocumentType: EnumField<
    EntityT,
    DeSerializersT,
    LandedCostBaseDocumentTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'BaseDocumentType',
    LandedCostBaseDocumentTypeEnum,
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.baseEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link LandedCostItemLine.number} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  number: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Number', 'Edm.String', true);
  /**
   * Representation of the {@link LandedCostItemLine.itemDescription} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemDescription: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ItemDescription',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.quantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Quantity', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostItemLine.baseDocumentPrice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocumentPrice: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BaseDocumentPrice',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.rate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Rate', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostItemLine.projectedCustoms} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  projectedCustoms: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ProjectedCustoms',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.projectedCustomsFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  projectedCustomsFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ProjectedCustomsFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.expenditure} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenditure: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Expenditure', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostItemLine.expenditureFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenditureFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ExpenditureFC', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostItemLine.warehousePrice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehousePrice: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WarehousePrice',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.warehousePriceFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehousePriceFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WarehousePriceFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.lineTotal} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineTotal: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineTotal', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostItemLine.lineTotalFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineTotalFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineTotalFC', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostItemLine.volume} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  volume: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Volume', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostItemLine.volumeUoM} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  volumeUoM: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VolumeUoM', 'Edm.Int32', true);
  /**
   * Representation of the {@link LandedCostItemLine.weight1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Weight1', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostItemLine.weight1UnitCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight1UnitCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'Weight1UnitCode',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.weight2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Weight2', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostItemLine.weight2UnitCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weight2UnitCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'Weight2UnitCode',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.vendorCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vendorCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VendorCode', 'Edm.String', true);
  /**
   * Representation of the {@link LandedCostItemLine.reference} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reference: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Reference', 'Edm.String', true);
  /**
   * Representation of the {@link LandedCostItemLine.factorWithoutCustoms} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factorWithoutCustoms: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FactorWithoutCustoms',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.factorWithCustoms} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factorWithCustoms: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FactorWithCustoms',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.inventoryUoM} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryUoM: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('InventoryUoM', 'Edm.String', true);
  /**
   * Representation of the {@link LandedCostItemLine.blockNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blockNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BlockNumber', 'Edm.String', true);
  /**
   * Representation of the {@link LandedCostItemLine.importLog} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  importLog: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ImportLog', 'Edm.String', true);
  /**
   * Representation of the {@link LandedCostItemLine.originalWarehouse} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  originalWarehouse: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'OriginalWarehouse',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.warehouse} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouse: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Warehouse', 'Edm.String', true);
  /**
   * Representation of the {@link LandedCostItemLine.releaseNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  releaseNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ReleaseNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link LandedCostItemLine.variantCosts} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  variantCosts: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VariantCosts', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostItemLine.fixCosts} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fixCosts: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FixCosts', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostItemLine.variantCostsFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  variantCostsFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'VariantCostsFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.fixCostsFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fixCostsFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FixCostsFC', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostItemLine.customs} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customs: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Customs', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostItemLine.customsFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customsFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CustomsFC', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostItemLine.baseDocumentValueLineTotal} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocumentValueLineTotal: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BaseDocumentValueLineTotal',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.baseDocumentValueLineTotalFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseDocumentValueLineTotalFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BaseDocumentValueLineTotalFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.allocatedUnitCostsLineTotal} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allocatedUnitCostsLineTotal: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AllocatedUnitCostsLineTotal',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.allocatedUnitCostsLineTotalFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allocatedUnitCostsLineTotalFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AllocatedUnitCostsLineTotalFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.customsValue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customsValue: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CustomsValue', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostItemLine.customsValueFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customsValueFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CustomsValueFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.totalCosts} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalCosts: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TotalCosts', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostItemLine.totalCostsFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalCostsFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TotalCostsFC', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostItemLine.totalVolume} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalVolume: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TotalVolume', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostItemLine.baseLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseLine: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseLine', 'Edm.Int32', true);
  /**
   * Representation of the {@link LandedCostItemLine.totalLineProjectedCustoms} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalLineProjectedCustoms: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TotalLineProjectedCustoms',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.allocatedCostsLineTotal} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allocatedCostsLineTotal: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AllocatedCostsLineTotal',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.foBandIncludedCosts} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  foBandIncludedCosts: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FOBandIncludedCosts',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.foBandIncludedCostsFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  foBandIncludedCostsFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FOBandIncludedCostsFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.project} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  project: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Project', 'Edm.String', true);
  /**
   * Representation of the {@link LandedCostItemLine.distributionRule} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.distributionRule2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule2',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.distributionRule3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule3',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.distributionRule4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule4',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.distributionRule5} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule5: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule5',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.priceList} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceList: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PriceList', 'Edm.Int32', true);
  /**
   * Representation of the {@link LandedCostItemLine.automaticExpenditure} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  automaticExpenditure: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'AutomaticExpenditure',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.inventoryValuation} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryValuation: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'InventoryValuation',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.originLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  originLine: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('OriginLine', 'Edm.Int32', true);
  /**
   * Representation of the {@link LandedCostItemLine.currency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Currency', 'Edm.String', true);
  /**
   * Representation of the {@link LandedCostItemLine.customsGroupRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customsGroupRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CustomsGroupRate',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.vatGroup} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatGroup: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VatGroup', 'Edm.String', true);
  /**
   * Representation of the {@link LandedCostItemLine.vatPercent} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatPercent: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VatPercent', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostItemLine.exciseSum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exciseSum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ExciseSum', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostItemLine.exciseSumFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exciseSumFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ExciseSumFC', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostItemLine.exciseAffectStock} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exciseAffectStock: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('ExciseAffectStock', BoYesNoEnum, true);
  /**
   * Representation of the {@link LandedCostItemLine.customsCost} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customsCost: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CustomsCost', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostItemLine.customsCostFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customsCostFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CustomsCostFC', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostItemLine.customsAffectStock} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customsAffectStock: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'CustomsAffectStock',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.customsVat} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customsVat: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CustomsVat', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostItemLine.customsVatFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customsVatFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CustomsVatFC', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostItemLine.customsVatAffectStock} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customsVatAffectStock: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'CustomsVatAffectStock',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.ccdNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ccdNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CCDNumber', 'Edm.String', true);
  /**
   * Representation of the {@link LandedCostItemLine.correctedBaseDocumentValue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  correctedBaseDocumentValue: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CorrectedBaseDocumentValue',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link LandedCostItemLine.correctedBaseDocumentValueFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  correctedBaseDocumentValueFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CorrectedBaseDocumentValueFC',
    'Edm.Double',
    true
  );

  /**
   * Creates an instance of LandedCostItemLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, LandedCostItemLine, fieldOptions);
  }
}

export namespace LandedCostItemLine {
  /**
   * Metadata information on all properties of the `LandedCostItemLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<LandedCostItemLine>[] = [
    {
      originalName: 'DocEntry',
      name: 'docEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LineNumber',
      name: 'lineNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BaseDocumentType',
      name: 'baseDocumentType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'BaseEntry',
      name: 'baseEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Number',
      name: 'number',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ItemDescription',
      name: 'itemDescription',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Quantity',
      name: 'quantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BaseDocumentPrice',
      name: 'baseDocumentPrice',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Rate',
      name: 'rate',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ProjectedCustoms',
      name: 'projectedCustoms',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ProjectedCustomsFC',
      name: 'projectedCustomsFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Expenditure',
      name: 'expenditure',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ExpenditureFC',
      name: 'expenditureFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'WarehousePrice',
      name: 'warehousePrice',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'WarehousePriceFC',
      name: 'warehousePriceFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'LineTotal',
      name: 'lineTotal',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'LineTotalFC',
      name: 'lineTotalFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Volume',
      name: 'volume',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'VolumeUoM',
      name: 'volumeUoM',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Weight1',
      name: 'weight1',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Weight1UnitCode',
      name: 'weight1UnitCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Weight2',
      name: 'weight2',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Weight2UnitCode',
      name: 'weight2UnitCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'VendorCode',
      name: 'vendorCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Reference',
      name: 'reference',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FactorWithoutCustoms',
      name: 'factorWithoutCustoms',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'FactorWithCustoms',
      name: 'factorWithCustoms',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'InventoryUoM',
      name: 'inventoryUoM',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BlockNumber',
      name: 'blockNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ImportLog',
      name: 'importLog',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'OriginalWarehouse',
      name: 'originalWarehouse',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Warehouse',
      name: 'warehouse',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ReleaseNumber',
      name: 'releaseNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'VariantCosts',
      name: 'variantCosts',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'FixCosts',
      name: 'fixCosts',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'VariantCostsFC',
      name: 'variantCostsFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'FixCostsFC',
      name: 'fixCostsFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Customs',
      name: 'customs',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CustomsFC',
      name: 'customsFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BaseDocumentValueLineTotal',
      name: 'baseDocumentValueLineTotal',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BaseDocumentValueLineTotalFC',
      name: 'baseDocumentValueLineTotalFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AllocatedUnitCostsLineTotal',
      name: 'allocatedUnitCostsLineTotal',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AllocatedUnitCostsLineTotalFC',
      name: 'allocatedUnitCostsLineTotalFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CustomsValue',
      name: 'customsValue',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CustomsValueFC',
      name: 'customsValueFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TotalCosts',
      name: 'totalCosts',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TotalCostsFC',
      name: 'totalCostsFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TotalVolume',
      name: 'totalVolume',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BaseLine',
      name: 'baseLine',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TotalLineProjectedCustoms',
      name: 'totalLineProjectedCustoms',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AllocatedCostsLineTotal',
      name: 'allocatedCostsLineTotal',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'FOBandIncludedCosts',
      name: 'foBandIncludedCosts',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'FOBandIncludedCostsFC',
      name: 'foBandIncludedCostsFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Project',
      name: 'project',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DistributionRule',
      name: 'distributionRule',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DistributionRule2',
      name: 'distributionRule2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DistributionRule3',
      name: 'distributionRule3',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DistributionRule4',
      name: 'distributionRule4',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DistributionRule5',
      name: 'distributionRule5',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PriceList',
      name: 'priceList',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'AutomaticExpenditure',
      name: 'automaticExpenditure',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'InventoryValuation',
      name: 'inventoryValuation',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'OriginLine',
      name: 'originLine',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Currency',
      name: 'currency',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CustomsGroupRate',
      name: 'customsGroupRate',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'VatGroup',
      name: 'vatGroup',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'VatPercent',
      name: 'vatPercent',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ExciseSum',
      name: 'exciseSum',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ExciseSumFC',
      name: 'exciseSumFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ExciseAffectStock',
      name: 'exciseAffectStock',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CustomsCost',
      name: 'customsCost',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CustomsCostFC',
      name: 'customsCostFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CustomsAffectStock',
      name: 'customsAffectStock',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CustomsVat',
      name: 'customsVat',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CustomsVatFC',
      name: 'customsVatFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CustomsVatAffectStock',
      name: 'customsVatAffectStock',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CCDNumber',
      name: 'ccdNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CorrectedBaseDocumentValue',
      name: 'correctedBaseDocumentValue',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CorrectedBaseDocumentValueFC',
      name: 'correctedBaseDocumentValueFc',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
