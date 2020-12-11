/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryCountingLineUoM } from './InventoryCountingLineUoM';
import { InventoryCountingSerialNumber } from './InventoryCountingSerialNumber';
import { InventoryCountingBatchNumber } from './InventoryCountingBatchNumber';
import { BoYesNoEnum } from './BoYesNoEnum';
import { CountingLineStatusEnum } from './CountingLineStatusEnum';
import { CounterTypeEnum } from './CounterTypeEnum';
import { MultipleCounterRoleEnum } from './MultipleCounterRoleEnum';
import { CollectionField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * InventoryCountingLine
 */
export interface InventoryCountingLine {
  /**
   * Document Entry.
   * @nullable
   */
  documentEntry?: number;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: number;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Item Description.
   * @nullable
   */
  itemDescription?: string;
  /**
   * Freeze.
   * @nullable
   */
  freeze?: BoYesNoEnum;
  /**
   * Warehouse Code.
   * @nullable
   */
  warehouseCode?: string;
  /**
   * Bin Entry.
   * @nullable
   */
  binEntry?: number;
  /**
   * In Warehouse Quantity.
   * @nullable
   */
  inWarehouseQuantity?: number;
  /**
   * Counted.
   * @nullable
   */
  counted?: BoYesNoEnum;
  /**
   * Uo M Code.
   * @nullable
   */
  uoMCode?: string;
  /**
   * Bar Code.
   * @nullable
   */
  barCode?: string;
  /**
   * Uo M Counted Quantity.
   * @nullable
   */
  uoMCountedQuantity?: number;
  /**
   * Items Per Unit.
   * @nullable
   */
  itemsPerUnit?: number;
  /**
   * Counted Quantity.
   * @nullable
   */
  countedQuantity?: number;
  /**
   * Variance.
   * @nullable
   */
  variance?: number;
  /**
   * Variance Percentage.
   * @nullable
   */
  variancePercentage?: number;
  /**
   * Visual Order.
   * @nullable
   */
  visualOrder?: number;
  /**
   * Target Entry.
   * @nullable
   */
  targetEntry?: number;
  /**
   * Target Line.
   * @nullable
   */
  targetLine?: number;
  /**
   * Target Type.
   * @nullable
   */
  targetType?: number;
  /**
   * Target Reference.
   * @nullable
   */
  targetReference?: string;
  /**
   * Project Code.
   * @nullable
   */
  projectCode?: string;
  /**
   * Manufacturer.
   * @nullable
   */
  manufacturer?: number;
  /**
   * Supplier Catalog No.
   * @nullable
   */
  supplierCatalogNo?: string;
  /**
   * Preferred Vendor.
   * @nullable
   */
  preferredVendor?: string;
  /**
   * Costing Code.
   * @nullable
   */
  costingCode?: string;
  /**
   * Costing Code 2.
   * @nullable
   */
  costingCode2?: string;
  /**
   * Costing Code 3.
   * @nullable
   */
  costingCode3?: string;
  /**
   * Costing Code 4.
   * @nullable
   */
  costingCode4?: string;
  /**
   * Costing Code 5.
   * @nullable
   */
  costingCode5?: string;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Line Status.
   * @nullable
   */
  lineStatus?: CountingLineStatusEnum;
  /**
   * Counter Type.
   * @nullable
   */
  counterType?: CounterTypeEnum;
  /**
   * Counter Id.
   * @nullable
   */
  counterId?: number;
  /**
   * Multiple Counter Role.
   * @nullable
   */
  multipleCounterRole?: MultipleCounterRoleEnum;
  /**
   * Inventory Counting Line Uo Ms.
   * @nullable
   */
  inventoryCountingLineUoMs?: InventoryCountingLineUoM[];
  /**
   * Inventory Counting Serial Numbers.
   * @nullable
   */
  inventoryCountingSerialNumbers?: InventoryCountingSerialNumber[];
  /**
   * Inventory Counting Batch Numbers.
   * @nullable
   */
  inventoryCountingBatchNumbers?: InventoryCountingBatchNumber[];
}

/**
 * @deprecated Since v1.6.0. Use [[InventoryCountingLine.build]] instead.
 */
export function createInventoryCountingLine(json: any): InventoryCountingLine {
  return InventoryCountingLine.build(json);
}

/**
 * InventoryCountingLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class InventoryCountingLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InventoryCountingLine> {
  /**
   * Representation of the [[InventoryCountingLine.documentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingLine.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingLine.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.itemDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemDescription', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.freeze]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freeze: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Freeze', this);
  /**
   * Representation of the [[InventoryCountingLine.warehouseCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouseCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WarehouseCode', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.binEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  binEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BinEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingLine.inWarehouseQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inWarehouseQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InWarehouseQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryCountingLine.counted]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counted: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Counted', this);
  /**
   * Representation of the [[InventoryCountingLine.uoMCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UoMCode', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.barCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  barCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BarCode', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.uoMCountedQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMCountedQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UoMCountedQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryCountingLine.itemsPerUnit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemsPerUnit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ItemsPerUnit', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryCountingLine.countedQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countedQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CountedQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryCountingLine.variance]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  variance: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Variance', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryCountingLine.variancePercentage]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  variancePercentage: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VariancePercentage', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryCountingLine.visualOrder]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  visualOrder: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VisualOrder', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingLine.targetEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TargetEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingLine.targetLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TargetLine', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingLine.targetType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TargetType', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingLine.targetReference]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetReference: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TargetReference', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.projectCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  projectCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ProjectCode', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.manufacturer]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manufacturer: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Manufacturer', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingLine.supplierCatalogNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  supplierCatalogNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SupplierCatalogNo', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.preferredVendor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  preferredVendor: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PreferredVendor', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.costingCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.costingCode2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode2', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.costingCode3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode3', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.costingCode4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode4', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.costingCode5]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode5: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode5', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.lineStatus]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineStatus: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('LineStatus', this);
  /**
   * Representation of the [[InventoryCountingLine.counterType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('CounterType', this);
  /**
   * Representation of the [[InventoryCountingLine.counterId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CounterID', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingLine.multipleCounterRole]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  multipleCounterRole: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('MultipleCounterRole', this);
  /**
   * Representation of the [[InventoryCountingLine.inventoryCountingLineUoMs]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryCountingLineUoMs: CollectionField<EntityT, InventoryCountingLineUoM> = new CollectionField('InventoryCountingLineUoMs', this, InventoryCountingLineUoM);
  /**
   * Representation of the [[InventoryCountingLine.inventoryCountingSerialNumbers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryCountingSerialNumbers: CollectionField<EntityT, InventoryCountingSerialNumber> = new CollectionField('InventoryCountingSerialNumbers', this, InventoryCountingSerialNumber);
  /**
   * Representation of the [[InventoryCountingLine.inventoryCountingBatchNumbers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryCountingBatchNumbers: CollectionField<EntityT, InventoryCountingBatchNumber> = new CollectionField('InventoryCountingBatchNumbers', this, InventoryCountingBatchNumber);

  /**
   * Creates an instance of InventoryCountingLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, InventoryCountingLine);
  }
}

export namespace InventoryCountingLine {
  /**
   * Metadata information on all properties of the `InventoryCountingLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InventoryCountingLine>[] = [{
    originalName: 'DocumentEntry',
    name: 'documentEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineNumber',
    name: 'lineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ItemCode',
    name: 'itemCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ItemDescription',
    name: 'itemDescription',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Freeze',
    name: 'freeze',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'WarehouseCode',
    name: 'warehouseCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BinEntry',
    name: 'binEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'InWarehouseQuantity',
    name: 'inWarehouseQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Counted',
    name: 'counted',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'UoMCode',
    name: 'uoMCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BarCode',
    name: 'barCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UoMCountedQuantity',
    name: 'uoMCountedQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ItemsPerUnit',
    name: 'itemsPerUnit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CountedQuantity',
    name: 'countedQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Variance',
    name: 'variance',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'VariancePercentage',
    name: 'variancePercentage',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'VisualOrder',
    name: 'visualOrder',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TargetEntry',
    name: 'targetEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TargetLine',
    name: 'targetLine',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TargetType',
    name: 'targetType',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TargetReference',
    name: 'targetReference',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ProjectCode',
    name: 'projectCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Manufacturer',
    name: 'manufacturer',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SupplierCatalogNo',
    name: 'supplierCatalogNo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PreferredVendor',
    name: 'preferredVendor',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CostingCode',
    name: 'costingCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CostingCode2',
    name: 'costingCode2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CostingCode3',
    name: 'costingCode3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CostingCode4',
    name: 'costingCode4',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CostingCode5',
    name: 'costingCode5',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Remarks',
    name: 'remarks',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'LineStatus',
    name: 'lineStatus',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'CounterType',
    name: 'counterType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'CounterID',
    name: 'counterId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'MultipleCounterRole',
    name: 'multipleCounterRole',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'InventoryCountingLineUoMs',
    name: 'inventoryCountingLineUoMs',
    type: InventoryCountingLineUoM,
    isCollection: true
  }, {
    originalName: 'InventoryCountingSerialNumbers',
    name: 'inventoryCountingSerialNumbers',
    type: InventoryCountingSerialNumber,
    isCollection: true
  }, {
    originalName: 'InventoryCountingBatchNumbers',
    name: 'inventoryCountingBatchNumbers',
    type: InventoryCountingBatchNumber,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | InventoryCountingBatchNumber | InventoryCountingLineUoM | InventoryCountingSerialNumber }): InventoryCountingLine {
    return deserializeComplexTypeV4(json, InventoryCountingLine);
  }
}
