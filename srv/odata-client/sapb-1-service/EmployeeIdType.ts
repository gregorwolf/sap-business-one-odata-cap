/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeIdTypeRequestBuilder } from './EmployeeIdTypeRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "EmployeeIDType" of service "SAPB1".
 */
export class EmployeeIdType extends Entity implements EmployeeIdTypeType {
  /**
   * Technical entity name for EmployeeIdType.
   */
  static _entityName = 'EmployeeIDType';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmployeeIdType.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Id Type.
   * @nullable
   */
  idType?: string;
  /**
   * One-to-many navigation property to the [[EmployeesInfo]] entity.
   */
  employeesInfo!: EmployeesInfo[];

  /**
   * Returns an entity builder to construct instances `EmployeeIdType`.
   * @returns A builder that constructs instances of entity type `EmployeeIdType`.
   */
  static builder(): EntityBuilderType<EmployeeIdType, EmployeeIdTypeTypeForceMandatory> {
    return Entity.entityBuilder(EmployeeIdType);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeeIdType` entity type.
   * @returns A `EmployeeIdType` request builder.
   */
  static requestBuilder(): EmployeeIdTypeRequestBuilder {
    return new EmployeeIdTypeRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeIdType`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeeIdType`.
   */
  static customField(fieldName: string): CustomField<EmployeeIdType> {
    return Entity.customFieldSelector(fieldName, EmployeeIdType);
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

export interface EmployeeIdTypeType {
  idType?: string;
  employeesInfo: EmployeesInfoType[];
}

export interface EmployeeIdTypeTypeForceMandatory {
  idType: string;
  employeesInfo: EmployeesInfoType[];
}

export namespace EmployeeIdType {
  /**
   * Static representation of the [[idType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID_TYPE: StringField<EmployeeIdType> = new StringField('IDType', EmployeeIdType, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEES_INFO: OneToManyLink<EmployeeIdType, EmployeesInfo> = new OneToManyLink('EmployeesInfo', EmployeeIdType, EmployeesInfo);
  /**
   * All fields of the EmployeeIdType entity.
   */
  export const _allFields: Array<StringField<EmployeeIdType> | OneToManyLink<EmployeeIdType, EmployeesInfo>> = [
    EmployeeIdType.ID_TYPE,
    EmployeeIdType.EMPLOYEES_INFO
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeeIdType> = new AllFields('*', EmployeeIdType);
  /**
   * All key fields of the EmployeeIdType entity.
   */
  export const _keyFields: Array<Field<EmployeeIdType>> = [EmployeeIdType.ID_TYPE];
  /**
   * Mapping of all key field names to the respective static field property EmployeeIdType.
   */
  export const _keys: { [keys: string]: Field<EmployeeIdType> } = EmployeeIdType._keyFields.reduce((acc: { [keys: string]: Field<EmployeeIdType> }, field: Field<EmployeeIdType>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
