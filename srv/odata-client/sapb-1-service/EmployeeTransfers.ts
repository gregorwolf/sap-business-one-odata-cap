/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeTransfersRequestBuilder } from './EmployeeTransfersRequestBuilder';
import { Moment } from 'moment';
import { EmployeeTransferDetail, EmployeeTransferDetailField } from './EmployeeTransferDetail';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, StringField, Time, TimeField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "EmployeeTransfers" of service "SAPB1".
 */
export class EmployeeTransfers extends Entity implements EmployeeTransfersType {
  /**
   * Technical entity name for EmployeeTransfers.
   */
  static _entityName = 'EmployeeTransfers';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmployeeTransfers.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Transfer Id.
   * @nullable
   */
  transferId?: number;
  /**
   * Trans Start Date.
   * @nullable
   */
  transStartDate?: Moment;
  /**
   * Trans Start Time.
   * @nullable
   */
  transStartTime?: Time;
  /**
   * Trans End Date.
   * @nullable
   */
  transEndDate?: Moment;
  /**
   * Trans End Time.
   * @nullable
   */
  transEndTime?: Time;
  /**
   * Comment.
   * @nullable
   */
  comment?: string;
  /**
   * Employee Transfer Details.
   * @nullable
   */
  employeeTransferDetails?: EmployeeTransferDetail[];

  /**
   * Returns an entity builder to construct instances `EmployeeTransfers`.
   * @returns A builder that constructs instances of entity type `EmployeeTransfers`.
   */
  static builder(): EntityBuilderType<EmployeeTransfers, EmployeeTransfersTypeForceMandatory> {
    return Entity.entityBuilder(EmployeeTransfers);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeeTransfers` entity type.
   * @returns A `EmployeeTransfers` request builder.
   */
  static requestBuilder(): EmployeeTransfersRequestBuilder {
    return new EmployeeTransfersRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTransfers`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeeTransfers`.
   */
  static customField(fieldName: string): CustomField<EmployeeTransfers> {
    return Entity.customFieldSelector(fieldName, EmployeeTransfers);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface EmployeeTransfersType {
  transferId?: number;
  transStartDate?: Moment;
  transStartTime?: Time;
  transEndDate?: Moment;
  transEndTime?: Time;
  comment?: string;
  employeeTransferDetails?: EmployeeTransferDetail[];
}

export interface EmployeeTransfersTypeForceMandatory {
  transferId: number;
  transStartDate: Moment;
  transStartTime: Time;
  transEndDate: Moment;
  transEndTime: Time;
  comment: string;
  employeeTransferDetails: EmployeeTransferDetail[];
}

export namespace EmployeeTransfers {
  /**
   * Static representation of the [[transferId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSFER_ID: NumberField<EmployeeTransfers> = new NumberField('TransferID', EmployeeTransfers, 'Edm.Int32');
  /**
   * Static representation of the [[transStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANS_START_DATE: DateField<EmployeeTransfers> = new DateField('TransStartDate', EmployeeTransfers, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[transStartTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANS_START_TIME: TimeField<EmployeeTransfers> = new TimeField('TransStartTime', EmployeeTransfers, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[transEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANS_END_DATE: DateField<EmployeeTransfers> = new DateField('TransEndDate', EmployeeTransfers, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[transEndTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANS_END_TIME: TimeField<EmployeeTransfers> = new TimeField('TransEndTime', EmployeeTransfers, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[comment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT: StringField<EmployeeTransfers> = new StringField('Comment', EmployeeTransfers, 'Edm.String');
  /**
   * Static representation of the [[employeeTransferDetails]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TRANSFER_DETAILS: CollectionField<EmployeeTransfers> = new CollectionField('EmployeeTransferDetails', EmployeeTransfers, new EmployeeTransferDetailField('', EmployeeTransfers));
  /**
   * All fields of the EmployeeTransfers entity.
   */
  export const _allFields: Array<NumberField<EmployeeTransfers> | DateField<EmployeeTransfers> | TimeField<EmployeeTransfers> | StringField<EmployeeTransfers> | CollectionField<EmployeeTransfers>> = [
    EmployeeTransfers.TRANSFER_ID,
    EmployeeTransfers.TRANS_START_DATE,
    EmployeeTransfers.TRANS_START_TIME,
    EmployeeTransfers.TRANS_END_DATE,
    EmployeeTransfers.TRANS_END_TIME,
    EmployeeTransfers.COMMENT,
    EmployeeTransfers.EMPLOYEE_TRANSFER_DETAILS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeeTransfers> = new AllFields('*', EmployeeTransfers);
  /**
   * All key fields of the EmployeeTransfers entity.
   */
  export const _keyFields: Array<Field<EmployeeTransfers>> = [EmployeeTransfers.TRANSFER_ID];
  /**
   * Mapping of all key field names to the respective static field property EmployeeTransfers.
   */
  export const _keys: { [keys: string]: Field<EmployeeTransfers> } = EmployeeTransfers._keyFields.reduce((acc: { [keys: string]: Field<EmployeeTransfers> }, field: Field<EmployeeTransfers>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
