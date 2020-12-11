/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { SerialNumber } from './SerialNumber';
import { BatchNumber } from './BatchNumber';
import { BoIssueMethod } from './BoIssueMethod';
import { ProductionItemType } from './ProductionItemType';
import { ResourceAllocationEnum } from './ResourceAllocationEnum';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ProductionOrderLine
 */
export interface ProductionOrderLine {
  /**
   * Document Absolute Entry.
   * @nullable
   */
  documentAbsoluteEntry?: number;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: number;
  /**
   * Item No.
   * @nullable
   */
  itemNo?: string;
  /**
   * Base Quantity.
   * @nullable
   */
  baseQuantity?: number;
  /**
   * Planned Quantity.
   * @nullable
   */
  plannedQuantity?: number;
  /**
   * Issued Quantity.
   * @nullable
   */
  issuedQuantity?: number;
  /**
   * Production Order Issue Type.
   * @nullable
   */
  productionOrderIssueType?: BoIssueMethod;
  /**
   * Warehouse.
   * @nullable
   */
  warehouse?: string;
  /**
   * Visual Order.
   * @nullable
   */
  visualOrder?: number;
  /**
   * Distribution Rule.
   * @nullable
   */
  distributionRule?: string;
  /**
   * Location Code.
   * @nullable
   */
  locationCode?: number;
  /**
   * Project.
   * @nullable
   */
  project?: string;
  /**
   * Distribution Rule 2.
   * @nullable
   */
  distributionRule2?: string;
  /**
   * Distribution Rule 3.
   * @nullable
   */
  distributionRule3?: string;
  /**
   * Distribution Rule 4.
   * @nullable
   */
  distributionRule4?: string;
  /**
   * Distribution Rule 5.
   * @nullable
   */
  distributionRule5?: string;
  /**
   * Uo M Entry.
   * @nullable
   */
  uoMEntry?: number;
  /**
   * Uo M Code.
   * @nullable
   */
  uoMCode?: number;
  /**
   * Wip Account.
   * @nullable
   */
  wipAccount?: string;
  /**
   * Item Type.
   * @nullable
   */
  itemType?: ProductionItemType;
  /**
   * Line Text.
   * @nullable
   */
  lineText?: string;
  /**
   * Additional Quantity.
   * @nullable
   */
  additionalQuantity?: number;
  /**
   * Resource Allocation.
   * @nullable
   */
  resourceAllocation?: ResourceAllocationEnum;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * End Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Stage Id.
   * @nullable
   */
  stageId?: number;
  /**
   * Required Days.
   * @nullable
   */
  requiredDays?: number;
  /**
   * Serial Numbers.
   * @nullable
   */
  serialNumbers?: SerialNumber[];
  /**
   * Batch Numbers.
   * @nullable
   */
  batchNumbers?: BatchNumber[];
}

/**
 * @deprecated Since v1.6.0. Use [[ProductionOrderLine.build]] instead.
 */
export function createProductionOrderLine(json: any): ProductionOrderLine {
  return ProductionOrderLine.build(json);
}

/**
 * ProductionOrderLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ProductionOrderLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ProductionOrderLine> {
  /**
   * Representation of the [[ProductionOrderLine.documentAbsoluteEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentAbsoluteEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentAbsoluteEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ProductionOrderLine.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ProductionOrderLine.itemNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemNo', this, 'Edm.String');
  /**
   * Representation of the [[ProductionOrderLine.baseQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[ProductionOrderLine.plannedQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plannedQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PlannedQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[ProductionOrderLine.issuedQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  issuedQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('IssuedQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[ProductionOrderLine.productionOrderIssueType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  productionOrderIssueType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ProductionOrderIssueType', this);
  /**
   * Representation of the [[ProductionOrderLine.warehouse]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouse: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Warehouse', this, 'Edm.String');
  /**
   * Representation of the [[ProductionOrderLine.visualOrder]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  visualOrder: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VisualOrder', this, 'Edm.Int32');
  /**
   * Representation of the [[ProductionOrderLine.distributionRule]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule', this, 'Edm.String');
  /**
   * Representation of the [[ProductionOrderLine.locationCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  locationCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LocationCode', this, 'Edm.Int32');
  /**
   * Representation of the [[ProductionOrderLine.project]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  project: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Project', this, 'Edm.String');
  /**
   * Representation of the [[ProductionOrderLine.distributionRule2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule2', this, 'Edm.String');
  /**
   * Representation of the [[ProductionOrderLine.distributionRule3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule3', this, 'Edm.String');
  /**
   * Representation of the [[ProductionOrderLine.distributionRule4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule4', this, 'Edm.String');
  /**
   * Representation of the [[ProductionOrderLine.distributionRule5]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule5: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule5', this, 'Edm.String');
  /**
   * Representation of the [[ProductionOrderLine.uoMEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UoMEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ProductionOrderLine.uoMCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UoMCode', this, 'Edm.Int32');
  /**
   * Representation of the [[ProductionOrderLine.wipAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wipAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WipAccount', this, 'Edm.String');
  /**
   * Representation of the [[ProductionOrderLine.itemType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ItemType', this);
  /**
   * Representation of the [[ProductionOrderLine.lineText]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineText: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LineText', this, 'Edm.String');
  /**
   * Representation of the [[ProductionOrderLine.additionalQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AdditionalQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[ProductionOrderLine.resourceAllocation]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  resourceAllocation: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ResourceAllocation', this);
  /**
   * Representation of the [[ProductionOrderLine.startDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('StartDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ProductionOrderLine.endDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EndDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ProductionOrderLine.stageId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StageID', this, 'Edm.Int32');
  /**
   * Representation of the [[ProductionOrderLine.requiredDays]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  requiredDays: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RequiredDays', this, 'Edm.Double');
  /**
   * Representation of the [[ProductionOrderLine.serialNumbers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serialNumbers: CollectionField<EntityT, SerialNumber> = new CollectionField('SerialNumbers', this, SerialNumber);
  /**
   * Representation of the [[ProductionOrderLine.batchNumbers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  batchNumbers: CollectionField<EntityT, BatchNumber> = new CollectionField('BatchNumbers', this, BatchNumber);

  /**
   * Creates an instance of ProductionOrderLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ProductionOrderLine);
  }
}

export namespace ProductionOrderLine {
  /**
   * Metadata information on all properties of the `ProductionOrderLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ProductionOrderLine>[] = [{
    originalName: 'DocumentAbsoluteEntry',
    name: 'documentAbsoluteEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineNumber',
    name: 'lineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ItemNo',
    name: 'itemNo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BaseQuantity',
    name: 'baseQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'PlannedQuantity',
    name: 'plannedQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'IssuedQuantity',
    name: 'issuedQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ProductionOrderIssueType',
    name: 'productionOrderIssueType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Warehouse',
    name: 'warehouse',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'VisualOrder',
    name: 'visualOrder',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DistributionRule',
    name: 'distributionRule',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'LocationCode',
    name: 'locationCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Project',
    name: 'project',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule2',
    name: 'distributionRule2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule3',
    name: 'distributionRule3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule4',
    name: 'distributionRule4',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule5',
    name: 'distributionRule5',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UoMEntry',
    name: 'uoMEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'UoMCode',
    name: 'uoMCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'WipAccount',
    name: 'wipAccount',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ItemType',
    name: 'itemType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'LineText',
    name: 'lineText',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AdditionalQuantity',
    name: 'additionalQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ResourceAllocation',
    name: 'resourceAllocation',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'StartDate',
    name: 'startDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'EndDate',
    name: 'endDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'StageID',
    name: 'stageId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'RequiredDays',
    name: 'requiredDays',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'SerialNumbers',
    name: 'serialNumbers',
    type: SerialNumber,
    isCollection: true
  }, {
    originalName: 'BatchNumbers',
    name: 'batchNumbers',
    type: BatchNumber,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | BatchNumber | SerialNumber }): ProductionOrderLine {
    return deserializeComplexTypeV4(json, ProductionOrderLine);
  }
}
