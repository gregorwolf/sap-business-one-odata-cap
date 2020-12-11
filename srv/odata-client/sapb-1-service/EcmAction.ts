/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { EcmActionTypeEnum } from './EcmActionTypeEnum';
import { EcmActionStatusEnum } from './EcmActionStatusEnum';
import { EcmActionPeriodTypeEnum } from './EcmActionPeriodTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { EcmActionGenerationTypeEnum } from './EcmActionGenerationTypeEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Type.
   * @nullable
   */
  type?: EcmActionTypeEnum;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Status.
   * @nullable
   */
  status?: EcmActionStatusEnum;
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
   * Period Type.
   * @nullable
   */
  periodType?: EcmActionPeriodTypeEnum;
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
  /**
   * Is Removed.
   * @nullable
   */
  isRemoved?: BoYesNoEnum;
  /**
   * Is Canceled.
   * @nullable
   */
  isCanceled?: BoYesNoEnum;
  /**
   * Generation Type.
   * @nullable
   */
  generationType?: EcmActionGenerationTypeEnum;
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
export class EcmActionField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EcmAction> {
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
   * Representation of the [[EcmAction.type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Type', this);
  /**
   * Representation of the [[EcmAction.description]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Description', this, 'Edm.String');
  /**
   * Representation of the [[EcmAction.status]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Status', this);
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
   * Representation of the [[EcmAction.periodType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('PeriodType', this);
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
  /**
   * Representation of the [[EcmAction.isRemoved]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isRemoved: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('IsRemoved', this);
  /**
   * Representation of the [[EcmAction.isCanceled]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isCanceled: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('IsCanceled', this);
  /**
   * Representation of the [[EcmAction.generationType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  generationType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('GenerationType', this);

  /**
   * Creates an instance of EcmActionField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, EcmAction);
  }
}

export namespace EcmAction {
  /**
   * Metadata information on all properties of the `EcmAction` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EcmAction>[] = [{
    originalName: 'ActionID',
    name: 'actionId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Protocol',
    name: 'protocol',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Type',
    name: 'type',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Description',
    name: 'description',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Status',
    name: 'status',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Message',
    name: 'message',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Environment',
    name: 'environment',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BusinessPlace',
    name: 'businessPlace',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Submits',
    name: 'submits',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ObjectID',
    name: 'objectId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ReportID',
    name: 'reportId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SourceType',
    name: 'sourceType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SourceObject',
    name: 'sourceObject',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'AssignedID',
    name: 'assignedId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DocumentBatch',
    name: 'documentBatch',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DocumentBatchLine',
    name: 'documentBatchLine',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PeriodType',
    name: 'periodType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'PeriodNumber',
    name: 'periodNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PeriodYear',
    name: 'periodYear',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PeriodDateFrom',
    name: 'periodDateFrom',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'PeriodDateTo',
    name: 'periodDateTo',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'IsRemoved',
    name: 'isRemoved',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'IsCanceled',
    name: 'isCanceled',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'GenerationType',
    name: 'generationType',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): EcmAction {
    return deserializeComplexTypeV4(json, EcmAction);
  }
}
