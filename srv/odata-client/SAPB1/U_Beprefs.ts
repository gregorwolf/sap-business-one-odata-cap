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
import type { U_BeprefsApi } from './U_BeprefsApi';

/**
 * This class represents the entity "U_BEPREFS" of service "SAPB1".
 */
export class U_Beprefs<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_BeprefsType<T>
{
  /**
   * Technical entity name for U_Beprefs.
   */
  static _entityName = 'U_BEPREFS';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Beprefs entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Besapd.
   * @nullable
   */
  uBesapd?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Besapm.
   * @nullable
   */
  uBesapm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Besapa.
   * @nullable
   */
  uBesapa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Betstf.
   * @nullable
   */
  uBetstf?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Becnty.
   * @nullable
   */
  uBecnty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Beoffc.
   * @nullable
   */
  uBeoffc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Berada.
   * @nullable
   */
  uBerada?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Beamrt.
   * @nullable
   */
  uBeamrt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Becofp.
   * @nullable
   */
  uBecofp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bedocs.
   * @nullable
   */
  uBedocs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Benote.
   * @nullable
   */
  uBenote?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: U_BeprefsApi<T>) {
    super(_entityApi);
  }
}

export interface U_BeprefsType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uBesapd?: DeserializedType<T, 'Edm.String'> | null;
  uBesapm?: DeserializedType<T, 'Edm.String'> | null;
  uBesapa?: DeserializedType<T, 'Edm.String'> | null;
  uBetstf?: DeserializedType<T, 'Edm.String'> | null;
  uBecnty?: DeserializedType<T, 'Edm.String'> | null;
  uBeoffc?: DeserializedType<T, 'Edm.String'> | null;
  uBerada?: DeserializedType<T, 'Edm.String'> | null;
  uBeamrt?: DeserializedType<T, 'Edm.String'> | null;
  uBecofp?: DeserializedType<T, 'Edm.String'> | null;
  uBedocs?: DeserializedType<T, 'Edm.String'> | null;
  uBenote?: DeserializedType<T, 'Edm.String'> | null;
}
