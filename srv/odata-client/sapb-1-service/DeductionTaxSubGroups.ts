/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DeductionTaxSubGroupsRequestBuilder } from './DeductionTaxSubGroupsRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "DeductionTaxSubGroups" of service "SAPB1".
 */
export class DeductionTaxSubGroups extends EntityV4 implements DeductionTaxSubGroupsType {
  /**
   * Technical entity name for DeductionTaxSubGroups.
   */
  static _entityName = 'DeductionTaxSubGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Group Code.
   * @nullable
   */
  groupCode?: string;
  /**
   * Group Name.
   * @nullable
   */
  groupName?: string;
  /**
   * One-to-many navigation property to the [[DeductionTaxGroups]] entity.
   */
  deductionTaxGroups!: DeductionTaxGroups[];

  /**
   * Returns an entity builder to construct instances of `DeductionTaxSubGroups`.
   * @returns A builder that constructs instances of entity type `DeductionTaxSubGroups`.
   */
  static builder(): EntityBuilderType<DeductionTaxSubGroups, DeductionTaxSubGroupsType> {
    return EntityV4.entityBuilder(DeductionTaxSubGroups);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DeductionTaxSubGroups` entity type.
   * @returns A `DeductionTaxSubGroups` request builder.
   */
  static requestBuilder(): DeductionTaxSubGroupsRequestBuilder {
    return new DeductionTaxSubGroupsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DeductionTaxSubGroups`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DeductionTaxSubGroups`.
   */
  static customField(fieldName: string): CustomFieldV4<DeductionTaxSubGroups> {
    return EntityV4.customFieldSelector(fieldName, DeductionTaxSubGroups);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { DeductionTaxGroups, DeductionTaxGroupsType } from './DeductionTaxGroups';

export interface DeductionTaxSubGroupsType {
  groupCode?: string | null;
  groupName?: string | null;
  deductionTaxGroups: DeductionTaxGroupsType[];
}

export namespace DeductionTaxSubGroups {
  /**
   * Static representation of the [[groupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_CODE: StringField<DeductionTaxSubGroups> = new StringField('GroupCode', DeductionTaxSubGroups, 'Edm.String');
  /**
   * Static representation of the [[groupName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_NAME: StringField<DeductionTaxSubGroups> = new StringField('GroupName', DeductionTaxSubGroups, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[deductionTaxGroups]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTION_TAX_GROUPS: OneToManyLink<DeductionTaxSubGroups, DeductionTaxGroups> = new OneToManyLink('DeductionTaxGroups', DeductionTaxSubGroups, DeductionTaxGroups);
  /**
   * All fields of the DeductionTaxSubGroups entity.
   */
  export const _allFields: Array<StringField<DeductionTaxSubGroups> | OneToManyLink<DeductionTaxSubGroups, DeductionTaxGroups>> = [
    DeductionTaxSubGroups.GROUP_CODE,
    DeductionTaxSubGroups.GROUP_NAME,
    DeductionTaxSubGroups.DEDUCTION_TAX_GROUPS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DeductionTaxSubGroups> = new AllFields('*', DeductionTaxSubGroups);
  /**
   * All key fields of the DeductionTaxSubGroups entity.
   */
  export const _keyFields: Array<Field<DeductionTaxSubGroups>> = [DeductionTaxSubGroups.GROUP_CODE];
  /**
   * Mapping of all key field names to the respective static field property DeductionTaxSubGroups.
   */
  export const _keys: { [keys: string]: Field<DeductionTaxSubGroups> } = DeductionTaxSubGroups._keyFields.reduce((acc: { [keys: string]: Field<DeductionTaxSubGroups> }, field: Field<DeductionTaxSubGroups>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
