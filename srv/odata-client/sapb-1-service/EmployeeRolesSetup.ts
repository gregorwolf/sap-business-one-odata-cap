/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeRolesSetupRequestBuilder } from './EmployeeRolesSetupRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "EmployeeRolesSetup" of service "SAPB1".
 */
export class EmployeeRolesSetup extends Entity implements EmployeeRolesSetupType {
  /**
   * Technical entity name for EmployeeRolesSetup.
   */
  static _entityName = 'EmployeeRolesSetup';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmployeeRolesSetup.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Type Id.
   * @nullable
   */
  typeId?: number;
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
   * Returns an entity builder to construct instances `EmployeeRolesSetup`.
   * @returns A builder that constructs instances of entity type `EmployeeRolesSetup`.
   */
  static builder(): EntityBuilderType<EmployeeRolesSetup, EmployeeRolesSetupTypeForceMandatory> {
    return Entity.entityBuilder(EmployeeRolesSetup);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeeRolesSetup` entity type.
   * @returns A `EmployeeRolesSetup` request builder.
   */
  static requestBuilder(): EmployeeRolesSetupRequestBuilder {
    return new EmployeeRolesSetupRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeRolesSetup`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeeRolesSetup`.
   */
  static customField(fieldName: string): CustomField<EmployeeRolesSetup> {
    return Entity.customFieldSelector(fieldName, EmployeeRolesSetup);
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

export interface EmployeeRolesSetupType {
  typeId?: number;
  name?: string;
  description?: string;
  employeesInfo: EmployeesInfoType[];
}

export interface EmployeeRolesSetupTypeForceMandatory {
  typeId: number;
  name: string;
  description: string;
  employeesInfo: EmployeesInfoType[];
}

export namespace EmployeeRolesSetup {
  /**
   * Static representation of the [[typeId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_ID: NumberField<EmployeeRolesSetup> = new NumberField('TypeID', EmployeeRolesSetup, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<EmployeeRolesSetup> = new StringField('Name', EmployeeRolesSetup, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<EmployeeRolesSetup> = new StringField('Description', EmployeeRolesSetup, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEES_INFO: OneToManyLink<EmployeeRolesSetup, EmployeesInfo> = new OneToManyLink('EmployeesInfo', EmployeeRolesSetup, EmployeesInfo);
  /**
   * All fields of the EmployeeRolesSetup entity.
   */
  export const _allFields: Array<NumberField<EmployeeRolesSetup> | StringField<EmployeeRolesSetup> | OneToManyLink<EmployeeRolesSetup, EmployeesInfo>> = [
    EmployeeRolesSetup.TYPE_ID,
    EmployeeRolesSetup.NAME,
    EmployeeRolesSetup.DESCRIPTION,
    EmployeeRolesSetup.EMPLOYEES_INFO
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeeRolesSetup> = new AllFields('*', EmployeeRolesSetup);
  /**
   * All key fields of the EmployeeRolesSetup entity.
   */
  export const _keyFields: Array<Field<EmployeeRolesSetup>> = [EmployeeRolesSetup.TYPE_ID];
  /**
   * Mapping of all key field names to the respective static field property EmployeeRolesSetup.
   */
  export const _keys: { [keys: string]: Field<EmployeeRolesSetup> } = EmployeeRolesSetup._keyFields.reduce((acc: { [keys: string]: Field<EmployeeRolesSetup> }, field: Field<EmployeeRolesSetup>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
