/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RouteStagesRequestBuilder } from './RouteStagesRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV4, DateField, EntityBuilderType, EntityV4, Field, NumberField, StringField, Time, TimeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "RouteStages" of service "SAPB1".
 */
export class RouteStages extends EntityV4 implements RouteStagesType {
  /**
   * Technical entity name for RouteStages.
   */
  static _entityName = 'RouteStages';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Internal Number.
   * @nullable
   */
  internalNumber?: number;
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: Moment;
  /**
   * Generation Time.
   * @nullable
   */
  generationTime?: Time;
  /**
   * Date Of Update.
   * @nullable
   */
  dateOfUpdate?: Moment;

  /**
   * Returns an entity builder to construct instances of `RouteStages`.
   * @returns A builder that constructs instances of entity type `RouteStages`.
   */
  static builder(): EntityBuilderType<RouteStages, RouteStagesType> {
    return EntityV4.entityBuilder(RouteStages);
  }

  /**
   * Returns a request builder to construct requests for operations on the `RouteStages` entity type.
   * @returns A `RouteStages` request builder.
   */
  static requestBuilder(): RouteStagesRequestBuilder {
    return new RouteStagesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `RouteStages`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `RouteStages`.
   */
  static customField(fieldName: string): CustomFieldV4<RouteStages> {
    return EntityV4.customFieldSelector(fieldName, RouteStages);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface RouteStagesType {
  internalNumber?: number | null;
  code?: string | null;
  description?: string | null;
  creationDate?: Moment | null;
  generationTime?: Time | null;
  dateOfUpdate?: Moment | null;
}

export namespace RouteStages {
  /**
   * Static representation of the [[internalNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNAL_NUMBER: NumberField<RouteStages> = new NumberField('InternalNumber', RouteStages, 'Edm.Int32');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<RouteStages> = new StringField('Code', RouteStages, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<RouteStages> = new StringField('Description', RouteStages, 'Edm.String');
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE: DateField<RouteStages> = new DateField('CreationDate', RouteStages, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[generationTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERATION_TIME: TimeField<RouteStages> = new TimeField('GenerationTime', RouteStages, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[dateOfUpdate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_OF_UPDATE: DateField<RouteStages> = new DateField('DateOfUpdate', RouteStages, 'Edm.DateTimeOffset');
  /**
   * All fields of the RouteStages entity.
   */
  export const _allFields: Array<NumberField<RouteStages> | StringField<RouteStages> | DateField<RouteStages> | TimeField<RouteStages>> = [
    RouteStages.INTERNAL_NUMBER,
    RouteStages.CODE,
    RouteStages.DESCRIPTION,
    RouteStages.CREATION_DATE,
    RouteStages.GENERATION_TIME,
    RouteStages.DATE_OF_UPDATE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<RouteStages> = new AllFields('*', RouteStages);
  /**
   * All key fields of the RouteStages entity.
   */
  export const _keyFields: Array<Field<RouteStages>> = [RouteStages.INTERNAL_NUMBER];
  /**
   * Mapping of all key field names to the respective static field property RouteStages.
   */
  export const _keys: { [keys: string]: Field<RouteStages> } = RouteStages._keyFields.reduce((acc: { [keys: string]: Field<RouteStages> }, field: Field<RouteStages>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
