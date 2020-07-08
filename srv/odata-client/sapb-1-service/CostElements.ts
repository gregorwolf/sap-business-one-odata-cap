/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CostElementsRequestBuilder } from './CostElementsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "CostElements" of service "SAPB1".
 */
export class CostElements extends Entity implements CostElementsType {
  /**
   * Technical entity name for CostElements.
   */
  static _entityName = 'CostElements';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CostElements.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * One-to-many navigation property to the [[ChartOfAccounts]] entity.
   */
  chartOfAccounts!: ChartOfAccounts[];

  /**
   * Returns an entity builder to construct instances `CostElements`.
   * @returns A builder that constructs instances of entity type `CostElements`.
   */
  static builder(): EntityBuilderType<CostElements, CostElementsTypeForceMandatory> {
    return Entity.entityBuilder(CostElements);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CostElements` entity type.
   * @returns A `CostElements` request builder.
   */
  static requestBuilder(): CostElementsRequestBuilder {
    return new CostElementsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CostElements`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CostElements`.
   */
  static customField(fieldName: string): CustomField<CostElements> {
    return Entity.customFieldSelector(fieldName, CostElements);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';

export interface CostElementsType {
  code?: string;
  description?: string;
  chartOfAccounts: ChartOfAccountsType[];
}

export interface CostElementsTypeForceMandatory {
  code: string;
  description: string;
  chartOfAccounts: ChartOfAccountsType[];
}

export namespace CostElements {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<CostElements> = new StringField('Code', CostElements, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<CostElements> = new StringField('Description', CostElements, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[chartOfAccounts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNTS: OneToManyLink<CostElements, ChartOfAccounts> = new OneToManyLink('ChartOfAccounts', CostElements, ChartOfAccounts);
  /**
   * All fields of the CostElements entity.
   */
  export const _allFields: Array<StringField<CostElements> | OneToManyLink<CostElements, ChartOfAccounts>> = [
    CostElements.CODE,
    CostElements.DESCRIPTION,
    CostElements.CHART_OF_ACCOUNTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CostElements> = new AllFields('*', CostElements);
  /**
   * All key fields of the CostElements entity.
   */
  export const _keyFields: Array<Field<CostElements>> = [CostElements.CODE];
  /**
   * Mapping of all key field names to the respective static field property CostElements.
   */
  export const _keys: { [keys: string]: Field<CostElements> } = CostElements._keyFields.reduce((acc: { [keys: string]: Field<CostElements> }, field: Field<CostElements>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
