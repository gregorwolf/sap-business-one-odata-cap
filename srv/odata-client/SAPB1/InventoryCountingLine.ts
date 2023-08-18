/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
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
 * InventoryCountingLine
 */
export interface InventoryCountingLine<
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
   * Freeze.
   * @nullable
   */
  freeze?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
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
   * Counted.
   * @nullable
   */
  counted?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Uo M Code.
   * @nullable
   */
  uoMCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bar Code.
   * @nullable
   */
  barCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
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
   * Counted Quantity.
   * @nullable
   */
  countedQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
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
   * Visual Order.
   * @nullable
   */
  visualOrder?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Target Entry.
   * @nullable
   */
  targetEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Target Line.
   * @nullable
   */
  targetLine?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Target Type.
   * @nullable
   */
  targetType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Target Reference.
   * @nullable
   */
  targetReference?: DeserializedType<DeSerializersT, 'Edm.String'>;
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
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Line Status.
   * @nullable
   */
  lineStatus?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Counter Type.
   * @nullable
   */
  counterType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Counter Id.
   * @nullable
   */
  counterId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Multiple Counter Role.
   * @nullable
   */
  multipleCounterRole?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
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
   * Inventory Counting Line Uo Ms.
   * @nullable
   */
  inventoryCountingLineUoMs?: DeserializedType<
    DeSerializersT,
    'SAPB1.InventoryCountingLineUoM'
  >;
  /**
   * Inventory Counting Serial Numbers.
   * @nullable
   */
  inventoryCountingSerialNumbers?: DeserializedType<
    DeSerializersT,
    'SAPB1.InventoryCountingSerialNumber'
  >;
  /**
   * Inventory Counting Batch Numbers.
   * @nullable
   */
  inventoryCountingBatchNumbers?: DeserializedType<
    DeSerializersT,
    'SAPB1.InventoryCountingBatchNumber'
  >;
}

/**
 * InventoryCountingLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class InventoryCountingLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  InventoryCountingLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link InventoryCountingLine.documentEntry} property for query construction.
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
   * Representation of the {@link InventoryCountingLine.lineNumber} property for query construction.
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
   * Representation of the {@link InventoryCountingLine.itemCode} property for query construction.
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
   * Representation of the {@link InventoryCountingLine.itemDescription} property for query construction.
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
   * Representation of the {@link InventoryCountingLine.freeze} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freeze: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Freeze', BoYesNoEnum, true);
  /**
   * Representation of the {@link InventoryCountingLine.warehouseCode} property for query construction.
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
   * Representation of the {@link InventoryCountingLine.binEntry} property for query construction.
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
   * Representation of the {@link InventoryCountingLine.inWarehouseQuantity} property for query construction.
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
   * Representation of the {@link InventoryCountingLine.counted} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counted: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Counted', BoYesNoEnum, true);
  /**
   * Representation of the {@link InventoryCountingLine.uoMCode} property for query construction.
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
   * Representation of the {@link InventoryCountingLine.barCode} property for query construction.
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
   * Representation of the {@link InventoryCountingLine.uoMCountedQuantity} property for query construction.
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
   * Representation of the {@link InventoryCountingLine.itemsPerUnit} property for query construction.
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
   * Representation of the {@link InventoryCountingLine.countedQuantity} property for query construction.
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
   * Representation of the {@link InventoryCountingLine.variance} property for query construction.
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
   * Representation of the {@link InventoryCountingLine.variancePercentage} property for query construction.
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
   * Representation of the {@link InventoryCountingLine.visualOrder} property for query construction.
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
   * Representation of the {@link InventoryCountingLine.targetEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TargetEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link InventoryCountingLine.targetLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetLine: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TargetLine', 'Edm.Int32', true);
  /**
   * Representation of the {@link InventoryCountingLine.targetType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TargetType', 'Edm.Int32', true);
  /**
   * Representation of the {@link InventoryCountingLine.targetReference} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetReference: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TargetReference',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link InventoryCountingLine.projectCode} property for query construction.
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
   * Representation of the {@link InventoryCountingLine.manufacturer} property for query construction.
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
   * Representation of the {@link InventoryCountingLine.supplierCatalogNo} property for query construction.
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
   * Representation of the {@link InventoryCountingLine.preferredVendor} property for query construction.
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
   * Representation of the {@link InventoryCountingLine.costingCode} property for query construction.
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
   * Representation of the {@link InventoryCountingLine.costingCode2} property for query construction.
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
   * Representation of the {@link InventoryCountingLine.costingCode3} property for query construction.
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
   * Representation of the {@link InventoryCountingLine.costingCode4} property for query construction.
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
   * Representation of the {@link InventoryCountingLine.costingCode5} property for query construction.
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
   * Representation of the {@link InventoryCountingLine.remarks} property for query construction.
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
   * Representation of the {@link InventoryCountingLine.lineStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineStatus: EnumField<
    EntityT,
    DeSerializersT,
    CountingLineStatusEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'LineStatus',
    CountingLineStatusEnum,
    true
  );
  /**
   * Representation of the {@link InventoryCountingLine.counterType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterType: EnumField<
    EntityT,
    DeSerializersT,
    CounterTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('CounterType', CounterTypeEnum, true);
  /**
   * Representation of the {@link InventoryCountingLine.counterId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CounterID', 'Edm.Int32', true);
  /**
   * Representation of the {@link InventoryCountingLine.multipleCounterRole} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  multipleCounterRole: EnumField<
    EntityT,
    DeSerializersT,
    MultipleCounterRoleEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'MultipleCounterRole',
    MultipleCounterRoleEnum,
    true
  );
  /**
   * Representation of the {@link InventoryCountingLine.weightOfRecycledPlastic} property for query construction.
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
   * Representation of the {@link InventoryCountingLine.plasticPackageExemptionReason} property for query construction.
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
   * Representation of the {@link InventoryCountingLine.inventoryCountingLineUoMs} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryCountingLineUoMs: CollectionField<
    EntityT,
    DeSerializersT,
    InventoryCountingLineUoM,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'InventoryCountingLineUoMs',
    InventoryCountingLineUoM,
    true
  );
  /**
   * Representation of the {@link InventoryCountingLine.inventoryCountingSerialNumbers} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryCountingSerialNumbers: CollectionField<
    EntityT,
    DeSerializersT,
    InventoryCountingSerialNumber,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'InventoryCountingSerialNumbers',
    InventoryCountingSerialNumber,
    true
  );
  /**
   * Representation of the {@link InventoryCountingLine.inventoryCountingBatchNumbers} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryCountingBatchNumbers: CollectionField<
    EntityT,
    DeSerializersT,
    InventoryCountingBatchNumber,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'InventoryCountingBatchNumbers',
    InventoryCountingBatchNumber,
    true
  );

  /**
   * Creates an instance of InventoryCountingLineField.
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
      InventoryCountingLine,
      fieldOptions
    );
  }
}

export namespace InventoryCountingLine {
  /**
   * Metadata information on all properties of the `InventoryCountingLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InventoryCountingLine>[] = [
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
      originalName: 'Freeze',
      name: 'freeze',
      type: 'Edm.Enum',
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
      originalName: 'Counted',
      name: 'counted',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'UoMCode',
      name: 'uoMCode',
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
      originalName: 'CountedQuantity',
      name: 'countedQuantity',
      type: 'Edm.Double',
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
      originalName: 'VisualOrder',
      name: 'visualOrder',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TargetEntry',
      name: 'targetEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TargetLine',
      name: 'targetLine',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TargetType',
      name: 'targetType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TargetReference',
      name: 'targetReference',
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
      originalName: 'Remarks',
      name: 'remarks',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LineStatus',
      name: 'lineStatus',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CounterType',
      name: 'counterType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CounterID',
      name: 'counterId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'MultipleCounterRole',
      name: 'multipleCounterRole',
      type: 'Edm.Enum',
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
      originalName: 'InventoryCountingLineUoMs',
      name: 'inventoryCountingLineUoMs',
      type: InventoryCountingLineUoM,
      isCollection: true
    },
    {
      originalName: 'InventoryCountingSerialNumbers',
      name: 'inventoryCountingSerialNumbers',
      type: InventoryCountingSerialNumber,
      isCollection: true
    },
    {
      originalName: 'InventoryCountingBatchNumbers',
      name: 'inventoryCountingBatchNumbers',
      type: InventoryCountingBatchNumber,
      isCollection: true
    }
  ];
}
