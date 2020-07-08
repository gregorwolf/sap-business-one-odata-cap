/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * EcmAction
 */
export interface EcmAction {
  /**
   * Action Id.
   * @nullable
   */
  actionId?: number;
  /**
   * Protocol.
   * @nullable
   */
  protocol?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Message.
   * @nullable
   */
  message?: string;
  /**
   * Environment.
   * @nullable
   */
  environment?: number;
  /**
   * Business Place.
   * @nullable
   */
  businessPlace?: number;
  /**
   * Submits.
   * @nullable
   */
  submits?: number;
  /**
   * Object Id.
   * @nullable
   */
  objectId?: string;
  /**
   * Report Id.
   * @nullable
   */
  reportId?: string;
  /**
   * Source Type.
   * @nullable
   */
  sourceType?: string;
  /**
   * Source Object.
   * @nullable
   */
  sourceObject?: number;
  /**
   * Assigned Id.
   * @nullable
   */
  assignedId?: string;
  /**
   * Document Batch.
   * @nullable
   */
  documentBatch?: string;
  /**
   * Document Batch Line.
   * @nullable
   */
  documentBatchLine?: number;
  /**
   * Period Number.
   * @nullable
   */
  periodNumber?: number;
  /**
   * Period Year.
   * @nullable
   */
  periodYear?: number;
  /**
   * Period Date From.
   * @nullable
   */
  periodDateFrom?: Moment;
  /**
   * Period Date To.
   * @nullable
   */
  periodDateTo?: Moment;
}

/**
 * @deprecated Since v1.6.0. Use [[EcmAction.build]] instead.
 */
export function createEcmAction(json: any): EcmAction {
  return EcmAction.build(json);
}

/**
 * EcmActionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EcmActionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[EcmAction.actionId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actionId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActionID', this, 'Edm.Int32');
  /**
   * Representation of the [[EcmAction.protocol]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  protocol: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Protocol', this, 'Edm.String');
  /**
   * Representation of the [[EcmAction.description]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Description', this, 'Edm.String');
  /**
   * Representation of the [[EcmAction.message]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  message: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Message', this, 'Edm.String');
  /**
   * Representation of the [[EcmAction.environment]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  environment: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Environment', this, 'Edm.Int32');
  /**
   * Representation of the [[EcmAction.businessPlace]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  businessPlace: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BusinessPlace', this, 'Edm.Int32');
  /**
   * Representation of the [[EcmAction.submits]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  submits: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Submits', this, 'Edm.Int32');
  /**
   * Representation of the [[EcmAction.objectId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ObjectID', this, 'Edm.String');
  /**
   * Representation of the [[EcmAction.reportId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reportId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ReportID', this, 'Edm.String');
  /**
   * Representation of the [[EcmAction.sourceType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourceType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SourceType', this, 'Edm.String');
  /**
   * Representation of the [[EcmAction.sourceObject]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourceObject: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SourceObject', this, 'Edm.Int32');
  /**
   * Representation of the [[EcmAction.assignedId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  assignedId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AssignedID', this, 'Edm.String');
  /**
   * Representation of the [[EcmAction.documentBatch]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentBatch: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DocumentBatch', this, 'Edm.String');
  /**
   * Representation of the [[EcmAction.documentBatchLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentBatchLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentBatchLine', this, 'Edm.Int32');
  /**
   * Representation of the [[EcmAction.periodNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PeriodNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[EcmAction.periodYear]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodYear: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PeriodYear', this, 'Edm.Int32');
  /**
   * Representation of the [[EcmAction.periodDateFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodDateFrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('PeriodDateFrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[EcmAction.periodDateTo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodDateTo: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('PeriodDateTo', this, 'Edm.DateTimeOffset');
}

export namespace EcmAction {
  export function build(json: { [keys: string]: FieldType }): EcmAction {
    return createComplexType(json, {
      ActionID: (actionId: number) => ({ actionId: edmToTs(actionId, 'Edm.Int32') }),
      Protocol: (protocol: string) => ({ protocol: edmToTs(protocol, 'Edm.String') }),
      Description: (description: string) => ({ description: edmToTs(description, 'Edm.String') }),
      Message: (message: string) => ({ message: edmToTs(message, 'Edm.String') }),
      Environment: (environment: number) => ({ environment: edmToTs(environment, 'Edm.Int32') }),
      BusinessPlace: (businessPlace: number) => ({ businessPlace: edmToTs(businessPlace, 'Edm.Int32') }),
      Submits: (submits: number) => ({ submits: edmToTs(submits, 'Edm.Int32') }),
      ObjectID: (objectId: string) => ({ objectId: edmToTs(objectId, 'Edm.String') }),
      ReportID: (reportId: string) => ({ reportId: edmToTs(reportId, 'Edm.String') }),
      SourceType: (sourceType: string) => ({ sourceType: edmToTs(sourceType, 'Edm.String') }),
      SourceObject: (sourceObject: number) => ({ sourceObject: edmToTs(sourceObject, 'Edm.Int32') }),
      AssignedID: (assignedId: string) => ({ assignedId: edmToTs(assignedId, 'Edm.String') }),
      DocumentBatch: (documentBatch: string) => ({ documentBatch: edmToTs(documentBatch, 'Edm.String') }),
      DocumentBatchLine: (documentBatchLine: number) => ({ documentBatchLine: edmToTs(documentBatchLine, 'Edm.Int32') }),
      PeriodNumber: (periodNumber: number) => ({ periodNumber: edmToTs(periodNumber, 'Edm.Int32') }),
      PeriodYear: (periodYear: number) => ({ periodYear: edmToTs(periodYear, 'Edm.Int32') }),
      PeriodDateFrom: (periodDateFrom: Moment) => ({ periodDateFrom: edmToTs(periodDateFrom, 'Edm.DateTimeOffset') }),
      PeriodDateTo: (periodDateTo: Moment) => ({ periodDateTo: edmToTs(periodDateTo, 'Edm.DateTimeOffset') })
    });
  }
}
