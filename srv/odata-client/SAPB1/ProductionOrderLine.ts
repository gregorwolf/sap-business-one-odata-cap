/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SerialNumber } from './SerialNumber';
import { BatchNumber } from './BatchNumber';
import { BoIssueMethod } from './BoIssueMethod';
import { ProductionItemType } from './ProductionItemType';
import { ResourceAllocationEnum } from './ResourceAllocationEnum';
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
 * ProductionOrderLine
 */
export interface ProductionOrderLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Document Absolute Entry.
   * @nullable
   */
  documentAbsoluteEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Item No.
   * @nullable
   */
  itemNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Base Quantity.
   * @nullable
   */
  baseQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Planned Quantity.
   * @nullable
   */
  plannedQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Issued Quantity.
   * @nullable
   */
  issuedQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Production Order Issue Type.
   * @nullable
   */
  productionOrderIssueType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Warehouse.
   * @nullable
   */
  warehouse?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Visual Order.
   * @nullable
   */
  visualOrder?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Distribution Rule.
   * @nullable
   */
  distributionRule?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Location Code.
   * @nullable
   */
  locationCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Project.
   * @nullable
   */
  project?: DeserializedType<DeSerializersT, 'Edm.String'>;
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
   * Uo M Entry.
   * @nullable
   */
  uoMEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Uo M Code.
   * @nullable
   */
  uoMCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Wip Account.
   * @nullable
   */
  wipAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item Type.
   * @nullable
   */
  itemType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Line Text.
   * @nullable
   */
  lineText?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Additional Quantity.
   * @nullable
   */
  additionalQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Resource Allocation.
   * @nullable
   */
  resourceAllocation?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   * @nullable
   */
  endDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Stage Id.
   * @nullable
   */
  stageId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Required Days.
   * @nullable
   */
  requiredDays?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Item Name.
   * @nullable
   */
  itemName?: DeserializedType<DeSerializersT, 'Edm.String'>;
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
   * Serial Numbers.
   * @nullable
   */
  serialNumbers?: DeserializedType<DeSerializersT, 'SAPB1.SerialNumber'>;
  /**
   * Batch Numbers.
   * @nullable
   */
  batchNumbers?: DeserializedType<DeSerializersT, 'SAPB1.BatchNumber'>;
}

/**
 * ProductionOrderLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ProductionOrderLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ProductionOrderLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ProductionOrderLine.documentAbsoluteEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentAbsoluteEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DocumentAbsoluteEntry',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ProductionOrderLine.lineNumber} property for query construction.
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
   * Representation of the {@link ProductionOrderLine.itemNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemNo', 'Edm.String', true);
  /**
   * Representation of the {@link ProductionOrderLine.baseQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseQuantity', 'Edm.Double', true);
  /**
   * Representation of the {@link ProductionOrderLine.plannedQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plannedQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PlannedQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link ProductionOrderLine.issuedQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  issuedQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'IssuedQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link ProductionOrderLine.productionOrderIssueType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  productionOrderIssueType: EnumField<
    EntityT,
    DeSerializersT,
    BoIssueMethod,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ProductionOrderIssueType',
    BoIssueMethod,
    true
  );
  /**
   * Representation of the {@link ProductionOrderLine.warehouse} property for query construction.
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
   * Representation of the {@link ProductionOrderLine.visualOrder} property for query construction.
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
   * Representation of the {@link ProductionOrderLine.distributionRule} property for query construction.
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
   * Representation of the {@link ProductionOrderLine.locationCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  locationCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LocationCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link ProductionOrderLine.project} property for query construction.
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
   * Representation of the {@link ProductionOrderLine.distributionRule2} property for query construction.
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
   * Representation of the {@link ProductionOrderLine.distributionRule3} property for query construction.
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
   * Representation of the {@link ProductionOrderLine.distributionRule4} property for query construction.
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
   * Representation of the {@link ProductionOrderLine.distributionRule5} property for query construction.
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
   * Representation of the {@link ProductionOrderLine.uoMEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UoMEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link ProductionOrderLine.uoMCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UoMCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link ProductionOrderLine.wipAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wipAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WipAccount', 'Edm.String', true);
  /**
   * Representation of the {@link ProductionOrderLine.itemType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemType: EnumField<
    EntityT,
    DeSerializersT,
    ProductionItemType,
    true,
    false
  > = this._fieldBuilder.buildEnumField('ItemType', ProductionItemType, true);
  /**
   * Representation of the {@link ProductionOrderLine.lineText} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineText: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineText', 'Edm.String', true);
  /**
   * Representation of the {@link ProductionOrderLine.additionalQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AdditionalQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link ProductionOrderLine.resourceAllocation} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  resourceAllocation: EnumField<
    EntityT,
    DeSerializersT,
    ResourceAllocationEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ResourceAllocation',
    ResourceAllocationEnum,
    true
  );
  /**
   * Representation of the {@link ProductionOrderLine.startDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StartDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ProductionOrderLine.endDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EndDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ProductionOrderLine.stageId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StageID', 'Edm.Int32', true);
  /**
   * Representation of the {@link ProductionOrderLine.requiredDays} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  requiredDays: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RequiredDays', 'Edm.Double', true);
  /**
   * Representation of the {@link ProductionOrderLine.itemName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemName', 'Edm.String', true);
  /**
   * Representation of the {@link ProductionOrderLine.weightOfRecycledPlastic} property for query construction.
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
   * Representation of the {@link ProductionOrderLine.plasticPackageExemptionReason} property for query construction.
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
   * Representation of the {@link ProductionOrderLine.serialNumbers} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serialNumbers: CollectionField<
    EntityT,
    DeSerializersT,
    SerialNumber,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'SerialNumbers',
    SerialNumber,
    true
  );
  /**
   * Representation of the {@link ProductionOrderLine.batchNumbers} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  batchNumbers: CollectionField<
    EntityT,
    DeSerializersT,
    BatchNumber,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'BatchNumbers',
    BatchNumber,
    true
  );

  /**
   * Creates an instance of ProductionOrderLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ProductionOrderLine, fieldOptions);
  }
}

export namespace ProductionOrderLine {
  /**
   * Metadata information on all properties of the `ProductionOrderLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ProductionOrderLine>[] = [
    {
      originalName: 'DocumentAbsoluteEntry',
      name: 'documentAbsoluteEntry',
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
      originalName: 'ItemNo',
      name: 'itemNo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BaseQuantity',
      name: 'baseQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'PlannedQuantity',
      name: 'plannedQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'IssuedQuantity',
      name: 'issuedQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ProductionOrderIssueType',
      name: 'productionOrderIssueType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Warehouse',
      name: 'warehouse',
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
      originalName: 'DistributionRule',
      name: 'distributionRule',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LocationCode',
      name: 'locationCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Project',
      name: 'project',
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
      originalName: 'UoMEntry',
      name: 'uoMEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'UoMCode',
      name: 'uoMCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'WipAccount',
      name: 'wipAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ItemType',
      name: 'itemType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'LineText',
      name: 'lineText',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AdditionalQuantity',
      name: 'additionalQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ResourceAllocation',
      name: 'resourceAllocation',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'StartDate',
      name: 'startDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'EndDate',
      name: 'endDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'StageID',
      name: 'stageId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'RequiredDays',
      name: 'requiredDays',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ItemName',
      name: 'itemName',
      type: 'Edm.String',
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
      originalName: 'SerialNumbers',
      name: 'serialNumbers',
      type: SerialNumber,
      isCollection: true
    },
    {
      originalName: 'BatchNumbers',
      name: 'batchNumbers',
      type: BatchNumber,
      isCollection: true
    }
  ];
}
