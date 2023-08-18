/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryOpeningBalanceSerialNumber } from './InventoryOpeningBalanceSerialNumber';
import { InventoryOpeningBalanceBatchNumber } from './InventoryOpeningBalanceBatchNumber';
import { InventoryOpeningBalanceCcdNumber } from './InventoryOpeningBalanceCcdNumber';
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
 * InventoryOpeningBalanceLine
 */
export interface InventoryOpeningBalanceLine<
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
   * Opening Balance.
   * @nullable
   */
  openingBalance?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bar Code.
   * @nullable
   */
  barCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Visual Order.
   * @nullable
   */
  visualOrder?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Price.
   * @nullable
   */
  price?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Total.
   * @nullable
   */
  total?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Open Inventory Account.
   * @nullable
   */
  openInventoryAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
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
   * Preferred Vendor.
   * @nullable
   */
  preferredVendor?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Currency.
   * @nullable
   */
  currency?: DeserializedType<DeSerializersT, 'Edm.String'>;
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
   * Weight Of Recycled Plastic.
   * @nullable
   */
  weightOfRecycledPlastic?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Plastic Package Exemption Reason.
   * @nullable
   */
  plasticPackageExemptionReason?: DeserializedType<
    DeSerializersT,
    'Edm.String'
  >;
  /**
   * Inventory Opening Balance Serial Numbers.
   * @nullable
   */
  inventoryOpeningBalanceSerialNumbers?: DeserializedType<
    DeSerializersT,
    'SAPB1.InventoryOpeningBalanceSerialNumber'
  >;
  /**
   * Inventory Opening Balance Batch Numbers.
   * @nullable
   */
  inventoryOpeningBalanceBatchNumbers?: DeserializedType<
    DeSerializersT,
    'SAPB1.InventoryOpeningBalanceBatchNumber'
  >;
  /**
   * Inventory Opening Balance Ccd Numbers.
   * @nullable
   */
  inventoryOpeningBalanceCcdNumbers?: DeserializedType<
    DeSerializersT,
    'SAPB1.InventoryOpeningBalanceCCDNumber'
  >;
}

/**
 * InventoryOpeningBalanceLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class InventoryOpeningBalanceLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  InventoryOpeningBalanceLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link InventoryOpeningBalanceLine.documentEntry} property for query construction.
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
   * Representation of the {@link InventoryOpeningBalanceLine.lineNumber} property for query construction.
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
   * Representation of the {@link InventoryOpeningBalanceLine.itemCode} property for query construction.
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
   * Representation of the {@link InventoryOpeningBalanceLine.itemDescription} property for query construction.
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
   * Representation of the {@link InventoryOpeningBalanceLine.warehouseCode} property for query construction.
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
   * Representation of the {@link InventoryOpeningBalanceLine.binEntry} property for query construction.
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
   * Representation of the {@link InventoryOpeningBalanceLine.inWarehouseQuantity} property for query construction.
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
   * Representation of the {@link InventoryOpeningBalanceLine.openingBalance} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  openingBalance: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'OpeningBalance',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link InventoryOpeningBalanceLine.remarks} property for query construction.
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
   * Representation of the {@link InventoryOpeningBalanceLine.barCode} property for query construction.
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
   * Representation of the {@link InventoryOpeningBalanceLine.visualOrder} property for query construction.
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
   * Representation of the {@link InventoryOpeningBalanceLine.price} property for query construction.
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
   * Representation of the {@link InventoryOpeningBalanceLine.total} property for query construction.
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
   * Representation of the {@link InventoryOpeningBalanceLine.openInventoryAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  openInventoryAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'OpenInventoryAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link InventoryOpeningBalanceLine.projectCode} property for query construction.
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
   * Representation of the {@link InventoryOpeningBalanceLine.manufacturer} property for query construction.
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
   * Representation of the {@link InventoryOpeningBalanceLine.supplierCatalogNo} property for query construction.
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
   * Representation of the {@link InventoryOpeningBalanceLine.costingCode} property for query construction.
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
   * Representation of the {@link InventoryOpeningBalanceLine.costingCode2} property for query construction.
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
   * Representation of the {@link InventoryOpeningBalanceLine.costingCode3} property for query construction.
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
   * Representation of the {@link InventoryOpeningBalanceLine.costingCode4} property for query construction.
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
   * Representation of the {@link InventoryOpeningBalanceLine.costingCode5} property for query construction.
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
   * Representation of the {@link InventoryOpeningBalanceLine.preferredVendor} property for query construction.
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
   * Representation of the {@link InventoryOpeningBalanceLine.currency} property for query construction.
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
   * Representation of the {@link InventoryOpeningBalanceLine.allowBinNegativeQuantity} property for query construction.
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
   * Representation of the {@link InventoryOpeningBalanceLine.actualPrice} property for query construction.
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
   * Representation of the {@link InventoryOpeningBalanceLine.postedValueLc} property for query construction.
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
   * Representation of the {@link InventoryOpeningBalanceLine.postedValueSc} property for query construction.
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
   * Representation of the {@link InventoryOpeningBalanceLine.weightOfRecycledPlastic} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weightOfRecycledPlastic: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WeightOfRecycledPlastic',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link InventoryOpeningBalanceLine.plasticPackageExemptionReason} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plasticPackageExemptionReason: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PlasticPackageExemptionReason',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link InventoryOpeningBalanceLine.inventoryOpeningBalanceSerialNumbers} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryOpeningBalanceSerialNumbers: CollectionField<
    EntityT,
    DeSerializersT,
    InventoryOpeningBalanceSerialNumber,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'InventoryOpeningBalanceSerialNumbers',
    InventoryOpeningBalanceSerialNumber,
    true
  );
  /**
   * Representation of the {@link InventoryOpeningBalanceLine.inventoryOpeningBalanceBatchNumbers} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryOpeningBalanceBatchNumbers: CollectionField<
    EntityT,
    DeSerializersT,
    InventoryOpeningBalanceBatchNumber,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'InventoryOpeningBalanceBatchNumbers',
    InventoryOpeningBalanceBatchNumber,
    true
  );
  /**
   * Representation of the {@link InventoryOpeningBalanceLine.inventoryOpeningBalanceCcdNumbers} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryOpeningBalanceCcdNumbers: CollectionField<
    EntityT,
    DeSerializersT,
    InventoryOpeningBalanceCcdNumber,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'InventoryOpeningBalanceCCDNumbers',
    InventoryOpeningBalanceCcdNumber,
    true
  );

  /**
   * Creates an instance of InventoryOpeningBalanceLineField.
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
      InventoryOpeningBalanceLine,
      fieldOptions
    );
  }
}

export namespace InventoryOpeningBalanceLine {
  /**
   * Metadata information on all properties of the `InventoryOpeningBalanceLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InventoryOpeningBalanceLine>[] =
    [
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
        originalName: 'OpeningBalance',
        name: 'openingBalance',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'Remarks',
        name: 'remarks',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BarCode',
        name: 'barCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'VisualOrder',
        name: 'visualOrder',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Price',
        name: 'price',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'Total',
        name: 'total',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'OpenInventoryAccount',
        name: 'openInventoryAccount',
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
        originalName: 'PreferredVendor',
        name: 'preferredVendor',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Currency',
        name: 'currency',
        type: 'Edm.String',
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
        originalName: 'WeightOfRecycledPlastic',
        name: 'weightOfRecycledPlastic',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'PlasticPackageExemptionReason',
        name: 'plasticPackageExemptionReason',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'InventoryOpeningBalanceSerialNumbers',
        name: 'inventoryOpeningBalanceSerialNumbers',
        type: InventoryOpeningBalanceSerialNumber,
        isCollection: true
      },
      {
        originalName: 'InventoryOpeningBalanceBatchNumbers',
        name: 'inventoryOpeningBalanceBatchNumbers',
        type: InventoryOpeningBalanceBatchNumber,
        isCollection: true
      },
      {
        originalName: 'InventoryOpeningBalanceCCDNumbers',
        name: 'inventoryOpeningBalanceCcdNumbers',
        type: InventoryOpeningBalanceCcdNumber,
        isCollection: true
      }
    ];
}
