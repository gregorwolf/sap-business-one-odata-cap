/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryPostingLineUoM } from './InventoryPostingLineUoM';
import { InventoryPostingSerialNumber } from './InventoryPostingSerialNumber';
import { InventoryPostingBatchNumber } from './InventoryPostingBatchNumber';
import { InventoryPostingCcdNumber } from './InventoryPostingCcdNumber';
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
 * InventoryPostingLine
 */
export interface InventoryPostingLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Document Entry.
   * @nullable
   */
  documentEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item Description.
   * @nullable
   */
  itemDescription?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Warehouse Code.
   * @nullable
   */
  warehouseCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bin Entry.
   * @nullable
   */
  binEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * In Warehouse Quantity.
   * @nullable
   */
  inWarehouseQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Bar Code.
   * @nullable
   */
  barCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Variance.
   * @nullable
   */
  variance?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Variance Percentage.
   * @nullable
   */
  variancePercentage?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Counted Quantity.
   * @nullable
   */
  countedQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Price.
   * @nullable
   */
  price?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Currency.
   * @nullable
   */
  currency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Total.
   * @nullable
   */
  total?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Visual Order.
   * @nullable
   */
  visualOrder?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Count Date.
   * @nullable
   */
  countDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Count Time.
   * @nullable
   */
  countTime?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
  /**
   * Base Entry.
   * @nullable
   */
  baseEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Base Line.
   * @nullable
   */
  baseLine?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Base Type.
   * @nullable
   */
  baseType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Base Reference.
   * @nullable
   */
  baseReference?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Inventory Offset Increase Account.
   * @nullable
   */
  inventoryOffsetIncreaseAccount?: DeserializedType<
    DeSerializersT,
    'Edm.String'
  >;
  /**
   * Inventory Offset Decrease Account.
   * @nullable
   */
  inventoryOffsetDecreaseAccount?: DeserializedType<
    DeSerializersT,
    'Edm.String'
  >;
  /**
   * Project Code.
   * @nullable
   */
  projectCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Manufacturer.
   * @nullable
   */
  manufacturer?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Supplier Catalog No.
   * @nullable
   */
  supplierCatalogNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Preferred Vendor.
   * @nullable
   */
  preferredVendor?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Costing Code.
   * @nullable
   */
  costingCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Costing Code 2.
   * @nullable
   */
  costingCode2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Costing Code 3.
   * @nullable
   */
  costingCode3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Costing Code 4.
   * @nullable
   */
  costingCode4?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Costing Code 5.
   * @nullable
   */
  costingCode5?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Uo M Code.
   * @nullable
   */
  uoMCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Uo M Counted Quantity.
   * @nullable
   */
  uoMCountedQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Items Per Unit.
   * @nullable
   */
  itemsPerUnit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Allow Bin Negative Quantity.
   * @nullable
   */
  allowBinNegativeQuantity?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Actual Price.
   * @nullable
   */
  actualPrice?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Posted Value Lc.
   * @nullable
   */
  postedValueLc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Posted Value Sc.
   * @nullable
   */
  postedValueSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Inventory Posting Line Uo Ms.
   * @nullable
   */
  inventoryPostingLineUoMs?: DeserializedType<
    DeSerializersT,
    'SAPB1.InventoryPostingLineUoM'
  >;
  /**
   * Inventory Posting Serial Numbers.
   * @nullable
   */
  inventoryPostingSerialNumbers?: DeserializedType<
    DeSerializersT,
    'SAPB1.InventoryPostingSerialNumber'
  >;
  /**
   * Inventory Posting Batch Numbers.
   * @nullable
   */
  inventoryPostingBatchNumbers?: DeserializedType<
    DeSerializersT,
    'SAPB1.InventoryPostingBatchNumber'
  >;
  /**
   * Inventory Posting Ccd Numbers.
   * @nullable
   */
  inventoryPostingCcdNumbers?: DeserializedType<
    DeSerializersT,
    'SAPB1.InventoryPostingCCDNumber'
  >;
}

/**
 * InventoryPostingLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class InventoryPostingLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  InventoryPostingLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link InventoryPostingLine.documentEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocumentEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link InventoryPostingLine.lineNumber} property for query construction.
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
   * Representation of the {@link InventoryPostingLine.itemCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemCode', 'Edm.String', true);
  /**
   * Representation of the {@link InventoryPostingLine.itemDescription} property for query construction.
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
   * Representation of the {@link InventoryPostingLine.warehouseCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouseCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WarehouseCode', 'Edm.String', true);
  /**
   * Representation of the {@link InventoryPostingLine.binEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  binEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BinEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link InventoryPostingLine.inWarehouseQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inWarehouseQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InWarehouseQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link InventoryPostingLine.barCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  barCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BarCode', 'Edm.String', true);
  /**
   * Representation of the {@link InventoryPostingLine.variance} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  variance: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Variance', 'Edm.Double', true);
  /**
   * Representation of the {@link InventoryPostingLine.variancePercentage} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  variancePercentage: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'VariancePercentage',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link InventoryPostingLine.countedQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countedQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CountedQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link InventoryPostingLine.price} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  price: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Price', 'Edm.Double', true);
  /**
   * Representation of the {@link InventoryPostingLine.currency} property for query construction.
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
   * Representation of the {@link InventoryPostingLine.total} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  total: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Total', 'Edm.Double', true);
  /**
   * Representation of the {@link InventoryPostingLine.visualOrder} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  visualOrder: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VisualOrder', 'Edm.Int32', true);
  /**
   * Representation of the {@link InventoryPostingLine.countDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CountDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link InventoryPostingLine.countTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CountTime', 'Edm.TimeOfDay', true);
  /**
   * Representation of the {@link InventoryPostingLine.baseEntry} property for query construction.
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
   * Representation of the {@link InventoryPostingLine.baseLine} property for query construction.
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
   * Representation of the {@link InventoryPostingLine.baseType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseType', 'Edm.Int32', true);
  /**
   * Representation of the {@link InventoryPostingLine.baseReference} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseReference: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseReference', 'Edm.String', true);
  /**
   * Representation of the {@link InventoryPostingLine.remarks} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true);
  /**
   * Representation of the {@link InventoryPostingLine.inventoryOffsetIncreaseAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryOffsetIncreaseAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InventoryOffsetIncreaseAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link InventoryPostingLine.inventoryOffsetDecreaseAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryOffsetDecreaseAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InventoryOffsetDecreaseAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link InventoryPostingLine.projectCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  projectCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ProjectCode', 'Edm.String', true);
  /**
   * Representation of the {@link InventoryPostingLine.manufacturer} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manufacturer: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Manufacturer', 'Edm.Int32', true);
  /**
   * Representation of the {@link InventoryPostingLine.supplierCatalogNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  supplierCatalogNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SupplierCatalogNo',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link InventoryPostingLine.preferredVendor} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  preferredVendor: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PreferredVendor',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link InventoryPostingLine.costingCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CostingCode', 'Edm.String', true);
  /**
   * Representation of the {@link InventoryPostingLine.costingCode2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CostingCode2', 'Edm.String', true);
  /**
   * Representation of the {@link InventoryPostingLine.costingCode3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CostingCode3', 'Edm.String', true);
  /**
   * Representation of the {@link InventoryPostingLine.costingCode4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CostingCode4', 'Edm.String', true);
  /**
   * Representation of the {@link InventoryPostingLine.costingCode5} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode5: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CostingCode5', 'Edm.String', true);
  /**
   * Representation of the {@link InventoryPostingLine.uoMCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UoMCode', 'Edm.String', true);
  /**
   * Representation of the {@link InventoryPostingLine.uoMCountedQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMCountedQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'UoMCountedQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link InventoryPostingLine.itemsPerUnit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemsPerUnit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemsPerUnit', 'Edm.Double', true);
  /**
   * Representation of the {@link InventoryPostingLine.allowBinNegativeQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allowBinNegativeQuantity: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'AllowBinNegativeQuantity',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link InventoryPostingLine.actualPrice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualPrice: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ActualPrice', 'Edm.Double', true);
  /**
   * Representation of the {@link InventoryPostingLine.postedValueLc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  postedValueLc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PostedValueLC', 'Edm.Double', true);
  /**
   * Representation of the {@link InventoryPostingLine.postedValueSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  postedValueSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PostedValueSC', 'Edm.Double', true);
  /**
   * Representation of the {@link InventoryPostingLine.inventoryPostingLineUoMs} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryPostingLineUoMs: CollectionField<
    EntityT,
    DeSerializersT,
    InventoryPostingLineUoM,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'InventoryPostingLineUoMs',
    InventoryPostingLineUoM,
    true
  );
  /**
   * Representation of the {@link InventoryPostingLine.inventoryPostingSerialNumbers} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryPostingSerialNumbers: CollectionField<
    EntityT,
    DeSerializersT,
    InventoryPostingSerialNumber,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'InventoryPostingSerialNumbers',
    InventoryPostingSerialNumber,
    true
  );
  /**
   * Representation of the {@link InventoryPostingLine.inventoryPostingBatchNumbers} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryPostingBatchNumbers: CollectionField<
    EntityT,
    DeSerializersT,
    InventoryPostingBatchNumber,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'InventoryPostingBatchNumbers',
    InventoryPostingBatchNumber,
    true
  );
  /**
   * Representation of the {@link InventoryPostingLine.inventoryPostingCcdNumbers} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryPostingCcdNumbers: CollectionField<
    EntityT,
    DeSerializersT,
    InventoryPostingCcdNumber,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'InventoryPostingCCDNumbers',
    InventoryPostingCcdNumber,
    true
  );

  /**
   * Creates an instance of InventoryPostingLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      InventoryPostingLine,
      fieldOptions
    );
  }
}

export namespace InventoryPostingLine {
  /**
   * Metadata information on all properties of the `InventoryPostingLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InventoryPostingLine>[] = [
    {
      originalName: 'DocumentEntry',
      name: 'documentEntry',
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
      originalName: 'ItemCode',
      name: 'itemCode',
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
      originalName: 'WarehouseCode',
      name: 'warehouseCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BinEntry',
      name: 'binEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'InWarehouseQuantity',
      name: 'inWarehouseQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BarCode',
      name: 'barCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Variance',
      name: 'variance',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'VariancePercentage',
      name: 'variancePercentage',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CountedQuantity',
      name: 'countedQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Price',
      name: 'price',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Currency',
      name: 'currency',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Total',
      name: 'total',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'VisualOrder',
      name: 'visualOrder',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CountDate',
      name: 'countDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'CountTime',
      name: 'countTime',
      type: 'Edm.TimeOfDay',
      isCollection: false
    },
    {
      originalName: 'BaseEntry',
      name: 'baseEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BaseLine',
      name: 'baseLine',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BaseType',
      name: 'baseType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BaseReference',
      name: 'baseReference',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Remarks',
      name: 'remarks',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'InventoryOffsetIncreaseAccount',
      name: 'inventoryOffsetIncreaseAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'InventoryOffsetDecreaseAccount',
      name: 'inventoryOffsetDecreaseAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ProjectCode',
      name: 'projectCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Manufacturer',
      name: 'manufacturer',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'SupplierCatalogNo',
      name: 'supplierCatalogNo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PreferredVendor',
      name: 'preferredVendor',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CostingCode',
      name: 'costingCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CostingCode2',
      name: 'costingCode2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CostingCode3',
      name: 'costingCode3',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CostingCode4',
      name: 'costingCode4',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CostingCode5',
      name: 'costingCode5',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'UoMCode',
      name: 'uoMCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'UoMCountedQuantity',
      name: 'uoMCountedQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ItemsPerUnit',
      name: 'itemsPerUnit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AllowBinNegativeQuantity',
      name: 'allowBinNegativeQuantity',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ActualPrice',
      name: 'actualPrice',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'PostedValueLC',
      name: 'postedValueLc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'PostedValueSC',
      name: 'postedValueSc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'InventoryPostingLineUoMs',
      name: 'inventoryPostingLineUoMs',
      type: InventoryPostingLineUoM,
      isCollection: true
    },
    {
      originalName: 'InventoryPostingSerialNumbers',
      name: 'inventoryPostingSerialNumbers',
      type: InventoryPostingSerialNumber,
      isCollection: true
    },
    {
      originalName: 'InventoryPostingBatchNumbers',
      name: 'inventoryPostingBatchNumbers',
      type: InventoryPostingBatchNumber,
      isCollection: true
    },
    {
      originalName: 'InventoryPostingCCDNumbers',
      name: 'inventoryPostingCcdNumbers',
      type: InventoryPostingCcdNumber,
      isCollection: true
    }
  ];
}
