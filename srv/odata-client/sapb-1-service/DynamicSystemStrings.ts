/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DynamicSystemStringsRequestBuilder } from './DynamicSystemStringsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "DynamicSystemStrings" of service "SAPB1".
 */
export class DynamicSystemStrings extends Entity implements DynamicSystemStringsType {
  /**
   * Technical entity name for DynamicSystemStrings.
   */
  static _entityName = 'DynamicSystemStrings';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for DynamicSystemStrings.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Form Id.
   * @nullable
   */
  formId?: string;
  /**
   * Item Id.
   * @nullable
   */
  itemId?: string;
  /**
   * Column Id.
   * @nullable
   */
  columnId?: string;
  /**
   * Item String.
   * @nullable
   */
  itemString?: string;

  /**
   * Returns an entity builder to construct instances `DynamicSystemStrings`.
   * @returns A builder that constructs instances of entity type `DynamicSystemStrings`.
   */
  static builder(): EntityBuilderType<DynamicSystemStrings, DynamicSystemStringsTypeForceMandatory> {
    return Entity.entityBuilder(DynamicSystemStrings);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DynamicSystemStrings` entity type.
   * @returns A `DynamicSystemStrings` request builder.
   */
  static requestBuilder(): DynamicSystemStringsRequestBuilder {
    return new DynamicSystemStringsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DynamicSystemStrings`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DynamicSystemStrings`.
   */
  static customField(fieldName: string): CustomField<DynamicSystemStrings> {
    return Entity.customFieldSelector(fieldName, DynamicSystemStrings);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface DynamicSystemStringsType {
  formId?: string;
  itemId?: string;
  columnId?: string;
  itemString?: string;
}

export interface DynamicSystemStringsTypeForceMandatory {
  formId: string;
  itemId: string;
  columnId: string;
  itemString: string;
}

export namespace DynamicSystemStrings {
  /**
   * Static representation of the [[formId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_ID: StringField<DynamicSystemStrings> = new StringField('FormID', DynamicSystemStrings, 'Edm.String');
  /**
   * Static representation of the [[itemId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_ID: StringField<DynamicSystemStrings> = new StringField('ItemID', DynamicSystemStrings, 'Edm.String');
  /**
   * Static representation of the [[columnId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COLUMN_ID: StringField<DynamicSystemStrings> = new StringField('ColumnID', DynamicSystemStrings, 'Edm.String');
  /**
   * Static representation of the [[itemString]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_STRING: StringField<DynamicSystemStrings> = new StringField('ItemString', DynamicSystemStrings, 'Edm.String');
  /**
   * All fields of the DynamicSystemStrings entity.
   */
  export const _allFields: Array<StringField<DynamicSystemStrings>> = [
    DynamicSystemStrings.FORM_ID,
    DynamicSystemStrings.ITEM_ID,
    DynamicSystemStrings.COLUMN_ID,
    DynamicSystemStrings.ITEM_STRING
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DynamicSystemStrings> = new AllFields('*', DynamicSystemStrings);
  /**
   * All key fields of the DynamicSystemStrings entity.
   */
  export const _keyFields: Array<Field<DynamicSystemStrings>> = [DynamicSystemStrings.FORM_ID, DynamicSystemStrings.ITEM_ID, DynamicSystemStrings.COLUMN_ID];
  /**
   * Mapping of all key field names to the respective static field property DynamicSystemStrings.
   */
  export const _keys: { [keys: string]: Field<DynamicSystemStrings> } = DynamicSystemStrings._keyFields.reduce((acc: { [keys: string]: Field<DynamicSystemStrings> }, field: Field<DynamicSystemStrings>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
