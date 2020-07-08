/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExtendedTranslationsRequestBuilder } from './ExtendedTranslationsRequestBuilder';
import { Moment } from 'moment';
import { ExtendedTranslationItemLine, ExtendedTranslationItemLineField } from './ExtendedTranslationItemLine';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "ExtendedTranslations" of service "SAPB1".
 */
export class ExtendedTranslations extends Entity implements ExtendedTranslationsType {
  /**
   * Technical entity name for ExtendedTranslations.
   */
  static _entityName = 'ExtendedTranslations';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ExtendedTranslations.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
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
   * Returns an entity builder to construct instances `ExtendedTranslations`.
   * @returns A builder that constructs instances of entity type `ExtendedTranslations`.
   */
  static builder(): EntityBuilderType<ExtendedTranslations, ExtendedTranslationsTypeForceMandatory> {
    return Entity.entityBuilder(ExtendedTranslations);
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
  static customField(fieldName: string): CustomField<ExtendedTranslations> {
    return Entity.customFieldSelector(fieldName, ExtendedTranslations);
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
  docEntry?: number;
  id?: string;
  secondaryId?: string;
  sourceLanguage?: number;
  updateDate?: Moment;
  createDate?: Moment;
  extendedTranslationItemLines?: ExtendedTranslationItemLine[];
}

export interface ExtendedTranslationsTypeForceMandatory {
  docEntry: number;
  id: string;
  secondaryId: string;
  sourceLanguage: number;
  updateDate: Moment;
  createDate: Moment;
  extendedTranslationItemLines: ExtendedTranslationItemLine[];
}

export namespace ExtendedTranslations {
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<ExtendedTranslations> = new NumberField('DocEntry', ExtendedTranslations, 'Edm.Int32');
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
  export const EXTENDED_TRANSLATION_ITEM_LINES: CollectionField<ExtendedTranslations> = new CollectionField('ExtendedTranslation_ItemLines', ExtendedTranslations, new ExtendedTranslationItemLineField('', ExtendedTranslations));
  /**
   * All fields of the ExtendedTranslations entity.
   */
  export const _allFields: Array<NumberField<ExtendedTranslations> | StringField<ExtendedTranslations> | DateField<ExtendedTranslations> | CollectionField<ExtendedTranslations>> = [
    ExtendedTranslations.DOC_ENTRY,
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
