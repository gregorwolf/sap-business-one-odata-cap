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
import { ExtendedTranslationItemLine } from './ExtendedTranslationItemLine';
import type { ExtendedTranslationsApi } from './ExtendedTranslationsApi';
import { TranslationCategoryEnum } from './TranslationCategoryEnum';

/**
 * This class represents the entity "ExtendedTranslations" of service "SAPB1".
 */
export class ExtendedTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExtendedTranslationsType<T>
{
  /**
   * Technical entity name for ExtendedTranslations.
   */
  static _entityName = 'ExtendedTranslations';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ExtendedTranslations entity
   */
  static _keys = ['DocEntry'];
  /**
   * Doc Entry.
   */
  docEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Category.
   * @nullable
   */
  category?: TranslationCategoryEnum | null;
  /**
   * Id.
   * @nullable
   */
  id?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Secondary Id.
   * @nullable
   */
  secondaryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Language.
   * @nullable
   */
  sourceLanguage?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Update Date.
   * @nullable
   */
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Create Date.
   * @nullable
   */
  createDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Extended Translation Item Lines.
   * @nullable
   */
  extendedTranslationItemLines?: ExtendedTranslationItemLine<T>[] | null;

  constructor(readonly _entityApi: ExtendedTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface ExtendedTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  docEntry: DeserializedType<T, 'Edm.Int32'>;
  category?: TranslationCategoryEnum | null;
  id?: DeserializedType<T, 'Edm.String'> | null;
  secondaryId?: DeserializedType<T, 'Edm.String'> | null;
  sourceLanguage?: DeserializedType<T, 'Edm.Int32'> | null;
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  extendedTranslationItemLines?: ExtendedTranslationItemLine<T>[] | null;
}
