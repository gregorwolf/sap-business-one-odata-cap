/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class ProductionOrdersStageField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ProductionOrdersStage> {
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

  /**
   * Creates an instance of ProductionOrdersStageField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ProductionOrdersStage);
  }
}

export namespace ProductionOrdersStage {
  /**
   * Metadata information on all properties of the `ProductionOrdersStage` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ProductionOrdersStage>[] = [{
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'StageID',
    name: 'stageId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SequenceNumber',
    name: 'sequenceNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'StageEntry',
    name: 'stageEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Name',
    name: 'name',
    type: 'Edm.String',
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
    originalName: 'RequiredDays',
    name: 'requiredDays',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'WaitingDays',
    name: 'waitingDays',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CalculationProportion',
    name: 'calculationProportion',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ProductionOrdersStage {
    return deserializeComplexTypeV4(json, ProductionOrdersStage);
  }
}
