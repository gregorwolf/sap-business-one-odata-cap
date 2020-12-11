/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LandedCostsCodesRequestBuilder } from './LandedCostsCodesRequestBuilder';
import { BoAllocationByEnum } from './BoAllocationByEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "LandedCostsCodes" of service "SAPB1".
 */
export class LandedCostsCodes extends EntityV4 implements LandedCostsCodesType {
  /**
   * Technical entity name for LandedCostsCodes.
   */
  static _entityName = 'LandedCostsCodes';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
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
   * Allocation By.
   * @nullable
   */
  allocationBy?: BoAllocationByEnum;
  /**
   * Landed Costs Allocation Account.
   * @nullable
   */
  landedCostsAllocationAccount?: string;

  /**
   * Returns an entity builder to construct instances of `LandedCostsCodes`.
   * @returns A builder that constructs instances of entity type `LandedCostsCodes`.
   */
  static builder(): EntityBuilderType<LandedCostsCodes, LandedCostsCodesType> {
    return EntityV4.entityBuilder(LandedCostsCodes);
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
  static customField(fieldName: string): CustomFieldV4<LandedCostsCodes> {
    return EntityV4.customFieldSelector(fieldName, LandedCostsCodes);
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
  code?: string | null;
  name?: string | null;
  allocationBy?: BoAllocationByEnum | null;
  landedCostsAllocationAccount?: string | null;
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
   * Static representation of the [[allocationBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOCATION_BY: EnumField<LandedCostsCodes> = new EnumField('AllocationBy', LandedCostsCodes);
  /**
   * Static representation of the [[landedCostsAllocationAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANDED_COSTS_ALLOCATION_ACCOUNT: StringField<LandedCostsCodes> = new StringField('LandedCostsAllocationAccount', LandedCostsCodes, 'Edm.String');
  /**
   * All fields of the LandedCostsCodes entity.
   */
  export const _allFields: Array<StringField<LandedCostsCodes> | EnumField<LandedCostsCodes>> = [
    LandedCostsCodes.CODE,
    LandedCostsCodes.NAME,
    LandedCostsCodes.ALLOCATION_BY,
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
