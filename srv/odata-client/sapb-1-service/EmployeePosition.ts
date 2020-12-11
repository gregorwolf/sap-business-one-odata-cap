/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeePositionRequestBuilder } from './EmployeePositionRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmployeePosition" of service "SAPB1".
 */
export class EmployeePosition extends EntityV4 implements EmployeePositionType {
  /**
   * Technical entity name for EmployeePosition.
   */
  static _entityName = 'EmployeePosition';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Position Id.
   * @nullable
   */
  positionId?: number;
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
   * Returns an entity builder to construct instances of `EmployeePosition`.
   * @returns A builder that constructs instances of entity type `EmployeePosition`.
   */
  static builder(): EntityBuilderType<EmployeePosition, EmployeePositionType> {
    return EntityV4.entityBuilder(EmployeePosition);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeePosition` entity type.
   * @returns A `EmployeePosition` request builder.
   */
  static requestBuilder(): EmployeePositionRequestBuilder {
    return new EmployeePositionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeePosition`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeePosition`.
   */
  static customField(fieldName: string): CustomFieldV4<EmployeePosition> {
    return EntityV4.customFieldSelector(fieldName, EmployeePosition);
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

export interface EmployeePositionType {
  positionId?: number | null;
  name?: string | null;
  description?: string | null;
  employeesInfo: EmployeesInfoType[];
}

export namespace EmployeePosition {
  /**
   * Static representation of the [[positionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION_ID: NumberField<EmployeePosition> = new NumberField('PositionID', EmployeePosition, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<EmployeePosition> = new StringField('Name', EmployeePosition, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<EmployeePosition> = new StringField('Description', EmployeePosition, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEES_INFO: OneToManyLink<EmployeePosition, EmployeesInfo> = new OneToManyLink('EmployeesInfo', EmployeePosition, EmployeesInfo);
  /**
   * All fields of the EmployeePosition entity.
   */
  export const _allFields: Array<NumberField<EmployeePosition> | StringField<EmployeePosition> | OneToManyLink<EmployeePosition, EmployeesInfo>> = [
    EmployeePosition.POSITION_ID,
    EmployeePosition.NAME,
    EmployeePosition.DESCRIPTION,
    EmployeePosition.EMPLOYEES_INFO
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeePosition> = new AllFields('*', EmployeePosition);
  /**
   * All key fields of the EmployeePosition entity.
   */
  export const _keyFields: Array<Field<EmployeePosition>> = [EmployeePosition.POSITION_ID];
  /**
   * Mapping of all key field names to the respective static field property EmployeePosition.
   */
  export const _keys: { [keys: string]: Field<EmployeePosition> } = EmployeePosition._keyFields.reduce((acc: { [keys: string]: Field<EmployeePosition> }, field: Field<EmployeePosition>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
