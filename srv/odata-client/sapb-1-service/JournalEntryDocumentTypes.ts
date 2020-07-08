/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JournalEntryDocumentTypesRequestBuilder } from './JournalEntryDocumentTypesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "JournalEntryDocumentTypes" of service "SAPB1".
 */
export class JournalEntryDocumentTypes extends Entity implements JournalEntryDocumentTypesType {
  /**
   * Technical entity name for JournalEntryDocumentTypes.
   */
  static _entityName = 'JournalEntryDocumentTypes';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JournalEntryDocumentTypes.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Journal Entry Type.
   * @nullable
   */
  journalEntryType?: string;
  /**
   * Doc Type Description.
   * @nullable
   */
  docTypeDescription?: string;
  /**
   * Short Name.
   * @nullable
   */
  shortName?: string;
  /**
   * One-to-many navigation property to the [[JournalEntries]] entity.
   */
  journalEntries!: JournalEntries[];

  /**
   * Returns an entity builder to construct instances `JournalEntryDocumentTypes`.
   * @returns A builder that constructs instances of entity type `JournalEntryDocumentTypes`.
   */
  static builder(): EntityBuilderType<JournalEntryDocumentTypes, JournalEntryDocumentTypesTypeForceMandatory> {
    return Entity.entityBuilder(JournalEntryDocumentTypes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JournalEntryDocumentTypes` entity type.
   * @returns A `JournalEntryDocumentTypes` request builder.
   */
  static requestBuilder(): JournalEntryDocumentTypesRequestBuilder {
    return new JournalEntryDocumentTypesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JournalEntryDocumentTypes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JournalEntryDocumentTypes`.
   */
  static customField(fieldName: string): CustomField<JournalEntryDocumentTypes> {
    return Entity.customFieldSelector(fieldName, JournalEntryDocumentTypes);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { JournalEntries, JournalEntriesType } from './JournalEntries';

export interface JournalEntryDocumentTypesType {
  journalEntryType?: string;
  docTypeDescription?: string;
  shortName?: string;
  journalEntries: JournalEntriesType[];
}

export interface JournalEntryDocumentTypesTypeForceMandatory {
  journalEntryType: string;
  docTypeDescription: string;
  shortName: string;
  journalEntries: JournalEntriesType[];
}

export namespace JournalEntryDocumentTypes {
  /**
   * Static representation of the [[journalEntryType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_ENTRY_TYPE: StringField<JournalEntryDocumentTypes> = new StringField('JournalEntryType', JournalEntryDocumentTypes, 'Edm.String');
  /**
   * Static representation of the [[docTypeDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TYPE_DESCRIPTION: StringField<JournalEntryDocumentTypes> = new StringField('DocTypeDescription', JournalEntryDocumentTypes, 'Edm.String');
  /**
   * Static representation of the [[shortName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHORT_NAME: StringField<JournalEntryDocumentTypes> = new StringField('ShortName', JournalEntryDocumentTypes, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[journalEntries]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_ENTRIES: OneToManyLink<JournalEntryDocumentTypes, JournalEntries> = new OneToManyLink('JournalEntries', JournalEntryDocumentTypes, JournalEntries);
  /**
   * All fields of the JournalEntryDocumentTypes entity.
   */
  export const _allFields: Array<StringField<JournalEntryDocumentTypes> | OneToManyLink<JournalEntryDocumentTypes, JournalEntries>> = [
    JournalEntryDocumentTypes.JOURNAL_ENTRY_TYPE,
    JournalEntryDocumentTypes.DOC_TYPE_DESCRIPTION,
    JournalEntryDocumentTypes.SHORT_NAME,
    JournalEntryDocumentTypes.JOURNAL_ENTRIES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JournalEntryDocumentTypes> = new AllFields('*', JournalEntryDocumentTypes);
  /**
   * All key fields of the JournalEntryDocumentTypes entity.
   */
  export const _keyFields: Array<Field<JournalEntryDocumentTypes>> = [JournalEntryDocumentTypes.JOURNAL_ENTRY_TYPE];
  /**
   * Mapping of all key field names to the respective static field property JournalEntryDocumentTypes.
   */
  export const _keys: { [keys: string]: Field<JournalEntryDocumentTypes> } = JournalEntryDocumentTypes._keyFields.reduce((acc: { [keys: string]: Field<JournalEntryDocumentTypes> }, field: Field<JournalEntryDocumentTypes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
