/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectManagementTimeSheetRequestBuilder } from './ProjectManagementTimeSheetRequestBuilder';
import { Moment } from 'moment';
import { PmTimeSheetLineData, PmTimeSheetLineDataField } from './PmTimeSheetLineData';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "ProjectManagementTimeSheet" of service "SAPB1".
 */
export class ProjectManagementTimeSheet extends Entity implements ProjectManagementTimeSheetType {
  /**
   * Technical entity name for ProjectManagementTimeSheet.
   */
  static _entityName = 'ProjectManagementTimeSheet';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ProjectManagementTimeSheet.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Doc Number.
   * @nullable
   */
  docNumber?: number;
  /**
   * User Id.
   * @nullable
   */
  userId?: number;
  /**
   * Last Name.
   * @nullable
   */
  lastName?: string;
  /**
   * First Name.
   * @nullable
   */
  firstName?: string;
  /**
   * Department.
   * @nullable
   */
  department?: number;
  /**
   * Date From.
   * @nullable
   */
  dateFrom?: Moment;
  /**
   * Date To.
   * @nullable
   */
  dateTo?: Moment;
  /**
   * Pm Time Sheet Line Data Collection.
   * @nullable
   */
  pmTimeSheetLineDataCollection?: PmTimeSheetLineData[];
  /**
   * One-to-one navigation property to the [[EmployeesInfo]] entity.
   */
  employeeInfo!: EmployeesInfo;

  /**
   * Returns an entity builder to construct instances `ProjectManagementTimeSheet`.
   * @returns A builder that constructs instances of entity type `ProjectManagementTimeSheet`.
   */
  static builder(): EntityBuilderType<ProjectManagementTimeSheet, ProjectManagementTimeSheetTypeForceMandatory> {
    return Entity.entityBuilder(ProjectManagementTimeSheet);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ProjectManagementTimeSheet` entity type.
   * @returns A `ProjectManagementTimeSheet` request builder.
   */
  static requestBuilder(): ProjectManagementTimeSheetRequestBuilder {
    return new ProjectManagementTimeSheetRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ProjectManagementTimeSheet`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ProjectManagementTimeSheet`.
   */
  static customField(fieldName: string): CustomField<ProjectManagementTimeSheet> {
    return Entity.customFieldSelector(fieldName, ProjectManagementTimeSheet);
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

export interface ProjectManagementTimeSheetType {
  absEntry?: number;
  docNumber?: number;
  userId?: number;
  lastName?: string;
  firstName?: string;
  department?: number;
  dateFrom?: Moment;
  dateTo?: Moment;
  pmTimeSheetLineDataCollection?: PmTimeSheetLineData[];
  employeeInfo: EmployeesInfoType;
}

export interface ProjectManagementTimeSheetTypeForceMandatory {
  absEntry: number;
  docNumber: number;
  userId: number;
  lastName: string;
  firstName: string;
  department: number;
  dateFrom: Moment;
  dateTo: Moment;
  pmTimeSheetLineDataCollection: PmTimeSheetLineData[];
  employeeInfo: EmployeesInfoType;
}

export namespace ProjectManagementTimeSheet {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<ProjectManagementTimeSheet> = new NumberField('AbsEntry', ProjectManagementTimeSheet, 'Edm.Int32');
  /**
   * Static representation of the [[docNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUMBER: NumberField<ProjectManagementTimeSheet> = new NumberField('DocNumber', ProjectManagementTimeSheet, 'Edm.Int32');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: NumberField<ProjectManagementTimeSheet> = new NumberField('UserID', ProjectManagementTimeSheet, 'Edm.Int32');
  /**
   * Static representation of the [[lastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_NAME: StringField<ProjectManagementTimeSheet> = new StringField('LastName', ProjectManagementTimeSheet, 'Edm.String');
  /**
   * Static representation of the [[firstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_NAME: StringField<ProjectManagementTimeSheet> = new StringField('FirstName', ProjectManagementTimeSheet, 'Edm.String');
  /**
   * Static representation of the [[department]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT: NumberField<ProjectManagementTimeSheet> = new NumberField('Department', ProjectManagementTimeSheet, 'Edm.Int32');
  /**
   * Static representation of the [[dateFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_FROM: DateField<ProjectManagementTimeSheet> = new DateField('DateFrom', ProjectManagementTimeSheet, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[dateTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_TO: DateField<ProjectManagementTimeSheet> = new DateField('DateTo', ProjectManagementTimeSheet, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[pmTimeSheetLineDataCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PM_TIME_SHEET_LINE_DATA_COLLECTION: CollectionField<ProjectManagementTimeSheet> = new CollectionField('PM_TimeSheetLineDataCollection', ProjectManagementTimeSheet, new PmTimeSheetLineDataField('', ProjectManagementTimeSheet));
  /**
   * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_INFO: OneToOneLink<ProjectManagementTimeSheet, EmployeesInfo> = new OneToOneLink('EmployeeInfo', ProjectManagementTimeSheet, EmployeesInfo);
  /**
   * All fields of the ProjectManagementTimeSheet entity.
   */
  export const _allFields: Array<NumberField<ProjectManagementTimeSheet> | StringField<ProjectManagementTimeSheet> | DateField<ProjectManagementTimeSheet> | CollectionField<ProjectManagementTimeSheet> | OneToOneLink<ProjectManagementTimeSheet, EmployeesInfo>> = [
    ProjectManagementTimeSheet.ABS_ENTRY,
    ProjectManagementTimeSheet.DOC_NUMBER,
    ProjectManagementTimeSheet.USER_ID,
    ProjectManagementTimeSheet.LAST_NAME,
    ProjectManagementTimeSheet.FIRST_NAME,
    ProjectManagementTimeSheet.DEPARTMENT,
    ProjectManagementTimeSheet.DATE_FROM,
    ProjectManagementTimeSheet.DATE_TO,
    ProjectManagementTimeSheet.PM_TIME_SHEET_LINE_DATA_COLLECTION,
    ProjectManagementTimeSheet.EMPLOYEE_INFO
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ProjectManagementTimeSheet> = new AllFields('*', ProjectManagementTimeSheet);
  /**
   * All key fields of the ProjectManagementTimeSheet entity.
   */
  export const _keyFields: Array<Field<ProjectManagementTimeSheet>> = [ProjectManagementTimeSheet.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property ProjectManagementTimeSheet.
   */
  export const _keys: { [keys: string]: Field<ProjectManagementTimeSheet> } = ProjectManagementTimeSheet._keyFields.reduce((acc: { [keys: string]: Field<ProjectManagementTimeSheet> }, field: Field<ProjectManagementTimeSheet>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
