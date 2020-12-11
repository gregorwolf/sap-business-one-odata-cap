/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { StatesRequestBuilder } from './StatesRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "States" of service "SAPB1".
 */
export class States extends EntityV4 implements StatesType {
  /**
   * Technical entity name for States.
   */
  static _entityName = 'States';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Country.
   * @nullable
   */
  country?: string;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * One-to-one navigation property to the [[Countries]] entity.
   */
  country2!: Countries;

  /**
   * Returns an entity builder to construct instances of `States`.
   * @returns A builder that constructs instances of entity type `States`.
   */
  static builder(): EntityBuilderType<States, StatesType> {
    return EntityV4.entityBuilder(States);
  }

  /**
   * Returns a request builder to construct requests for operations on the `States` entity type.
   * @returns A `States` request builder.
   */
  static requestBuilder(): StatesRequestBuilder {
    return new StatesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `States`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `States`.
   */
  static customField(fieldName: string): CustomFieldV4<States> {
    return EntityV4.customFieldSelector(fieldName, States);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Countries, CountriesType } from './Countries';

export interface StatesType {
  code?: string | null;
  country?: string | null;
  name?: string | null;
  country2: CountriesType;
}

export namespace States {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<States> = new StringField('Code', States, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<States> = new StringField('Country', States, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<States> = new StringField('Name', States, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[country2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_2: OneToOneLink<States, Countries> = new OneToOneLink('Country2', States, Countries);
  /**
   * All fields of the States entity.
   */
  export const _allFields: Array<StringField<States> | OneToOneLink<States, Countries>> = [
    States.CODE,
    States.COUNTRY,
    States.NAME,
    States.COUNTRY_2
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<States> = new AllFields('*', States);
  /**
   * All key fields of the States entity.
   */
  export const _keyFields: Array<Field<States>> = [States.CODE, States.COUNTRY];
  /**
   * Mapping of all key field names to the respective static field property States.
   */
  export const _keys: { [keys: string]: Field<States> } = States._keyFields.reduce((acc: { [keys: string]: Field<States> }, field: Field<States>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
