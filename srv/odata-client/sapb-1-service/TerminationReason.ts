/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TerminationReasonRequestBuilder } from './TerminationReasonRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TerminationReason" of service "SAPB1".
 */
export class TerminationReason extends EntityV4 implements TerminationReasonType {
  /**
   * Technical entity name for TerminationReason.
   */
  static _entityName = 'TerminationReason';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Reason Id.
   * @nullable
   */
  reasonId?: number;
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
   * Returns an entity builder to construct instances of `TerminationReason`.
   * @returns A builder that constructs instances of entity type `TerminationReason`.
   */
  static builder(): EntityBuilderType<TerminationReason, TerminationReasonType> {
    return EntityV4.entityBuilder(TerminationReason);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TerminationReason` entity type.
   * @returns A `TerminationReason` request builder.
   */
  static requestBuilder(): TerminationReasonRequestBuilder {
    return new TerminationReasonRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TerminationReason`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TerminationReason`.
   */
  static customField(fieldName: string): CustomFieldV4<TerminationReason> {
    return EntityV4.customFieldSelector(fieldName, TerminationReason);
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

export interface TerminationReasonType {
  reasonId?: number | null;
  name?: string | null;
  description?: string | null;
  employeesInfo: EmployeesInfoType[];
}

export namespace TerminationReason {
  /**
   * Static representation of the [[reasonId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REASON_ID: NumberField<TerminationReason> = new NumberField('ReasonID', TerminationReason, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<TerminationReason> = new StringField('Name', TerminationReason, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<TerminationReason> = new StringField('Description', TerminationReason, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEES_INFO: OneToManyLink<TerminationReason, EmployeesInfo> = new OneToManyLink('EmployeesInfo', TerminationReason, EmployeesInfo);
  /**
   * All fields of the TerminationReason entity.
   */
  export const _allFields: Array<NumberField<TerminationReason> | StringField<TerminationReason> | OneToManyLink<TerminationReason, EmployeesInfo>> = [
    TerminationReason.REASON_ID,
    TerminationReason.NAME,
    TerminationReason.DESCRIPTION,
    TerminationReason.EMPLOYEES_INFO
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TerminationReason> = new AllFields('*', TerminationReason);
  /**
   * All key fields of the TerminationReason entity.
   */
  export const _keyFields: Array<Field<TerminationReason>> = [TerminationReason.REASON_ID];
  /**
   * Mapping of all key field names to the respective static field property TerminationReason.
   */
  export const _keys: { [keys: string]: Field<TerminationReason> } = TerminationReason._keyFields.reduce((acc: { [keys: string]: Field<TerminationReason> }, field: Field<TerminationReason>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
