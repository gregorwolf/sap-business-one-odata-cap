/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Oty1RequestBuilder } from './Oty1RequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV4, DateField, EntityBuilderType, EntityV4, Field, NumberField, StringField, Time, TimeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "OTY1" of service "SAPB1".
 */
export class Oty1 extends EntityV4 implements Oty1Type {
  /**
   * Technical entity name for Oty1.
   */
  static _entityName = 'OTY1';
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
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Canceled.
   * @nullable
   */
  canceled?: string;
  /**
   * Object.
   * @nullable
   */
  object?: string;
  /**
   * Log Inst.
   * @nullable
   */
  logInst?: number;
  /**
   * User Sign.
   * @nullable
   */
  userSign?: number;
  /**
   * Transfered.
   * @nullable
   */
  transfered?: string;
  /**
   * Create Date.
   * @nullable
   */
  createDate?: Moment;
  /**
   * Create Time.
   * @nullable
   */
  createTime?: Time;
  /**
   * Update Date.
   * @nullable
   */
  updateDate?: Moment;
  /**
   * Update Time.
   * @nullable
   */
  updateTime?: Time;
  /**
   * Data Source.
   * @nullable
   */
  dataSource?: string;

  /**
   * Returns an entity builder to construct instances of `Oty1`.
   * @returns A builder that constructs instances of entity type `Oty1`.
   */
  static builder(): EntityBuilderType<Oty1, Oty1Type> {
    return EntityV4.entityBuilder(Oty1);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Oty1` entity type.
   * @returns A `Oty1` request builder.
   */
  static requestBuilder(): Oty1RequestBuilder {
    return new Oty1RequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Oty1`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Oty1`.
   */
  static customField(fieldName: string): CustomFieldV4<Oty1> {
    return EntityV4.customFieldSelector(fieldName, Oty1);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface Oty1Type {
  code?: string | null;
  name?: string | null;
  docEntry?: number | null;
  canceled?: string | null;
  object?: string | null;
  logInst?: number | null;
  userSign?: number | null;
  transfered?: string | null;
  createDate?: Moment | null;
  createTime?: Time | null;
  updateDate?: Moment | null;
  updateTime?: Time | null;
  dataSource?: string | null;
}

export namespace Oty1 {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<Oty1> = new StringField('Code', Oty1, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<Oty1> = new StringField('Name', Oty1, 'Edm.String');
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<Oty1> = new NumberField('DocEntry', Oty1, 'Edm.Int32');
  /**
   * Static representation of the [[canceled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCELED: StringField<Oty1> = new StringField('Canceled', Oty1, 'Edm.String');
  /**
   * Static representation of the [[object]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBJECT: StringField<Oty1> = new StringField('Object', Oty1, 'Edm.String');
  /**
   * Static representation of the [[logInst]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOG_INST: NumberField<Oty1> = new NumberField('LogInst', Oty1, 'Edm.Int32');
  /**
   * Static representation of the [[userSign]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_SIGN: NumberField<Oty1> = new NumberField('UserSign', Oty1, 'Edm.Int32');
  /**
   * Static representation of the [[transfered]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSFERED: StringField<Oty1> = new StringField('Transfered', Oty1, 'Edm.String');
  /**
   * Static representation of the [[createDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATE_DATE: DateField<Oty1> = new DateField('CreateDate', Oty1, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATE_TIME: TimeField<Oty1> = new TimeField('CreateTime', Oty1, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[updateDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_DATE: DateField<Oty1> = new DateField('UpdateDate', Oty1, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[updateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_TIME: TimeField<Oty1> = new TimeField('UpdateTime', Oty1, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[dataSource]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATA_SOURCE: StringField<Oty1> = new StringField('DataSource', Oty1, 'Edm.String');
  /**
   * All fields of the Oty1 entity.
   */
  export const _allFields: Array<StringField<Oty1> | NumberField<Oty1> | DateField<Oty1> | TimeField<Oty1>> = [
    Oty1.CODE,
    Oty1.NAME,
    Oty1.DOC_ENTRY,
    Oty1.CANCELED,
    Oty1.OBJECT,
    Oty1.LOG_INST,
    Oty1.USER_SIGN,
    Oty1.TRANSFERED,
    Oty1.CREATE_DATE,
    Oty1.CREATE_TIME,
    Oty1.UPDATE_DATE,
    Oty1.UPDATE_TIME,
    Oty1.DATA_SOURCE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Oty1> = new AllFields('*', Oty1);
  /**
   * All key fields of the Oty1 entity.
   */
  export const _keyFields: Array<Field<Oty1>> = [Oty1.CODE];
  /**
   * Mapping of all key field names to the respective static field property Oty1.
   */
  export const _keys: { [keys: string]: Field<Oty1> } = Oty1._keyFields.reduce((acc: { [keys: string]: Field<Oty1> }, field: Field<Oty1>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
