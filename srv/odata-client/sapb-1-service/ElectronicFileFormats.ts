/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ElectronicFileFormatsRequestBuilder } from './ElectronicFileFormatsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "ElectronicFileFormats" of service "SAPB1".
 */
export class ElectronicFileFormats extends Entity implements ElectronicFileFormatsType {
  /**
   * Technical entity name for ElectronicFileFormats.
   */
  static _entityName = 'ElectronicFileFormats';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ElectronicFileFormats.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Format Id.
   * @nullable
   */
  formatId?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Version.
   * @nullable
   */
  version?: string;
  /**
   * Schema Version.
   * @nullable
   */
  schemaVersion?: string;
  /**
   * Output File Path.
   * @nullable
   */
  outputFilePath?: string;
  /**
   * Menu Name.
   * @nullable
   */
  menuName?: string;
  /**
   * Menu Path.
   * @nullable
   */
  menuPath?: string;

  /**
   * Returns an entity builder to construct instances `ElectronicFileFormats`.
   * @returns A builder that constructs instances of entity type `ElectronicFileFormats`.
   */
  static builder(): EntityBuilderType<ElectronicFileFormats, ElectronicFileFormatsTypeForceMandatory> {
    return Entity.entityBuilder(ElectronicFileFormats);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ElectronicFileFormats` entity type.
   * @returns A `ElectronicFileFormats` request builder.
   */
  static requestBuilder(): ElectronicFileFormatsRequestBuilder {
    return new ElectronicFileFormatsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ElectronicFileFormats`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ElectronicFileFormats`.
   */
  static customField(fieldName: string): CustomField<ElectronicFileFormats> {
    return Entity.customFieldSelector(fieldName, ElectronicFileFormats);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface ElectronicFileFormatsType {
  formatId?: number;
  name?: string;
  description?: string;
  version?: string;
  schemaVersion?: string;
  outputFilePath?: string;
  menuName?: string;
  menuPath?: string;
}

export interface ElectronicFileFormatsTypeForceMandatory {
  formatId: number;
  name: string;
  description: string;
  version: string;
  schemaVersion: string;
  outputFilePath: string;
  menuName: string;
  menuPath: string;
}

export namespace ElectronicFileFormats {
  /**
   * Static representation of the [[formatId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORMAT_ID: NumberField<ElectronicFileFormats> = new NumberField('FormatID', ElectronicFileFormats, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<ElectronicFileFormats> = new StringField('Name', ElectronicFileFormats, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<ElectronicFileFormats> = new StringField('Description', ElectronicFileFormats, 'Edm.String');
  /**
   * Static representation of the [[version]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VERSION: StringField<ElectronicFileFormats> = new StringField('Version', ElectronicFileFormats, 'Edm.String');
  /**
   * Static representation of the [[schemaVersion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCHEMA_VERSION: StringField<ElectronicFileFormats> = new StringField('SchemaVersion', ElectronicFileFormats, 'Edm.String');
  /**
   * Static representation of the [[outputFilePath]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OUTPUT_FILE_PATH: StringField<ElectronicFileFormats> = new StringField('OutputFilePath', ElectronicFileFormats, 'Edm.String');
  /**
   * Static representation of the [[menuName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MENU_NAME: StringField<ElectronicFileFormats> = new StringField('MenuName', ElectronicFileFormats, 'Edm.String');
  /**
   * Static representation of the [[menuPath]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MENU_PATH: StringField<ElectronicFileFormats> = new StringField('MenuPath', ElectronicFileFormats, 'Edm.String');
  /**
   * All fields of the ElectronicFileFormats entity.
   */
  export const _allFields: Array<NumberField<ElectronicFileFormats> | StringField<ElectronicFileFormats>> = [
    ElectronicFileFormats.FORMAT_ID,
    ElectronicFileFormats.NAME,
    ElectronicFileFormats.DESCRIPTION,
    ElectronicFileFormats.VERSION,
    ElectronicFileFormats.SCHEMA_VERSION,
    ElectronicFileFormats.OUTPUT_FILE_PATH,
    ElectronicFileFormats.MENU_NAME,
    ElectronicFileFormats.MENU_PATH
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ElectronicFileFormats> = new AllFields('*', ElectronicFileFormats);
  /**
   * All key fields of the ElectronicFileFormats entity.
   */
  export const _keyFields: Array<Field<ElectronicFileFormats>> = [ElectronicFileFormats.FORMAT_ID];
  /**
   * Mapping of all key field names to the respective static field property ElectronicFileFormats.
   */
  export const _keys: { [keys: string]: Field<ElectronicFileFormats> } = ElectronicFileFormats._keyFields.reduce((acc: { [keys: string]: Field<ElectronicFileFormats> }, field: Field<ElectronicFileFormats>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
