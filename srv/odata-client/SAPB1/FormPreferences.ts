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
import type { FormPreferencesApi } from './FormPreferencesApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { Users, UsersType } from './Users';

/**
 * This class represents the entity "FormPreferences" of service "SAPB1".
 */
export class FormPreferences<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FormPreferencesType<T>
{
  /**
   * Technical entity name for FormPreferences.
   */
  static _entityName = 'FormPreferences';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the FormPreferences entity
   */
  static _keys = ['User', 'FormID', 'ItemNumber', 'Column'];
  /**
   * User.
   */
  user!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Form Id.
   */
  formId!: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  itemNumber!: DeserializedType<T, 'Edm.String'>;
  /**
   * Column.
   */
  column!: DeserializedType<T, 'Edm.String'>;
  /**
   * Width.
   * @nullable
   */
  width?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Visible In Form.
   * @nullable
   */
  visibleInForm?: BoYesNoEnum | null;
  /**
   * Tabs Layout.
   * @nullable
   */
  tabsLayout?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Editable In Form.
   * @nullable
   */
  editableInForm?: BoYesNoEnum | null;
  /**
   * Visible In Expanded.
   * @nullable
   */
  visibleInExpanded?: BoYesNoEnum | null;
  /**
   * Expanded Index.
   * @nullable
   */
  expandedIndex?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Editable In Expanded.
   * @nullable
   */
  editableInExpanded?: BoYesNoEnum | null;
  /**
   * One-to-one navigation property to the {@link Users} entity.
   */
  user2?: Users<T> | null;

  constructor(readonly _entityApi: FormPreferencesApi<T>) {
    super(_entityApi);
  }
}

export interface FormPreferencesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  user: DeserializedType<T, 'Edm.Int32'>;
  formId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  column: DeserializedType<T, 'Edm.String'>;
  width?: DeserializedType<T, 'Edm.Int32'> | null;
  visibleInForm?: BoYesNoEnum | null;
  tabsLayout?: DeserializedType<T, 'Edm.Int32'> | null;
  editableInForm?: BoYesNoEnum | null;
  visibleInExpanded?: BoYesNoEnum | null;
  expandedIndex?: DeserializedType<T, 'Edm.Int32'> | null;
  editableInExpanded?: BoYesNoEnum | null;
  user2?: UsersType<T> | null;
}
