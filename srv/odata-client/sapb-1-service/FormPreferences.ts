/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormPreferencesRequestBuilder } from './FormPreferencesRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormPreferences" of service "SAPB1".
 */
export class FormPreferences extends EntityV4 implements FormPreferencesType {
  /**
   * Technical entity name for FormPreferences.
   */
  static _entityName = 'FormPreferences';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * User.
   * @nullable
   */
  user?: number;
  /**
   * Form Id.
   * @nullable
   */
  formId?: string;
  /**
   * Item Number.
   * @nullable
   */
  itemNumber?: string;
  /**
   * Column.
   * @nullable
   */
  column?: string;
  /**
   * Width.
   * @nullable
   */
  width?: number;
  /**
   * Visible In Form.
   * @nullable
   */
  visibleInForm?: BoYesNoEnum;
  /**
   * Tabs Layout.
   * @nullable
   */
  tabsLayout?: number;
  /**
   * Editable In Form.
   * @nullable
   */
  editableInForm?: BoYesNoEnum;
  /**
   * Visible In Expanded.
   * @nullable
   */
  visibleInExpanded?: BoYesNoEnum;
  /**
   * Expanded Index.
   * @nullable
   */
  expandedIndex?: number;
  /**
   * Editable In Expanded.
   * @nullable
   */
  editableInExpanded?: BoYesNoEnum;
  /**
   * One-to-one navigation property to the [[Users]] entity.
   */
  user2!: Users;

  /**
   * Returns an entity builder to construct instances of `FormPreferences`.
   * @returns A builder that constructs instances of entity type `FormPreferences`.
   */
  static builder(): EntityBuilderType<FormPreferences, FormPreferencesType> {
    return EntityV4.entityBuilder(FormPreferences);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormPreferences` entity type.
   * @returns A `FormPreferences` request builder.
   */
  static requestBuilder(): FormPreferencesRequestBuilder {
    return new FormPreferencesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormPreferences`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormPreferences`.
   */
  static customField(fieldName: string): CustomFieldV4<FormPreferences> {
    return EntityV4.customFieldSelector(fieldName, FormPreferences);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Users, UsersType } from './Users';

export interface FormPreferencesType {
  user?: number | null;
  formId?: string | null;
  itemNumber?: string | null;
  column?: string | null;
  width?: number | null;
  visibleInForm?: BoYesNoEnum | null;
  tabsLayout?: number | null;
  editableInForm?: BoYesNoEnum | null;
  visibleInExpanded?: BoYesNoEnum | null;
  expandedIndex?: number | null;
  editableInExpanded?: BoYesNoEnum | null;
  user2: UsersType;
}

export namespace FormPreferences {
  /**
   * Static representation of the [[user]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER: NumberField<FormPreferences> = new NumberField('User', FormPreferences, 'Edm.Int32');
  /**
   * Static representation of the [[formId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_ID: StringField<FormPreferences> = new StringField('FormID', FormPreferences, 'Edm.String');
  /**
   * Static representation of the [[itemNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_NUMBER: StringField<FormPreferences> = new StringField('ItemNumber', FormPreferences, 'Edm.String');
  /**
   * Static representation of the [[column]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COLUMN: StringField<FormPreferences> = new StringField('Column', FormPreferences, 'Edm.String');
  /**
   * Static representation of the [[width]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIDTH: NumberField<FormPreferences> = new NumberField('Width', FormPreferences, 'Edm.Int32');
  /**
   * Static representation of the [[visibleInForm]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VISIBLE_IN_FORM: EnumField<FormPreferences> = new EnumField('VisibleInForm', FormPreferences);
  /**
   * Static representation of the [[tabsLayout]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TABS_LAYOUT: NumberField<FormPreferences> = new NumberField('TabsLayout', FormPreferences, 'Edm.Int32');
  /**
   * Static representation of the [[editableInForm]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EDITABLE_IN_FORM: EnumField<FormPreferences> = new EnumField('EditableInForm', FormPreferences);
  /**
   * Static representation of the [[visibleInExpanded]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VISIBLE_IN_EXPANDED: EnumField<FormPreferences> = new EnumField('VisibleInExpanded', FormPreferences);
  /**
   * Static representation of the [[expandedIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPANDED_INDEX: NumberField<FormPreferences> = new NumberField('ExpandedIndex', FormPreferences, 'Edm.Int32');
  /**
   * Static representation of the [[editableInExpanded]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EDITABLE_IN_EXPANDED: EnumField<FormPreferences> = new EnumField('EditableInExpanded', FormPreferences);
  /**
   * Static representation of the one-to-one navigation property [[user2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_2: OneToOneLink<FormPreferences, Users> = new OneToOneLink('User2', FormPreferences, Users);
  /**
   * All fields of the FormPreferences entity.
   */
  export const _allFields: Array<NumberField<FormPreferences> | StringField<FormPreferences> | EnumField<FormPreferences> | OneToOneLink<FormPreferences, Users>> = [
    FormPreferences.USER,
    FormPreferences.FORM_ID,
    FormPreferences.ITEM_NUMBER,
    FormPreferences.COLUMN,
    FormPreferences.WIDTH,
    FormPreferences.VISIBLE_IN_FORM,
    FormPreferences.TABS_LAYOUT,
    FormPreferences.EDITABLE_IN_FORM,
    FormPreferences.VISIBLE_IN_EXPANDED,
    FormPreferences.EXPANDED_INDEX,
    FormPreferences.EDITABLE_IN_EXPANDED,
    FormPreferences.USER_2
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormPreferences> = new AllFields('*', FormPreferences);
  /**
   * All key fields of the FormPreferences entity.
   */
  export const _keyFields: Array<Field<FormPreferences>> = [FormPreferences.USER, FormPreferences.FORM_ID, FormPreferences.ITEM_NUMBER, FormPreferences.COLUMN];
  /**
   * Mapping of all key field names to the respective static field property FormPreferences.
   */
  export const _keys: { [keys: string]: Field<FormPreferences> } = FormPreferences._keyFields.reduce((acc: { [keys: string]: Field<FormPreferences> }, field: Field<FormPreferences>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
