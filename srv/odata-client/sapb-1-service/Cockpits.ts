/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CockpitsRequestBuilder } from './CockpitsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "Cockpits" of service "SAPB1".
 */
export class Cockpits extends Entity implements CockpitsType {
  /**
   * Technical entity name for Cockpits.
   */
  static _entityName = 'Cockpits';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Cockpits.
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
   * Code.
   * @nullable
   */
  code?: number;
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
   * User Signature.
   * @nullable
   */
  userSignature?: number;
  /**
   * Date.
   * @nullable
   */
  date?: Moment;
  /**
   * Time.
   * @nullable
   */
  time?: Time;
  /**
   * Manufacturer.
   * @nullable
   */
  manufacturer?: string;
  /**
   * Publisher.
   * @nullable
   */
  publisher?: string;
  /**
   * One-to-one navigation property to the [[Users]] entity.
   */
  user!: Users;

  /**
   * Returns an entity builder to construct instances `Cockpits`.
   * @returns A builder that constructs instances of entity type `Cockpits`.
   */
  static builder(): EntityBuilderType<Cockpits, CockpitsTypeForceMandatory> {
    return Entity.entityBuilder(Cockpits);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Cockpits` entity type.
   * @returns A `Cockpits` request builder.
   */
  static requestBuilder(): CockpitsRequestBuilder {
    return new CockpitsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Cockpits`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Cockpits`.
   */
  static customField(fieldName: string): CustomField<Cockpits> {
    return Entity.customFieldSelector(fieldName, Cockpits);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Users, UsersType } from './Users';

export interface CockpitsType {
  absEntry?: number;
  code?: number;
  name?: string;
  description?: string;
  userSignature?: number;
  date?: Moment;
  time?: Time;
  manufacturer?: string;
  publisher?: string;
  user: UsersType;
}

export interface CockpitsTypeForceMandatory {
  absEntry: number;
  code: number;
  name: string;
  description: string;
  userSignature: number;
  date: Moment;
  time: Time;
  manufacturer: string;
  publisher: string;
  user: UsersType;
}

export namespace Cockpits {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<Cockpits> = new NumberField('AbsEntry', Cockpits, 'Edm.Int32');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: NumberField<Cockpits> = new NumberField('Code', Cockpits, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<Cockpits> = new StringField('Name', Cockpits, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<Cockpits> = new StringField('Description', Cockpits, 'Edm.String');
  /**
   * Static representation of the [[userSignature]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_SIGNATURE: NumberField<Cockpits> = new NumberField('UserSignature', Cockpits, 'Edm.Int32');
  /**
   * Static representation of the [[date]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE: DateField<Cockpits> = new DateField('Date', Cockpits, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[time]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME: TimeField<Cockpits> = new TimeField('Time', Cockpits, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[manufacturer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUFACTURER: StringField<Cockpits> = new StringField('Manufacturer', Cockpits, 'Edm.String');
  /**
   * Static representation of the [[publisher]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PUBLISHER: StringField<Cockpits> = new StringField('Publisher', Cockpits, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[user]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER: OneToOneLink<Cockpits, Users> = new OneToOneLink('User', Cockpits, Users);
  /**
   * All fields of the Cockpits entity.
   */
  export const _allFields: Array<NumberField<Cockpits> | StringField<Cockpits> | DateField<Cockpits> | TimeField<Cockpits> | OneToOneLink<Cockpits, Users>> = [
    Cockpits.ABS_ENTRY,
    Cockpits.CODE,
    Cockpits.NAME,
    Cockpits.DESCRIPTION,
    Cockpits.USER_SIGNATURE,
    Cockpits.DATE,
    Cockpits.TIME,
    Cockpits.MANUFACTURER,
    Cockpits.PUBLISHER,
    Cockpits.USER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Cockpits> = new AllFields('*', Cockpits);
  /**
   * All key fields of the Cockpits entity.
   */
  export const _keyFields: Array<Field<Cockpits>> = [Cockpits.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property Cockpits.
   */
  export const _keys: { [keys: string]: Field<Cockpits> } = Cockpits._keyFields.reduce((acc: { [keys: string]: Field<Cockpits> }, field: Field<Cockpits>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
