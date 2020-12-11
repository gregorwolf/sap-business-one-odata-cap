/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormattedSearchesRequestBuilder } from './FormattedSearchesRequestBuilder';
import { BoFormattedSearchActionEnum } from './BoFormattedSearchActionEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormattedSearches" of service "SAPB1".
 */
export class FormattedSearches extends EntityV4 implements FormattedSearchesType {
  /**
   * Technical entity name for FormattedSearches.
   */
  static _entityName = 'FormattedSearches';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
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
   * Action.
   * @nullable
   */
  action?: BoFormattedSearchActionEnum;
  /**
   * Query Id.
   * @nullable
   */
  queryId?: number;
  /**
   * Index.
   * @nullable
   */
  index?: number;
  /**
   * Refresh.
   * @nullable
   */
  refresh?: BoYesNoEnum;
  /**
   * Field Id.
   * @nullable
   */
  fieldId?: string;
  /**
   * Force Refresh.
   * @nullable
   */
  forceRefresh?: BoYesNoEnum;
  /**
   * By Field.
   * @nullable
   */
  byField?: BoYesNoEnum;

  /**
   * Returns an entity builder to construct instances of `FormattedSearches`.
   * @returns A builder that constructs instances of entity type `FormattedSearches`.
   */
  static builder(): EntityBuilderType<FormattedSearches, FormattedSearchesType> {
    return EntityV4.entityBuilder(FormattedSearches);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormattedSearches` entity type.
   * @returns A `FormattedSearches` request builder.
   */
  static requestBuilder(): FormattedSearchesRequestBuilder {
    return new FormattedSearchesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormattedSearches`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormattedSearches`.
   */
  static customField(fieldName: string): CustomFieldV4<FormattedSearches> {
    return EntityV4.customFieldSelector(fieldName, FormattedSearches);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface FormattedSearchesType {
  formId?: string | null;
  itemId?: string | null;
  columnId?: string | null;
  action?: BoFormattedSearchActionEnum | null;
  queryId?: number | null;
  index?: number | null;
  refresh?: BoYesNoEnum | null;
  fieldId?: string | null;
  forceRefresh?: BoYesNoEnum | null;
  byField?: BoYesNoEnum | null;
}

export namespace FormattedSearches {
  /**
   * Static representation of the [[formId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_ID: StringField<FormattedSearches> = new StringField('FormID', FormattedSearches, 'Edm.String');
  /**
   * Static representation of the [[itemId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_ID: StringField<FormattedSearches> = new StringField('ItemID', FormattedSearches, 'Edm.String');
  /**
   * Static representation of the [[columnId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COLUMN_ID: StringField<FormattedSearches> = new StringField('ColumnID', FormattedSearches, 'Edm.String');
  /**
   * Static representation of the [[action]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTION: EnumField<FormattedSearches> = new EnumField('Action', FormattedSearches);
  /**
   * Static representation of the [[queryId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUERY_ID: NumberField<FormattedSearches> = new NumberField('QueryID', FormattedSearches, 'Edm.Int32');
  /**
   * Static representation of the [[index]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDEX: NumberField<FormattedSearches> = new NumberField('Index', FormattedSearches, 'Edm.Int32');
  /**
   * Static representation of the [[refresh]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFRESH: EnumField<FormattedSearches> = new EnumField('Refresh', FormattedSearches);
  /**
   * Static representation of the [[fieldId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIELD_ID: StringField<FormattedSearches> = new StringField('FieldID', FormattedSearches, 'Edm.String');
  /**
   * Static representation of the [[forceRefresh]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORCE_REFRESH: EnumField<FormattedSearches> = new EnumField('ForceRefresh', FormattedSearches);
  /**
   * Static representation of the [[byField]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BY_FIELD: EnumField<FormattedSearches> = new EnumField('ByField', FormattedSearches);
  /**
   * All fields of the FormattedSearches entity.
   */
  export const _allFields: Array<StringField<FormattedSearches> | EnumField<FormattedSearches> | NumberField<FormattedSearches>> = [
    FormattedSearches.FORM_ID,
    FormattedSearches.ITEM_ID,
    FormattedSearches.COLUMN_ID,
    FormattedSearches.ACTION,
    FormattedSearches.QUERY_ID,
    FormattedSearches.INDEX,
    FormattedSearches.REFRESH,
    FormattedSearches.FIELD_ID,
    FormattedSearches.FORCE_REFRESH,
    FormattedSearches.BY_FIELD
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormattedSearches> = new AllFields('*', FormattedSearches);
  /**
   * All key fields of the FormattedSearches entity.
   */
  export const _keyFields: Array<Field<FormattedSearches>> = [FormattedSearches.INDEX];
  /**
   * Mapping of all key field names to the respective static field property FormattedSearches.
   */
  export const _keys: { [keys: string]: Field<FormattedSearches> } = FormattedSearches._keyFields.reduce((acc: { [keys: string]: Field<FormattedSearches> }, field: Field<FormattedSearches>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
