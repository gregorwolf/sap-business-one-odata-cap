/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { TrackingNoteItem } from './TrackingNoteItem';
import { TrackingNoteBroker } from './TrackingNoteBroker';
import type { TrackingNotesApi } from './TrackingNotesApi';
import { BoYesNoEnum } from './BoYesNoEnum';

/**
 * This class represents the entity "TrackingNotes" of service "SAPB1".
 */
export class TrackingNotes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TrackingNotesType<T>
{
  /**
   * Technical entity name for TrackingNotes.
   */
  static _entityName = 'TrackingNotes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the TrackingNotes entity
   */
  static _keys = ['TrackingNoteNumber'];
  /**
   * Tracking Note Number.
   */
  trackingNoteNumber!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Ccd Number.
   * @nullable
   */
  ccdNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date.
   * @nullable
   */
  date?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Customs Terminal.
   * @nullable
   */
  customsTerminal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Of Origin.
   * @nullable
   */
  countryOfOrigin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Direct Import.
   * @nullable
   */
  isDirectImport?: BoYesNoEnum | null;
  /**
   * Tracking Note Item Collection.
   * @nullable
   */
  trackingNoteItemCollection?: TrackingNoteItem<T>[] | null;
  /**
   * Tracking Note Broker Collection.
   * @nullable
   */
  trackingNoteBrokerCollection?: TrackingNoteBroker<T>[] | null;

  constructor(readonly _entityApi: TrackingNotesApi<T>) {
    super(_entityApi);
  }
}

export interface TrackingNotesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  trackingNoteNumber: DeserializedType<T, 'Edm.Int32'>;
  ccdNumber?: DeserializedType<T, 'Edm.String'> | null;
  date?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  customsTerminal?: DeserializedType<T, 'Edm.String'> | null;
  countryOfOrigin?: DeserializedType<T, 'Edm.String'> | null;
  isDirectImport?: BoYesNoEnum | null;
  trackingNoteItemCollection?: TrackingNoteItem<T>[] | null;
  trackingNoteBrokerCollection?: TrackingNoteBroker<T>[] | null;
}
