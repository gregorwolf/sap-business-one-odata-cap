/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CostCenterTypesRequestBuilder } from './CostCenterTypesRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "CostCenterTypes" of service "SAPB1".
 */
export class CostCenterTypes extends EntityV4 implements CostCenterTypesType {
  /**
   * Technical entity name for CostCenterTypes.
   */
  static _entityName = 'CostCenterTypes';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Cost Center Type Code.
   * @nullable
   */
  costCenterTypeCode?: string;
  /**
   * Cost Center Type Name.
   * @nullable
   */
  costCenterTypeName?: string;
  /**
   * One-to-many navigation property to the [[ProfitCenters]] entity.
   */
  profitCenters!: ProfitCenters[];

  /**
   * Returns an entity builder to construct instances of `CostCenterTypes`.
   * @returns A builder that constructs instances of entity type `CostCenterTypes`.
   */
  static builder(): EntityBuilderType<CostCenterTypes, CostCenterTypesType> {
    return EntityV4.entityBuilder(CostCenterTypes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CostCenterTypes` entity type.
   * @returns A `CostCenterTypes` request builder.
   */
  static requestBuilder(): CostCenterTypesRequestBuilder {
    return new CostCenterTypesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CostCenterTypes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CostCenterTypes`.
   */
  static customField(fieldName: string): CustomFieldV4<CostCenterTypes> {
    return EntityV4.customFieldSelector(fieldName, CostCenterTypes);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { ProfitCenters, ProfitCentersType } from './ProfitCenters';

export interface CostCenterTypesType {
  costCenterTypeCode?: string | null;
  costCenterTypeName?: string | null;
  profitCenters: ProfitCentersType[];
}

export namespace CostCenterTypes {
  /**
   * Static representation of the [[costCenterTypeCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER_TYPE_CODE: StringField<CostCenterTypes> = new StringField('CostCenterTypeCode', CostCenterTypes, 'Edm.String');
  /**
   * Static representation of the [[costCenterTypeName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER_TYPE_NAME: StringField<CostCenterTypes> = new StringField('CostCenterTypeName', CostCenterTypes, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[profitCenters]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROFIT_CENTERS: OneToManyLink<CostCenterTypes, ProfitCenters> = new OneToManyLink('ProfitCenters', CostCenterTypes, ProfitCenters);
  /**
   * All fields of the CostCenterTypes entity.
   */
  export const _allFields: Array<StringField<CostCenterTypes> | OneToManyLink<CostCenterTypes, ProfitCenters>> = [
    CostCenterTypes.COST_CENTER_TYPE_CODE,
    CostCenterTypes.COST_CENTER_TYPE_NAME,
    CostCenterTypes.PROFIT_CENTERS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CostCenterTypes> = new AllFields('*', CostCenterTypes);
  /**
   * All key fields of the CostCenterTypes entity.
   */
  export const _keyFields: Array<Field<CostCenterTypes>> = [CostCenterTypes.COST_CENTER_TYPE_CODE];
  /**
   * Mapping of all key field names to the respective static field property CostCenterTypes.
   */
  export const _keys: { [keys: string]: Field<CostCenterTypes> } = CostCenterTypes._keyFields.reduce((acc: { [keys: string]: Field<CostCenterTypes> }, field: Field<CostCenterTypes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
