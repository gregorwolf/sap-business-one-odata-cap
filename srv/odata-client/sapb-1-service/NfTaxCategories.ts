/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { NfTaxCategoriesRequestBuilder } from './NfTaxCategoriesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "NFTaxCategories" of service "SAPB1".
 */
export class NfTaxCategories extends Entity implements NfTaxCategoriesType {
  /**
   * Technical entity name for NfTaxCategories.
   */
  static _entityName = 'NFTaxCategories';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for NfTaxCategories.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Abs Id.
   * @nullable
   */
  absId?: number;
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Gpc Id.
   * @nullable
   */
  gpcId?: number;
  /**
   * One-to-one navigation property to the [[GovPayCodes]] entity.
   */
  govPayCode!: GovPayCodes;

  /**
   * Returns an entity builder to construct instances `NfTaxCategories`.
   * @returns A builder that constructs instances of entity type `NfTaxCategories`.
   */
  static builder(): EntityBuilderType<NfTaxCategories, NfTaxCategoriesTypeForceMandatory> {
    return Entity.entityBuilder(NfTaxCategories);
  }

  /**
   * Returns a request builder to construct requests for operations on the `NfTaxCategories` entity type.
   * @returns A `NfTaxCategories` request builder.
   */
  static requestBuilder(): NfTaxCategoriesRequestBuilder {
    return new NfTaxCategoriesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `NfTaxCategories`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `NfTaxCategories`.
   */
  static customField(fieldName: string): CustomField<NfTaxCategories> {
    return Entity.customFieldSelector(fieldName, NfTaxCategories);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { GovPayCodes, GovPayCodesType } from './GovPayCodes';

export interface NfTaxCategoriesType {
  absId?: number;
  code?: string;
  gpcId?: number;
  govPayCode: GovPayCodesType;
}

export interface NfTaxCategoriesTypeForceMandatory {
  absId: number;
  code: string;
  gpcId: number;
  govPayCode: GovPayCodesType;
}

export namespace NfTaxCategories {
  /**
   * Static representation of the [[absId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ID: NumberField<NfTaxCategories> = new NumberField('AbsId', NfTaxCategories, 'Edm.Int32');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<NfTaxCategories> = new StringField('Code', NfTaxCategories, 'Edm.String');
  /**
   * Static representation of the [[gpcId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GPC_ID: NumberField<NfTaxCategories> = new NumberField('GPCId', NfTaxCategories, 'Edm.Int32');
  /**
   * Static representation of the one-to-one navigation property [[govPayCode]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOV_PAY_CODE: OneToOneLink<NfTaxCategories, GovPayCodes> = new OneToOneLink('GovPayCode', NfTaxCategories, GovPayCodes);
  /**
   * All fields of the NfTaxCategories entity.
   */
  export const _allFields: Array<NumberField<NfTaxCategories> | StringField<NfTaxCategories> | OneToOneLink<NfTaxCategories, GovPayCodes>> = [
    NfTaxCategories.ABS_ID,
    NfTaxCategories.CODE,
    NfTaxCategories.GPC_ID,
    NfTaxCategories.GOV_PAY_CODE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<NfTaxCategories> = new AllFields('*', NfTaxCategories);
  /**
   * All key fields of the NfTaxCategories entity.
   */
  export const _keyFields: Array<Field<NfTaxCategories>> = [NfTaxCategories.ABS_ID];
  /**
   * Mapping of all key field names to the respective static field property NfTaxCategories.
   */
  export const _keys: { [keys: string]: Field<NfTaxCategories> } = NfTaxCategories._keyFields.reduce((acc: { [keys: string]: Field<NfTaxCategories> }, field: Field<NfTaxCategories>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
