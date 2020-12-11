/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeStatusRequestBuilder } from './EmployeeStatusRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmployeeStatus" of service "SAPB1".
 */
export class EmployeeStatus extends EntityV4 implements EmployeeStatusType {
  /**
   * Technical entity name for EmployeeStatus.
   */
  static _entityName = 'EmployeeStatus';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Status Id.
   * @nullable
   */
  statusId?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * One-to-many navigation property to the [[EmployeesInfo]] entity.
   */
  employeesInfo!: EmployeesInfo[];

  /**
   * Returns an entity builder to construct instances of `EmployeeStatus`.
   * @returns A builder that constructs instances of entity type `EmployeeStatus`.
   */
  static builder(): EntityBuilderType<EmployeeStatus, EmployeeStatusType> {
    return EntityV4.entityBuilder(EmployeeStatus);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeeStatus` entity type.
   * @returns A `EmployeeStatus` request builder.
   */
  static requestBuilder(): EmployeeStatusRequestBuilder {
    return new EmployeeStatusRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeStatus`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeeStatus`.
   */
  static customField(fieldName: string): CustomFieldV4<EmployeeStatus> {
    return EntityV4.customFieldSelector(fieldName, EmployeeStatus);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';

export interface EmployeeStatusType {
  statusId?: number | null;
  name?: string | null;
  description?: string | null;
  employeesInfo: EmployeesInfoType[];
}

export namespace EmployeeStatus {
  /**
   * Static representation of the [[statusId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_ID: NumberField<EmployeeStatus> = new NumberField('StatusId', EmployeeStatus, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<EmployeeStatus> = new StringField('Name', EmployeeStatus, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<EmployeeStatus> = new StringField('Description', EmployeeStatus, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEES_INFO: OneToManyLink<EmployeeStatus, EmployeesInfo> = new OneToManyLink('EmployeesInfo', EmployeeStatus, EmployeesInfo);
  /**
   * All fields of the EmployeeStatus entity.
   */
  export const _allFields: Array<NumberField<EmployeeStatus> | StringField<EmployeeStatus> | OneToManyLink<EmployeeStatus, EmployeesInfo>> = [
    EmployeeStatus.STATUS_ID,
    EmployeeStatus.NAME,
    EmployeeStatus.DESCRIPTION,
    EmployeeStatus.EMPLOYEES_INFO
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeeStatus> = new AllFields('*', EmployeeStatus);
  /**
   * All key fields of the EmployeeStatus entity.
   */
  export const _keyFields: Array<Field<EmployeeStatus>> = [EmployeeStatus.STATUS_ID];
  /**
   * Mapping of all key field names to the respective static field property EmployeeStatus.
   */
  export const _keys: { [keys: string]: Field<EmployeeStatus> } = EmployeeStatus._keyFields.reduce((acc: { [keys: string]: Field<EmployeeStatus> }, field: Field<EmployeeStatus>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
