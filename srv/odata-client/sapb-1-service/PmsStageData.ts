/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { StageDepTypeEnum } from './StageDepTypeEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * PmsStageData
 */
export interface PmsStageData {
  /**
   * Line Id.
   * @nullable
   */
  lineId?: number;
  /**
   * Stage Id.
   * @nullable
   */
  stageId?: number;
  /**
   * Stage Type.
   * @nullable
   */
  stageType?: number;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * Close Date.
   * @nullable
   */
  closeDate?: Moment;
  /**
   * Task.
   * @nullable
   */
  task?: number;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Expected Costs.
   * @nullable
   */
  expectedCosts?: number;
  /**
   * Invoiced Amount Sales.
   * @nullable
   */
  invoicedAmountSales?: number;
  /**
   * Open Amount Sales.
   * @nullable
   */
  openAmountSales?: number;
  /**
   * Invoiced Amount Purchase.
   * @nullable
   */
  invoicedAmountPurchase?: number;
  /**
   * Open Amount Purchase.
   * @nullable
   */
  openAmountPurchase?: number;
  /**
   * Percentual Completness.
   * @nullable
   */
  percentualCompletness?: number;
  /**
   * Is Finished.
   * @nullable
   */
  isFinished?: BoYesNoEnum;
  /**
   * Stage Owner.
   * @nullable
   */
  stageOwner?: number;
  /**
   * Depends On Stage 1.
   * @nullable
   */
  dependsOnStage1?: number;
  /**
   * Depends On Stage 2.
   * @nullable
   */
  dependsOnStage2?: number;
  /**
   * Depends On Stage 3.
   * @nullable
   */
  dependsOnStage3?: number;
  /**
   * Depends On Stage 4.
   * @nullable
   */
  dependsOnStage4?: number;
  /**
   * Stage Dependency 1 Type.
   * @nullable
   */
  stageDependency1Type?: StageDepTypeEnum;
  /**
   * Stage Dependency 2 Type.
   * @nullable
   */
  stageDependency2Type?: StageDepTypeEnum;
  /**
   * Stage Dependency 3 Type.
   * @nullable
   */
  stageDependency3Type?: StageDepTypeEnum;
  /**
   * Stage Dependency 4 Type.
   * @nullable
   */
  stageDependency4Type?: StageDepTypeEnum;
  /**
   * Depends On Stage Id 1.
   * @nullable
   */
  dependsOnStageId1?: number;
  /**
   * Depends On Stage Id 2.
   * @nullable
   */
  dependsOnStageId2?: number;
  /**
   * Depends On Stage Id 3.
   * @nullable
   */
  dependsOnStageId3?: number;
  /**
   * Depends On Stage Id 4.
   * @nullable
   */
  dependsOnStageId4?: number;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: number;
  /**
   * Unique Id.
   * @nullable
   */
  uniqueId?: string;
  /**
   * Finished Date.
   * @nullable
   */
  finishedDate?: Moment;
}

/**
 * @deprecated Since v1.6.0. Use [[PmsStageData.build]] instead.
 */
export function createPmsStageData(json: any): PmsStageData {
  return PmsStageData.build(json);
}

/**
 * PmsStageDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmsStageDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmsStageData> {
  /**
   * Representation of the [[PmsStageData.lineId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsStageData.stageId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StageID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsStageData.stageType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StageType', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsStageData.startDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('StartDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PmsStageData.closeDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  closeDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('CloseDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PmsStageData.task]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  task: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Task', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsStageData.description]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Description', this, 'Edm.String');
  /**
   * Representation of the [[PmsStageData.expectedCosts]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expectedCosts: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ExpectedCosts', this, 'Edm.Double');
  /**
   * Representation of the [[PmsStageData.invoicedAmountSales]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  invoicedAmountSales: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InvoicedAmountSales', this, 'Edm.Double');
  /**
   * Representation of the [[PmsStageData.openAmountSales]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  openAmountSales: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OpenAmountSales', this, 'Edm.Double');
  /**
   * Representation of the [[PmsStageData.invoicedAmountPurchase]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  invoicedAmountPurchase: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InvoicedAmountPurchase', this, 'Edm.Double');
  /**
   * Representation of the [[PmsStageData.openAmountPurchase]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  openAmountPurchase: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OpenAmountPurchase', this, 'Edm.Double');
  /**
   * Representation of the [[PmsStageData.percentualCompletness]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  percentualCompletness: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PercentualCompletness', this, 'Edm.Double');
  /**
   * Representation of the [[PmsStageData.isFinished]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isFinished: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('IsFinished', this);
  /**
   * Representation of the [[PmsStageData.stageOwner]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageOwner: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StageOwner', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsStageData.dependsOnStage1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dependsOnStage1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DependsOnStage1', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsStageData.dependsOnStage2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dependsOnStage2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DependsOnStage2', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsStageData.dependsOnStage3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dependsOnStage3: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DependsOnStage3', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsStageData.dependsOnStage4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dependsOnStage4: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DependsOnStage4', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsStageData.stageDependency1Type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageDependency1Type: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('StageDependency1Type', this);
  /**
   * Representation of the [[PmsStageData.stageDependency2Type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageDependency2Type: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('StageDependency2Type', this);
  /**
   * Representation of the [[PmsStageData.stageDependency3Type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageDependency3Type: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('StageDependency3Type', this);
  /**
   * Representation of the [[PmsStageData.stageDependency4Type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageDependency4Type: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('StageDependency4Type', this);
  /**
   * Representation of the [[PmsStageData.dependsOnStageId1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dependsOnStageId1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DependsOnStageID1', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsStageData.dependsOnStageId2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dependsOnStageId2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DependsOnStageID2', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsStageData.dependsOnStageId3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dependsOnStageId3: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DependsOnStageID3', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsStageData.dependsOnStageId4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dependsOnStageId4: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DependsOnStageID4', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsStageData.attachmentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attachmentEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AttachmentEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsStageData.uniqueId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uniqueId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UniqueID', this, 'Edm.String');
  /**
   * Representation of the [[PmsStageData.finishedDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  finishedDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('FinishedDate', this, 'Edm.DateTimeOffset');

  /**
   * Creates an instance of PmsStageDataField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PmsStageData);
  }
}

export namespace PmsStageData {
  /**
   * Metadata information on all properties of the `PmsStageData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmsStageData>[] = [{
    originalName: 'LineID',
    name: 'lineId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'StageID',
    name: 'stageId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'StageType',
    name: 'stageType',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'StartDate',
    name: 'startDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'CloseDate',
    name: 'closeDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Task',
    name: 'task',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Description',
    name: 'description',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ExpectedCosts',
    name: 'expectedCosts',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'InvoicedAmountSales',
    name: 'invoicedAmountSales',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'OpenAmountSales',
    name: 'openAmountSales',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'InvoicedAmountPurchase',
    name: 'invoicedAmountPurchase',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'OpenAmountPurchase',
    name: 'openAmountPurchase',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'PercentualCompletness',
    name: 'percentualCompletness',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'IsFinished',
    name: 'isFinished',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'StageOwner',
    name: 'stageOwner',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DependsOnStage1',
    name: 'dependsOnStage1',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DependsOnStage2',
    name: 'dependsOnStage2',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DependsOnStage3',
    name: 'dependsOnStage3',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DependsOnStage4',
    name: 'dependsOnStage4',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'StageDependency1Type',
    name: 'stageDependency1Type',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'StageDependency2Type',
    name: 'stageDependency2Type',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'StageDependency3Type',
    name: 'stageDependency3Type',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'StageDependency4Type',
    name: 'stageDependency4Type',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'DependsOnStageID1',
    name: 'dependsOnStageId1',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DependsOnStageID2',
    name: 'dependsOnStageId2',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DependsOnStageID3',
    name: 'dependsOnStageId3',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DependsOnStageID4',
    name: 'dependsOnStageId4',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'AttachmentEntry',
    name: 'attachmentEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'UniqueID',
    name: 'uniqueId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FinishedDate',
    name: 'finishedDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PmsStageData {
    return deserializeComplexTypeV4(json, PmsStageData);
  }
}
