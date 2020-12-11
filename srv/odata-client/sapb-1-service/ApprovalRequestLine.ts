/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BoApprovalRequestDecisionEnum } from './BoApprovalRequestDecisionEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, Time, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ApprovalRequestLine
 */
export interface ApprovalRequestLine {
  /**
   * Stage Code.
   * @nullable
   */
  stageCode?: number;
  /**
   * User Id.
   * @nullable
   */
  userId?: number;
  /**
   * Status.
   * @nullable
   */
  status?: BoApprovalRequestDecisionEnum;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Update Date.
   * @nullable
   */
  updateDate?: Moment;
  /**
   * Update Time.
   * @nullable
   */
  updateTime?: Time;
  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: Moment;
  /**
   * Creation Time.
   * @nullable
   */
  creationTime?: Time;
}

/**
 * @deprecated Since v1.6.0. Use [[ApprovalRequestLine.build]] instead.
 */
export function createApprovalRequestLine(json: any): ApprovalRequestLine {
  return ApprovalRequestLine.build(json);
}

/**
 * ApprovalRequestLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ApprovalRequestLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ApprovalRequestLine> {
  /**
   * Representation of the [[ApprovalRequestLine.stageCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StageCode', this, 'Edm.Int32');
  /**
   * Representation of the [[ApprovalRequestLine.userId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UserID', this, 'Edm.Int32');
  /**
   * Representation of the [[ApprovalRequestLine.status]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Status', this);
  /**
   * Representation of the [[ApprovalRequestLine.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');
  /**
   * Representation of the [[ApprovalRequestLine.updateDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  updateDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('UpdateDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ApprovalRequestLine.updateTime]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  updateTime: ComplexTypeTimePropertyField<EntityT> = new ComplexTypeTimePropertyField('UpdateTime', this, 'Edm.TimeOfDay');
  /**
   * Representation of the [[ApprovalRequestLine.creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creationDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('CreationDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ApprovalRequestLine.creationTime]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creationTime: ComplexTypeTimePropertyField<EntityT> = new ComplexTypeTimePropertyField('CreationTime', this, 'Edm.TimeOfDay');

  /**
   * Creates an instance of ApprovalRequestLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ApprovalRequestLine);
  }
}

export namespace ApprovalRequestLine {
  /**
   * Metadata information on all properties of the `ApprovalRequestLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ApprovalRequestLine>[] = [{
    originalName: 'StageCode',
    name: 'stageCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'UserID',
    name: 'userId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Status',
    name: 'status',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Remarks',
    name: 'remarks',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UpdateDate',
    name: 'updateDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'UpdateTime',
    name: 'updateTime',
    type: 'Edm.TimeOfDay',
    isCollection: false
  }, {
    originalName: 'CreationDate',
    name: 'creationDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'CreationTime',
    name: 'creationTime',
    type: 'Edm.TimeOfDay',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ApprovalRequestLine {
    return deserializeComplexTypeV4(json, ApprovalRequestLine);
  }
}
