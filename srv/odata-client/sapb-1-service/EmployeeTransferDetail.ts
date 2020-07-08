/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, Entity, FieldType, Time, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * EmployeeTransferDetail
 */
export interface EmployeeTransferDetail {
  /**
   * Transfer Id.
   * @nullable
   */
  transferId?: number;
  /**
   * Employee Id.
   * @nullable
   */
  employeeId?: number;
  /**
   * Transfered Date.
   * @nullable
   */
  transferedDate?: Moment;
  /**
   * Transfered Time.
   * @nullable
   */
  transferedTime?: Time;
  /**
   * Comment.
   * @nullable
   */
  comment?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[EmployeeTransferDetail.build]] instead.
 */
export function createEmployeeTransferDetail(json: any): EmployeeTransferDetail {
  return EmployeeTransferDetail.build(json);
}

/**
 * EmployeeTransferDetailField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeeTransferDetailField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[EmployeeTransferDetail.transferId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transferId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TransferID', this, 'Edm.Int32');
  /**
   * Representation of the [[EmployeeTransferDetail.employeeId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  employeeId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EmployeeID', this, 'Edm.Int32');
  /**
   * Representation of the [[EmployeeTransferDetail.transferedDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transferedDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('TransferedDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[EmployeeTransferDetail.transferedTime]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transferedTime: ComplexTypeTimePropertyField<EntityT> = new ComplexTypeTimePropertyField('TransferedTime', this, 'Edm.TimeOfDay');
  /**
   * Representation of the [[EmployeeTransferDetail.comment]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  comment: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Comment', this, 'Edm.String');
}

export namespace EmployeeTransferDetail {
  export function build(json: { [keys: string]: FieldType }): EmployeeTransferDetail {
    return createComplexType(json, {
      TransferID: (transferId: number) => ({ transferId: edmToTs(transferId, 'Edm.Int32') }),
      EmployeeID: (employeeId: number) => ({ employeeId: edmToTs(employeeId, 'Edm.Int32') }),
      TransferedDate: (transferedDate: Moment) => ({ transferedDate: edmToTs(transferedDate, 'Edm.DateTimeOffset') }),
      TransferedTime: (transferedTime: Time) => ({ transferedTime: edmToTs(transferedTime, 'Edm.TimeOfDay') }),
      Comment: (comment: string) => ({ comment: edmToTs(comment, 'Edm.String') })
    });
  }
}
