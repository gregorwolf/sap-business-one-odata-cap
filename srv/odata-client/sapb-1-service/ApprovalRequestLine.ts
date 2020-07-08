/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, Entity, FieldType, Time, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class ApprovalRequestLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace ApprovalRequestLine {
  export function build(json: { [keys: string]: FieldType }): ApprovalRequestLine {
    return createComplexType(json, {
      StageCode: (stageCode: number) => ({ stageCode: edmToTs(stageCode, 'Edm.Int32') }),
      UserID: (userId: number) => ({ userId: edmToTs(userId, 'Edm.Int32') }),
      Remarks: (remarks: string) => ({ remarks: edmToTs(remarks, 'Edm.String') }),
      UpdateDate: (updateDate: Moment) => ({ updateDate: edmToTs(updateDate, 'Edm.DateTimeOffset') }),
      UpdateTime: (updateTime: Time) => ({ updateTime: edmToTs(updateTime, 'Edm.TimeOfDay') }),
      CreationDate: (creationDate: Moment) => ({ creationDate: edmToTs(creationDate, 'Edm.DateTimeOffset') }),
      CreationTime: (creationTime: Time) => ({ creationTime: edmToTs(creationTime, 'Edm.TimeOfDay') })
    });
  }
}
