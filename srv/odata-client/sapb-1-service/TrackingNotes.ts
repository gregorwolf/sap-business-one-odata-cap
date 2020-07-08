/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TrackingNotesRequestBuilder } from './TrackingNotesRequestBuilder';
import { Moment } from 'moment';
import { TrackingNoteItem, TrackingNoteItemField } from './TrackingNoteItem';
import { TrackingNoteBroker, TrackingNoteBrokerField } from './TrackingNoteBroker';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "TrackingNotes" of service "SAPB1".
 */
export class TrackingNotes extends Entity implements TrackingNotesType {
  /**
   * Technical entity name for TrackingNotes.
   */
  static _entityName = 'TrackingNotes';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TrackingNotes.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Tracking Note Number.
   * @nullable
   */
  trackingNoteNumber?: number;
  /**
   * Ccd Number.
   * @nullable
   */
  ccdNumber?: string;
  /**
   * Date.
   * @nullable
   */
  date?: Moment;
  /**
   * Customs Terminal.
   * @nullable
   */
  customsTerminal?: string;
  /**
   * Country Of Origin.
   * @nullable
   */
  countryOfOrigin?: string;
  /**
   * Tracking Note Item Collection.
   * @nullable
   */
  trackingNoteItemCollection?: TrackingNoteItem[];
  /**
   * Tracking Note Broker Collection.
   * @nullable
   */
  trackingNoteBrokerCollection?: TrackingNoteBroker[];

  /**
   * Returns an entity builder to construct instances `TrackingNotes`.
   * @returns A builder that constructs instances of entity type `TrackingNotes`.
   */
  static builder(): EntityBuilderType<TrackingNotes, TrackingNotesTypeForceMandatory> {
    return Entity.entityBuilder(TrackingNotes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TrackingNotes` entity type.
   * @returns A `TrackingNotes` request builder.
   */
  static requestBuilder(): TrackingNotesRequestBuilder {
    return new TrackingNotesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TrackingNotes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TrackingNotes`.
   */
  static customField(fieldName: string): CustomField<TrackingNotes> {
    return Entity.customFieldSelector(fieldName, TrackingNotes);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface TrackingNotesType {
  trackingNoteNumber?: number;
  ccdNumber?: string;
  date?: Moment;
  customsTerminal?: string;
  countryOfOrigin?: string;
  trackingNoteItemCollection?: TrackingNoteItem[];
  trackingNoteBrokerCollection?: TrackingNoteBroker[];
}

export interface TrackingNotesTypeForceMandatory {
  trackingNoteNumber: number;
  ccdNumber: string;
  date: Moment;
  customsTerminal: string;
  countryOfOrigin: string;
  trackingNoteItemCollection: TrackingNoteItem[];
  trackingNoteBrokerCollection: TrackingNoteBroker[];
}

export namespace TrackingNotes {
  /**
   * Static representation of the [[trackingNoteNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRACKING_NOTE_NUMBER: NumberField<TrackingNotes> = new NumberField('TrackingNoteNumber', TrackingNotes, 'Edm.Int32');
  /**
   * Static representation of the [[ccdNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CCD_NUMBER: StringField<TrackingNotes> = new StringField('CCDNumber', TrackingNotes, 'Edm.String');
  /**
   * Static representation of the [[date]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE: DateField<TrackingNotes> = new DateField('Date', TrackingNotes, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[customsTerminal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMS_TERMINAL: StringField<TrackingNotes> = new StringField('CustomsTerminal', TrackingNotes, 'Edm.String');
  /**
   * Static representation of the [[countryOfOrigin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_OF_ORIGIN: StringField<TrackingNotes> = new StringField('CountryOfOrigin', TrackingNotes, 'Edm.String');
  /**
   * Static representation of the [[trackingNoteItemCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRACKING_NOTE_ITEM_COLLECTION: CollectionField<TrackingNotes> = new CollectionField('TrackingNoteItemCollection', TrackingNotes, new TrackingNoteItemField('', TrackingNotes));
  /**
   * Static representation of the [[trackingNoteBrokerCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRACKING_NOTE_BROKER_COLLECTION: CollectionField<TrackingNotes> = new CollectionField('TrackingNoteBrokerCollection', TrackingNotes, new TrackingNoteBrokerField('', TrackingNotes));
  /**
   * All fields of the TrackingNotes entity.
   */
  export const _allFields: Array<NumberField<TrackingNotes> | StringField<TrackingNotes> | DateField<TrackingNotes> | CollectionField<TrackingNotes>> = [
    TrackingNotes.TRACKING_NOTE_NUMBER,
    TrackingNotes.CCD_NUMBER,
    TrackingNotes.DATE,
    TrackingNotes.CUSTOMS_TERMINAL,
    TrackingNotes.COUNTRY_OF_ORIGIN,
    TrackingNotes.TRACKING_NOTE_ITEM_COLLECTION,
    TrackingNotes.TRACKING_NOTE_BROKER_COLLECTION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TrackingNotes> = new AllFields('*', TrackingNotes);
  /**
   * All key fields of the TrackingNotes entity.
   */
  export const _keyFields: Array<Field<TrackingNotes>> = [TrackingNotes.TRACKING_NOTE_NUMBER];
  /**
   * Mapping of all key field names to the respective static field property TrackingNotes.
   */
  export const _keys: { [keys: string]: Field<TrackingNotes> } = TrackingNotes._keyFields.reduce((acc: { [keys: string]: Field<TrackingNotes> }, field: Field<TrackingNotes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
