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
import type { StatesApi } from './StatesApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { Countries, CountriesType } from './Countries';

/**
 * This class represents the entity "States" of service "SAPB1".
 */
export class States<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements StatesType<T>
{
  /**
   * Technical entity name for States.
   */
  static _entityName = 'States';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the States entity
   */
  static _keys = ['Code', 'Country'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Country.
   */
  country!: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gst Code.
   * @nullable
   */
  gstCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Union Territory.
   * @nullable
   */
  isUnionTerritory?: BoYesNoEnum | null;
  /**
   * One-to-one navigation property to the {@link Countries} entity.
   */
  country2?: Countries<T> | null;

  constructor(readonly _entityApi: StatesApi<T>) {
    super(_entityApi);
  }
}

export interface StatesType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  country: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  gstCode?: DeserializedType<T, 'Edm.String'> | null;
  isUnionTerritory?: BoYesNoEnum | null;
  country2?: CountriesType<T> | null;
}
