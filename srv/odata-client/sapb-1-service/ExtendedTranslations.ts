/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExtendedTranslationsRequestBuilder } from './ExtendedTranslationsRequestBuilder';
import { Moment } from 'moment';
import { ExtendedTranslationItemLine } from './ExtendedTranslationItemLine';
import { TranslationCategoryEnum } from './TranslationCategoryEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ExtendedTranslations" of service "SAPB1".
 */
export class ExtendedTranslations extends EntityV4 implements ExtendedTranslationsType {
  /**
   * Technical entity name for ExtendedTranslations.
   */
  static _entityName = 'ExtendedTranslations';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Category.
   * @nullable
   */
  category?: TranslationCategoryEnum;
  /**
   * Id.
   * @nullable
   */
  id?: string;
  /**
   * Secondary Id.
   * @nullable
   */
  secondaryId?: string;
  /**
   * Source Language.
   * @nullable
   */
  sourceLanguage?: number;
  /**
   * Update Date.
   * @nullable
   */
  updateDate?: Moment;
  /**
   * Create Date.
   * @nullable
   */
  createDate?: Moment;
  /**
   * Extended Translation Item Lines.
   * @nullable
   */
  extendedTranslationItemLines?: ExtendedTranslationItemLine[];

  /**
   * Returns an entity builder to construct instances of `ExtendedTranslations`.
   * @returns A builder that constructs instances of entity type `ExtendedTranslations`.
   */
  static builder(): EntityBuilderType<ExtendedTranslations, ExtendedTranslationsType> {
    return EntityV4.entityBuilder(ExtendedTranslations);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ExtendedTranslations` entity type.
   * @returns A `ExtendedTranslations` request builder.
   */
  static requestBuilder(): ExtendedTranslationsRequestBuilder {
    return new ExtendedTranslationsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExtendedTranslations`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ExtendedTranslations`.
   */
  static customField(fieldName: string): CustomFieldV4<ExtendedTranslations> {
    return EntityV4.customFieldSelector(fieldName, ExtendedTranslations);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface ExtendedTranslationsType {
  docEntry?: number | null;
  category?: TranslationCategoryEnum | null;
  id?: string | null;
  secondaryId?: string | null;
  sourceLanguage?: number | null;
  updateDate?: Moment | null;
  createDate?: Moment | null;
  extendedTranslationItemLines?: ExtendedTranslationItemLine[] | null;
}

export namespace ExtendedTranslations {
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<ExtendedTranslations> = new NumberField('DocEntry', ExtendedTranslations, 'Edm.Int32');
  /**
   * Static representation of the [[category]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY: EnumField<ExtendedTranslations> = new EnumField('Category', ExtendedTranslations);
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: StringField<ExtendedTranslations> = new StringField('ID', ExtendedTranslations, 'Edm.String');
  /**
   * Static representation of the [[secondaryId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECONDARY_ID: StringField<ExtendedTranslations> = new StringField('SecondaryID', ExtendedTranslations, 'Edm.String');
  /**
   * Static representation of the [[sourceLanguage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE_LANGUAGE: NumberField<ExtendedTranslations> = new NumberField('SourceLanguage', ExtendedTranslations, 'Edm.Int32');
  /**
   * Static representation of the [[updateDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_DATE: DateField<ExtendedTranslations> = new DateField('UpdateDate', ExtendedTranslations, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATE_DATE: DateField<ExtendedTranslations> = new DateField('CreateDate', ExtendedTranslations, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[extendedTranslationItemLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTENDED_TRANSLATION_ITEM_LINES: CollectionField<ExtendedTranslations, ExtendedTranslationItemLine> = new CollectionField('ExtendedTranslation_ItemLines', ExtendedTranslations, ExtendedTranslationItemLine);
  /**
   * All fields of the ExtendedTranslations entity.
   */
  export const _allFields: Array<NumberField<ExtendedTranslations> | EnumField<ExtendedTranslations> | StringField<ExtendedTranslations> | DateField<ExtendedTranslations> | CollectionField<ExtendedTranslations, ExtendedTranslationItemLine>> = [
    ExtendedTranslations.DOC_ENTRY,
    ExtendedTranslations.CATEGORY,
    ExtendedTranslations.ID,
    ExtendedTranslations.SECONDARY_ID,
    ExtendedTranslations.SOURCE_LANGUAGE,
    ExtendedTranslations.UPDATE_DATE,
    ExtendedTranslations.CREATE_DATE,
    ExtendedTranslations.EXTENDED_TRANSLATION_ITEM_LINES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ExtendedTranslations> = new AllFields('*', ExtendedTranslations);
  /**
   * All key fields of the ExtendedTranslations entity.
   */
  export const _keyFields: Array<Field<ExtendedTranslations>> = [ExtendedTranslations.DOC_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property ExtendedTranslations.
   */
  export const _keys: { [keys: string]: Field<ExtendedTranslations> } = ExtendedTranslations._keyFields.reduce((acc: { [keys: string]: Field<ExtendedTranslations> }, field: Field<ExtendedTranslations>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
