/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { SerialNumber, SerialNumberField } from './SerialNumber';
import { BatchNumber, BatchNumberField } from './BatchNumber';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
  serialNumbers?: SerialNumber;
  /**
   * Batch Numbers.
   * @nullable
   */
  batchNumbers?: BatchNumber;
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
export class ProductionOrderLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
  serialNumbers: SerialNumberField<EntityT> = new SerialNumberField('SerialNumbers', this);
  /**
   * Representation of the [[ProductionOrderLine.batchNumbers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  batchNumbers: BatchNumberField<EntityT> = new BatchNumberField('BatchNumbers', this);
}

export namespace ProductionOrderLine {
  export function build(json: { [keys: string]: FieldType | BatchNumber | SerialNumber }): ProductionOrderLine {
    return createComplexType(json, {
      DocumentAbsoluteEntry: (documentAbsoluteEntry: number) => ({ documentAbsoluteEntry: edmToTs(documentAbsoluteEntry, 'Edm.Int32') }),
      LineNumber: (lineNumber: number) => ({ lineNumber: edmToTs(lineNumber, 'Edm.Int32') }),
      ItemNo: (itemNo: string) => ({ itemNo: edmToTs(itemNo, 'Edm.String') }),
      BaseQuantity: (baseQuantity: number) => ({ baseQuantity: edmToTs(baseQuantity, 'Edm.Double') }),
      PlannedQuantity: (plannedQuantity: number) => ({ plannedQuantity: edmToTs(plannedQuantity, 'Edm.Double') }),
      IssuedQuantity: (issuedQuantity: number) => ({ issuedQuantity: edmToTs(issuedQuantity, 'Edm.Double') }),
      Warehouse: (warehouse: string) => ({ warehouse: edmToTs(warehouse, 'Edm.String') }),
      VisualOrder: (visualOrder: number) => ({ visualOrder: edmToTs(visualOrder, 'Edm.Int32') }),
      DistributionRule: (distributionRule: string) => ({ distributionRule: edmToTs(distributionRule, 'Edm.String') }),
      LocationCode: (locationCode: number) => ({ locationCode: edmToTs(locationCode, 'Edm.Int32') }),
      Project: (project: string) => ({ project: edmToTs(project, 'Edm.String') }),
      DistributionRule2: (distributionRule2: string) => ({ distributionRule2: edmToTs(distributionRule2, 'Edm.String') }),
      DistributionRule3: (distributionRule3: string) => ({ distributionRule3: edmToTs(distributionRule3, 'Edm.String') }),
      DistributionRule4: (distributionRule4: string) => ({ distributionRule4: edmToTs(distributionRule4, 'Edm.String') }),
      DistributionRule5: (distributionRule5: string) => ({ distributionRule5: edmToTs(distributionRule5, 'Edm.String') }),
      UoMEntry: (uoMEntry: number) => ({ uoMEntry: edmToTs(uoMEntry, 'Edm.Int32') }),
      UoMCode: (uoMCode: number) => ({ uoMCode: edmToTs(uoMCode, 'Edm.Int32') }),
      WipAccount: (wipAccount: string) => ({ wipAccount: edmToTs(wipAccount, 'Edm.String') }),
      LineText: (lineText: string) => ({ lineText: edmToTs(lineText, 'Edm.String') }),
      AdditionalQuantity: (additionalQuantity: number) => ({ additionalQuantity: edmToTs(additionalQuantity, 'Edm.Double') }),
      StartDate: (startDate: Moment) => ({ startDate: edmToTs(startDate, 'Edm.DateTimeOffset') }),
      EndDate: (endDate: Moment) => ({ endDate: edmToTs(endDate, 'Edm.DateTimeOffset') }),
      StageID: (stageId: number) => ({ stageId: edmToTs(stageId, 'Edm.Int32') }),
      RequiredDays: (requiredDays: number) => ({ requiredDays: edmToTs(requiredDays, 'Edm.Double') }),
      SerialNumbers: (serialNumbers: SerialNumber) => ({ serialNumbers: SerialNumber.build(serialNumbers) }),
      BatchNumbers: (batchNumbers: BatchNumber) => ({ batchNumbers: BatchNumber.build(batchNumbers) })
    });
  }
}
