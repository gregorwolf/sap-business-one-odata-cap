/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TrackingNotesRequestBuilder } from './TrackingNotesRequestBuilder';
import { Moment } from 'moment';
import { TrackingNoteItem } from './TrackingNoteItem';
import { TrackingNoteBroker } from './TrackingNoteBroker';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TrackingNotes" of service "SAPB1".
 */
export class TrackingNotes extends EntityV4 implements TrackingNotesType {
  /**
   * Technical entity name for TrackingNotes.
   */
  static _entityName = 'TrackingNotes';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
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
   * Is Direct Import.
   * @nullable
   */
  isDirectImport?: BoYesNoEnum;
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
   * Returns an entity builder to construct instances of `TrackingNotes`.
   * @returns A builder that constructs instances of entity type `TrackingNotes`.
   */
  static builder(): EntityBuilderType<TrackingNotes, TrackingNotesType> {
    return EntityV4.entityBuilder(TrackingNotes);
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
  static customField(fieldName: string): CustomFieldV4<TrackingNotes> {
    return EntityV4.customFieldSelector(fieldName, TrackingNotes);
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
  trackingNoteNumber?: number | null;
  ccdNumber?: string | null;
  date?: Moment | null;
  customsTerminal?: string | null;
  countryOfOrigin?: string | null;
  isDirectImport?: BoYesNoEnum | null;
  trackingNoteItemCollection?: TrackingNoteItem[] | null;
  trackingNoteBrokerCollection?: TrackingNoteBroker[] | null;
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
   * Static representation of the [[isDirectImport]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_DIRECT_IMPORT: EnumField<TrackingNotes> = new EnumField('IsDirectImport', TrackingNotes);
  /**
   * Static representation of the [[trackingNoteItemCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRACKING_NOTE_ITEM_COLLECTION: CollectionField<TrackingNotes, TrackingNoteItem> = new CollectionField('TrackingNoteItemCollection', TrackingNotes, TrackingNoteItem);
  /**
   * Static representation of the [[trackingNoteBrokerCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRACKING_NOTE_BROKER_COLLECTION: CollectionField<TrackingNotes, TrackingNoteBroker> = new CollectionField('TrackingNoteBrokerCollection', TrackingNotes, TrackingNoteBroker);
  /**
   * All fields of the TrackingNotes entity.
   */
  export const _allFields: Array<NumberField<TrackingNotes> | StringField<TrackingNotes> | DateField<TrackingNotes> | EnumField<TrackingNotes> | CollectionField<TrackingNotes, TrackingNoteItem> | CollectionField<TrackingNotes, TrackingNoteBroker>> = [
    TrackingNotes.TRACKING_NOTE_NUMBER,
    TrackingNotes.CCD_NUMBER,
    TrackingNotes.DATE,
    TrackingNotes.CUSTOMS_TERMINAL,
    TrackingNotes.COUNTRY_OF_ORIGIN,
    TrackingNotes.IS_DIRECT_IMPORT,
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
