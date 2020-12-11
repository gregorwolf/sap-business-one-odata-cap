/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DeductionTaxHierarchiesRequestBuilder } from './DeductionTaxHierarchiesRequestBuilder';
import { Moment } from 'moment';
import { DeductionTaxHierarchiesLine } from './DeductionTaxHierarchiesLine';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "DeductionTaxHierarchies" of service "SAPB1".
 */
export class DeductionTaxHierarchies extends EntityV4 implements DeductionTaxHierarchiesType {
  /**
   * Technical entity name for DeductionTaxHierarchies.
   */
  static _entityName = 'DeductionTaxHierarchies';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: string;
  /**
   * Hierarchy Code.
   * @nullable
   */
  hierarchyCode?: string;
  /**
   * Hierarchy Name.
   * @nullable
   */
  hierarchyName?: string;
  /**
   * Valid From.
   * @nullable
   */
  validFrom?: Moment;
  /**
   * Valid Until.
   * @nullable
   */
  validUntil?: Moment;
  /**
   * Deduction Percent.
   * @nullable
   */
  deductionPercent?: number;
  /**
   * Maximum Total.
   * @nullable
   */
  maximumTotal?: number;
  /**
   * Last Updated.
   * @nullable
   */
  lastUpdated?: Moment;
  /**
   * Deduction Tax Hierarchies Lines.
   * @nullable
   */
  deductionTaxHierarchiesLines?: DeductionTaxHierarchiesLine[];
  /**
   * One-to-one navigation property to the [[BusinessPartners]] entity.
   */
  businessPartner!: BusinessPartners;

  /**
   * Returns an entity builder to construct instances of `DeductionTaxHierarchies`.
   * @returns A builder that constructs instances of entity type `DeductionTaxHierarchies`.
   */
  static builder(): EntityBuilderType<DeductionTaxHierarchies, DeductionTaxHierarchiesType> {
    return EntityV4.entityBuilder(DeductionTaxHierarchies);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DeductionTaxHierarchies` entity type.
   * @returns A `DeductionTaxHierarchies` request builder.
   */
  static requestBuilder(): DeductionTaxHierarchiesRequestBuilder {
    return new DeductionTaxHierarchiesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DeductionTaxHierarchies`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DeductionTaxHierarchies`.
   */
  static customField(fieldName: string): CustomFieldV4<DeductionTaxHierarchies> {
    return EntityV4.customFieldSelector(fieldName, DeductionTaxHierarchies);
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

export interface DeductionTaxHierarchiesType {
  absEntry?: number | null;
  bpCode?: string | null;
  hierarchyCode?: string | null;
  hierarchyName?: string | null;
  validFrom?: Moment | null;
  validUntil?: Moment | null;
  deductionPercent?: number | null;
  maximumTotal?: number | null;
  lastUpdated?: Moment | null;
  deductionTaxHierarchiesLines?: DeductionTaxHierarchiesLine[] | null;
  businessPartner: BusinessPartnersType;
}

export namespace DeductionTaxHierarchies {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<DeductionTaxHierarchies> = new NumberField('AbsEntry', DeductionTaxHierarchies, 'Edm.Int32');
  /**
   * Static representation of the [[bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CODE: StringField<DeductionTaxHierarchies> = new StringField('BPCode', DeductionTaxHierarchies, 'Edm.String');
  /**
   * Static representation of the [[hierarchyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HIERARCHY_CODE: StringField<DeductionTaxHierarchies> = new StringField('HierarchyCode', DeductionTaxHierarchies, 'Edm.String');
  /**
   * Static representation of the [[hierarchyName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HIERARCHY_NAME: StringField<DeductionTaxHierarchies> = new StringField('HierarchyName', DeductionTaxHierarchies, 'Edm.String');
  /**
   * Static representation of the [[validFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_FROM: DateField<DeductionTaxHierarchies> = new DateField('ValidFrom', DeductionTaxHierarchies, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[validUntil]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_UNTIL: DateField<DeductionTaxHierarchies> = new DateField('ValidUntil', DeductionTaxHierarchies, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[deductionPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTION_PERCENT: NumberField<DeductionTaxHierarchies> = new NumberField('DeductionPercent', DeductionTaxHierarchies, 'Edm.Double');
  /**
   * Static representation of the [[maximumTotal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAXIMUM_TOTAL: NumberField<DeductionTaxHierarchies> = new NumberField('MaximumTotal', DeductionTaxHierarchies, 'Edm.Double');
  /**
   * Static representation of the [[lastUpdated]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_UPDATED: DateField<DeductionTaxHierarchies> = new DateField('LastUpdated', DeductionTaxHierarchies, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[deductionTaxHierarchiesLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTION_TAX_HIERARCHIES_LINES: CollectionField<DeductionTaxHierarchies, DeductionTaxHierarchiesLine> = new CollectionField('DeductionTaxHierarchies_Lines', DeductionTaxHierarchies, DeductionTaxHierarchiesLine);
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<DeductionTaxHierarchies, BusinessPartners> = new OneToOneLink('BusinessPartner', DeductionTaxHierarchies, BusinessPartners);
  /**
   * All fields of the DeductionTaxHierarchies entity.
   */
  export const _allFields: Array<NumberField<DeductionTaxHierarchies> | StringField<DeductionTaxHierarchies> | DateField<DeductionTaxHierarchies> | CollectionField<DeductionTaxHierarchies, DeductionTaxHierarchiesLine> | OneToOneLink<DeductionTaxHierarchies, BusinessPartners>> = [
    DeductionTaxHierarchies.ABS_ENTRY,
    DeductionTaxHierarchies.BP_CODE,
    DeductionTaxHierarchies.HIERARCHY_CODE,
    DeductionTaxHierarchies.HIERARCHY_NAME,
    DeductionTaxHierarchies.VALID_FROM,
    DeductionTaxHierarchies.VALID_UNTIL,
    DeductionTaxHierarchies.DEDUCTION_PERCENT,
    DeductionTaxHierarchies.MAXIMUM_TOTAL,
    DeductionTaxHierarchies.LAST_UPDATED,
    DeductionTaxHierarchies.DEDUCTION_TAX_HIERARCHIES_LINES,
    DeductionTaxHierarchies.BUSINESS_PARTNER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DeductionTaxHierarchies> = new AllFields('*', DeductionTaxHierarchies);
  /**
   * All key fields of the DeductionTaxHierarchies entity.
   */
  export const _keyFields: Array<Field<DeductionTaxHierarchies>> = [DeductionTaxHierarchies.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property DeductionTaxHierarchies.
   */
  export const _keys: { [keys: string]: Field<DeductionTaxHierarchies> } = DeductionTaxHierarchies._keyFields.reduce((acc: { [keys: string]: Field<DeductionTaxHierarchies> }, field: Field<DeductionTaxHierarchies>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
