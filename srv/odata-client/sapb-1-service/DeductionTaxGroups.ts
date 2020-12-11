/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DeductionTaxGroupsRequestBuilder } from './DeductionTaxGroupsRequestBuilder';
import { BoDeductionTaxGroupCodeEnum } from './BoDeductionTaxGroupCodeEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "DeductionTaxGroups" of service "SAPB1".
 */
export class DeductionTaxGroups extends EntityV4 implements DeductionTaxGroupsType {
  /**
   * Technical entity name for DeductionTaxGroups.
   */
  static _entityName = 'DeductionTaxGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Group Key.
   * @nullable
   */
  groupKey?: number;
  /**
   * Group Code.
   * @nullable
   */
  groupCode?: BoDeductionTaxGroupCodeEnum;
  /**
   * Group Name.
   * @nullable
   */
  groupName?: string;
  /**
   * Max Redin.
   * @nullable
   */
  maxRedin?: number;
  /**
   * Group Extended Code.
   * @nullable
   */
  groupExtendedCode?: string;
  /**
   * One-to-many navigation property to the [[BusinessPartners]] entity.
   */
  businessPartners!: BusinessPartners[];
  /**
   * One-to-one navigation property to the [[DeductionTaxSubGroups]] entity.
   */
  deductionTaxSubGroup!: DeductionTaxSubGroups;

  /**
   * Returns an entity builder to construct instances of `DeductionTaxGroups`.
   * @returns A builder that constructs instances of entity type `DeductionTaxGroups`.
   */
  static builder(): EntityBuilderType<DeductionTaxGroups, DeductionTaxGroupsType> {
    return EntityV4.entityBuilder(DeductionTaxGroups);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DeductionTaxGroups` entity type.
   * @returns A `DeductionTaxGroups` request builder.
   */
  static requestBuilder(): DeductionTaxGroupsRequestBuilder {
    return new DeductionTaxGroupsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DeductionTaxGroups`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DeductionTaxGroups`.
   */
  static customField(fieldName: string): CustomFieldV4<DeductionTaxGroups> {
    return EntityV4.customFieldSelector(fieldName, DeductionTaxGroups);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { DeductionTaxSubGroups, DeductionTaxSubGroupsType } from './DeductionTaxSubGroups';

export interface DeductionTaxGroupsType {
  groupKey?: number | null;
  groupCode?: BoDeductionTaxGroupCodeEnum | null;
  groupName?: string | null;
  maxRedin?: number | null;
  groupExtendedCode?: string | null;
  businessPartners: BusinessPartnersType[];
  deductionTaxSubGroup: DeductionTaxSubGroupsType;
}

export namespace DeductionTaxGroups {
  /**
   * Static representation of the [[groupKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_KEY: NumberField<DeductionTaxGroups> = new NumberField('GroupKey', DeductionTaxGroups, 'Edm.Int32');
  /**
   * Static representation of the [[groupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_CODE: EnumField<DeductionTaxGroups> = new EnumField('GroupCode', DeductionTaxGroups);
  /**
   * Static representation of the [[groupName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_NAME: StringField<DeductionTaxGroups> = new StringField('GroupName', DeductionTaxGroups, 'Edm.String');
  /**
   * Static representation of the [[maxRedin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAX_REDIN: NumberField<DeductionTaxGroups> = new NumberField('MaxRedin', DeductionTaxGroups, 'Edm.Double');
  /**
   * Static representation of the [[groupExtendedCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_EXTENDED_CODE: StringField<DeductionTaxGroups> = new StringField('GroupExtendedCode', DeductionTaxGroups, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<DeductionTaxGroups, BusinessPartners> = new OneToManyLink('BusinessPartners', DeductionTaxGroups, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[deductionTaxSubGroup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTION_TAX_SUB_GROUP: OneToOneLink<DeductionTaxGroups, DeductionTaxSubGroups> = new OneToOneLink('DeductionTaxSubGroup', DeductionTaxGroups, DeductionTaxSubGroups);
  /**
   * All fields of the DeductionTaxGroups entity.
   */
  export const _allFields: Array<NumberField<DeductionTaxGroups> | EnumField<DeductionTaxGroups> | StringField<DeductionTaxGroups> | OneToManyLink<DeductionTaxGroups, BusinessPartners> | OneToOneLink<DeductionTaxGroups, DeductionTaxSubGroups>> = [
    DeductionTaxGroups.GROUP_KEY,
    DeductionTaxGroups.GROUP_CODE,
    DeductionTaxGroups.GROUP_NAME,
    DeductionTaxGroups.MAX_REDIN,
    DeductionTaxGroups.GROUP_EXTENDED_CODE,
    DeductionTaxGroups.BUSINESS_PARTNERS,
    DeductionTaxGroups.DEDUCTION_TAX_SUB_GROUP
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DeductionTaxGroups> = new AllFields('*', DeductionTaxGroups);
  /**
   * All key fields of the DeductionTaxGroups entity.
   */
  export const _keyFields: Array<Field<DeductionTaxGroups>> = [DeductionTaxGroups.GROUP_KEY];
  /**
   * Mapping of all key field names to the respective static field property DeductionTaxGroups.
   */
  export const _keys: { [keys: string]: Field<DeductionTaxGroups> } = DeductionTaxGroups._keyFields.reduce((acc: { [keys: string]: Field<DeductionTaxGroups> }, field: Field<DeductionTaxGroups>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
