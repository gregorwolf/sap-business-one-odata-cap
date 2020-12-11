/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { EmployeeTransferProcessingStatusEnum } from './EmployeeTransferProcessingStatusEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, Time, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Status.
   * @nullable
   */
  status?: EmployeeTransferProcessingStatusEnum;
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
export class EmployeeTransferDetailField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EmployeeTransferDetail> {
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
   * Representation of the [[EmployeeTransferDetail.status]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Status', this);
  /**
   * Representation of the [[EmployeeTransferDetail.comment]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  comment: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Comment', this, 'Edm.String');

  /**
   * Creates an instance of EmployeeTransferDetailField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, EmployeeTransferDetail);
  }
}

export namespace EmployeeTransferDetail {
  /**
   * Metadata information on all properties of the `EmployeeTransferDetail` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EmployeeTransferDetail>[] = [{
    originalName: 'TransferID',
    name: 'transferId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'EmployeeID',
    name: 'employeeId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TransferedDate',
    name: 'transferedDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'TransferedTime',
    name: 'transferedTime',
    type: 'Edm.TimeOfDay',
    isCollection: false
  }, {
    originalName: 'Status',
    name: 'status',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Comment',
    name: 'comment',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): EmployeeTransferDetail {
    return deserializeComplexTypeV4(json, EmployeeTransferDetail);
  }
}
