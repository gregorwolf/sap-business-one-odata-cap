/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LandedCostsCodesRequestBuilder } from './LandedCostsCodesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "LandedCostsCodes" of service "SAPB1".
 */
export class LandedCostsCodes extends Entity implements LandedCostsCodesType {
  /**
   * Technical entity name for LandedCostsCodes.
   */
  static _entityName = 'LandedCostsCodes';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for LandedCostsCodes.
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
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Landed Costs Allocation Account.
   * @nullable
   */
  landedCostsAllocationAccount?: string;

  /**
   * Returns an entity builder to construct instances `LandedCostsCodes`.
   * @returns A builder that constructs instances of entity type `LandedCostsCodes`.
   */
  static builder(): EntityBuilderType<LandedCostsCodes, LandedCostsCodesTypeForceMandatory> {
    return Entity.entityBuilder(LandedCostsCodes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `LandedCostsCodes` entity type.
   * @returns A `LandedCostsCodes` request builder.
   */
  static requestBuilder(): LandedCostsCodesRequestBuilder {
    return new LandedCostsCodesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `LandedCostsCodes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `LandedCostsCodes`.
   */
  static customField(fieldName: string): CustomField<LandedCostsCodes> {
    return Entity.customFieldSelector(fieldName, LandedCostsCodes);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface LandedCostsCodesType {
  code?: string;
  name?: string;
  landedCostsAllocationAccount?: string;
}

export interface LandedCostsCodesTypeForceMandatory {
  code: string;
  name: string;
  landedCostsAllocationAccount: string;
}

export namespace LandedCostsCodes {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<LandedCostsCodes> = new StringField('Code', LandedCostsCodes, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<LandedCostsCodes> = new StringField('Name', LandedCostsCodes, 'Edm.String');
  /**
   * Static representation of the [[landedCostsAllocationAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANDED_COSTS_ALLOCATION_ACCOUNT: StringField<LandedCostsCodes> = new StringField('LandedCostsAllocationAccount', LandedCostsCodes, 'Edm.String');
  /**
   * All fields of the LandedCostsCodes entity.
   */
  export const _allFields: Array<StringField<LandedCostsCodes>> = [
    LandedCostsCodes.CODE,
    LandedCostsCodes.NAME,
    LandedCostsCodes.LANDED_COSTS_ALLOCATION_ACCOUNT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<LandedCostsCodes> = new AllFields('*', LandedCostsCodes);
  /**
   * All key fields of the LandedCostsCodes entity.
   */
  export const _keyFields: Array<Field<LandedCostsCodes>> = [LandedCostsCodes.CODE];
  /**
   * Mapping of all key field names to the respective static field property LandedCostsCodes.
   */
  export const _keys: { [keys: string]: Field<LandedCostsCodes> } = LandedCostsCodes._keyFields.reduce((acc: { [keys: string]: Field<LandedCostsCodes> }, field: Field<LandedCostsCodes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
