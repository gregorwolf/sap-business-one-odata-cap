/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ProductionOrdersStage
 */
export interface ProductionOrdersStage {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Stage Id.
   * @nullable
   */
  stageId?: number;
  /**
   * Sequence Number.
   * @nullable
   */
  sequenceNumber?: number;
  /**
   * Stage Entry.
   * @nullable
   */
  stageEntry?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
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
   * Required Days.
   * @nullable
   */
  requiredDays?: number;
  /**
   * Waiting Days.
   * @nullable
   */
  waitingDays?: number;
  /**
   * Calculation Proportion.
   * @nullable
   */
  calculationProportion?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ProductionOrdersStage.build]] instead.
 */
export function createProductionOrdersStage(json: any): ProductionOrdersStage {
  return ProductionOrdersStage.build(json);
}

/**
 * ProductionOrdersStageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ProductionOrdersStageField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ProductionOrdersStage.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ProductionOrdersStage.stageId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StageID', this, 'Edm.Int32');
  /**
   * Representation of the [[ProductionOrdersStage.sequenceNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequenceNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SequenceNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ProductionOrdersStage.stageEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StageEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ProductionOrdersStage.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
  /**
   * Representation of the [[ProductionOrdersStage.startDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('StartDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ProductionOrdersStage.endDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EndDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ProductionOrdersStage.requiredDays]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  requiredDays: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RequiredDays', this, 'Edm.Double');
  /**
   * Representation of the [[ProductionOrdersStage.waitingDays]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  waitingDays: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WaitingDays', this, 'Edm.Double');
  /**
   * Representation of the [[ProductionOrdersStage.calculationProportion]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  calculationProportion: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CalculationProportion', this, 'Edm.Double');
}

export namespace ProductionOrdersStage {
  export function build(json: { [keys: string]: FieldType }): ProductionOrdersStage {
    return createComplexType(json, {
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') }),
      StageID: (stageId: number) => ({ stageId: edmToTs(stageId, 'Edm.Int32') }),
      SequenceNumber: (sequenceNumber: number) => ({ sequenceNumber: edmToTs(sequenceNumber, 'Edm.Int32') }),
      StageEntry: (stageEntry: number) => ({ stageEntry: edmToTs(stageEntry, 'Edm.Int32') }),
      Name: (name: string) => ({ name: edmToTs(name, 'Edm.String') }),
      StartDate: (startDate: Moment) => ({ startDate: edmToTs(startDate, 'Edm.DateTimeOffset') }),
      EndDate: (endDate: Moment) => ({ endDate: edmToTs(endDate, 'Edm.DateTimeOffset') }),
      RequiredDays: (requiredDays: number) => ({ requiredDays: edmToTs(requiredDays, 'Edm.Double') }),
      WaitingDays: (waitingDays: number) => ({ waitingDays: edmToTs(waitingDays, 'Edm.Double') }),
      CalculationProportion: (calculationProportion: number) => ({ calculationProportion: edmToTs(calculationProportion, 'Edm.Double') })
    });
  }
}
