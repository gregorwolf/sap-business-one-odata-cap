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
import type { OccurrenceCodesApi } from './OccurrenceCodesApi';
import { BoBoeStatus } from './BoBoeStatus';
import { BoYesNoEnum } from './BoYesNoEnum';

/**
 * This class represents the entity "OccurrenceCodes" of service "SAPB1".
 */
export class OccurrenceCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements OccurrenceCodesType<T>
{
  /**
   * Technical entity name for OccurrenceCodes.
   */
  static _entityName = 'OccurrenceCodes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the OccurrenceCodes entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note.
   * @nullable
   */
  note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Boe Status.
   * @nullable
   */
  requestedBoeStatus?: BoBoeStatus | null;
  /**
   * Is Movement.
   * @nullable
   */
  isMovement?: BoYesNoEnum | null;

  constructor(readonly _entityApi: OccurrenceCodesApi<T>) {
    super(_entityApi);
  }
}

export interface OccurrenceCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  code?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  note?: DeserializedType<T, 'Edm.String'> | null;
  requestedBoeStatus?: BoBoeStatus | null;
  isMovement?: BoYesNoEnum | null;
}
