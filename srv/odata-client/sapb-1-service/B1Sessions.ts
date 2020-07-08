/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { B1SessionsRequestBuilder } from './B1SessionsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "B1Sessions" of service "SAPB1".
 */
export class B1Sessions extends Entity implements B1SessionsType {
  /**
   * Technical entity name for B1Sessions.
   */
  static _entityName = 'B1Sessions';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for B1Sessions.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Version.
   * @nullable
   */
  version?: string;
  /**
   * Session Timeout.
   * @nullable
   */
  sessionTimeout?: number;
  /**
   * Session Id.
   * @nullable
   */
  sessionId?: string;

  /**
   * Returns an entity builder to construct instances `B1Sessions`.
   * @returns A builder that constructs instances of entity type `B1Sessions`.
   */
  static builder(): EntityBuilderType<B1Sessions, B1SessionsTypeForceMandatory> {
    return Entity.entityBuilder(B1Sessions);
  }

  /**
   * Returns a request builder to construct requests for operations on the `B1Sessions` entity type.
   * @returns A `B1Sessions` request builder.
   */
  static requestBuilder(): B1SessionsRequestBuilder {
    return new B1SessionsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `B1Sessions`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `B1Sessions`.
   */
  static customField(fieldName: string): CustomField<B1Sessions> {
    return Entity.customFieldSelector(fieldName, B1Sessions);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface B1SessionsType {
  version?: string;
  sessionTimeout?: number;
  sessionId?: string;
}

export interface B1SessionsTypeForceMandatory {
  version: string;
  sessionTimeout: number;
  sessionId: string;
}

export namespace B1Sessions {
  /**
   * Static representation of the [[version]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VERSION: StringField<B1Sessions> = new StringField('Version', B1Sessions, 'Edm.String');
  /**
   * Static representation of the [[sessionTimeout]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SESSION_TIMEOUT: NumberField<B1Sessions> = new NumberField('SessionTimeout', B1Sessions, 'Edm.Int32');
  /**
   * Static representation of the [[sessionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SESSION_ID: StringField<B1Sessions> = new StringField('SessionId', B1Sessions, 'Edm.String');
  /**
   * All fields of the B1Sessions entity.
   */
  export const _allFields: Array<StringField<B1Sessions> | NumberField<B1Sessions>> = [
    B1Sessions.VERSION,
    B1Sessions.SESSION_TIMEOUT,
    B1Sessions.SESSION_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<B1Sessions> = new AllFields('*', B1Sessions);
  /**
   * All key fields of the B1Sessions entity.
   */
  export const _keyFields: Array<Field<B1Sessions>> = [B1Sessions.SESSION_ID];
  /**
   * Mapping of all key field names to the respective static field property B1Sessions.
   */
  export const _keys: { [keys: string]: Field<B1Sessions> } = B1Sessions._keyFields.reduce((acc: { [keys: string]: Field<B1Sessions> }, field: Field<B1Sessions>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
