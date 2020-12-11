/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ChooseFromListRequestBuilder } from './ChooseFromListRequestBuilder';
import { ChooseFromListLine } from './ChooseFromListLine';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ChooseFromList" of service "SAPB1".
 */
export class ChooseFromList extends EntityV4 implements ChooseFromListType {
  /**
   * Technical entity name for ChooseFromList.
   */
  static _entityName = 'ChooseFromList';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Object Name.
   * @nullable
   */
  objectName?: string;
  /**
   * Choose From List Lines.
   * @nullable
   */
  chooseFromListLines?: ChooseFromListLine[];

  /**
   * Returns an entity builder to construct instances of `ChooseFromList`.
   * @returns A builder that constructs instances of entity type `ChooseFromList`.
   */
  static builder(): EntityBuilderType<ChooseFromList, ChooseFromListType> {
    return EntityV4.entityBuilder(ChooseFromList);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ChooseFromList` entity type.
   * @returns A `ChooseFromList` request builder.
   */
  static requestBuilder(): ChooseFromListRequestBuilder {
    return new ChooseFromListRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ChooseFromList`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ChooseFromList`.
   */
  static customField(fieldName: string): CustomFieldV4<ChooseFromList> {
    return EntityV4.customFieldSelector(fieldName, ChooseFromList);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface ChooseFromListType {
  objectName?: string | null;
  chooseFromListLines?: ChooseFromListLine[] | null;
}

export namespace ChooseFromList {
  /**
   * Static representation of the [[objectName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBJECT_NAME: StringField<ChooseFromList> = new StringField('ObjectName', ChooseFromList, 'Edm.String');
  /**
   * Static representation of the [[chooseFromListLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHOOSE_FROM_LIST_LINES: CollectionField<ChooseFromList, ChooseFromListLine> = new CollectionField('ChooseFromList_Lines', ChooseFromList, ChooseFromListLine);
  /**
   * All fields of the ChooseFromList entity.
   */
  export const _allFields: Array<StringField<ChooseFromList> | CollectionField<ChooseFromList, ChooseFromListLine>> = [
    ChooseFromList.OBJECT_NAME,
    ChooseFromList.CHOOSE_FROM_LIST_LINES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ChooseFromList> = new AllFields('*', ChooseFromList);
  /**
   * All key fields of the ChooseFromList entity.
   */
  export const _keyFields: Array<Field<ChooseFromList>> = [ChooseFromList.OBJECT_NAME];
  /**
   * Mapping of all key field names to the respective static field property ChooseFromList.
   */
  export const _keys: { [keys: string]: Field<ChooseFromList> } = ChooseFromList._keyFields.reduce((acc: { [keys: string]: Field<ChooseFromList> }, field: Field<ChooseFromList>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
