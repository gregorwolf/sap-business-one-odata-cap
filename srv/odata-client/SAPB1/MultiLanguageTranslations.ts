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
import { TranslationsInUserLanguage } from './TranslationsInUserLanguage';
import type { MultiLanguageTranslationsApi } from './MultiLanguageTranslationsApi';

/**
 * This class represents the entity "MultiLanguageTranslations" of service "SAPB1".
 */
export class MultiLanguageTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MultiLanguageTranslationsType<T>
{
  /**
   * Technical entity name for MultiLanguageTranslations.
   */
  static _entityName = 'MultiLanguageTranslations';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the MultiLanguageTranslations entity
   */
  static _keys = ['Numerator'];
  /**
   * Numerator.
   */
  numerator!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Table Name.
   * @nullable
   */
  tableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Field Alias.
   * @nullable
   */
  fieldAlias?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Keyofobject.
   * @nullable
   */
  primaryKeyofobject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Translations In User Languages.
   * @nullable
   */
  translationsInUserLanguages?: TranslationsInUserLanguage<T>[] | null;

  constructor(readonly _entityApi: MultiLanguageTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface MultiLanguageTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  numerator: DeserializedType<T, 'Edm.Int32'>;
  tableName?: DeserializedType<T, 'Edm.String'> | null;
  fieldAlias?: DeserializedType<T, 'Edm.String'> | null;
  primaryKeyofobject?: DeserializedType<T, 'Edm.String'> | null;
  translationsInUserLanguages?: TranslationsInUserLanguage<T>[] | null;
}
