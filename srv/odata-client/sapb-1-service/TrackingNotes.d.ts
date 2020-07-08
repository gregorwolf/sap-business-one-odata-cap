import { TrackingNotesRequestBuilder } from './TrackingNotesRequestBuilder';
import { Moment } from 'moment';
import { TrackingNoteItem } from './TrackingNoteItem';
import { TrackingNoteBroker } from './TrackingNoteBroker';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "TrackingNotes" of service "SAPB1".
 */
export declare class TrackingNotes extends Entity implements TrackingNotesType {
    /**
     * Technical entity name for TrackingNotes.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TrackingNotes.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    static builder(): EntityBuilderType<TrackingNotes, TrackingNotesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TrackingNotes` entity type.
     * @returns A `TrackingNotes` request builder.
     */
    static requestBuilder(): TrackingNotesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TrackingNotes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TrackingNotes`.
     */
    static customField(fieldName: string): CustomField<TrackingNotes>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace TrackingNotes {
    /**
     * Static representation of the [[trackingNoteNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRACKING_NOTE_NUMBER: NumberField<TrackingNotes>;
    /**
     * Static representation of the [[ccdNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CCD_NUMBER: StringField<TrackingNotes>;
    /**
     * Static representation of the [[date]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE: DateField<TrackingNotes>;
    /**
     * Static representation of the [[customsTerminal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMS_TERMINAL: StringField<TrackingNotes>;
    /**
     * Static representation of the [[countryOfOrigin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_OF_ORIGIN: StringField<TrackingNotes>;
    /**
     * Static representation of the [[trackingNoteItemCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRACKING_NOTE_ITEM_COLLECTION: CollectionField<TrackingNotes>;
    /**
     * Static representation of the [[trackingNoteBrokerCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRACKING_NOTE_BROKER_COLLECTION: CollectionField<TrackingNotes>;
    /**
     * All fields of the TrackingNotes entity.
     */
    const _allFields: Array<NumberField<TrackingNotes> | StringField<TrackingNotes> | DateField<TrackingNotes> | CollectionField<TrackingNotes>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TrackingNotes>;
    /**
     * All key fields of the TrackingNotes entity.
     */
    const _keyFields: Array<Field<TrackingNotes>>;
    /**
     * Mapping of all key field names to the respective static field property TrackingNotes.
     */
    const _keys: {
        [keys: string]: Field<TrackingNotes>;
    };
}
//# sourceMappingURL=TrackingNotes.d.ts.map