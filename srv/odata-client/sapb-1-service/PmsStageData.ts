/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class PmsStageDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace PmsStageData {
  export function build(json: { [keys: string]: FieldType }): PmsStageData {
    return createComplexType(json, {
      LineID: (lineId: number) => ({ lineId: edmToTs(lineId, 'Edm.Int32') }),
      StageID: (stageId: number) => ({ stageId: edmToTs(stageId, 'Edm.Int32') }),
      StageType: (stageType: number) => ({ stageType: edmToTs(stageType, 'Edm.Int32') }),
      StartDate: (startDate: Moment) => ({ startDate: edmToTs(startDate, 'Edm.DateTimeOffset') }),
      CloseDate: (closeDate: Moment) => ({ closeDate: edmToTs(closeDate, 'Edm.DateTimeOffset') }),
      Task: (task: number) => ({ task: edmToTs(task, 'Edm.Int32') }),
      Description: (description: string) => ({ description: edmToTs(description, 'Edm.String') }),
      ExpectedCosts: (expectedCosts: number) => ({ expectedCosts: edmToTs(expectedCosts, 'Edm.Double') }),
      InvoicedAmountSales: (invoicedAmountSales: number) => ({ invoicedAmountSales: edmToTs(invoicedAmountSales, 'Edm.Double') }),
      OpenAmountSales: (openAmountSales: number) => ({ openAmountSales: edmToTs(openAmountSales, 'Edm.Double') }),
      InvoicedAmountPurchase: (invoicedAmountPurchase: number) => ({ invoicedAmountPurchase: edmToTs(invoicedAmountPurchase, 'Edm.Double') }),
      OpenAmountPurchase: (openAmountPurchase: number) => ({ openAmountPurchase: edmToTs(openAmountPurchase, 'Edm.Double') }),
      PercentualCompletness: (percentualCompletness: number) => ({ percentualCompletness: edmToTs(percentualCompletness, 'Edm.Double') }),
      StageOwner: (stageOwner: number) => ({ stageOwner: edmToTs(stageOwner, 'Edm.Int32') }),
      DependsOnStage1: (dependsOnStage1: number) => ({ dependsOnStage1: edmToTs(dependsOnStage1, 'Edm.Int32') }),
      DependsOnStage2: (dependsOnStage2: number) => ({ dependsOnStage2: edmToTs(dependsOnStage2, 'Edm.Int32') }),
      DependsOnStage3: (dependsOnStage3: number) => ({ dependsOnStage3: edmToTs(dependsOnStage3, 'Edm.Int32') }),
      DependsOnStage4: (dependsOnStage4: number) => ({ dependsOnStage4: edmToTs(dependsOnStage4, 'Edm.Int32') }),
      DependsOnStageID1: (dependsOnStageId1: number) => ({ dependsOnStageId1: edmToTs(dependsOnStageId1, 'Edm.Int32') }),
      DependsOnStageID2: (dependsOnStageId2: number) => ({ dependsOnStageId2: edmToTs(dependsOnStageId2, 'Edm.Int32') }),
      DependsOnStageID3: (dependsOnStageId3: number) => ({ dependsOnStageId3: edmToTs(dependsOnStageId3, 'Edm.Int32') }),
      DependsOnStageID4: (dependsOnStageId4: number) => ({ dependsOnStageId4: edmToTs(dependsOnStageId4, 'Edm.Int32') }),
      AttachmentEntry: (attachmentEntry: number) => ({ attachmentEntry: edmToTs(attachmentEntry, 'Edm.Int32') }),
      UniqueID: (uniqueId: string) => ({ uniqueId: edmToTs(uniqueId, 'Edm.String') }),
      FinishedDate: (finishedDate: Moment) => ({ finishedDate: edmToTs(finishedDate, 'Edm.DateTimeOffset') })
    });
  }
}
