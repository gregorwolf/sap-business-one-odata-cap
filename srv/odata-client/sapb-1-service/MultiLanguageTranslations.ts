/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MultiLanguageTranslationsRequestBuilder } from './MultiLanguageTranslationsRequestBuilder';
import { TranslationsInUserLanguage } from './TranslationsInUserLanguage';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "MultiLanguageTranslations" of service "SAPB1".
 */
export class MultiLanguageTranslations extends EntityV4 implements MultiLanguageTranslationsType {
  /**
   * Technical entity name for MultiLanguageTranslations.
   */
  static _entityName = 'MultiLanguageTranslations';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Numerator.
   * @nullable
   */
  numerator?: number;
  /**
   * Table Name.
   * @nullable
   */
  tableName?: string;
  /**
   * Field Alias.
   * @nullable
   */
  fieldAlias?: string;
  /**
   * Primary Keyofobject.
   * @nullable
   */
  primaryKeyofobject?: string;
  /**
   * Translations In User Languages.
   * @nullable
   */
  translationsInUserLanguages?: TranslationsInUserLanguage[];

  /**
   * Returns an entity builder to construct instances of `MultiLanguageTranslations`.
   * @returns A builder that constructs instances of entity type `MultiLanguageTranslations`.
   */
  static builder(): EntityBuilderType<MultiLanguageTranslations, MultiLanguageTranslationsType> {
    return EntityV4.entityBuilder(MultiLanguageTranslations);
  }

  /**
   * Returns a request builder to construct requests for operations on the `MultiLanguageTranslations` entity type.
   * @returns A `MultiLanguageTranslations` request builder.
   */
  static requestBuilder(): MultiLanguageTranslationsRequestBuilder {
    return new MultiLanguageTranslationsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `MultiLanguageTranslations`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `MultiLanguageTranslations`.
   */
  static customField(fieldName: string): CustomFieldV4<MultiLanguageTranslations> {
    return EntityV4.customFieldSelector(fieldName, MultiLanguageTranslations);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface MultiLanguageTranslationsType {
  numerator?: number | null;
  tableName?: string | null;
  fieldAlias?: string | null;
  primaryKeyofobject?: string | null;
  translationsInUserLanguages?: TranslationsInUserLanguage[] | null;
}

export namespace MultiLanguageTranslations {
  /**
   * Static representation of the [[numerator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMERATOR: NumberField<MultiLanguageTranslations> = new NumberField('Numerator', MultiLanguageTranslations, 'Edm.Int32');
  /**
   * Static representation of the [[tableName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TABLE_NAME: StringField<MultiLanguageTranslations> = new StringField('TableName', MultiLanguageTranslations, 'Edm.String');
  /**
   * Static representation of the [[fieldAlias]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIELD_ALIAS: StringField<MultiLanguageTranslations> = new StringField('FieldAlias', MultiLanguageTranslations, 'Edm.String');
  /**
   * Static representation of the [[primaryKeyofobject]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIMARY_KEYOFOBJECT: StringField<MultiLanguageTranslations> = new StringField('PrimaryKeyofobject', MultiLanguageTranslations, 'Edm.String');
  /**
   * Static representation of the [[translationsInUserLanguages]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSLATIONS_IN_USER_LANGUAGES: CollectionField<MultiLanguageTranslations, TranslationsInUserLanguage> = new CollectionField('TranslationsInUserLanguages', MultiLanguageTranslations, TranslationsInUserLanguage);
  /**
   * All fields of the MultiLanguageTranslations entity.
   */
  export const _allFields: Array<NumberField<MultiLanguageTranslations> | StringField<MultiLanguageTranslations> | CollectionField<MultiLanguageTranslations, TranslationsInUserLanguage>> = [
    MultiLanguageTranslations.NUMERATOR,
    MultiLanguageTranslations.TABLE_NAME,
    MultiLanguageTranslations.FIELD_ALIAS,
    MultiLanguageTranslations.PRIMARY_KEYOFOBJECT,
    MultiLanguageTranslations.TRANSLATIONS_IN_USER_LANGUAGES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<MultiLanguageTranslations> = new AllFields('*', MultiLanguageTranslations);
  /**
   * All key fields of the MultiLanguageTranslations entity.
   */
  export const _keyFields: Array<Field<MultiLanguageTranslations>> = [MultiLanguageTranslations.NUMERATOR];
  /**
   * Mapping of all key field names to the respective static field property MultiLanguageTranslations.
   */
  export const _keys: { [keys: string]: Field<MultiLanguageTranslations> } = MultiLanguageTranslations._keyFields.reduce((acc: { [keys: string]: Field<MultiLanguageTranslations> }, field: Field<MultiLanguageTranslations>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
